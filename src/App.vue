<template>
  <div>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';

//Note: need to list all components used in components property
export default {
  name: 'App',
  components: {
    SearchBar
  }  
};
</script>