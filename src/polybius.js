// helper function
// encode and decode
// spaces accounted for 
// create encoded character
// 42 is (i/j)
// create decoded coordinates

// polybius function
// store encoder in result
// store decoder in coordinates
// lowercase
// use helper function
// maintain spaces 

const polybiusModule = (function () {
  const encoder = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function encodeCharacter(characters, encoder) {
    if (characters === " ") {
      return " ";
    } else if (characters in encoder) {
      return encoder[characters];
    }
    return "";
  }

  function decodeCoordinates(coordinates, decoder) {
    if (coordinates === "42") {
      return "(i/j)";
    } else {
      return decoder[coordinates];
    }
    return "";
  }

  function polybius(input, encode = true) {

    let result = "";
    let coordinates = "";

    for (let characters of input.toLowerCase()) {
      if (encode) {
        result += encodeCharacter(characters, encoder);
      } else {
        if (characters === " ") {
          result += " ";
        } else {
          coordinates += characters;
        }

        if (coordinates.length === 2) {
          result += decodeCoordinates(coordinates, decoder);
          coordinates = "";
        }
      }
    }

    if (!encode && coordinates.length > 0) {
      return false;
    }

    return result;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
