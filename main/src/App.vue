<template>
  <div>
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/vue">vue</router-link>
      <router-link to="/react">react</router-link>
    </div>
    <div id="vue"></div>
    <div id="react"></div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
