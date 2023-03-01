import React from 'react'
import '../estilos/SobreMi.css'
import 'animate.css';
import useProyectosProvider from '../hooks/useProyectosProvider'
import { useState } from 'react';


const SobreMi = () => {

    const { habilidades } = useProyectosProvider()

    const [cv, setCv] = useState('')

    return (
        <section id="sobre-mi" className='animate__animated animate__zoomIn'>
            <div className='contenedor-sobreMi'>
                <div className="sobre-mi">
                    <img src="multimedia/presentacion.png" alt="foto personal" className="foto-personal" />
                    <div className="parrafo-sobremi animate__flipInX">
                        <h2 >sobre mí</h2>
                        <p>Tengo 23 años. A los 18 comencé a estudiar Diseño Industrial en la UBA y descubrí mi
                            pasión por la tecnología. Despues de varios años de carrera y haber realizado proyectos con Arduino
                            comencé a estudiar paralelamente programación web con el obejtivo de seguir profundizando mis conocimientos en tecnología.
                            <br />
                            Actualmente soy Desarrollador Frontend React y estoy
                            a 5 materias de terminar la carrera Diseño Industrial.
                            <br />
                            Soy una persona muy responsable, constante, curiosa y
                            con ganas de seguir aprendiendo día a día.
                            Siempre voy por nuevos desafíos y estoy dispuesto a aprender nuevas habilidades para adaptarme
                            a la tarea/trabajo que sea necesario para el bien del grupo y del desarrollo personal.

                        </p>
                        <div className='cv'>

                            <select onChange={e => setCv(e.target.value)}>

                                <option value="">Curriculum Vitae</option>
                                <option
                                    value={'/multimedia/CV-Federico Ni Coló.pdf'}
                                >Desarrollador Frontend</option>
                                <option
                                    value={'/multimedia/Federico Ni Coló.pdf'}
                                >Diseñador Industrial</option>

                            </select>

                            {cv.length > 0 && <a href={`${cv}`} className="vermas-cv" target="_blank">Ver</a>}

                        </div>

                        {/*  <a href="https://www.linkedin.com/in/federico-ni-coló-61b1011b8" className="vermas"
                            target="_blank">LinkedIn</a> */}
                    </div>

                </div>

                <div className="habilidades">
                    <div className="subtitulo-habilidades">
                        <h2 className="sub-habilidades">habilidades: <span>diseño y programación</span> </h2>
                    </div>
                    <div className="contenedor-habilidades animate__animated animate__zoomIn">
                        {habilidades.length > 0 && habilidades.map(habilidad => (
                            <img src={habilidad.attributes.url} alt="imagen-habilidad" className="icono-habilidades" key={Math.random()} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreMi
