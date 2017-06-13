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
    favoriteAmount: 10,
    favoritePasswords: [],
    numberLength: 5,
    passwordBank: {
      numbers: [],
      characters: [],
    },
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
  setPasswordLength(length) {
    if (this.debug) console.log('setPasswordLength triggered with', length);
    this.state.passwordLength = length;
  },
  newPasswordArray(array) {
    if (this.debug) console.log('newPasswordArray triggered with', array);

    const UPPERCASE = this.state.passwordCharacters.uppercase;
    const LOWERCASE = this.state.passwordCharacters.lowercase;
    const NUMBERS = this.state.passwordCharacters.numbers;
    const SPECIAL = this.state.passwordCharacters.symbols;

    this.state.passwordBank.characters =
      this.state.passwordBank.characters.filter(el => UPPERCASE.indexOf(el) === -1);
    this.state.passwordBank.characters =
      this.state.passwordBank.characters.filter(el => LOWERCASE.indexOf(el) === -1);
    this.state.passwordBank.numbers =
      this.state.passwordBank.numbers.filter(el => NUMBERS.indexOf(el) === -1);
    this.state.passwordBank.characters =
      this.state.passwordBank.characters.filter(el => SPECIAL.indexOf(el) === -1);

    if (this.state.uppercase) {
      this.state.passwordBank.characters =
        [...this.state.passwordBank.characters, ...this.state.passwordCharacters.uppercase];
    }

    if (this.state.lowercase) {
      this.state.passwordBank.characters =
        [...this.state.passwordBank.characters, ...this.state.passwordCharacters.lowercase];
    }

    if (this.state.numbers) {
      this.state.passwordBank.numbers =
        [...this.state.passwordBank.numbers, ...this.state.passwordCharacters.numbers];
    }

    if (this.state.symbols) {
      this.state.passwordBank.characters =
        [...this.state.passwordBank.characters, ...this.state.passwordCharacters.symbols];
    }
  },
  createNewPassword(passwordBank) {
    if (this.debug) console.log('createNewPassword triggered with', passwordBank);

    const NEW_PASSWORD = [];
    let numbersLength = 0;

    if (this.state.numbers) {
      numbersLength = this.state.numberLength;

      for (let i = 0; i < this.state.numberLength; i += 1) {
        const getCharacter = Math.floor(Math.random() * passwordBank.numbers.length);
        NEW_PASSWORD.push(passwordBank.numbers[getCharacter]);
      }
    }

    for (let i = 0; i < (this.state.passwordLength - numbersLength); i += 1) {
      const getCharacter = Math.floor(Math.random() * passwordBank.characters.length);
      NEW_PASSWORD.push(passwordBank.characters[getCharacter]);
    }

    this.state.password = this.arrShuffle(NEW_PASSWORD);
    this.state.password = NEW_PASSWORD.join('');
    this.state.isFavorite = false;
  },
  addFavoritePassword(password) {
    if (this.debug) console.log('addFavoritePassword triggered with', password);

    let duplicate = false;
    this.state.isFavorite = true;

    if (this.state.isFavorite) {
      this.state.favoritePasswords.forEach((pw) => {
        if (pw === password) duplicate = true;
      });

      if (!duplicate) {
        if (this.state.favoritePasswords.length >= this.state.favoriteAmount) {
          this.state.favoritePasswords.pop();
        }

        this.state.favoritePasswords.unshift(password);
      }
    }
  },
  deleteFavoritePassword(index) {
    if (this.debug) console.log('deleteFavoritePassword triggered with', index);
    this.state.favoritePasswords.splice(index, 1);
  },
  arrShuffle(array) {
    const ARRAY = array;
    let currentIndex = ARRAY.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      const RANDOM_INDEX = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      const TEMP_VALUE = ARRAY[currentIndex];
      ARRAY[currentIndex] = ARRAY[RANDOM_INDEX];
      ARRAY[RANDOM_INDEX] = TEMP_VALUE;
    }

    return ARRAY;
  },
};
