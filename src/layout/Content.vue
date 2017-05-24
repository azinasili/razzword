<template>
<div class="content">
  <password></password>
  <buttons></buttons>
</div>
</template>

<script>
import Password from '../components/Password';
import Buttons from '../components/Buttons';

export default {
  name: 'main-content',
  components: {
    Password,
    Buttons,
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
