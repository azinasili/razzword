<template>
<div class="favorites">
  <h2>Favorites</h2>
  <hr />
  <div v-if="!isFavoritesShown" class="favorites-message">
    <p>No favorites have been saved yet 😉</p>
  </div>
  <ul v-if="showHistory" class="favorites-list">
    <li v-for="password in sharedStore.favoritePasswords">
      {{password}}
    </li>
  </ul>
</div>
</template>

<script>
import store from '../store';

export default {
  name: 'favorites',
  data() {
    return {
      sharedStore: store.state,
      isFavoritesShown: false,
    };
  },
  computed: {
    showHistory() {
      if (this.sharedStore.favoritePasswords.length) {
        this.isFavoritesShown = true;
      }

      return this.isFavoritesShown;
    },
  },
};
</script>

<style lanf="scss">
.favorites-message {
  align-items: center;
  display: flex;
  justify-content: center;
}
.favorites-list {
  margin: 0;
  padding: 0;
}
</style>
