<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import YouTube from '../credentials/youtube.js';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

//Note: need to list all components used in components property
export default {
  name: 'App',
  data: function(){
    return {
      videos: []
    };
  },
  components: {
    SearchBar,
    VideoList
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
    }
  }  
};
</script>