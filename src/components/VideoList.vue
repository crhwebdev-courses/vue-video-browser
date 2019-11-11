<template>
<div class="col-md-4">
  <ul class="list-group">  
    <VideoListItem 
      v-for="video in videos" 
      :video="video"
      :key="video.id.videoId"
      @videoSelect="onVideoSelect"
    >
      
    </VideoListItem>
  </ul>
</div>
</template>

<script>
/* eslint-disable */
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: {
    videos: Array
  },
  methods: {
    onVideoSelect(video){      
      this.$emit('videoSelect', video);
    }
  }  
};

</script>

<style>
</style>