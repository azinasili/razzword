<template>
<aside class="sidebar">
  <p>{{msg}}</p>
</aside>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      msg: 'Sidebar',
    };
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
