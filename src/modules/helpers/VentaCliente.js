import axios from "axios"
import{verificarStockFachada} from './ProductoCliente.js'

export const realizarVentaFachada=(bodyVenta)=>{
    realizarVentaFachada(bodyVenta)
}

const realizarVenta=(bodyVenta)=>{
     axios.post('http://localhost:8081/API/v1.0/Supermaxi/ventas', bodyVenta,{headers:headers}).then(r=>r.data)
}

const headers={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZXNzaTIiLCJpYXQiOjE2OTM2NDA2MjcsImV4cCI6MTY5NDAwMDYyN30.6NE3VBd32-WXjhf0W_IG65FGLDhwhNihAXh_m_fhQJ0e9_sE9CsouQMlR9aIywpGxG_nj6nZfLcWiW_bGc6cdw"
}

const agregarProducto=()=>{

}