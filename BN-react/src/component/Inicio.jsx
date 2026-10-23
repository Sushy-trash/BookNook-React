import gif from "../assets/persona leyendo.mp4";

export default function Inicio() {
    return (
        <section id="inicio" className="inicio">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Tu próxima historia

                            <br/>
                            Comienza aquí.
                        </h1>
                        <p>
                            Descubre una variedad de mangas, cómics, novelas y mucho más
                            en BookNook,tu rincón de lectura fantástica. Sumérgete en mundos imaginarios y vive aventuras inimaginables.
                        </p>
                        <a href="#catalogo" className="button-catalogo">
                            Aventurarse al catálogo       
                        </a>
                    </div>

                    <div className="col-md-6">
                        <img
                            src="./src/assets/banners de libros.png"
                            alt="Banner de libros"
                            className="banner-libros"
                        />
                    </div>

                </div>
                
                <h1>Explora un mundo LLeno de creatividad y misterios inexplicables</h1>
                <video className="gif" src="./src/assets/persona leyendo.mp4" loop autoPlay muted playsInline></video>
                
            </div>
              
        </section>

    )

}