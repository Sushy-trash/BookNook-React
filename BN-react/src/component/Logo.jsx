
export default function Logo({ className = '' }) {
    return(
        <>
            <span className={`logo ${className}`.trim()}>
                <img src="./src/assets/logo booknook.png" className="logo-booknook"/>
                BookNook-El espacio de Literatura Fantástica.
            </span>
        </>
    );
}