import { useContext } from "react";
import MlContext from '../context/MlProvider'

const useMl = () =>{
    return useContext(MlContext)
}
export default useMl