<template>
<aside v-bind:class="{'is-open': this.sharedStore.isDrawerOpen }" class="sidebar">
  <pw-options></pw-options>
</aside>
</template>

<script>
import store from '../store';
import PWoptions from '../components/PWoptions';

export default {
  name: 'sidebar',
  data() {
    return {
      sharedStore: store.state,
    };
  },
  components: {
    'pw-options': PWoptions,
  },
};
</script>

<style lang="scss">
.sidebar {
  color: #fff;
  padding: 1.25em;

  @media (max-width: ((740px/16px) * 1em)) {
    background-color: rgb(105, 47, 49);
    height: 100%;
    left: 0;
    padding-top: 3.75em; // Height of header
    position: absolute;
    top: 0;
    transform: translate3d(-100%, 0, 0);
    transition: transform .175s ease-in-out;
    width: 100%;
  }

  @media (min-width: ((741px/16px) * 1em)) {
    order: -1;
    width: ((360px/16px) * 1em);
  }
}

.sidebar.is-open {
  transform: translate3d(0, 0, 0);
}
</style>
