<template>
  <div id="pinterest">
    <section id="carousel">
      <Carousel />
    </section>
    <section id="search-images">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-6">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
              </div>
              <input type="text"
              class="form-control search"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Masukan keyword pencarian gambar"
              v-model="search"
              >
            </div>
          </div>
          <div class="col-md-3">
            <button type="button" @click="getSearchUnsplash(search)" class="btn btn-primary">Search</button>
          </div>
        </div>
        <div id="image-list">
          <stack
          :column-min-width="300"
          :gutter-width="15"
          :gutter-height="15"
          monitor-images-loaded
          >
            <stack-item
              v-for="image in getterImages"
              :key="image.id"
              style="transition: transform 300ms"
            >
              <img :src="image.urls.small" :alt="image.alt_description" />
            </stack-item>
          </stack>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel.vue';
  import {mapGetters, mapActions} from 'vuex';
  import {Stack, StackItem} from "vue-stack-grid";

  export default{
    data: function(){
      return{
        search:''
      }
    },
    components:{
      Carousel,
      Stack,
      StackItem
    },
    computed:{
      ...mapGetters(['getterImages'])
    },
    methods:{
      ...mapActions(['getSearchUnsplash'])
    },
    mounted(){
      this.getSearchUnsplash();
    },
    beforeRouteLeave(to, from, next){
      const answer = window.confirm('Apakah anda ingin meninggalkan halaman ini ?');
      if (answer){
        next();
      }else{
        next(false);
      }
    }
  }
</script>

<style lang="css" scope>
  .search{
    margin-top: 50px;
    margin-left: 30px;
  }
  .btn{
    margin-top: 50px;
    margin-right: -10px;
  }

  #image-list{
    margin-top: 100px;
  }
</style>
