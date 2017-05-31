<template>
<div class="button-bar">
  <button v-on:click="newPassword" class="btn btn-primary">New password</button>
  <button id="copyPassword" class="btn btn-primary"><i class="material-icons">content_copy</i></button>
  <button v-on:click="addFavorite" class="btn btn-primary"><i class="material-icons">{{favorite}}</i></button>
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
      if (this.isFavorite) return 'favorite';

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
      this.isFavorite = false;
    },
    addFavorite() {
      let duplicate = false;
      this.isFavorite = true;
      if (this.isFavorite) {
        this.sharedStore.favoritePasswords.forEach((password) => {
          if (password === this.sharedStore.password) duplicate = true;
        });

        if (!duplicate) this.sharedStore.favoritePasswords.push(this.sharedStore.password);
      }
    },
  },
  mounted() {
    this.newPassword();
    this.clipboard();
  },
};
</script>

<style lanf="scss">
.button-bar {
  display: flex;
  justify-content: center;
}

.button-bar .btn {
  flex: 0 1 0%;
}

.button-bar .btn:first-child {
  flex-grow: 1;
}

.button-bar .btn:not(:last-child) {
  margin-right: .75em;
}
</style>
