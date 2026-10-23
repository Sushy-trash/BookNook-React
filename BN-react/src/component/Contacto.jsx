import { useState } from 'react'
import './Contacto.css'

export default function Contacto() {
const [status, setStatus] = useState('');

function handleInvalid(event) {
    const field = event.target;

    field.setCustomValidity('');

    if (field.validity.valueMissing) {
        field.setCustomValidity(
            field.name === 'asunto'
                ? 'Selecciona un motivo de consulta.'
                : 'Completa este campo.'
        );
    } else if (
        field.validity.typeMismatch ||
        field.validity.patternMismatch
    ) {
        field.setCustomValidity(
            'Ingresa un correo electrónico válido, por ejemplo: nombre@correo.com.'
        );
    } else if (field.validity.tooLong) {
        field.setCustomValidity(
            `Usa como máximo ${field.maxLength} caracteres.`
        );
    } else if (!field.validity.valid) {
        field.setCustomValidity('Revisa el valor de este campo.');
    }
}

function handleInput(event) {
    event.target.setCustomValidity('');
    setStatus('');
}

function handleSubmit(event) {
    event.preventDefault();

    setStatus(
        '¡Gracias por contactar a BookNook! Tus datos son válidos. Este formulario es una demostración: tu mensaje todavía no se ha enviado.'
    );
}

return (
    <section id="contacto" className="contact-section section-space">
        <div className="container">
            <div className="row g-5">

                <div className="col-lg-5">
                    <p className="eyebrow">ESTAMOS PARA AYUDARTE</p>

                    <h2>Contacta con BookNook</h2>

                    <p className="text-secondary mt-4">
                        ¿Tienes dudas sobre alguno de nuestros libros,
                        necesitas información sobre un pedido o quieres
                        hacernos una consulta? Escríbenos y cuéntanos
                        cómo podemos ayudarte.
                    </p>

                    <div className="contact-note">
                        <span aria-hidden="true">📚</span>

                        <p>
                            Cada historia importa.
                            <br />
                            <strong>¡Hablemos de libros!</strong>
                        </p>
                    </div>
                </div>

                <div className="col-lg-7">
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        onInvalid={handleInvalid}
                        onInput={handleInput}
                        onChange={() => setStatus('')}
                    >
                        <div className="row g-3">

                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                    htmlFor="contacto-nombre"
                                >
                                    Nombre
                                </label>

                                <input
                                    className="form-control"
                                    id="contacto-nombre"
                                    name="nombre"
                                    autoComplete="name"
                                    placeholder="Tu nombre"
                                    required
                                    maxLength={100}
                                />
                            </div>

                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                    htmlFor="contacto-correo"
                                >
                                    Correo electrónico
                                </label>

                                <input
                                    className="form-control"
                                    id="contacto-correo"
                                    name="correo"
                                    type="email"
                                    pattern={'[^\\s@]+@[^\\s@]+\\.[^\\s@]+'}
                                    autoComplete="email"
                                    placeholder="tu@correo.com"
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label
                                    className="form-label"
                                    htmlFor="contacto-asunto"
                                >
                                    Motivo de consulta
                                </label>

                                <select
                                    className="form-select"
                                    id="contacto-asunto"
                                    name="asunto"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Selecciona un motivo
                                    </option>

                                    <option value="producto">
                                        Consulta sobre un libro
                                    </option>

                                    <option value="pedido">
                                        Consulta sobre un pedido
                                    </option>

                                    <option value="catalogo">
                                        Disponibilidad de un producto
                                    </option>

                                    <option value="otro">
                                        Otra consulta
                                    </option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label
                                    className="form-label"
                                    htmlFor="contacto-mensaje"
                                >
                                    Mensaje
                                </label>

                                <textarea
                                    className="form-control"
                                    id="contacto-mensaje"
                                    name="mensaje"
                                    rows={4}
                                    placeholder="Cuéntanos cómo podemos ayudarte..."
                                    required
                                    maxLength={2000}
                                />
                            </div>

                            <div className="col-12">
                                <p className="form-disclaimer">
                                    Formulario de demostración. El envío
                                    de mensajes todavía no está habilitado.
                                </p>

                                <button
                                    type="submit"
                                    className="btn btn-dark"
                                >
                                    Enviar consulta ↗
                                </button>
                            </div>
                        </div>

                        <p
                            className="form-status mb-0"
                            role="status"
                        >
                            {status}
                        </p>
                    </form>
                </div>

            </div>
        </div>
    </section>
);


}
