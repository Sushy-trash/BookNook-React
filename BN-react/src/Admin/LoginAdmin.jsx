export default function LoginAdmin({ onLogin }) {
    function handleSubmit(event) {
    event.preventDefault();


        const usuario = event.target.usuario.value.trim();
        const clave = event.target.clave.value;

        if (usuario === "admin" && clave === "admin") {
            onLogin();
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    }

    return (
        <section className="admin-login card shadow-sm">
            <div className="card-body p-4 p-md-5">
                <p className="eyebrow">ACCESO ADMIN</p>

                <h1 className="h2">Iniciar sesión</h1>

                <p className="text-secondary">
                    Ingresa tus credenciales para acceder al panel administrativo.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="usuario" className="form-label">
                            Usuario
                        </label>

                        <input
                            id="usuario"
                            name="usuario"
                            type="text"
                            className="form-control"
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="clave" className="form-label">
                            Contraseña
                        </label>

                        <input
                            id="clave"
                            name="clave"
                            type="password"
                            className="form-control"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-dark w-100">
                        Entrar al panel
                    </button>
                </form>
            </div>
        </section>
    );


}
