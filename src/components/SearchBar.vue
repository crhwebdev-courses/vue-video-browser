<template>
  <div>     
    <input type="text" @input="onInput" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(event){
      //emmit an event on input change to signal to App component
      this.$emit('termChange', event.target.value);
    }
  }
};
</script>

<style>
</style>