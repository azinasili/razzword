<template>
<div id="app" class="app">
  <!--<titlebar></titlebar>-->
  <pw-content></pw-content>
  <sidebar></sidebar>
</div>
</template>

<script>
import Titlebar from './layout/Titlebar';
import PWcontent from './layout/Content';
import Sidebar from './layout/Sidebar';

export default {
  name: 'app',
  components: {
    Titlebar,
    'pw-content': PWcontent,
    Sidebar,
  },
};
</script>

<style lang="scss">
html { box-sizing: border-box; height: 100%; }
*, *::beore, *::after { box-sizing: inherit; }
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
}

.app {
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
}
</style>
