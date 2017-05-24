<template>
<div class="button-bar">
  <button v-on:click="newPassword" class="btn btn-primary">New password</button>
</div>
</template>

<script>
import store from '../store';
import Clipboard from 'clipboard';

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
.button-bar {
  display: flex;
  justify-content: center;
}

.btn {
  border: .0625em solid transparent;
  border-radius: .25em;
  display: inline-block;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.25;
  padding: .5em 1em;
  text-align: center;
  transition: all .2s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.btn-primary {
  background-color: #0275d8;
  border-color: #0275d8;
  color: #fff;
}
</style>
