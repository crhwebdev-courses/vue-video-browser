<template>
<div>
  <ul class="list-group">  
    <VideoListItem 
      v-for="video in videos" 
      :video="video"
      :key="video.id.videoId">
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
  }  
};

</script>

<style>
</style>