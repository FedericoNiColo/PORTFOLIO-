import React from 'react'
import '../estilos/Header.css'

const Header = () => {

    return (
        <div className="principal sombra animate__animated animate__zoomIn">
            <header>
                <nav className="navegacion">
                    <a href="#sobre-mi">sobre mí</a>
                    <a href="#trabajos">trabajos</a>
                    <a href="#contacto">contacto</a>
                </nav>
            </header>

            <div className='contenido-principal'>
                <div className="saludo animate__animated animate__backInLeft">
                    <h2>Hola, mi nombre es</h2>
                    <h1>Federico
                        <br /> Ni Coló
                    </h1>
                    <div className='profesiones'>
                        <p>Desarrollador Front-End React </p>
                        <p> Renderista</p>
                        <p>Estudiante avanzado de Diseño Industrial</p>
                    </div>
                </div>

                <div className='contener-portada animate__animated animate__backInRight'>
                    <img src="multimedia\ARTISTICA.png" alt="imagen portada" />
                </div>

            </div>

        </div>
    )
}

export default Header
