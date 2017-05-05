<template>
<header class="header">
  <h1>{{title}}</h1>
</header>
</template>

<script>
export default {
  name: 'titlebar',
  data() {
    return {
      title: 'PW Generator',
    };
  },
};
</script>

<style lang="scss">
.header {
  align-items: center;
  background: coral;
  color: white;
  display: flex;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
}
</style>
