<template>
<div class="favorites">
  <h2 class="favorites-title">Favorites</h2>
  <div v-if="!isFavoritesShown" class="favorites-message">
    <p>No favorites have been saved yet 😉</p>
  </div>
  <ul v-if="showHistory" class="favorites-list">
    <li v-for="password in sharedStore.favoritePasswords" class="favorites-item">
      {{password}}
      <button class="btn favorites-button"><i class="material-icons">delete</i></button>
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

<style lang="scss">
.favorites {
  display: flex;
  flex: 0 1 17em;
  flex-direction: column;
}

.favorites-title {;
  margin-bottom: .25rem;
}

.favorites-message {
  align-items: center;
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
}

.favorites-list {
  border: .0625em solid #ddd;
  border-radius: .25em;
  margin: 0;
  overflow-y: auto;
  padding: 0;
}

.favorites-item {
  align-items: center;
  display: flex;
  font-size: .875em;
  list-style: none;
  padding: .55em 1em;

  &:hover,
  &:focus {
    background: #eee;
  }

  &:not(:last-child) {
    border-bottom: inherit;
  }
}

.favorites-item:hover .favorites-button,
.favorites-item:focus .favorites-button {
  opacity: 1;
  pointer-events: auto;
}

.favorites-button {
  background: none;
  border-radius: 50%;
  color: #333;
  font-size: 1.5em;
  height: 1.5em;
  margin-left: auto;
  opacity: 0;
  padding: 0;
  pointer-events: none;
  width: 1.5em;

  &:hover,
  &:focus {
    background: rgb(251, 105, 94);
    color: #fff;
  }
}
</style>
