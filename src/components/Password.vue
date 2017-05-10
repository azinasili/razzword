<template>
<div class="password">
  {{generatePassword}}
  <p>
    {{this.password.length}}
  </p>
</div>
</template>

<script>
import store from '../store';

export default {
  name: 'password',
  data() {
    return {
      sharedStore: store.state,
      password: [],
      uppercase: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      ],
      lowercase: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      ],
      numbers: [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      ],
      specialCharacters: [
        '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=',
        '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>',
        '/', '?',
      ],
      possibleCharacters: [],
      // possibleCharacters: [
      //   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
      //   'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
      //   'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      //   't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7',
      //   '8', '9', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-',
      //   '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',',
      //   '<', '.', '>', '/', '?',
      // ],
    };
  },
  computed: {
    generatePassword() {
      const newPassword = [];

      for (let i = 0; i < this.sharedStore.passwordLength; i += 1) {
        const getCharacter = Math.floor(Math.random() * this.possibleCharacters.length);
        newPassword.push(this.possibleCharacters[getCharacter]);
      }

      this.password = newPassword.join('');

      return this.password;
    },
  },
  updated() {
  // Unsure of lifecycle method
    const possibleCharacters = [];

    // This does not work too great
    if (this.sharedStore.uppercase) possibleCharacters.push(...this.uppercase);
    if (this.sharedStore.lowercase) possibleCharacters.push(...this.lowercase);
    if (this.sharedStore.symbols) possibleCharacters.push(...this.lowercase);

    // Need to add numbers

    this.possibleCharacters = possibleCharacters;
  },
};
</script>

<style lanf="scss">
</style>
