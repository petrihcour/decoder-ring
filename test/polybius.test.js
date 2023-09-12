const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// Write your tests here!
describe("polybius", () => {
  describe("encoding", () => {
    it("should return '42' when encoding 'i' and 'j'", () => {
      const message = "jill";
      const actual = polybius(message);
      const expected = "42421313";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message before and after encoding", () => {
      const message = "hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";
      expect(actual).to.equal(expected);
    });
    it("should return a string when encoding", () => {
      const message = "letters";
      const actual = polybius(message);
      const expected = "13514444512434";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should return '(i/j)' when decoding '42'", () => {
      const message = "21421313";
      const actual = polybius(message, false);
      const expected = "b(i/j)ll";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message before and after decoding", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });
    it("should return false if the number of characters in a string excluding spaces is odd", () => {
      const message = "44324233521254134";
      const actual = polybius(message, false);
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
  it("should ignore capital letters", () => {
    const message = "CapItAl";
    const actual = polybius(message);
    const expected = "31115342441113";
    expect(actual).to.equal(expected);
  });
});
//change some of these expect methods!!!
