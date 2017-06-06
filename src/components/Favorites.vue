<template>
<div class="favorites">
  <h2 class="favorites-title">Favorites</h2>
  <div v-if="!isFavoritesShown" class="favorites-message">
    <p>No favorites have been saved yet 😉</p>
  </div>
  <ul v-if="showHistory" class="favorites-list">
    <li v-for="password in sharedStore.favoritePasswords" class="favorites-item">
      <span class="js-favorite-password">{{password}}</span>
      <div class="favorites-buttons">
        <button class="btn favorites-button js-favorite-copy"><i class="material-icons">content_copy</i></button>
        <button class="btn favorites-button favorites-button--danger"><i class="material-icons">delete</i></button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import Clipboard from 'clipboard';
import store from '../store';

export default {
  name: 'favorites',
  data() {
    return {
      sharedStore: store.state,
      isFavoritesShown: false,
      clipboard: new Clipboard('.js-favorite-copy', {
        target: trigger => trigger.parentElement.parentElement.children[0],
      }),
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
  background: linear-gradient(to bottom, transparent 25%, rgba(255, 255, 255, .15) 100%);
  border-radius: .3em;
  box-shadow: 0 5px 20px 0 rgba(97, 35, 41, .35);
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
  transition: all .175s ease-in-out;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, .26);
    color: rgb(95, 47, 51);
  }
}

.favorites-item:hover .favorites-button,
.favorites-item:focus .favorites-button {
  opacity: 1;
  pointer-events: auto;
}

.favorites-buttons {
  margin-left: auto;
}

.favorites-button {
  background: none;
  border-radius: 50%;
  color: inherit;
  font-size: 1.5em;
  height: 1.5em;
  opacity: 0;
  padding: 0;
  pointer-events: none;
  width: 1.5em;

  &:hover,
  &:focus {
    background: rgb(53, 162, 113);
    color: #fff;
  }
}

.favorites-button--danger:hover,
.favorites-button--danger:focus {
  background: rgb(251, 105, 94);
}
</style>
