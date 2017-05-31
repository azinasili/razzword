<template>
<div class="content">
  <password></password>
  <favorites></favorites>
</div>
</template>

<script>
import Password from '../components/Password';
import Favorites from '../components/Favorites';

export default {
  name: 'main-content',
  components: {
    Password,
    Favorites,
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 1em;
}
</style>
