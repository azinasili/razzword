export default {
  debug: false,
  state: {
    password: [],
    passwordLength: 10,
    uppercase: true,
    lowercase: false,
    numbers: false,
    symbols: false,
    isFavorite: true,
    favoritePasswords: [],
    numberLength: 5,
    passwordBank: [],
    passwordCharacters: {
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
      symbols: [
        '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=',
        '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>',
        '/', '?',
      ],
    },
  },
  addFavoritePassword(password) {
    if (this.debug) console.log('addFavoritePassword triggered with', password);

    let duplicate = false;
    this.state.isFavorite = true;

    if (this.state.isFavorite) {
      this.state.favoritePasswords.forEach((pw) => {
        if (pw === password) duplicate = true;
      });

      if (!duplicate) this.state.favoritePasswords.push(password);
    }
  },
  setPasswordLength(length) {
    if (this.debug) console.log('setPasswordLength triggered with', length);
    this.state.passwordLength = length;
  },
  newPasswordArray(array) {
    if (this.debug) console.log('newPasswordArray triggered with', array);

    const UPPERCASE = this.state.passwordCharacters.uppercase;
    const LOWERCASE = this.state.passwordCharacters.lowercase;
    const SPECIAL = this.state.passwordCharacters.symbols;

    this.state.passwordBank = this.state.passwordBank.filter(el => UPPERCASE.indexOf(el) === -1);
    this.state.passwordBank = this.state.passwordBank.filter(el => LOWERCASE.indexOf(el) === -1);
    this.state.passwordBank = this.state.passwordBank.filter(el => SPECIAL.indexOf(el) === -1);

    if (this.state.uppercase) {
      this.state.passwordBank =
        [...this.state.passwordBank, ...this.state.passwordCharacters.uppercase];
    }

    if (this.state.lowercase) {
      this.state.passwordBank =
        [...this.state.passwordBank, ...this.state.passwordCharacters.lowercase];
    }

    if (this.state.symbols) {
      this.state.passwordBank =
        [...this.state.passwordBank, ...this.state.passwordCharacters.symbols];
    }
  },
};
