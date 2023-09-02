<template>
    <h1>Facturacion</h1>
    <DatosVenta/>
    <DatosProducto/>
  
</template>

<script>
import DatosProducto from '../components/DatosProducto.vue';
import DatosVenta from '../components/DatosVenta.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        DatosProducto,
        DatosVenta
    }

}
</script>

<style>

</style>