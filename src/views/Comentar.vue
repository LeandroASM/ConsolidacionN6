<template>
    <div class="container mt-4">
        <h3>Escribe tu opinión del juego: {{name}} </h3>
        <form class="justify-content-center">
            <div class="form-group">
                <label for="">Nombre</label>
                <input type="name" class="form-control" v-model="nombre" placeholder="Nombre">
            </div>
            <div class="form-group">
                <label for="">Opinión</label><br>
                <textarea name="" id="" cols="98" rows="6" style="resize:none" v-model="opinion" placeholder="Tu opinión va aquí..."></textarea>
            </div>
            <div @click="addComent()" class="btn btn-primary">Agregar</div>
            
        </form>

        <div v-if="!opinionCreada" class="alert alert-danger" role="alert">
            No existen opiniones para mostrar
        </div>

        <Comentarios v-if="opinionCreada" :comentarios='opiniones'/>

    </div>
</template>

<script>
import Comentarios from '@/components/Comentarios.vue'
export default {
    name: 'comentar-view',
    // props: {},
    data: function(){
        return {
            nombre:'',
            opinion:'',
            opinionCreada: false,
            opiniones:[]
        }
    },
    computed: {
        name(){
            return this.$route.params.gameName
        }
    },
    methods: {
        addComent(){
            this.opiniones.push({nombre:this.nombre, opinion:this.opinion})
            this.opinionCreada = true
        }
    },
    // watch: {},
    components: {
        Comentarios
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    form{
        width: 80%;
        padding: 40px;
        margin: 20px auto;
        text-align: start;
        border: 1px solid black;
        border-radius: 5px;
        height: 400px;
        position: relative;
    }

    form input{
        width: 100%;
    }

    label{
        font-weight: 700;
    }

    button{
        position: absolute;
        left: 40px;
        bottom: 30px;
    }
</style>