import productos from "../data/productos.json";
import "./Catalogo.css";
import Producto from './Producto';

export default function Catalogo(){
    
    return(
        <section id="catalogo" className="catalogo">
            <div className="container">
                <h2> Explora nuestro catalogo</h2>
                <p>Encuentra tu proxima historia favorita.</p>

                <div className="row g-4">
                    {productos.map((producto)=> (
                        <div className="col-12 col-sm-6 col-lg-4" key={producto.id}>
                            
                            <Producto producto={producto}/>

                        </div>
                    ))}
                </div>

            </div>
        </section>

    )

}