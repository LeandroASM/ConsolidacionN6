<template>
  <div >
    <h1 class="text-center">Comentarios</h1>
    <div v-for="(opinion, index) in comentarios" :key="index">
      <div class="alert alert-info" role="alert">
        Opinión creada por: {{ opinion.nombre }}
      </div>
      <p>{{ opinion.opinion }}</p>
      <div>
        <button
          type="button"
          @click="deleteComment(index)"
          class="btn btn-danger"
        >
          Eliminar
        </button>
        <button
          type="button"
          @click="editComment(opinion)"
          class="btn btn-warning"
        >
          Editar
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comentarios-component",
  props: {
    comentarios: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      localComentarios: [],
    };
  },
  // computed: {},
  methods: {
    deleteComment(index) {
      this.$emit('commentToDelete', index)
    },
    editComment(opinion) {
      this.$emit('commentToEdit', opinion)
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.localComentarios = [...this.comentarios];
    
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>