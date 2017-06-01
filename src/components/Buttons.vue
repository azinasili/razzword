<template>
<div class="button-bar">
  <button v-on:click="newPassword" class="btn btn-clear btn--fade"><i class="material-icons">refresh</i></button>
  <button id="copyPassword" class="btn btn-clear btn--fade"><i class="material-icons">content_copy</i></button>
  <button v-on:click="addFavorite" class="btn btn-clear btn--fade"><i class="material-icons">{{favorite}}</i></button>
</div>
</template>

<script>
import Clipboard from 'clipboard';
import store from '../store';

export default {
  name: 'password',
  data() {
    return {
      sharedStore: store.state,
      isFavorite: false,
      clipboard: new Clipboard('#copyPassword', {
        target: () => document.getElementById('password'),
      }),
    };
  },
  computed: {
    favorite() {
      if (this.sharedStore.isFavorite) return 'favorite';

      return 'favorite_border';
    },
  },
  methods: {
    newPassword() {
      const newPassword = [];

      for (let i = 0; i < this.sharedStore.passwordLength; i += 1) {
        const getCharacter = Math.floor(Math.random() * this.sharedStore.passwordBank.length);
        newPassword.push(this.sharedStore.passwordBank[getCharacter]);
      }

      this.sharedStore.password = newPassword.join('');
      this.sharedStore.isFavorite = false;
    },
    addFavorite() {
      store.addFavoritePassword(this.sharedStore.password);
    },
  },
  mounted() {
    this.newPassword();
  },
};
</script>

<style lang="scss">
.button-bar {
  display: flex;
  justify-content: center;
}

.button-bar .btn {
  flex: 0 1 0%;

  &:first-child {
    flex-grow: 1;
  }

  &:not(:last-child) {
    margin-right: .75em;
  }
}
</style>
