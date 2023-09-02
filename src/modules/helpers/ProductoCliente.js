import axios from "axios"

export const IngresarProductoFachada=(bodyProducto)=>{
    IngresarProducto(bodyProducto)
}


export const verificarStockFachada= async(bodyProducto)=>{
    return await verificarStock(bodyProducto)
}

const IngresarProducto=async(bodyProducto)=>{
    axios.post('http://localhost:8081/API/v1.0/Supermaxi/productos', bodyProducto,{headers:header}).then(r=>r.data);
}

const verificarStock=async(bodyProducto)=>{
    console.log(bodyProducto);
    return axios.get('http://localhost:8081/API/v1.0/Supermaxi/productos', bodyProducto,{headers:header}).then(r=>r.data);
}








const header={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZXNzaTIiLCJpYXQiOjE2OTM2NDA2MjcsImV4cCI6MTY5NDAwMDYyN30.6NE3VBd32-WXjhf0W_IG65FGLDhwhNihAXh_m_fhQJ0e9_sE9CsouQMlR9aIywpGxG_nj6nZfLcWiW_bGc6cdw"
}