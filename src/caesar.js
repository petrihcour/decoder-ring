// helper function 
// characters not in the alphabet included 
// wrap the shift around 

// caesar function
// return false 
// store message into result
// lowercase
// use helper function 

const caesarModule = (function () {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  function shiftCharacter(character, shift) {
    const index = letters.indexOf(character);
    if (index !== -1) {
      let newIndex = (index + shift) % 26;
      if (newIndex < 0) {
        newIndex += 26;
      }
      return letters[newIndex];
    }
    return character;
  }

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    let result = "";
    for (let character of input.toLowerCase()) {
      if (encode) {
        result += shiftCharacter(character, shift);
      } else {
        result += shiftCharacter(character, -shift);
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
