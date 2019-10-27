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
    value: function getNextSignificantToken() {
      var nextSignificantToken = null;

      var tokensLength = this.tokens.length;

      while (this.index < tokensLength) {
        var token = this.tokens[this.index++],
            tokenSignificant = token.isSignificant();

        if (tokenSignificant) {
          var significantToken = token; ///

          nextSignificantToken = significantToken; ///

          break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX01BWElNVU1fREVQVEgiLCJDb25maWd1cmF0aW9uIiwidG9rZW5zIiwicnVsZXMiLCJpbmRleCIsImRlcHRoIiwibWF4aW11bURlcHRoIiwic2F2ZWRJbmRleCIsIm5leHRUb2tlbiIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50IiwiaXNTaWduaWZpY2FudCIsInNpZ25pZmljYW50VG9rZW4iLCJ0b29EZWVwIiwiY29uZmlndXJhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSx3QkFBd0IsRUFBOUI7O0lBRU1DLGE7QUFDSix5QkFBWUMsTUFBWixFQUFvQkMsS0FBcEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsWUFBekMsRUFBdUQ7QUFBQTs7QUFDckQsU0FBS0osTUFBTCxHQUFjQSxNQUFkO0FBQ0YsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0UsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0osTUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OytCQUVTO0FBQ1YsYUFBTyxLQUFLQyxLQUFaO0FBQ0E7OzsrQkFFVztBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7c0NBRWdCO0FBQ2pCLGFBQU8sS0FBS0MsWUFBWjtBQUNBOzs7b0NBRWU7QUFDYixVQUFNQyxhQUFhLEtBQUtILEtBQXhCLENBRGEsQ0FDa0I7O0FBRS9CLGFBQU9HLFVBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsWUFBWSxJQUFoQjs7QUFFQSxVQUFNQyxlQUFlLEtBQUtQLE1BQUwsQ0FBWVEsTUFBakM7O0FBRUEsVUFBSSxLQUFLTixLQUFMLEdBQWFLLFlBQWpCLEVBQStCO0FBQzdCRCxvQkFBWSxLQUFLTixNQUFMLENBQVksS0FBS0UsS0FBTCxFQUFaLENBQVo7QUFDRDs7QUFFRCxhQUFPSSxTQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDMUIsVUFBSUcsdUJBQXVCLElBQTNCOztBQUVDLFVBQU1GLGVBQWUsS0FBS1AsTUFBTCxDQUFZUSxNQUFqQzs7QUFFQSxhQUFPLEtBQUtOLEtBQUwsR0FBYUssWUFBcEIsRUFBa0M7QUFDakMsWUFBTUcsUUFBUSxLQUFLVixNQUFMLENBQVksS0FBS0UsS0FBTCxFQUFaLENBQWQ7QUFBQSxZQUNFUyxtQkFBbUJELE1BQU1FLGFBQU4sRUFEckI7O0FBR0EsWUFBSUQsZ0JBQUosRUFBc0I7QUFDcEIsY0FBTUUsbUJBQW1CSCxLQUF6QixDQURvQixDQUNZOztBQUVsQ0QsaUNBQXVCSSxnQkFBdkIsQ0FIc0IsQ0FHbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFRixhQUFPSixvQkFBUDtBQUNDOzs7Z0NBRVc7QUFDVixVQUFNSyxVQUFXLEtBQUtYLEtBQUwsR0FBYSxLQUFLQyxZQUFuQzs7QUFFQSxhQUFPVSxPQUFQO0FBQ0Q7Ozs4QkFFUVQsVSxFQUFZO0FBQ3JCLFdBQUtILEtBQUwsR0FBYUcsVUFBYixDQURxQixDQUNLO0FBQzFCOzs7NkJBRVNILEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQyxLQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtBLEtBQUw7QUFDRDs7O3VDQUV5QkgsTSxFQUFRQyxLLEVBQU87QUFDdkMsVUFBTUMsUUFBUSxDQUFkO0FBQUEsVUFDQ0MsUUFBUSxDQURUO0FBQUEsVUFFQ0MsZUFBZU4scUJBRmhCO0FBQUEsVUFHQ2lCLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsS0FBeEMsRUFBK0NDLFlBQS9DLENBSGpCOztBQUtBLGFBQU9XLGFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJsQixhQUFqQiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBERUZBVUxUX01BWElNVU1fREVQVEggPSA5OTtcblxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgcnVsZXMsIGluZGV4LCBkZXB0aCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdFx0dGhpcy5ydWxlcyA9IHJ1bGVzO1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG4gIH1cbiAgXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG5cdGdldEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuXHRnZXRNYXhpbXVtRGVwdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuXHR9XG5cblx0Z2V0U2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gdGhpcy5pbmRleDsgLy8vXG4gIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0b2tlbnNMZW5ndGgpIHtcbiAgICAgIG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuXHRcdGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgXHRjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGg7XG5cbiAgXHR3aGlsZSAodGhpcy5pbmRleCA8IHRva2Vuc0xlbmd0aCkge1xuICBcdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdLFxuXHRcdFx0XHRcdFx0dG9rZW5TaWduaWZpY2FudCA9IHRva2VuLmlzU2lnbmlmaWNhbnQoKTtcblxuICBcdFx0aWYgKHRva2VuU2lnbmlmaWNhbnQpIHtcbiAgXHRcdCAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuXHRcdFx0XHRuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XHQvLy9cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cbiAgXHR9XG5cblx0XHRyZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9ICh0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuXHRiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG5cdH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgcnVsZXMpIHtcbiAgICBjb25zdCBpbmRleCA9IDAsXG5cdFx0XHRcdFx0ZGVwdGggPSAwLFxuXHRcdFx0XHRcdG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCxcblx0XHRcdFx0XHRjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24odG9rZW5zLCBydWxlcywgaW5kZXgsIGRlcHRoLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb25maWd1cmF0aW9uO1xuIl19