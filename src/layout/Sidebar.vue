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
  background: rgba(255, 255, 255, .15);
  background: linear-gradient(to bottom, transparent 25%, rgba(255, 255, 255, .15) 100%);
  color: #fff;
  padding: 1.25em;

  @media (max-width: ((740px/16px) * 1em)) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate3d(0, -100%, 0);
    width: 100%;
  }

  @media (min-width: ((741px/16px) * 1em)) {
    order: -1;
    width: ((360px/16px) * 1em);
  }
}
</style>
