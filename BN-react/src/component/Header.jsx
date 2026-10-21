import { useState } from 'react';
import Logo from "./Logo";
export default function Header(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <a classname="skip-link" href="#contenido">Saltar Contenido</a>
            <header classname="barra-navegacion">
                    <nav classname="navbar navbar-expand-md container" 
                        aria-label="Navegacion Principal">
                        <a classname="navbar-brand" 
                        href="#Inicio"
                        aria-label="BookNook-el espacio de tu literatura Fantastica,inicio">
                            <Logo/>
                        </a>
                        <button classname="navbar-toggler"
                        type="button"
                        aria-control="menu-principal"
                        aria-expanded={open}
                        aria-label="Abrir o cerrar el menu"
                        onClick={() => setOpen(!open)}>
                            <span classname="navbar-toggler-icon"/>
                        </button>

                        <div id="menu-link"
                        classname={`collapse navbar-collapse ${open ? 'show' : ''}`}>
                            <ul classname="navbar-nav" ms-auto align-items-md-center- gap-md-4>
                                {[
                                    ['inicio','Inicio'],
                                    ['catalogo','Catalogo'],
                                    ['nosotros','Nosotros'],
                                    
                                ].map(([id, label]) => (
                                    <li classname="nav-item" key={id}>
                                        <a classname="nav-link" href={`#${id}`}>{label}</a>
                                    </li>
                                ))}
                                <li classname="nav-item">
                                    <a classname="nav-link" href="/admin.html">
                                        Administrador
                                    </a>
                                </li>
                                <li classname="nav-item">
                                    <a classname="btn btn-grey nav-contact"
                                    href="#contacto"
                                    onClick={() => setOpen(false)}>
                                        Contactanos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </header>
        
        </>

    )

}