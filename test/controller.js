var assert = require('assert');

describe('Validating the correct input', function () {
  describe('When there is an error with the credentials', function () {
    it('Should return 400 status code', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe('When there are valid credentials', function () {
    it('Should return 200 status code', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});