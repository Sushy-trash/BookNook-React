import comicImagen from '../assets/persona leyendo un comic.jpg'
import fantasiaImagen from '../assets/libros de fantasia.jpg'
import './Blog.css'

export default function BlogArticulo({
    articuloId,
    onVolverBlog,
    onSeleccionarArticulo
}) {
    const articulos = {
        1: {
            categoria: 'CÓMICS & NOVELAS GRÁFICAS',
            titulo: 'Guía para empezar a leer cómics del universo gráfico',
            introduccion:
            'Una pequeña guía para quienes quieren comenzar a explorar el mundo de las novelas gráficas.',
            imagen: comicImagen,
            textoAlternativo: 'Persona leyendo un cómic',
            contenido: [
                {
                subtitulo: '1. Empieza por una historia que realmente te interese',
                parrafos: [
                    'Entrar al mundo de los cómics puede parecer complicado al principio. Existen cientos de personajes, universos y estilos diferentes, por lo que es completamente normal no saber por dónde comenzar.',
                    'No es necesario comenzar leyendo una serie completa o conocer todos los antecedentes de un personaje. Una buena forma de empezar es buscar una historia cuyo género o temática te resulte atractiva.'
                ]
                },
                {
                    subtitulo: '2. Explora diferentes estilos',
                    parrafos: [
                        'Los cómics pueden contar historias de superhéroes, fantasía, ciencia ficción, misterio, terror, romance y muchos otros géneros.',
                        'También existen diferentes formas de narración visual. Algunas historias utilizan ilustraciones muy detalladas, mientras otras tienen estilos más simples o experimentales.'
                    ]
                },
                {
                    subtitulo: '3. No tengas miedo de probar mangas',
                    parrafos: [
                        'El manga es otra excelente puerta de entrada al mundo de las historias gráficas. Desde aventuras y fantasía hasta romance y ciencia ficción, existe una enorme variedad de géneros para descubrir.'
                    ]
                },
                {
                    subtitulo: '4. Pregunta por recomendaciones',
                    parrafos: [
                        'Una de las mejores partes de visitar una librería es poder conversar con otras personas que comparten tus intereses.',
                        'En BookNook puedes acercarte a nuestros libreros y contarles qué tipo de historias disfrutas. Así podemos ayudarte a encontrar una lectura que se adapte a tus gustos.'
                    ]
                },
                {
                    subtitulo: '5. Lo más importante: disfruta',
                    parrafos: [
                        'No existe una manera correcta de empezar a leer cómics. Puedes comenzar por una novela gráfica, un manga, una serie corta o incluso por una historia independiente.',
                        'Lo importante es encontrar una historia que te dé ganas de pasar la página.'
                    ]
                }
            ]
        },
        2: {
            categoria: 'FANTASÍA & SCI-FI',
            titulo: 'Los 5 libros de fantasía imperdibles para este mes',
            introduccion:
                'Cinco historias para perderse durante horas en mundos imposibles.',
            imagen: fantasiaImagen,
            textoAlternativo: 'Libros de fantasía',
            contenido: [
                {
                    subtitulo: null,
                    parrafos: [
                        'Hay historias que simplemente nos invitan a desaparecer por unas horas de la realidad. La literatura fantástica tiene esa capacidad de llevarnos a lugares completamente nuevos.',
                        'En BookNook seleccionamos cinco títulos que representan diferentes formas de disfrutar la fantasía.'
                    ]
                },
                {
                    subtitulo: '1. El nombre del viento',
                    parrafos: [
                        'Una historia marcada por la música, la magia y la búsqueda del conocimiento. Ideal para quienes disfrutan de mundos complejos y personajes con historias profundas.'
                    ]
                },
                {
                    subtitulo: '2. El Hobbit',
                    parrafos: [
                        'Una aventura clásica protagonizada por Bilbo Bolsón, quien abandona la tranquilidad de su hogar para embarcarse en un viaje inesperado.'
                    ]
                },
                {
                    subtitulo: '3. Coraline',
                    parrafos: [
                        'Una historia oscura y misteriosa que mezcla fantasía, aventura y suspenso. Perfecta para quienes disfrutan de mundos extraños escondidos detrás de puertas aparentemente normales.'
                    ]
                },
                {
                    subtitulo: '4. La historia interminable',
                    parrafos: [
                        'Un clásico de la fantasía que invita a descubrir un mundo lleno de criaturas, aventuras y lugares extraordinarios.'
                    ]
                },
                {
                    subtitulo: '5. Las crónicas de Narnia',
                    parrafos: [
                        'Una saga llena de aventuras, criaturas fantásticas y mundos paralelos que continúa conquistando a generaciones de lectores.'
                    ]
                },
                {
                    subtitulo: '¿Cuál elegir?',
                    parrafos: [
                        'Si estás comenzando a explorar la literatura fantástica, puedes elegir según el tipo de historia que más te atraiga.',
                        'Y si todavía no sabes cuál escoger, siempre puedes preguntarnos. En BookNook nos encanta recomendar historias y descubrir nuevos lectores.'
                    ]
                }
            ]
        }
    };

    const articulo = articulos[articuloId];

    if (!articulo) {
        return (
            <section className="container py-5">
                <h2>Artículo no encontrado</h2>

                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={onVolverBlog}
                >
                    Volver al blog
                </button>
            </section>
        );
    }

    return (
        <article className="blog-articulo container py-5">
            <header className="blog-articulo-encabezado">
                <p className="blog-categoria">
                    {articulo.categoria}
                </p>

                <h1>{articulo.titulo}</h1>

                <p>{articulo.introduccion}</p>
            </header>

            <div className="blog-articulo-imagen">
                <img
                    src={articulo.imagen}
                    alt={articulo.textoAlternativo}
                />
            </div>

            <div className="blog-contenido">
                {articulo.contenido.map((seccion, indice) => (
                    <section key={indice}>
                        {seccion.subtitulo && (
                            <h2>{seccion.subtitulo}</h2>
                        )}

                        {seccion.parrafos.map((parrafo, index) => (
                            <p key={index}>{parrafo}</p>
                        ))}
                    </section>
                ))}
            </div>

            <nav
                className="blog-navegacion"
                aria-label="Navegación entre artículos"
            >
                {articuloId === 2 && (
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => onSeleccionarArticulo(1)}
                    >
                        Artículo anterior
                    </button>
                )}

                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={onVolverBlog}
                >
                    Volver al blog
                </button>

                {articuloId === 1 && (
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => onSeleccionarArticulo(2)}
                    >
                        Siguiente artículo
                    </button>
                )}
            </nav>
        </article>
    );

}
