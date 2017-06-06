<template>
<form v-on:change="buildArray" class="pw-options">
  <p class="form-field">
    <label for="passwordLength" class="form-label form-label--block">Password length</label>
    <input
      id="passwordLength"
      type="number"
      class="form-input"
      min="1"
      max="99"
      v-model="sharedStore.passwordLength">
  </p>
  <div class="form-advanced">
    <fieldset class="form-fieldset">
      <legend class="form-fieldset-title">Advanced Options</legend>
      <p class="form-field form-field--inline">
        <input
          id="uppercase"
          type="checkbox"
          class="form-native form-native--checkbox form--hide"
          v-model="sharedStore.uppercase">
        <span class="form-button form-button--checkbox"></span>
        <label for="uppercase" class="form-label">A-Z</label>
      </p>
      <p class="form-field form-field--inline">
        <input
          id="lowercase"
          type="checkbox"
          class="form-native form-native--checkbox form--hide"
          v-model="sharedStore.lowercase">
        <span class="form-button form-button--checkbox"></span>
        <label for="lowercase" class="form-label">a-z</label>
      </p>
      <p class="form-field form-field--inline">
        <input
          id="numbers"
          type="checkbox"
          class="form-native form-native--checkbox form--hide"
          v-model="sharedStore.numbers">
        <span class="form-button form-button--checkbox"></span>
        <label for="numbers" class="form-label">0-9</label>
      </p>
      <p class="form-field form-field--inline">
        <input
          id="symbols"
          type="checkbox"
          class="form-native form-native--checkbox form--hide"
          v-model="sharedStore.symbols">
        <span class="form-button form-button--checkbox"></span>
        <label for="symbols" class="form-label">!%@#</label>
      </p>
      <p class="form-field">
        <label for="numberLength" class="input-label form-label--block">Minimum Numeric Characters</label>
        <input
          id="numberLength"
          type="number"
          class="form-input"
          min="1"
          v-bind:max="sharedStore.passwordLength"
          v-model="sharedStore.numberLength">
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
  position: relative;

  &:not(:last-child) {
    margin-bottom: .5em;
  }
}

.form-field--inline {
  display: inline-block;
  margin-right: .5em;

  &:not(:last-child) {
    margin-bottom: 1em;
  }
}

// Fieldset container
.form-advanced {
  background: rgba(255, 255, 255, .15);
  border-radius: .3em;
  font-size: .875em;
  margin-top: 1.25em;
  padding: 1em;
}

.form-fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

.form-fieldset-title {
  color: #fff;
  font-size: 1.15em;
  font-weight: 700;
  margin-bottom: .5em;
}

// Force label and inputs to align vertically
.form-label {
  color: rgba(255, 255, 255, .85);
  display: inline-block;
  vertical-align: middle;
}

// Label variation
.form-label--block {
  display: block;
  margin-bottom: .25em;
}

.form-input {
  background: rgba(255, 255, 255, .65);
  border: 0;
  border-radius: .3em;
  padding: .5em;
  transition: all .174s ease-in-out;

  &:focus,
  &:hover {
    background: #fff;
  }
}

// Hide native inputs while still being functional
.form--hide {
  cursor: pointer;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 1;
}

.form-button {
  background: rgba(255, 255, 255, .65);
  border-radius: .3em;
  cursor: pointer;
  display: inline-block;
  height: 1em;
  position: relative;
  vertical-align: middle;
  width: 1em;
}

.form-button--radio {
  border-radius: 100%;
}

.form-native:focus + .form-button,
.form-native:hover + .form-button {
  background: #fff;
}

// 1. Try to recreate focus ring
.form-native:focus + .form-button {
  box-shadow: 0 0 0 2px rgba(2, 117, 216, .5); // 1
}

.form-native:checked + .form-button {
  background: #fff;

  &::before {
    content: '';
    color: rgb(27, 152, 38);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(35deg);
  }
}

.form-native--checkbox:checked + .form-button::before {
  border: 2px solid currentColor;
  border-left: 0;
  border-top: 0;
  height: .65em;
  margin-top: -1px;
  width: .325em;
}
</style>
