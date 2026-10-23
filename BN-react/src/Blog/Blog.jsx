import comicImagen from '../assets/persona leyendo un comic.jpg'
import fantasiaImagen from '../assets/libros de fantasia.jpg'
import './Blog.css'

export default function Blog({ onSeleccionarArticulo }) {
    const articulos = [
    {
        id: 1,
        categoria: 'CÓMICS',
        titulo: 'Guía para empezar a leer cómics: consejos para principiantes',
        descripcion:
        '¿Quieres comenzar a leer cómics pero no sabes por dónde empezar? En esta guía recorremos algunas ideas para dar tus primeros pasos.',
        imagen: comicImagen,
        textoAlternativo: 'Persona leyendo un cómic'
    },
    {
        id: 2,
        categoria: 'FANTASÍA',
        titulo: 'Los 5 libros de fantasía imperdibles para este mes',
        descripcion:
        'Cinco historias seleccionadas para quienes buscan aventuras, mundos fantásticos y personajes inolvidables.',
        imagen: fantasiaImagen,
        textoAlternativo: 'Libros de fantasía'
    }
    ];

    return (
        <section id="blog" className="blog-section container py-5">
            <div className="text-center mb-5">
                <p className="blog-eyebrow">DESDE NUESTRO RINCÓN</p>

                <h2>Blog BookNook</h2>

                <p>
                    Recomendaciones, curiosidades y conversaciones para lectores.
                </p>
            </div>

            <div className="row g-4">
                {articulos.map((articulo) => (
                    <div
                        className="col-12 col-lg-6"
                        key={articulo.id}
                    >
                        <article className="card blog-card h-100">
                            <img
                                src={articulo.imagen}
                                alt={articulo.textoAlternativo}
                                className="blog-card-imagen"
                                loading="lazy"
                            />

                            <div className="card-body d-flex flex-column">
                                <p className="blog-categoria">
                                    {articulo.categoria}
                                </p>

                                <h3 className="card-title">
                                    {articulo.titulo}
                                </h3>

                                <p className="card-text">
                                    {articulo.descripcion}
                                </p>

                                <button
                                    type="button"
                                    className="btn btn-dark mt-auto align-self-start"
                                    onClick={() =>
                                        onSeleccionarArticulo(articulo.id)
                                    }
                                >
                                    Leer artículo
                                </button>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );


}
