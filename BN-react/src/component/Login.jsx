import { useState } from 'react';

export default function Login({ onLogin, onCrearCuenta }) {
const [correo, setCorreo] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');


function manejarEnvio(event) {
    event.preventDefault();

    const correoIngresado = correo.trim().toLowerCase();

    const usuarios =
        JSON.parse(localStorage.getItem('booknookUsuarios')) || [];

    const usuarioEncontrado = usuarios.find(
        usuario =>
            usuario.correo.toLowerCase() === correoIngresado &&
            usuario.password === password
    );

    if (!usuarioEncontrado) {
        setError('Correo o contraseña incorrectos.');
        return;
    }

    localStorage.setItem(
        'booknookUsuarioActual',
        JSON.stringify(usuarioEncontrado)
    );

    setError('');
    setCorreo('');
    setPassword('');

    if (onLogin) {
        onLogin(usuarioEncontrado);
    }
}

return (
    <section className="container py-5">
        <div
            className="card shadow-sm mx-auto"
            style={{ maxWidth: '480px' }}
        >
            <div className="card-body p-4">
                <h1 className="h3 mb-2">Iniciar sesión</h1>

                <p className="text-secondary mb-4">
                    ¡Te damos la bienvenida a BookNook!
                </p>

                <form onSubmit={manejarEnvio}>
                    <div className="mb-3">
                        <label htmlFor="loginCorreo" className="form-label">
                            Correo electrónico
                        </label>

                        <input
                            id="loginCorreo"
                            type="email"
                            className="form-control"
                            value={correo}
                            onChange={event => setCorreo(event.target.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="loginPassword"
                            className="form-label"
                        >
                            Contraseña
                        </label>

                        <input
                            id="loginPassword"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="btn btn-dark w-100">
                        Iniciar sesión
                    </button>

                    <p className="text-center mt-3 mb-0">
                        ¿Todavía no tienes cuenta?{' '}
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={onCrearCuenta}
                        >
                            Crear cuenta
                        </button>
                    </p>
                </form>
            </div>
        </div>
    </section>
);


}
