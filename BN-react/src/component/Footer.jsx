
export default function Footer(){
    return(
        <footer className="footer-site">
            <div className='footer-content'>
                <div className='footer-mark'>
                    <img src="./src/assets/logo booknook.png" alt="logo de booknook" className='footer-logo'/>
                    <a href='#inicio'>BookNook-El espacio de literatura fantastica.</a>
                </div>
                <div className='footer-menu'>
                    <a href='#inicio'>Inicio</a>
                    <a href='#catalogo'>Catalogo</a>
                    <a href='#nosotros'>Nosotros</a>
                    <a href='/admin.html'>Admin</a>
                </div>
            </div>
        </footer>
    )
}