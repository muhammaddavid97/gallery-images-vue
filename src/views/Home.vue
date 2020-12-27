<template>
  <div id="home">
    <h2>Welcome to My Website</h2>
    <p>Selamat Datang di website kami silakan klik <b-link><router-link :to="{name:'Register'}">Register</router-link></b-link></p>
  </div>
</template>

<style lang="css" scoped>
  h2{
    text-align: center;
    margin-top: 40px;
    font-size: 30px;
    font-size: arial, sans-serif;
  }

  p{
    text-align: center;
    margin-top: 30px;
    font-size: 15px;
  }
</style>
