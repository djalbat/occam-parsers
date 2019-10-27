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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWElNVU1fREVQVEgiLCJDb25maWd1cmF0aW9uIiwidG9rZW5zIiwicnVsZXMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwic2F2ZWRJbmRleCIsIm5vbldoaXRlc3BhY2UiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsInRva2VuIiwidG9rZW5TaWduaWZpY2FudCIsImlzU2lnbmlmaWNhbnQiLCJ0b2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwidG9vRGVlcCIsImNvbmZpZ3VyYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLEVBQTlCOztJQUVNQyxhO0FBQ0oseUJBQVlDLE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCQyxLQUEzQixFQUFrQ0MsS0FBbEMsRUFBeUNDLFlBQXpDLEVBQXVEO0FBQUE7O0FBQ3JELFNBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNGLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNFLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtKLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzsrQkFFUztBQUNWLGFBQU8sS0FBS0MsS0FBWjtBQUNBOzs7K0JBRVc7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O3NDQUVnQjtBQUNqQixhQUFPLEtBQUtDLFlBQVo7QUFDQTs7O29DQUVlO0FBQ2IsVUFBTUMsYUFBYSxLQUFLSCxLQUF4QixDQURhLENBQ2tCOztBQUUvQixhQUFPRyxVQUFQO0FBQ0Q7Ozs0Q0FFdUJDLGEsRUFBZTtBQUN2QyxVQUFJQyx1QkFBdUIsSUFBM0I7O0FBRUMsVUFBTUMsZUFBZSxLQUFLUixNQUFMLENBQVlTLE1BQWpDOztBQUVBLGFBQU8sS0FBS1AsS0FBTCxHQUFhTSxZQUFwQixFQUFrQztBQUNqQyxZQUFNRSxRQUFRLEtBQUtWLE1BQUwsQ0FBWSxLQUFLRSxLQUFMLEVBQVosQ0FBZDtBQUFBLFlBQ0VTLG1CQUFtQkQsTUFBTUUsYUFBTixFQURyQjs7QUFHQSxZQUFJRCxnQkFBSixFQUFzQjtBQUN0QkosaUNBQXVCRyxLQUF2QixDQURzQixDQUNROztBQUU5QjtBQUNBLFNBSkEsTUFJTSxJQUFJSixhQUFKLEVBQW1CO0FBQ3hCLGNBQU1PLHVCQUF1QkgsTUFBTUksaUJBQU4sRUFBN0I7O0FBRUEsY0FBSUQsb0JBQUosRUFBMEI7QUFDekI7QUFDRDtBQUNEO0FBQ0E7O0FBRUYsYUFBT04sb0JBQVA7QUFDQzs7O2dDQUVXO0FBQ1YsVUFBTVEsVUFBVyxLQUFLWixLQUFMLEdBQWEsS0FBS0MsWUFBbkM7O0FBRUEsYUFBT1csT0FBUDtBQUNEOzs7OEJBRVFWLFUsRUFBWTtBQUNyQixXQUFLSCxLQUFMLEdBQWFHLFVBQWIsQ0FEcUIsQ0FDSztBQUMxQjs7OzZCQUVTSCxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0MsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozt1Q0FFeUJILE0sRUFBUUMsSyxFQUFPO0FBQ3ZDLFVBQU1DLFFBQVEsQ0FBZDtBQUFBLFVBQ0NDLFFBQVEsQ0FEVDtBQUFBLFVBRUNDLGVBQWVOLHFCQUZoQjtBQUFBLFVBR0NrQixnQkFBZ0IsSUFBSWpCLGFBQUosQ0FBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0NDLEtBQXhDLEVBQStDQyxZQUEvQyxDQUhqQjs7QUFLQSxhQUFPWSxhQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsYUFBakIiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgREVGQVVMVF9NQVhJTVVNX0RFUFRIID0gOTk7XG5cbmNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMsIHJ1bGVzLCBpbmRleCwgZGVwdGgsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXHRcdHRoaXMucnVsZXMgPSBydWxlcztcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG4gIFxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuXHRnZXRJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cblx0Z2V0TWF4aW11bURlcHRoKCkge1xuXHRcdHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcblx0fVxuXG5cdGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKG5vbldoaXRlc3BhY2UpIHtcblx0XHRsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gIFx0Y29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gIFx0d2hpbGUgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgXHRcdGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSxcblx0XHRcdFx0XHRcdHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgXHRcdGlmICh0b2tlblNpZ25pZmljYW50KSB7XG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gdG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH0gZWxzZSBpZiAobm9uV2hpdGVzcGFjZSkge1xuICBcdFx0XHRjb25zdCB0b2tlbldoaXRlc3BhY2VUb2tlbiA9IHRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgXHRcdFx0aWYgKHRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gIFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgcnVsZXMpIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG5cdFx0XHRcdFx0ZGVwdGggPSAwLFxuXHRcdFx0XHRcdG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCxcblx0XHRcdFx0XHRjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24odG9rZW5zLCBydWxlcywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb25maWd1cmF0aW9uO1xuIl19