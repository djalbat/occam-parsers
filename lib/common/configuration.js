'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_MAXIMUM_DEPTH = 99;

var Configuration = function () {
  function Configuration(tokens, rules, index, depth, maximumDepth) {
    _classCallCheck(this, Configuration);

    this.tokens = tokens;
    this.rules = rules;
    this.index = index;
    this.depth = depth;
    this.maximumDepth = maximumDepth;
  }

  _createClass(Configuration, [{
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: 'getMaximumDepth',
    value: function getMaximumDepth() {
      return this.maximumDepth;
    }
  }, {
    key: 'getSavedIndex',
    value: function getSavedIndex() {
      var savedIndex = this.index; ///

      return savedIndex;
    }
  }, {
    key: 'getNextToken',
    value: function getNextToken() {
      var nextToken = null;

      var tokensLength = this.tokens.length;

      if (this.index < tokensLength) {
        nextToken = this.tokens[this.index++];
      }

      return nextToken;
    }
  }, {
    key: 'getNextSignificantToken',
    value: function getNextSignificantToken(nonWhitespace) {
      var nextSignificantToken = null;

      var tokensLength = this.tokens.length;

      while (this.index < tokensLength) {
        var token = this.tokens[this.index++],
            tokenSignificant = token.isSignificant();

        if (tokenSignificant) {
          nextSignificantToken = token; ///

          break;
        } else if (nonWhitespace) {
          var tokenWhitespaceToken = token.isWhitespaceToken();

          if (tokenWhitespaceToken) {
            break;
          }
        }
      }

      return nextSignificantToken;
    }
  }, {
    key: 'isTooDeep',
    value: function isTooDeep() {
      var tooDeep = this.depth > this.maximumDepth;

      return tooDeep;
    }
  }, {
    key: 'backtrack',
    value: function backtrack(savedIndex) {
      this.index = savedIndex; ///
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'increaseDepth',
    value: function increaseDepth() {
      this.depth++;
    }
  }, {
    key: 'decreaseDepth',
    value: function decreaseDepth() {
      this.depth--;
    }
  }], [{
    key: 'fromTokensAndRules',
    value: function fromTokensAndRules(tokens, rules) {
      var index = 0,
          depth = 0,
          maximumDepth = DEFAULT_MAXIMUM_DEPTH,
          configuration = new Configuration(tokens, rules, index, depth, maximumDepth);

      return configuration;
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWElNVU1fREVQVEgiLCJDb25maWd1cmF0aW9uIiwidG9rZW5zIiwicnVsZXMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwic2F2ZWRJbmRleCIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsIm5vbldoaXRlc3BhY2UiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJ0b2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwidG9vRGVlcCIsImNvbmZpZ3VyYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLEVBQTlCOztJQUVNQyxhO0FBQ0oseUJBQVlDLE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCQyxLQUEzQixFQUFrQ0MsS0FBbEMsRUFBeUNDLFlBQXpDLEVBQXVEO0FBQUE7O0FBQ3JELFNBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNGLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNFLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtKLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzsrQkFFUztBQUNWLGFBQU8sS0FBS0MsS0FBWjtBQUNBOzs7K0JBRVc7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O3NDQUVnQjtBQUNqQixhQUFPLEtBQUtDLFlBQVo7QUFDQTs7O29DQUVlO0FBQ2IsVUFBTUMsYUFBYSxLQUFLSCxLQUF4QixDQURhLENBQ2tCOztBQUUvQixhQUFPRyxVQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVksSUFBaEI7O0FBRUEsVUFBTUMsZUFBZSxLQUFLUCxNQUFMLENBQVlRLE1BQWpDOztBQUVBLFVBQUksS0FBS04sS0FBTCxHQUFhSyxZQUFqQixFQUErQjtBQUM3QkQsb0JBQVksS0FBS04sTUFBTCxDQUFZLEtBQUtFLEtBQUwsRUFBWixDQUFaO0FBQ0Q7O0FBRUQsYUFBT0ksU0FBUDtBQUNEOzs7NENBRXVCRyxhLEVBQWU7QUFDdkMsVUFBSUMsdUJBQXVCLElBQTNCOztBQUVDLFVBQU1ILGVBQWUsS0FBS1AsTUFBTCxDQUFZUSxNQUFqQzs7QUFFQSxhQUFPLEtBQUtOLEtBQUwsR0FBYUssWUFBcEIsRUFBa0M7QUFDakMsWUFBTUksUUFBUSxLQUFLWCxNQUFMLENBQVksS0FBS0UsS0FBTCxFQUFaLENBQWQ7QUFBQSxZQUNFVSxtQkFBbUJELE1BQU1FLGFBQU4sRUFEckI7O0FBR0EsWUFBSUQsZ0JBQUosRUFBc0I7QUFDdEJGLGlDQUF1QkMsS0FBdkIsQ0FEc0IsQ0FDUTs7QUFFOUI7QUFDQSxTQUpBLE1BSU0sSUFBSUYsYUFBSixFQUFtQjtBQUN4QixjQUFNSyx1QkFBdUJILE1BQU1JLGlCQUFOLEVBQTdCOztBQUVBLGNBQUlELG9CQUFKLEVBQTBCO0FBQ3pCO0FBQ0Q7QUFDRDtBQUNBOztBQUVGLGFBQU9KLG9CQUFQO0FBQ0M7OztnQ0FFVztBQUNWLFVBQU1NLFVBQVcsS0FBS2IsS0FBTCxHQUFhLEtBQUtDLFlBQW5DOztBQUVBLGFBQU9ZLE9BQVA7QUFDRDs7OzhCQUVRWCxVLEVBQVk7QUFDckIsV0FBS0gsS0FBTCxHQUFhRyxVQUFiLENBRHFCLENBQ0s7QUFDMUI7Ozs2QkFFU0gsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtDLEtBQUw7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0EsS0FBTDtBQUNEOzs7dUNBRXlCSCxNLEVBQVFDLEssRUFBTztBQUN2QyxVQUFNQyxRQUFRLENBQWQ7QUFBQSxVQUNDQyxRQUFRLENBRFQ7QUFBQSxVQUVDQyxlQUFlTixxQkFGaEI7QUFBQSxVQUdDbUIsZ0JBQWdCLElBQUlsQixhQUFKLENBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDQyxLQUF4QyxFQUErQ0MsWUFBL0MsQ0FIakI7O0FBS0EsYUFBT2EsYUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnBCLGFBQWpCIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERFRkFVTFRfTUFYSU1VTV9ERVBUSCA9IDk5O1xuXG5jbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgY29uc3RydWN0b3IodG9rZW5zLCBydWxlcywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2Vucztcblx0XHR0aGlzLnJ1bGVzID0gcnVsZXM7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuICBcbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cblx0Z2V0SW5kZXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXg7XG5cdH1cblxuICBnZXREZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXB0aDtcbiAgfVxuXG5cdGdldE1heGltdW1EZXB0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXhpbXVtRGVwdGg7XG5cdH1cblxuXHRnZXRTYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSB0aGlzLmluZGV4OyAvLy9cbiAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oKSB7XG4gICAgbGV0IG5leHRUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICAgICAgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4obm9uV2hpdGVzcGFjZSkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcblx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIGlmIChub25XaGl0ZXNwYWNlKSB7XG4gIFx0XHRcdGNvbnN0IHRva2VuV2hpdGVzcGFjZVRva2VuID0gdG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICBcdFx0XHRpZiAodG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgXHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzVG9vRGVlcCgpIHtcbiAgICBjb25zdCB0b29EZWVwID0gKHRoaXMuZGVwdGggPiB0aGlzLm1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gdG9vRGVlcDtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgaW5jcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gIH1cblxuICBkZWNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5zQW5kUnVsZXModG9rZW5zLCBydWxlcykge1xuICAgIGNvbnN0IGluZGV4ID0gMCxcblx0XHRcdFx0XHRkZXB0aCA9IDAsXG5cdFx0XHRcdFx0bWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRILFxuXHRcdFx0XHRcdGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih0b2tlbnMsIHJ1bGVzLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCk7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZ3VyYXRpb247XG4iXX0=