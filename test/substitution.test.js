const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  describe("encoding", () => {
    it("should maintain spaces in the message", () => {
      const input = "a message";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "x amddxgm";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "A MEssage";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "x amddxgm";
      expect(actual).to.equal(expected);
    });
    it("should correctly encode the given phrase based on the alphabet given to the function", () => {
      const input = "vanessa";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet);
      const expected = "cqftllq";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should maintain spaces in the message", () => {
      const input = "x amddxgm";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, false);
      const expected = "a message";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "amDdxGM";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });
    it("should correctly decode the given phrase based on the alphabet given to the function", () => {
      const input = "cqftllq";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet, false);
      const expected = "vanessa";
      expect(actual).to.equal(expected);
    });
  });
  describe("errors", () => {
    it("should return 'false' if the given alphabet isn't exactly 26 characters long", () => {
      const input = "message";
      const alphabet = "oyqmcgrukswaflnthdjpz";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return 'false' if there are any duplicate characters in the given alphabet", () => {
      const input = "message";
      const alphabet = "xoyqmcgrukwwaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });
});
