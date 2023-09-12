// helper functions
// encoder and decoder
// account for spaces
// if character is not in standardalphabet include in message

// substitution
// store message in result
// return false
// new data type for unique characters
// lowercase
// use helper functions to store message in result

const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function encodeMessage(character, alphabet) {
    if (character === " ") return " ";
    const index = standardAlphabet.indexOf(character);
    if (index !== -1) {
      return alphabet[index];
    }
    return character;
  }

  function decodeMessage(character, alphabet) {
    if (character === " ") return " ";
    const index = alphabet.indexOf(character);
    if (index !== 1) {
      return standardAlphabet[index];
    }
    return character;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    let result = "";
    for (let character of input.toLowerCase()) {
      if (encode) {
        result += encodeMessage(character, alphabet);
      } else {
        result += decodeMessage(character, alphabet);
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
