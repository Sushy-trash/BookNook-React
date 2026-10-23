import { useState } from 'react';
import Logo from '../component/Logo';
import productos from '../data/productos.json';
import LoginAdmin from './LoginAdmin';
import './Admin.css';

export default function Admin() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="admin-page">
            <header className="site-header">
                <div className="container py-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
                    <a href="/" className="navbar-brand">
                        <Logo />
                    </a>

                    <a href="/" className="btn btn-outline-dark">
                        Volver al sitio
                    </a>
                </div>
            </header>

            <main className="container py-5">
                {loggedIn ? (
                    <section aria-labelledby="admin-title">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                            <div>
                                <p className="eyebrow">
                                    ESPACIO DE ADMINISTRACIÓN
                                </p>

                                <h1 id="admin-title" className="h2">
                                    Panel de administración
                                </h1>
                            </div>

                            <button
                                className="btn btn-outline-dark"
                                onClick={() => setLoggedIn(false)}
                            >
                                Cerrar sesión
                            </button>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h2 className="h4">
                                    Productos del catálogo
                                </h2>

                                <p className="text-secondary">
                                    Productos registrados en el catálogo
                                    actual de BookNook.
                                </p>

                                <div className="table-responsive">
                                    <table className="table align-middle mb-0">
                                        <caption>
                                            Productos del catálogo público.
                                        </caption>

                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Precio (CLP)</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {productos.map(
                                                ({ id, nombre, precio }) => (
                                                    <tr key={id}>
                                                        <th scope="row">
                                                            {id}
                                                        </th>

                                                        <td>{nombre}</td>

                                                        <td>
                                                            $
                                                            {Number(precio).toLocaleString(
                                                                'es-CL'
                                                            )}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <LoginAdmin
                        onLogin={() => setLoggedIn(true)}
                    />
                )}
            </main>
        </div>
    );
}