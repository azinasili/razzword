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

.btn {
  border: .0625em solid transparent;
  border-radius: .25em;
  display: inline-block;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.25;
  padding: .5em 1em;
  text-align: center;
  transition: all .175s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  .material-icons {
    display: block;
    font-size: 1em;
  }
}

.btn-primary {
  background-color: #0275d8;
  border-color: #0275d8;
  color: #fff;
}
</style>
