<template>
<form class="pw-options">
  <div>
    <p>
      <input name="passwordLength" type="number" value="10" min="1" max="99">
      <label for="passwordLength">Password length</label>
    </p>
    <fieldset>
      <legend>Advanced Options</legend>
      <p>
        <input name="uppercase" type="checkbox" checked>
        <label for="uppercase">A-Z</label>
      </p>
      <p>
        <input name="lowercase" type="checkbox">
        <label for="lowercase">a-z</label>
      </p>
      <p>
        <input name="numbers" type="checkbox">
        <label for="numbers">0-9</label>
      </p>
      <p>
        <input name="symbols" type="checkbox">
        <label for="symbols">!%@#</label>
      </p>
      <p>
        <input name="numberLength" type="number" value="10" min="1" max="99">
        <span class="input-label">Minimum Numeric Characters</span>
      </p>
    </fieldset>
  </div>
</form>
</template>

<script>
export default {
  name: 'pw-optiions',
};
</script>

<style lang="scss">
.sidebar {
  order: -1;
  padding: 1em;
  width: ((320px/16px) * 1em) // 20em
}
</style>
