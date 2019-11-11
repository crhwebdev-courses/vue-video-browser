<template>
  <div v-if="video">
    <div>
      <iframe 
        width="560" 
        height="315" 
        :src="videoUrl" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      >
      </iframe>
    </div>
    <div class="details">
      <h4>{{video.snippet.title}}</h4>
      <p>{{video.snippet.description}}</p>
    </div>
    
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VideoDetail',
  props: ['video'],  
  computed: {
    videoUrl(){
      
      const { videoId } = this.video.id;

      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
};
</script>
<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>