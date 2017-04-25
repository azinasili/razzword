<template>
<div id="app" class="app">
  <!--<titlebar></titlebar>-->
  <pw-content></pw-content>
  <sidebar></sidebar>
</div>
</template>

<script>
import Titlebar from './components/Titlebar';
import pwContent from './components/Content';
import Sidebar from './components/Sidebar';

export default {
  name: 'app',
  components: {
    Titlebar,
    pwContent,
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
