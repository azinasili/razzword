<template>
<div class="content">
  <password></password>
</div>
</template>

<script>
import Password from '../components/Password';

export default {
  name: 'main-content',
  components: {
    Password,
  },
};
</script>

<style lang="scss">
.content {
  flex: 1 1 0%;
  padding: 1em;
}
</style>
