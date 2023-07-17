<template>
<div class="container">
    <h1> Iniciar Sesión</h1>
    <form action="">
        <div>
            <label for="">Usuario: </label>
            <input type="text" v-model="usuario" placeholder="Usuario: admin">
        </div>
        <div>
            <label for="">Contraseña: </label>
            <input type="password" v-model="pass" placeholder="Contraseña: 123">
        </div>
        <div>
            <button @click.prevent="validarDatos()">Ingresar</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'Login-view',
    // props: {},
    data: function(){
        return {
            usuario:'',
            pass:'',
            users: [{usuario:'admin', password:'123'}]
        }
    },
    // computed: {},
    methods: {
        validarDatos(){
            if(this.users.find(user => user.usuario== this.usuario && user.password== this.pass)){
                this.$route.push('/user')
            }
        }
    }
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