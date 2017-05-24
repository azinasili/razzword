<template>
<div class="password">
  {{this.sharedStore.password}}
  <p>
    <button v-on:click="newPassword">New password</button>
  </p>
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
  methods: {
    newPassword() {
      const newPassword = [];

      for (let i = 0; i < this.sharedStore.passwordLength; i += 1) {
        const getCharacter = Math.floor(Math.random() * this.sharedStore.passwordBank.length);
        newPassword.push(this.sharedStore.passwordBank[getCharacter]);
      }

      this.sharedStore.password = newPassword.join('');
    },
  },
  mounted() {
    this.newPassword();
  },
};
</script>

<style lanf="scss">
</style>
