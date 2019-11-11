<template>
  <div>
    <h2>{{videoTitle}}</h2>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VideoDetail',
  props: ['selectedVideo'],
  computed: {
    videoTitle: function(){
      if(this.selectedVideo){
        return this.selectedVideo.snippet.title;
      }

      return '';
    }
  }
};
</script>