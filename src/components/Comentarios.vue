<template>
<div>
    <h1>Comentarios</h1>
    <div v-for="(opinion, index) in comentarios" :key="index">
        <div class="alert alert-info" role="alert">Opinión creada por: {{opinion.nombre}}</div>
        <p>{{opinion.opinion}}</p>

        <button type="button" class="btn btn-danger">Eliminar</button>
        <button type="button" class="btn btn-warning">Editar</button>

    </div>
</div>
</template>

<script>
export default {
    name: 'Comentarios-component',
     props: {
        comentarios:{
            type:Array,
            required:true,
        }
     },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>