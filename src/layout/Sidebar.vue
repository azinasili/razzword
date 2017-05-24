<template>
<aside class="sidebar">
  <pw-options></pw-options>
</aside>
</template>

<script>
import PWoptions from '../components/PWoptions';

export default {
  name: 'sidebar',
  components: {
    'pw-options': PWoptions,
  },
};
</script>

<style lang="scss">
.sidebar {
  padding: 1em;

  @media (max-width: ((540px/16px) * 1em)) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate3d(0, -100%, 0);
    width: 100%;
  }

  @media (min-width: ((541px/16px) * 1em)) {
    order: -1;
    width: ((320px/16px) * 1em);
  }
}
</style>
