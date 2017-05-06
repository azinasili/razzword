export default {
  debug: false,
  state: {
    passwordLength: 10,
    uppercase: true,
    lowercase: false,
    numbers: false,
    symbols: false,
    numberLength: 5,
  },
  setPasswordLength(length) {
    if (this.debug) console.log('setMessageAction triggered with', length);
    this.state.passwordLength = length;
  },
};
