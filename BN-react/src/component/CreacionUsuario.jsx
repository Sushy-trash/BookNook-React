import { useState } from 'react';

export default function CreacionUsuario({ onVolverLogin }) {
const [formulario, setFormulario] = useState({
nombre: '',
apellido: '',
correo: '',
telefono: '',
direccion: '',
password: '',
confirmarPassword: ''
});

const [errores, setErrores] = useState({});

function manejarCambio(event) {
    const { name, value } = event.target;

    setFormulario({
        ...formulario,
        [name]: value
    });
}

function validarCorreo(correo) {
    const expresion =
        /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    return expresion.test(correo);
}

function manejarEnvio(event) {
    event.preventDefault();

    const nuevosErrores = {};

    const nombre = formulario.nombre.trim();
    const apellido = formulario.apellido.trim();
    const correo = formulario.correo.trim();
    const telefono = formulario.telefono.trim();
    const direccion = formulario.direccion.trim();
    const password = formulario.password;
    const confirmarPassword = formulario.confirmarPassword;

    if (!nombre) {
        nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!apellido) {
        nuevosErrores.apellido = 'El apellido es obligatorio.';
    }

    if (!correo) {
        nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!validarCorreo(correo)) {
        nuevosErrores.correo =
            'Utiliza un correo @duocuc.cl, @profesor.duoc.cl o @gmail.com.';
    }

    if (!telefono) {
        nuevosErrores.telefono = 'El teléfono es obligatorio.';
    }

    if (!direccion) {
        nuevosErrores.direccion = 'La dirección es obligatoria.';
    }

    if (!password) {
        nuevosErrores.password = 'La contraseña es obligatoria.';
    } else if (password.length < 4 || password.length > 10) {
        nuevosErrores.password =
            'La contraseña debe tener entre 4 y 10 caracteres.';
    }

    if (!confirmarPassword) {
        nuevosErrores.confirmarPassword =
            'Debes confirmar la contraseña.';
    } else if (confirmarPassword !== password) {
        nuevosErrores.confirmarPassword =
            'Las contraseñas no coinciden.';
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
        return;
    }

    const usuarios =
        JSON.parse(localStorage.getItem('booknookUsuarios')) || [];

    const usuarioExistente = usuarios.some(
        usuario => usuario.correo.toLowerCase() === correo.toLowerCase()
    );

    if (usuarioExistente) {
        setErrores({
            correo: 'Este correo ya está registrado.'
        });
        return;
    }

    const nuevoUsuario = {
        nombre,
        apellido,
        correo,
        telefono,
        direccion,
        password,
        rol: 'Cliente'
    };

    localStorage.setItem(
        'booknookUsuarios',
        JSON.stringify([...usuarios, nuevoUsuario])
    );

    alert('¡Cuenta creada correctamente!');

    setFormulario({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        direccion: '',
        password: '',
        confirmarPassword: ''
    });

    if (onVolverLogin) {
        onVolverLogin();
    }
}

return (
    <section className="container py-5">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
            <div className="card-body p-4">
                <h1 className="h3 mb-2">Crear cuenta</h1>

                <p className="text-secondary mb-4">
                    Regístrate en BookNook para disfrutar de nuestra librería.
                </p>

                <form onSubmit={manejarEnvio} noValidate>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre
                        </label>

                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            className="form-control"
                            value={formulario.nombre}
                            onChange={manejarCambio}
                            maxLength={50}
                            required
                        />

                        {errores.nombre && (
                            <div className="text-danger small mt-1">
                                {errores.nombre}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">
                            Apellido
                        </label>

                        <input
                            id="apellido"
                            name="apellido"
                            type="text"
                            className="form-control"
                            value={formulario.apellido}
                            onChange={manejarCambio}
                            maxLength={100}
                            required
                        />

                        {errores.apellido && (
                            <div className="text-danger small mt-1">
                                {errores.apellido}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">
                            Correo electrónico
                        </label>

                        <input
                            id="correo"
                            name="correo"
                            type="email"
                            className="form-control"
                            value={formulario.correo}
                            onChange={manejarCambio}
                            maxLength={100}
                            required
                        />

                        {errores.correo && (
                            <div className="text-danger small mt-1">
                                {errores.correo}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">
                            Teléfono
                        </label>

                        <input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            className="form-control"
                            value={formulario.telefono}
                            onChange={manejarCambio}
                            required
                        />

                        {errores.telefono && (
                            <div className="text-danger small mt-1">
                                {errores.telefono}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">
                            Dirección
                        </label>

                        <input
                            id="direccion"
                            name="direccion"
                            type="text"
                            className="form-control"
                            value={formulario.direccion}
                            onChange={manejarCambio}
                            maxLength={300}
                            required
                        />

                        {errores.direccion && (
                            <div className="text-danger small mt-1">
                                {errores.direccion}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={formulario.password}
                            onChange={manejarCambio}
                            minLength={4}
                            maxLength={10}
                            autoComplete="new-password"
                            required
                        />

                        {errores.password && (
                            <div className="text-danger small mt-1">
                                {errores.password}
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="confirmarPassword"
                            className="form-label"
                        >
                            Confirmar contraseña
                        </label>

                        <input
                            id="confirmarPassword"
                            name="confirmarPassword"
                            type="password"
                            className="form-control"
                            value={formulario.confirmarPassword}
                            onChange={manejarCambio}
                            autoComplete="new-password"
                            required
                        />

                        {errores.confirmarPassword && (
                            <div className="text-danger small mt-1">
                                {errores.confirmarPassword}
                            </div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-dark w-100">
                        Crear cuenta
                    </button>

                    <p className="text-center mt-3 mb-0">
                        ¿Ya tienes cuenta?{' '}
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={onVolverLogin}
                        >
                            Inicia sesión
                        </button>
                    </p>
                </form>
            </div>
        </div>
    </section>
);


}
