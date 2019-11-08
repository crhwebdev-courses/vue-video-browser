import Vue from 'vue';
import App from './App';

//sets up a render function that is fed a creatElement function which takes the
// component to be created as an argument
// then we mount the component to the DOM
new Vue({
  render: h => h(App)
}).$mount('#app');
