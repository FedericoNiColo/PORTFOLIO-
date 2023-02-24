import React from "react";
import { useState, useEffect, createContext } from "react";


const ProyectosContext = createContext()

const ProyectosProvider = ({ children }) => {

    const [proyectos, setProyectos] = useState([])
    const [proyecto, setProyecto] = useState({})
    const [renders, setRenders] = useState([])
    const [industrial, setIndustrial] = useState([])
    const [proyectoIndustrial, setProyectoIndustrial] = useState({})
    const [modalWeb, setModalWeb] = useState(false)
    const [modalIndustrial, setModalIndustrial] = useState(false)
    const [habilidades, setHabilidades] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        setTimeout(() => {

            obtenerHabilidades()
            obtenerProyectosWebs()
            obtenerDisenio()
            obtenerRenders()

            setCargando(false)
        }, 2000);

    }, [])

    const obtenerHabilidades = async () => {

        const url = 'http://localhost:1337/api/habilidads?populate=imagen'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setHabilidades(resultado.data[0].attributes.imagen.data)
        console.log(habilidades)
    }

    const obtenerProyectosWebs = async () => {

        const url = 'http://localhost:1337/api/webs?populate=imagen'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setProyectos(resultado.data)

        return;
    }

    const obtenerDisenio = async () => {

        const url = 'http://localhost:1337/api/industrials?populate=imagen,portada'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setIndustrial(resultado.data)

        return;
    }

    const obtenerRenders = async () => {

        const url = 'http://localhost:1337/api/renders?populate=imagen'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setRenders(resultado.data)

        return;
    }

    const obtenerProyecto = id => {
        const proy = proyectos.find(proyect => (
            proyect.attributes.url === id
        ))
        setProyecto(proy.attributes);
    }

    const obtenerProyectoDeDiseño = nombre => {
        const proy = industrial.find(proyect => (
            proyect.attributes.nombre === nombre
        ))
        setProyectoIndustrial(proy);
    }

    const modificarModalWeb = () => {
        setModalWeb(!modalWeb)
    }

    const modificarModalIndustrial = () => {
        setModalIndustrial(!modalIndustrial)
    }



    return (
        <ProyectosContext.Provider
            value={{
                proyectos,
                proyecto,
                modalWeb,
                modificarModalWeb,
                obtenerProyecto,
                renders,
                industrial,
                modificarModalIndustrial,
                modalIndustrial,
                proyectoIndustrial,
                obtenerProyectoDeDiseño,
                habilidades,
                cargando
            }}
        >{children}
        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext
