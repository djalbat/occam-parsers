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

  describe('parse', function() {
    it('should parse an natural number but not the following opening parenthesis', function() {
      var input = '144(',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -1);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse a floating point number but not following multiplication', function() {
      var input = '1.618*',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -1);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse one natural number taken away from another but not the characters that follow it', function() {
      var input = '13-13/.',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -2);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse a starting zero but not the unparseable characters that follow it', function() {
      var input = '0-5+(',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -2);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse a starting expression but not the unparseable characters that follow it', function() {
      var input = '13+0*1/)',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -2);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse a starting expression but not the minus character and opening parentheses that follow it', function() {
      var input = '1+2*3-((',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -3);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse a starting expression but not the multiplications that follow it', function() {
      var input = '2*3*5***',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -3);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse a starting parenthesized expression but not the unparseable characters that follow it', function() {
      var input = '(5+8)/13-(+)',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -4);

      expect(parsedInput).to.equal(expectedParsedInput);
    });

    it('should parse a starting fully parenthesized expression but not the unparseable characters that follow it', function() {
      var input = '(5-(2*3))+(((',
          parsedInput = commonParser.parse(input),
          expectedParsedInput = input.slice(0, -4);

      expect(parsedInput).to.equal(expectedParsedInput);
    });
  });

  // xdescribe('parse', function() {
  //   it('should parse integer', function() {
  //     expect(CommonParser.parse('144').result).to.be(144);
  //   });
  //   it('should parse float', function() {
  //     expect(CommonParser.parse('1.618').result).to.be(1.618);
  //   });
  //   it('should parse resulting zero', function() {
  //     expect(CommonParser.parse('13-13').result).to.be(0);
  //   });
  //   it('should parse starting with zero', function() {
  //     expect(CommonParser.parse('0-5').result).to.be(-5);
  //   });
  //   it('should parse containing zero', function() {
  //     expect(CommonParser.parse('13+0*1').result).to.be(13);
  //   });
  //   it('should parse multiplication with higher precedence', function() {
  //     expect(CommonParser.parse('1+2*3').result).to.be(7);
  //   });
  //   it('should parse sequence of operations', function() {
  //     expect(CommonParser.parse('2*3*5').result).to.be(30);
  //   });
  //   it('should parse parenthesis', function() {
  //     expect(CommonParser.parse('(5+8)/13').result).to.be(1);
  //   });
  //   it('should parse fully parenthesized', function() {
  //     expect(CommonParser.parse('(5-(2*3))').result).to.be(-1);
  //   });
  //   xit('should parse exponentiation', function() {
  //     expect(CommonParser.parse('2*2^8').result).to.be(512);
  //   });
  //   xit('should parse negation', function() {
  //     expect(CommonParser.parse('2^-(2*-2)+-5').result).to.be(11);
  //   });
  // });

  // xdescribe('compile', function() {
  //   var input = '8*(2+3+5)';
  //   var ast = CommonParser.compile(input);
  //   it('should create valid AST', function() {
  //     expect(JSON.stringify(ast)).to.be(JSON.stringify({
  //       leftNode: {
  //         val: 8
  //       },
  //       op: '*',
  //       rightNode: {
  //         leftNode: {
  //           leftNode: {
  //             val: 2
  //           },
  //           op: '+',
  //           rightNode: {
  //             val: 3
  //           }
  //         },
  //         op: '+',
  //         rightNode: {
  //           val: 5
  //         }
  //       },
  //       match: '8*(2+3+5)'
  //     }));
  //   });
  //   it('should create AST that computes right result', function() {
  //     expect(ast.result()).to.be(80);
  //   });
  //   it('should create AST that returns match in root node', function() {
  //     expect(ast.match).to.be(input);
  //   });
  //   xit('should compile and compute result with given variable', function() {
  //     var ast = CommonParser.compile('2+x');
  //     expect(ast.result({ x: 1 })).to.be(3);
  //     expect(ast.result({ x: 2 })).to.be(4);
  //   });
  //   xit('should compile and compute with variable appearing more than once', function() {
  //     var ast = CommonParser.compile('x+x*x/2');
  //     expect(ast.result({ x: 4 })).to.be(12);
  //     expect(ast.result({ x: 8 })).to.be(40);
  //   });
  //   xit('should compile and compute with more than one variable', function() {
  //     var ast = CommonParser.compile('2584/y-x/3');
  //     expect(ast.result({ x: 9, y: 4 })).to.be(643);
  //     expect(ast.result({ x: 144, y: 34 })).to.be(28);
  //   });
  // });
});
