<template>
  <div v-if="video">
    <h2>{{video.snippet.title}}</h2>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VideoDetail',
  props: ['video'],  
};
</script>