import { useEffect, useState } from 'react'

import './App.css'

import Header from './component/Header'
import Inicio from './component/Inicio'
import Catalogo from './component/Catalogo'
import Nosotros from './component/Nosotros'
import Footer from './component/Footer'
import Login from './component/Login'
import CreacionUsuario from './component/CreacionUsuario'

function App() {
  const [vistaUsuario, setVistaUsuario] = useState('inicio');
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('booknookCarrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  useEffect(() => {
    localStorage.setItem('booknookCarrito', JSON.stringify(carrito));
  }, [carrito]);
  const [usuarioActual, setUsuarioActual] = useState(() => {
      const usuarioGuardado = localStorage.getItem('booknookUsuarioActual');

      return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  function abrirLogin() {
    setVistaUsuario('login');
  }

  function abrirRegistro() {
      setVistaUsuario('registro');
  }

  function iniciarSesion(usuario) {
      setUsuarioActual(usuario);
      setVistaUsuario('inicio');
  }

  function cerrarSesion() {
    localStorage.removeItem('booknookUsuarioActual');
    setUsuarioActual(null);
    setVistaUsuario('inicio');
  }

  function agregarAlCarrito(producto) {
    setCarrito((carritoActual) => {
        const productoExiste = carritoActual.find(
            (item) => item.id === producto.id
        );

        if (productoExiste) {
            return carritoActual.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
        }

        return [
            ...carritoActual,
            { ...producto, cantidad: 1 }
        ];
    });
  }

  return (
    <>
      <Header 
        onLoginClick={abrirLogin}
        usuarioActual={usuarioActual}
        onLogout={cerrarSesion}
      />

        {vistaUsuario === 'login' ? ( 
          <Login 
            onLogin={iniciarSesion} 
            onCrearCuenta={abrirRegistro} 
          /> 
        ) : vistaUsuario === 'registro' ? ( 
          <CreacionUsuario 
            onVolverLogin={abrirLogin} 
          /> 
        ) : (
      
          <main>
            <Inicio/>


            <Catalogo onAgregarAlCarrito={agregarAlCarrito} />


            <Nosotros/>

          </main>
        )}
      <Footer/>
    </>
  )
}
export default App
