const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// Write your tests here!
describe("caesar", () => {
  describe("encoding", () => {
    it("should shift 'off' the alphabet and wrap around to the front of the alphabet", () => {
      const input = "zulu";
      const shift = 5;
      const actual = caesar(input, shift);
      const expected = "ezqz";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message", () => {
      const input = "a message";
      const shift = 1;
      const actual = caesar(input, shift);
      const expected = "b nfttbhf";
      expect(actual).to.equal(expected);
    });
    it("should maintain not alphabetic symbols throughout", () => {
      const input = "a message!";
      const shift = 1;
      const actual = caesar(input, shift);
      const expected = "b nfttbhf!";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should maintain spaces in the message", () => {
      const input = "y kcqqyec";
      const shift = -2;
      const actual = caesar(input, shift, false);
      const expected = "a message";
      expect(actual).to.equal(expected);
    });
    it("should maintain not alphabetic symbols throughout", () => {
      const input = "y kcqqyec!";
      const shift = -2;
      const actual = caesar(input, shift, false);
      const expected = "a message!";
      expect(actual).to.equal(expected);
    });
  });

  describe("errors", () => {
    it("should return false if the shift value isn't present", () => {
      const input = "vanessa";
      const actual = caesar(input);
      expect(actual).to.be.false;
    });

    it("should return false if the shift value is equal to 0", () => {
      const input = "vanessa";
      const shift = 0;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("should return false if the shift value is less than -25", () => {
      const input = "vanessa";
      const shift = -27;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
      const input = "vanessa";
      const shift = 27;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("should ignore capital letters", () => {
      const input = "VaNeSSA";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "ydqhvvd";
      expect(actual).to.equal(expected);
    });
  });
});
