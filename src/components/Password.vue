<template>
<div class="password">
  {{generatePassword}}
</div>
</template>

<script>
export default {
  name: 'password',
  data() {
    return {
      passwordLength: 20,
      password: [],
      capital: [
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
      possibleCharacters: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7',
        '8', '9', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-',
        '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',',
        '<', '.', '>', '/', '?',
      ],
    };
  },
  computed: {
    generatePassword() {
      for (let i = 0; i < this.passwordLength; i += 1) {
        const getCharacter = Math.floor(Math.random() * this.possibleCharacters.length);
        this.password.push(this.possibleCharacters[getCharacter]);
      }

      const newPassword = this.password.join('');

      return newPassword;
    },
  },
};
</script>

<style lanf="scss">
</style>
