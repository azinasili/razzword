<template>
<form v-on:change="buildArray" class="pw-options">
  <p class="form-field">
    <input id="passwordLength" type="number" min="1" max="99" v-model="sharedStore.passwordLength">
    <label for="passwordLength">Password length</label>
  </p>
  <fieldset class="form-fieldset">
    <legend>Advanced Options</legend>
    <p class="form-field">
      <input id="uppercase" type="checkbox" v-model="sharedStore.uppercase">
      <label for="uppercase">A-Z</label>
    </p>
    <p class="form-field">
      <input id="lowercase" type="checkbox" v-model="sharedStore.lowercase">
      <label for="lowercase">a-z</label>
    </p>
    <p class="form-field">
      <input id="numbers" type="checkbox" v-model="sharedStore.numbers">
      <label for="numbers">0-9</label>
    </p>
    <p class="form-field">
      <input id="symbols" type="checkbox" v-model="sharedStore.symbols">
      <label for="symbols">!%@#</label>
    </p>
    <p class="form-field">
      <input id="numberLength" type="number" min="1" v-bind:max="sharedStore.passwordLength" v-model="sharedStore.numberLength">
      <span class="input-label">Minimum Numeric Characters</span>
    </p>
  </fieldset>
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
  methods: {
    buildArray() {
      store.newPasswordArray(this.sharedStore.passwordBank);
    },
  },
  created() {
    this.buildArray();
  },
};
</script>

<style lang="scss">
.form-field {
  margin: 0;

  &:not(:last-child) {
    margin-bottom: .5em;
  }
}

.form-fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
</style>
