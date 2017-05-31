<template>
<div class="password">
  <p id="password" class="password-content">{{this.sharedStore.password}}</p>
  <div class="password-controls">
    <buttons></buttons>
  </div>
</div>
</template>

<script>
import store from '../store';
import Buttons from './Buttons';

export default {
  name: 'password',
  components: {
    Buttons,
  },
  data() {
    return {
      sharedStore: store.state,
    };
  },
};
</script>

<style lang="scss">
.password {
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  flex-direction: column;
  justify-content: center;
}

.password-content {
  margin-bottom: 2em;
}
</style>
