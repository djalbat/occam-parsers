'use strict';

var chai = require('chai'),
    expect = chai.expect;

var CommonParser = require('../../lib/commonParser');

describe('es6/commonParser', function() {
  var commonParser = new CommonParser();

  describe('parseCharacter', function() {
    describe('if index is equal to the input length', function() {
      it('returns false and leaves the index unchanged regardless of the input character', function() {
        var input = '234234',
            inputLength = input.length,
            index = inputLength,
            expectedIndex = index;

        commonParser.input = input; ///
        commonParser.index = index; ///

        var character = undefined,
            parsed = commonParser.parseCharacter(character);

        index = commonParser.index; ///

        expect(parsed).to.be.false;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if index is greater than the input length', function() {
      it('returns false and leaves the index unchanged regardless of the input character', function() {
        var input = 'asdfasdfasdfsdaasdf',
            inputLength = input.length,
            index = inputLength + 1,
            expectedIndex = index;

        commonParser.input = input; ///
        commonParser.index = index; ///

        var character = undefined,
            parsed = commonParser.parseCharacter(character);

        index = commonParser.index; ///

        expect(parsed).to.be.false;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if index is less than the input length', function() {
      describe('if the character at the index position and given character do not match', function() {
        it('returns false and leaves the index unchanged', function() {
          var input = 'a',
              index = 0,
              expectedIndex = index;

          commonParser.input = input; ///
          commonParser.index = index; ///

          var character = 'b',
              parsed = commonParser.parseCharacter(character);

          index = commonParser.index; ///

          expect(parsed).to.be.false;
          expect(index).to.equal(expectedIndex);
        });
      });

      describe('if the character at the index position and given character match', function() {
        it('returns false and increments the index', function() {
          var input = 'a',
              index = 0,
              expectedIndex = index + 1;

          commonParser.input = input; ///
          commonParser.index = index; ///

          var character = 'a',
              parsed = commonParser.parseCharacter(character);

          index = commonParser.index; ///

          expect(parsed).to.be.true;
          expect(index).to.equal(expectedIndex);
        });
      });
    });
  });

  describe('parseRegularExpression', function() {
    describe('if index is equal to the input length', function() {
      it('returns false and leaves the index unchanged regardless of the input character', function() {
        var input = '234234',
            inputLength = input.length,
            index = inputLength,
            expectedIndex = index;

        commonParser.input = input; ///
        commonParser.index = index; ///

        var regularExpression = undefined,
            parsed = commonParser.parseRegularExpression(regularExpression);

        index = commonParser.index; ///

        expect(parsed).to.be.false;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if index is greater than the input length', function() {
      it('returns false and leaves the index unchanged regardless of the input regular expression', function() {
        var input = 'asdfasdfasdfsdaasdf',
            inputLength = input.length,
            index = inputLength + 1,
            expectedIndex = index;

        commonParser.input = input; ///
        commonParser.index = index; ///

        var regularExpression = undefined,
            parsed = commonParser.parseRegularExpression(regularExpression);

        index = commonParser.index; ///

        expect(parsed).to.be.false;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if index is less than the input length', function() {
      describe('if the regularExpression at the index position and given regular expression do not match', function() {
        it('returns false and leaves the index unchanged', function() {
          var input = 'a',
              index = 0,
              expectedIndex = index;

          commonParser.input = input; ///
          commonParser.index = index; ///

          var regularExpression = /b/,
              parsed = commonParser.parseRegularExpression(regularExpression);

          index = commonParser.index; ///

          expect(parsed).to.be.false;
          expect(index).to.equal(expectedIndex);
        });
      });

      describe('if the regularExpression at the index position and given regular expression match', function() {
        it('returns false and increments the index', function() {
          var input = 'a',
              index = 0,
              expectedIndex = index + 1;

          commonParser.input = input; ///
          commonParser.index = index; ///

          var regularExpression = /a/,
              parsed = commonParser.parseRegularExpression(regularExpression);

          index = commonParser.index; ///

          expect(parsed).to.be.true;
          expect(index).to.equal(expectedIndex);
        });
      });
    });
  });

  describe('parseFirstOf', function() {
    describe('if there are no rules', function() {
      it('returns false and leaves the index unchanged', function() {
        var index = 0,
            expectedIndex = index;

        commonParser.index = index; ///

        var parsed = commonParser.parseFirstOf();

        index = commonParser.index; ///

        expect(parsed).to.be.false;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if there is one rule that fails to parse and leaves the index unchanged', function() {
      it('returns false and leaves the index unchanged', function() {
        var index = 0,
            expectedIndex = index;

        commonParser.index = index; ///

        var rule = function() {
              return false;
            },
            parsed = commonParser.parseFirstOf(rule);

        index = commonParser.index; ///

        expect(parsed).to.be.false;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if there is one rule that fails to parse but changes the index', function() {
      it('returns false and leaves the index unchanged', function() {
        var index = 0,
            expectedIndex = index;

        commonParser.index = index; ///

        var rule = function() {
              this.index += 1;

              return false;
            }.bind(commonParser),
            parsed = commonParser.parseFirstOf(rule);

        index = commonParser.index; ///

        expect(parsed).to.be.false;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if there is one rule that parses and changes the index', function() {
      it('returns true and changes the the index accordingly', function() {
        var index = 0,
            expectedIndex = index + 1;

        commonParser.index = index; ///

        var rule = function() {
              this.index += 1;

              return true;
            }.bind(commonParser),
            parsed = commonParser.parseFirstOf(rule);

        index = commonParser.index; ///

        expect(parsed).to.be.true;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if there are two rules that parse and change the index', function() {
      it('returns true and changes the the index according to the first rule', function() {
        var index = 0,
            expectedIndex = index + 1;

        commonParser.index = index; ///

        var firstRule = function() {
              this.index += 1;

              return true;
            }.bind(commonParser),
            secondRule = function() {
              this.index += 2;

              return true;
            }.bind(commonParser),
            parsed = commonParser.parseFirstOf(firstRule, secondRule);

        index = commonParser.index; ///

        expect(parsed).to.be.true;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if there are two rules, the first of which fails to parse and the second one parses', function() {
      it('returns true and changes the the index according to the second rule', function() {
        var index = 0,
            expectedIndex = index + 2;

        commonParser.index = index; ///

        var firstRule = function() {
              this.index += 1;

              return false;
            }.bind(commonParser),
            secondRule = function() {
              this.index += 2;

              return true;
            }.bind(commonParser),
            parsed = commonParser.parseFirstOf(firstRule, secondRule);

        index = commonParser.index; ///

        expect(parsed).to.be.true;
        expect(index).to.equal(expectedIndex);
      });
    });
  });

  describe('parseZeroOrMoreTimes', function() {
    describe('if the rule fails the first time', function() {
      it('returns true and leaves the index unchanged', function() {
        var index = 0,
            expectedIndex = index;

        commonParser.index = index; ///

        var rule = function() {
              return false;
            },
            parsed = commonParser.parseZeroOrMoreTimes(rule);

        index = commonParser.index; ///

        expect(parsed).to.be.true;
        expect(index).to.equal(expectedIndex);
      });
    });

    describe('if the rule succeeds the first time and fails the second time', function() {
      it('returns true and changes the index according to the rule the first time', function() {
        var index = 0,
            expectedIndex = index + 1;

        commonParser.index = index; ///

        var rule = function() {
              this.index += 1;

              return (this.index === 1);
            }.bind(commonParser),
            parsed = commonParser.parseZeroOrMoreTimes(rule);

        index = commonParser.index; ///

        expect(parsed).to.be.true;
        expect(index).to.equal(expectedIndex);
      });
    });
  });
});
