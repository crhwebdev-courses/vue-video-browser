<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoDetail :selectedVideo="selectedVideo"></VideoDetail>
    <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import YouTube from '../credentials/youtube.js';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

//Note: need to list all components used in components property
export default {
  name: 'App',
  data: function(){
    return {
      videos: [],
      selectedVideo: null
    };
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  methods: {
    onTermChange(searchTerm){
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YouTube.apiKey,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {this.videos = response.data.items; });
    },
    onVideoSelect(video){
      this.selectedVideo = video;
    }
  }  
};
</script>