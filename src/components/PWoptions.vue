<template>
<form class="pw-options">
  <div>
    <p>
      <input id="passwordLength" type="number" min="1" max="99" v-model="sharedStore.passwordLength">
      <label for="passwordLength">Password length</label>
    </p>
    <fieldset>
      <legend>Advanced Options</legend>
      <p>
        <input id="uppercase" type="checkbox" v-model="sharedStore.uppercase">
        <label for="uppercase">A-Z</label>
      </p>
      <p>
        <input id="lowercase" type="checkbox" v-model="sharedStore.lowercase">
        <label for="lowercase">a-z</label>
      </p>
      <p>
        <input id="numbers" type="checkbox" v-model="sharedStore.numbers">
        <label for="numbers">0-9</label>
      </p>
      <p>
        <input id="symbols" type="checkbox" v-model="sharedStore.symbols">
        <label for="symbols">!%@#</label>
      </p>
      <p>
        <input id="numberLength" type="number" min="1" v-bind:max="sharedStore.passwordLength" v-model="sharedStore.numberLength">
        <span class="input-label">Minimum Numeric Characters</span>
      </p>
    </fieldset>
  </div>
</form>
</template>

<script>
import store from '../store';

export default {
  name: 'pw-options',
  data() {
    return {
      sharedStore: store.state,
    };
  },
  computed: {
    newPasswordLength() {
      return store.setPasswordLength(this.sharedStore.passwordLength);
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  order: -1;
  padding: 1em;
  width: ((320px/16px) * 1em) // 20em
}
</style>
