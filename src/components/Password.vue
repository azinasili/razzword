<template>
<div id="password" class="password">
  {{this.sharedStore.password}}
</div>
</template>

<script>
import store from '../store';

export default {
  name: 'password',
  data() {
    return {
      sharedStore: store.state,
    };
  },
};
</script>

<style lanf="scss">
.password {
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  justify-content: center;
}
</style>
