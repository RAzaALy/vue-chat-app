<template>
  <div id="app">
    <header>
      <h1>Vue Chat App</h1>
      <p>Realt time Chat App</p>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
header {
  text-align: center;
}
button, input {
  margin-bottom: 10px;
}
</style>
