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
  background: linear-gradient(to bottom, transparent 25%, rgba(255, 255, 255, .15) 100%);
  border-radius: .3em;
  box-shadow: 0 5px 20px 0 rgba(97, 35, 41, .35);
  color: white;
  display: flex;
  flex: 1 0 0%;
  flex-direction: column;
  justify-content: center;
}

.password-content {
  font-size: 5vw;
  font-weight: 900;
  hyphens: auto;
  overflow-wrap: break-word;
  padding: 1em;
  text-align: center;
  word-break: break-all;
  word-wrap: break-word;

  @media (min-width: ((741px/16px) * 1em)) {
    font-size: 1.5em;
  }
}
</style>
