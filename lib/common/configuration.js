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
    value: function getNextSignificantToken(noWhitespace) {
      var nextSignificantToken = null;

      var tokensLength = this.tokens.length;

      while (this.index < tokensLength) {
        var token = this.tokens[this.index++],
            tokenSignificant = token.isSignificant();

        if (tokenSignificant) {
          nextSignificantToken = token; ///

          break;
        } else if (noWhitespace) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWElNVU1fREVQVEgiLCJDb25maWd1cmF0aW9uIiwidG9rZW5zIiwicnVsZXMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwic2F2ZWRJbmRleCIsIm5vV2hpdGVzcGFjZSIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJ0b29EZWVwIiwiY29uZmlndXJhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSx3QkFBd0IsRUFBOUI7O0lBRU1DLGE7QUFDSix5QkFBWUMsTUFBWixFQUFvQkMsS0FBcEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsWUFBekMsRUFBdUQ7QUFBQTs7QUFDckQsU0FBS0osTUFBTCxHQUFjQSxNQUFkO0FBQ0YsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0UsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0osTUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OytCQUVTO0FBQ1YsYUFBTyxLQUFLQyxLQUFaO0FBQ0E7OzsrQkFFVztBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7c0NBRWdCO0FBQ2pCLGFBQU8sS0FBS0MsWUFBWjtBQUNBOzs7b0NBRWU7QUFDYixVQUFNQyxhQUFhLEtBQUtILEtBQXhCLENBRGEsQ0FDa0I7O0FBRS9CLGFBQU9HLFVBQVA7QUFDRDs7OzRDQUV1QkMsWSxFQUFjO0FBQ3RDLFVBQUlDLHVCQUF1QixJQUEzQjs7QUFFQyxVQUFNQyxlQUFlLEtBQUtSLE1BQUwsQ0FBWVMsTUFBakM7O0FBRUEsYUFBTyxLQUFLUCxLQUFMLEdBQWFNLFlBQXBCLEVBQWtDO0FBQ2pDLFlBQU1FLFFBQVEsS0FBS1YsTUFBTCxDQUFZLEtBQUtFLEtBQUwsRUFBWixDQUFkO0FBQUEsWUFDRVMsbUJBQW1CRCxNQUFNRSxhQUFOLEVBRHJCOztBQUdBLFlBQUlELGdCQUFKLEVBQXNCO0FBQ3RCSixpQ0FBdUJHLEtBQXZCLENBRHNCLENBQ1E7O0FBRTlCO0FBQ0EsU0FKQSxNQUlNLElBQUlKLFlBQUosRUFBa0I7QUFDdkIsY0FBTU8sdUJBQXVCSCxNQUFNSSxpQkFBTixFQUE3Qjs7QUFFQSxjQUFJRCxvQkFBSixFQUEwQjtBQUN6QjtBQUNEO0FBQ0Q7QUFDQTs7QUFFRixhQUFPTixvQkFBUDtBQUNDOzs7Z0NBRVc7QUFDVixVQUFNUSxVQUFXLEtBQUtaLEtBQUwsR0FBYSxLQUFLQyxZQUFuQzs7QUFFQSxhQUFPVyxPQUFQO0FBQ0Q7Ozs4QkFFUVYsVSxFQUFZO0FBQ3JCLFdBQUtILEtBQUwsR0FBYUcsVUFBYixDQURxQixDQUNLO0FBQzFCOzs7NkJBRVNILEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQyxLQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtBLEtBQUw7QUFDRDs7O3VDQUV5QkgsTSxFQUFRQyxLLEVBQU87QUFDdkMsVUFBTUMsUUFBUSxDQUFkO0FBQUEsVUFDQ0MsUUFBUSxDQURUO0FBQUEsVUFFQ0MsZUFBZU4scUJBRmhCO0FBQUEsVUFHQ2tCLGdCQUFnQixJQUFJakIsYUFBSixDQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsS0FBeEMsRUFBK0NDLFlBQS9DLENBSGpCOztBQUtBLGFBQU9ZLGFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJuQixhQUFqQiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBERUZBVUxUX01BWElNVU1fREVQVEggPSA5OTtcblxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgcnVsZXMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5ydWxlcyA9IHJ1bGVzO1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gIH1cbiAgXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuO1x0Ly8vXG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9IGVsc2UgaWYgKG5vV2hpdGVzcGFjZSkge1xuICBcdFx0XHRjb25zdCB0b2tlbldoaXRlc3BhY2VUb2tlbiA9IHRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgXHRcdFx0aWYgKHRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gIFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgcnVsZXMpIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG5cdFx0XHRcdFx0ZGVwdGggPSAwLFxuXHRcdFx0XHRcdG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCxcblx0XHRcdFx0XHRjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24odG9rZW5zLCBydWxlcywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb25maWd1cmF0aW9uO1xuIl19