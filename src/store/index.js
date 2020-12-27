import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[]
  },
  getters:{
    getterImages : state => state.images
  },
  mutations: {
    searchUnsplash : (state, data) => {
      state.images = data;
    }
  },
  actions: {
    getSearchUnsplash : ({commit}, value) => {
      axios.get(`https://api.unsplash.com/search/photos?per_page=20&query=` + value, {
        headers:{
          Authorization: "Client-ID YAt5eewvDzBcLg5_kQxa8JzEPhlwsEvOJ4rziX3q3tw",
          "Accept-Version": "v1"
        }
      })
        .then(response => {
          commit('searchUnsplash', response.data.results)
        })
        .catch(err => {
          console.log(err.responseText)
        });
    }
  },
  modules: {
  }
})
