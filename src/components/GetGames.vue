<template>
  <div class="contenedor">
    <div class="card" v-for="game in pcGames" :key="game.id" style="width: 20rem; margin-bottom: 20px ;">
        <img :src="game.background_image" class="card-img-top" width="300px" height="200px" alt="...">
      <div class="card-body">
        <h5 class="card-title"><strong>{{game.name}}</strong></h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Rating:</strong> {{game.rating}}</li>
        <li class="list-group-item"><strong>Released:</strong> {{game.released}}</li>
        <li class="list-group-item"><strong>Update:</strong> {{game.updated}}</li>
        <li class="list-group-item">
            <a class="btn btn-primary" @click="redirectTo(game.name)">Opinar</a>
            <router-link><i v-if="!meGusta" class="fa-solid fa-heart fa-2xl" style="color: #ff0000;"></i></router-link>
            <router-link to="/login"><i @click="darMg()" class="fa-regular fa-heart fa-2xl"></i></router-link>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "getGames-component",
  // props: {},
  data: function () {
    return {
      pcGames: '',
      meGusta: true
    };
  },
  // computed: {},
  methods: {
    async getFilms() {
      let data = await fetch(
        "https://api.rawg.io/api/games?key=dc8eede08d40464e86fd06948316e670&dates=2019-09-01,2019-09-30&platforms=18,1,7");
      let json = await data.json();
      this.pcGames = json.results;
 
    },

    redirectTo(nameGame){
        this.$router.push(`/opinion/${nameGame}`)
    },
  },
  // watch: {},
 // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.getFilms();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>

    .contenedor{
        width: 80%;
        margin: 2% auto;
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;
        
    }
</style>