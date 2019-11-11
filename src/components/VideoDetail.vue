<template>
  <div>
    <h2>{{videoTitle}}</h2>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VideoDetail',
  props: ['video'],
  computed: {
    videoTitle: function(){
      if(this.video){
        return this.video.snippet.title;
      }

      return '';
    }
  }
};
</script>