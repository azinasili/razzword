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
