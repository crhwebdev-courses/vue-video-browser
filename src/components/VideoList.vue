<template>
  <ul>
    <VideoListItem />
  </ul>
</template>

<script>
/* eslint-disable */
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  props: {
    videos: Array
  },
  components: {
    VideoListItem
  }
};

</script>

<style>
</style>