'use strict';

class CommonParser {
  constructor(productions) {
    this.productions = productions;

    this.input = undefined;
    this.index = undefined;
  }
  
  parse(input) {
    this.input = input;
    this.index = 0;

    var parsed = this.expr();

    if (parsed) {
      var parsedInput = input.slice(0, this.index);

      return parsedInput;
    } else {
      return null;
    }
  }

  parseCharacter(character) {
    var parsed = false,
        inputLength = this.input.length;

    if (this.index < inputLength) {
      var inputCharacter = this.input.charAt(this.index);

      if (inputCharacter === character) {
        this.index += 1;

        parsed = true;
      }
    }

    return parsed;
  }

  parseRegularExpression(regularExpression) {
    var parsed = false,
        inputLength = this.input.length;

    if (this.index < inputLength) {
      var inputSubstring = this.input.substr(this.index),
          matches = regularExpression.exec(inputSubstring);

      if (matches && matches.index === 0) {
        var firstMatch = first(matches),
            firstMatchLength = firstMatch.length;

        this.index += firstMatchLength;

        parsed = true;
      }
    }

    return parsed;
  }

  parseFirstOf(...rules) {
    var index = this.index,
        parsed = rules.some(function(rule) {

      if (rule()) {
        return true;
      } else {
        this.index = index;
      }

    }.bind(this));

    return parsed;
  }

  parseZeroOrMoreTimes(rule) {
    for(;;) {
      var index = this.index;

      if (!rule()) {
        this.index = index;

        return true;
      }
    }
  }

  expr() {
    return this.term() && this.parseZeroOrMoreTimes(this.signedTerm.bind(this));
  }

  signedTerm() {
    return this.sign() && this.term();
  }

  sign() {
    return this.parseFirstOf(this.plus.bind(this), this.minus.bind(this));
  }

  term() {
    return this.parseFirstOf(this.naturalNumber.bind(this), this.parenthesizedExpr.bind(this));
  }

  naturalNumber() {
    return this.parseRegularExpression(/\d+/);
  }

  parenthesizedExpr() {
    return this.parseCharacter('(') && this.expr() && this.parseCharacter(')');
  };

  plus() {
    return this.parseRegularExpression(/[+]/);
  }

  minus() {
    return this.parseRegularExpression(/[-]/);
  }
}

module.exports = CommonParser;

function first(array) { return array[0]; }
