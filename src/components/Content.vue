<template>
<div class="content">
  <h2>{{sayHi}}</h2>
  <password></password>
</div>
</template>

<script>
import Password from './Password';

export default {
  name: 'main-content',
  components: {
    Password,
  },
  data() {
    return {
      sayHi: 'Hello World!',
    };
  },
};
</script>

<style lang="scss">
.content {
  flex: 1 1 0%;
  padding: 1em;
}
</style>
