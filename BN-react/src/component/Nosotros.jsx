export default function Nosotros(){
    return(
        <section id="nosotros" className="about-section section-space">
            <div className="about-us">
                <h1>Sobre Nosotros</h1>
                <p> BookNook nació de dos frikis que tenían que hacer un proyecto para fullstack II e intentaron no manquearla en el proceso.
                    Nos especializamos en cosas frikis, como literatura fantástica, Sci-Fi, Mangas, Cómics, Novelas y algunos artículos para lectores.
                    Nuestro objetivo es ofrecer un espacio para encontrar la lectura que buscas, y también aprobar el ramo...Por segunda vez
                </p>
            </div>
            <div className="integrantes">
                <h1>Colaboradores</h1>
                <article className="nosotros-integrante">
                    <img src="./src/assets/filthy-frank-pink-guy.gif" 
                        className="nosotros-gif"
                        alt="gif represetnativo del compañero">
                    </img>
                    <h3>Sushy-Trash</h3>
                    <p>
                        Friki n1
                        Especialista en Mangas, Cómics y en hacer bonita la página. 
                        CEO de Polystation
                    </p>
                </article>
                <article className="nosotros-integrante">
                    <img src="./src/assets/mapache gif.gif"
                        className="nosotros-gif"
                        alt="gif representativo de la compañera">
                    </img>
                    <h3>Schatten7u7</h3>
                    <p>
                        Queen ñoñística.
                        Especialista en Novelas, Fantasía y Sci-Fi, además de hacer que la página funcione (spoiler,funciona mejor que el anterior). 
                        Ministra de Defensa de Lemuria
                    </p>

                </article>


            </div>
        </section>
    )

}