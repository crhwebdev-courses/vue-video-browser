<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
/* eslint-disable */
import YouTube from '../credentials/youtube.js';
import SearchBar from './components/SearchBar';

//Note: need to list all components used in components property
export default {
  name: 'App',
  components: {
    SearchBar
  },
  methods: {
    onTermChange(searchTerm){
      console.log(searchTerm);
    }
  }  
};
</script>