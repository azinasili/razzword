<template>
<form class="pw-options">
  <div>
    <p>
      <input id="passwordLength" type="number" min="1" max="99" v-model="passwordLength">
      <label for="passwordLength">Password length {{passwordLength}}</label>
    </p>
    <fieldset>
      <legend>Advanced Options</legend>
      <p>
        <input id="uppercase" type="checkbox" v-model="uppercase">
        <label for="uppercase">A-Z {{uppercase}}</label>
      </p>
      <p>
        <input id="lowercase" type="checkbox" v-model="lowercase">
        <label for="lowercase">a-z {{lowercase}}</label>
      </p>
      <p>
        <input id="numbers" type="checkbox" v-model="numbers">
        <label for="numbers">0-9 {{numbers}}</label>
      </p>
      <p>
        <input id="symbols" type="checkbox" v-model="symbols">
        <label for="symbols">!%@# {{symbols}}</label>
      </p>
      <p>
        <input id="numberLength" type="number" min="1" v-bind:max="passwordLength" v-model="numberLength">
        <span class="input-label">Minimum Numeric Characters {{numberLength}}</span>
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
      sharedStore: store,
      passwordLength: 10,
      uppercase: true,
      lowercase: false,
      numbers: false,
      symbols: false,
      numberLength: 5,
    };
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
