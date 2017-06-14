<template>
<header class="header">
  <div class="header-controls">
    <button v-on:click="toggleDrawer" class="btn btn-clear header-btn"><i class="material-icons">{{toogleDrawerIcon}}</i></button>
    <h1 class="header-title">{{title}}</h1>
  </div>
</header>
</template>

<script>
import store from '../store';

export default {
  name: 'titlebar',
  data() {
    return {
      title: 'RAZZWORD',
      sharedStore: store.state,
    };
  },
  computed: {
    toogleDrawerIcon() {
      if (this.sharedStore.isDrawerOpen) return 'close';

      return 'menu';
    },
  },
  methods: {
    toggleDrawer() {
      this.sharedStore.isDrawerOpen = !this.sharedStore.isDrawerOpen;
    },
  },
};
</script>

<style lang="scss">
.header {
  background: rgba(0, 0, 0, .1);
  box-shadow: 0 2px 10px 0 rgba(#ff5f6d, .35);
  color: #fff;
  padding: .65em 1.25em;
  width: 100%;
}

.header-controls {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 2;
}

.header-btn {
  color: inherit;
  margin-right: .25em;
  padding: .35em .5em;

  @media (min-width: ((741px/16px) * 1em)) {
    display: none;
  }
}

.header-title {
  display: inline-block;
  font-size: 1.35em;
  margin: 0;
}
</style>
