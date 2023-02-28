import '../estilos/Trabajos.css'
import React from 'react'
import useProyectosProvider from '../hooks/useProyectosProvider'
import ProyectoWeb from './ProyectoWeb'
import ModalWebs from './ModalWebs'
import ProyectoIndustrial from './ProyectoIndustrial'
import ModalIndustrial from './ModalIndustrial'

const Trabajos = () => {

    const { proyectos, modalWeb, renders, industrial, modalIndustrial } = useProyectosProvider()

    proyectos.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    })
    industrial.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    })

    return (
        <section id="trabajos" className="trabajos animate__animated animate__zoomIn">
            <article className="webs subtitulo">
                {modalWeb && <ModalWebs />}
                <h2 className="blanco">proyectos realizados con diferentes cursos</h2>
                <h3 className="blanco sub">webs</h3>

                <div className="tarjetas-webs">
                    {proyectos.length > 0 &&
                        proyectos.map(proyecto => (
                            <ProyectoWeb
                                key={proyecto.id}
                                proyecto={proyecto}
                            />
                        ))}
                </div>
            </article>


            <article className="webs subtitulo">
                {modalIndustrial && <ModalIndustrial />}
                <h2 className="blanco">proyectos realizados en la universidad</h2>
                <h3 className="blanco sub">Diseño Industrial</h3>

                <div className="tarjetas-webs">
                    {industrial.length > 0 &&
                        industrial.map(proyecto => (
                            <ProyectoIndustrial
                                key={proyecto.id}
                                proyecto={proyecto.attributes}
                            />
                        ))}
                </div>
            </article>


            <article className="renders subtitulo">
                <h2 className="blanco">proyectos realizados en estudio de arquitectura Armendariz-Zabaleta</h2>
                <h3 className="blanco sub">renders</h3>

                <div className="imagenes">
                    {renders.map(render => (
                        <img src={`${render.attributes.imagen.data.attributes.url}`} alt="" key={`${render.attributes.imagen.data.attributes.url}`} className={`${render.attributes.clase} img sombra animate__animated animate__zoomIn`} />
                    ))}
                </div>

                <a href="https://www.behance.net/gallery/132177317/Portfolio-Personal" className="vermas" target="_blank">ver más...</a>

            </article>
        </section>
    )
}

export default Trabajos
