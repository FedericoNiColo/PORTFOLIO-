import { useContext } from "react"
import ProyectosContext from '../context/ProyectosProvider'

const useProyectosProvider = () => {
    return useContext(ProyectosContext)
}

export default useProyectosProvider