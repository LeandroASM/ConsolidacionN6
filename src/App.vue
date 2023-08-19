<template>
  <div id="app">
    <!-- Image and text -->
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand"><i class="fa-solid fa-gamepad" style="color: #ffffff;"></i> Games Opinion</a>
      <li><router-link class="home" to="/"><i class="fa-solid fa-house" style="color: #ffffff;"></i> Home</router-link></li>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}





.home{
  color: white;
  list-style: none;
  
}
</style>
