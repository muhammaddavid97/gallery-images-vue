<template>
  <div id="app">
    <Navbar />
    <hr>
    <!-- menampilkan component yang sesuai dengan mappiing path -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';

  export default{
    components:{Navbar}
  }
</script>
