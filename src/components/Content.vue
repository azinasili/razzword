<template>
<div class="content">
  <h2>{{sayHi}}</h2>
</div>
</template>

<script>
export default {
  name: 'main-content',
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
