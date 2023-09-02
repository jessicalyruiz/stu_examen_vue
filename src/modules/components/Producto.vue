<template>
    <div class="container">
        <div class="contenido">
  <label for="codigoBarras">codigo Barras</label>
 <input type="text" id="codigoBarras" v-model="codBarras">

 <label for="nombre">Nombre</label>
 <input type="text" id="nombre" v-model="nombre">

 <label for="categoria">Categoria</label>
 <select name="categoria" id="categoria" v-model="categoria">
    <option selected>Seleccione</option>
    <option value="electrodomesticos">Electrodomesticos</option>
    <option value="lacteos">Lacteos</option>
    <option value="ropa">ropa</option>
 </select>

 <label for="stock">stock</label>
 <input type="number" id="stock" v-model="stock">

 <label for="precio">Precio</label>
 <input type="number" id="precio" v-model="precio">
<button @click="ingresar">Guardar</button>
</div>
</div>
</template>



<script>
import {IngresarProductoFachada} from '../helpers/ProductoCliente.js'
export default {
    data(){
        return{
            codBarras:"",
            nombre:"",
            categoria:"",
            stock:null,
            precio:null,
        }
    },
    methods:{
        ingresar(){
            const producto={
            codigoBarras:this.codBarras,
            nombre:this.nombre,
            categoria:this.categoria,
            stock:this.stock,
            precio:this.precio,
            }
            IngresarProductoFachada(producto)
        }
    }

}
</script>

<style>

</style>