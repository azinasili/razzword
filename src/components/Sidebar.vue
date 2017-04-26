<template>
<aside class="sidebar">
  <p>{{msg}}</p>
  <pw-options></pw-options>
</aside>
</template>

<script>
import PWoptions from './PWoptions';

export default {
  name: 'sidebar',
  components: {
    'pw-options': PWoptions,
  },
};
</script>

<style lang="scss">
.sidebar {
  order: -1;
  padding: 1em;
  width: ((320px/16px) * 1em) // 20em
}
</style>
