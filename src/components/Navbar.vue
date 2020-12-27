<template>
  <div id="navbar">
    <b-nav small class="navs">
      <b-nav-item active><router-link :to="{name:'Home'}">Home</router-link></b-nav-item>
      <b-nav-item><router-link :to="{name:'Register'}">Register</router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<style lang="css" scoped>
  .navs{
    margin-top: 10px;
  }
</style>
