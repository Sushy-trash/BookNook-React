import gif from "../assets/persona leyendo.mp4";

export default function Inicio() {
    return (
        <section id="inicio" className="inicio">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Tu proxima historia

                            <br/>
                            Comienza aqui.
                        </h1>
                        <p>
                            Descubre una variedad de mangas, comics, novelas y mucho mas
                            en NookBook,tu rincon de lectura fantastica. Sumergete en mundos imaginarios y vive aventuras inimaginables.
                        </p>
                        <a href="#catalogo" className="button-catalogo">
                            Aventurarse al catalogo       
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
                
                <h1>Explora un mundo LLeno de Creatividad y misterios inexplicables</h1>
                <video className="gif" src="./src/assets/persona leyendo.mp4" loop autoPlay muted playsInline></video>
                
            </div>
            


            
        </section>



    )


}