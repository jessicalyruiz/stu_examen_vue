<template>
  <div class="container">
    <div class="contenido">
            <div>
                <label for="codigoBarras">codigo Barras</label>
                <input type="text" id="codigoBarras" v-model="codBarras">
            </div>
            <div>
                <label for="cantidad">Cantidad</label>
                <input type="number" id="cantidad" v-model="cantidad">
            </div>
            <div>
                <button @click="agregarProducto">Agregar</button>
            </div>

            <div class="card"> 
        <div class="card-body">
            <table class="table table-dark" v-for="d in detalles" :key="d.codBarras">
                <thead>
                    <tr>
                        <td>Cod Barras</td>
                        <td>Nombre</td>
                        <td>Cantidad</td>
                        <td>Precio</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ d.codBarras }}</td>
                        <td>{{ d.nombre }}</td>
                        <td>{{ d.precio }}</td>
                        <td>{{ d.subtotal }}</td>
                    </tr>

                </tbody>
            </table>
        </div>

        <label for="">TOTAL: {{ total }}</label>
        <div v-if="msj" class="alert alert-primary" role="alert">
    {{mensaje}}
        </div>
    </div>
    </div>

  </div>
</template>

<script>
import{verificarStockFachada} from '../helpers/ProductoCliente.js'

export default {
    data(){
        return{
            total:0,
            
            codBarras:"",
            nombre:"",
            cantidad:0,
            precio:0,
            subtotal:0,
            listaProductos:[],
            detalles:[],
            msj:false,
            mensaje:"",
            total:0
        }
    },
    methods:{
        async agregarProducto(){
            console.log(this.cantidad)
            const producto={
            codigoBarras:this.codBarras,
            nombre:this.nombre,
            categoria:"",
            stock:this.cantidad,
            precio:this.precio,
            }
            producto=await verificarStockFachada(producto)
            if(producto!==null){
                this.codBarras=producto.codigoBarras
                this.nombre=producto.nombre
                this.categoria=producto.categoria
                this.precio=producto.precio
                const productoVenta={
                    codigoBarras:this.codBarras,
                    cantidad:this.cantidad
                }
                this.listaProductos.push(productoVenta)
                const detalle={
                    codBarras:this.codBarras,
                    nombre:this.nombre,
                    cantidad:this.cantidad,
                    precio:this.precio,
                    subtotal:this.cantidad*this.precio,
                }
                this.detalles.push(detalle)
                this.total+=detalle.subtotal
            }else{
                    this.msj=true
                    this.mensaje='Stock no disponible'
            }
        }
    }
}
</script>

<style>

</style>