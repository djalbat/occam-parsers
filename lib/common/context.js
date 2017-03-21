'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

var DEFAULT_MAXIMUM_DEPTH = 99;

var Context = function () {
  function Context(tokens, productions) {
    var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_MAXIMUM_DEPTH;

    _classCallCheck(this, Context);

    this.tokens = tokens;

    this.productions = productions;

    this.maximumDepth = maximumDepth;

    this.depth = 0;

    this.index = 0;
  }

  _createClass(Context, [{
    key: 'getProductions',
    value: function getProductions() {
      return this.productions;
    }
  }, {
    key: 'getMaximumDepth',
    value: function getMaximumDepth() {
      return this.maximumDepth;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'isTooDeep',
    value: function isTooDeep() {
      var tooDeep = this.depth > this.maximumDepth;

      return tooDeep;
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
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'getNextSignificantToken',
    value: function getNextSignificantToken() {
      var nextSignificantToken = null;

      for (;;) {
        var nextToken = this.tokens[this.index++];

        if (nextToken === undefined) {
          break;
        }

        if (nextToken instanceof SignificantToken) {
          nextSignificantToken = nextToken;

          break;
        }
      }

      return nextSignificantToken;
    }
  }, {
    key: 'getNextNonWhitespaceSignificantToken',
    value: function getNextNonWhitespaceSignificantToken(noWhitespace) {
      var nextNonWhitespaceSignificantToken = null,
          nextSignificantToken = this.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        var nextSignificantTokenIsWhitespaceToken = void 0;

        if (noWhitespace) {
          nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

          if (nextSignificantTokenIsWhitespaceToken) {
            nextNonWhitespaceSignificantToken = null;
          } else {
            nextNonWhitespaceSignificantToken = nextSignificantToken;
          }
        } else {
          for (;;) {
            nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

            if (nextSignificantTokenIsWhitespaceToken) {
              nextSignificantToken = this.getNextSignificantToken();
            } else {
              nextNonWhitespaceSignificantToken = nextSignificantToken;

              break;
            }

            if (nextSignificantToken === null) {
              nextNonWhitespaceSignificantToken = null;

              break;
            }
          }
        }
      }

      return nextNonWhitespaceSignificantToken;
    }
  }, {
    key: 'savedIndex',
    value: function savedIndex() {
      var index = this.getIndex(),
          savedIndex = index; ///

      return savedIndex;
    }
  }, {
    key: 'backtrack',
    value: function backtrack(savedIndex) {
      this.index = savedIndex; ///
    }
  }]);

  return Context;
}();

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  var type = significantToken.getType(),
      whitespaceToken = type === SignificantToken.types.whitespace;

  return whitespaceToken;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vY29udGV4dC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2lnbmlmaWNhbnRUb2tlbiIsIkRFRkFVTFRfTUFYSU1VTV9ERVBUSCIsIkNvbnRleHQiLCJ0b2tlbnMiLCJwcm9kdWN0aW9ucyIsIm1heGltdW1EZXB0aCIsImRlcHRoIiwiaW5kZXgiLCJ0b29EZWVwIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJuZXh0VG9rZW4iLCJ1bmRlZmluZWQiLCJub1doaXRlc3BhY2UiLCJuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsIm5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4iLCJzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4iLCJnZXRJbmRleCIsInNhdmVkSW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwic2lnbmlmaWNhbnRUb2tlbiIsInR5cGUiLCJnZXRUeXBlIiwid2hpdGVzcGFjZVRva2VuIiwidHlwZXMiLCJ3aGl0ZXNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxtQkFBbUJGLE9BQU9FLGdCQURoQzs7QUFHQSxJQUFNQyx3QkFBd0IsRUFBOUI7O0lBRU1DLE87QUFDSixtQkFBWUMsTUFBWixFQUFvQkMsV0FBcEIsRUFBdUU7QUFBQSxRQUF0Q0MsWUFBc0MsdUVBQXZCSixxQkFBdUI7O0FBQUE7O0FBQ3JFLFNBQUtFLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjs7QUFFQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0gsV0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0MsWUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFVBQVUsS0FBS0YsS0FBTCxHQUFhLEtBQUtELFlBQWxDOztBQUVBLGFBQU9HLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0YsS0FBTDtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxLQUFMO0FBQ0Q7Ozs2QkFFUUMsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUUsdUJBQXVCLElBQTNCOztBQUVBLGVBQVM7QUFDUCxZQUFNQyxZQUFZLEtBQUtQLE1BQUwsQ0FBWSxLQUFLSSxLQUFMLEVBQVosQ0FBbEI7O0FBRUEsWUFBSUcsY0FBY0MsU0FBbEIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRCxZQUFJRCxxQkFBcUJWLGdCQUF6QixFQUEyQztBQUN6Q1MsaUNBQXVCQyxTQUF2Qjs7QUFFQTtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0Qsb0JBQVA7QUFDRDs7O3lEQUVvQ0csWSxFQUFjO0FBQ2pELFVBQUlDLG9DQUFvQyxJQUF4QztBQUFBLFVBQ0lKLHVCQUF1QixLQUFLSyx1QkFBTCxFQUQzQjs7QUFHQSxVQUFJTCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsWUFBSU0sOENBQUo7O0FBRUEsWUFBSUgsWUFBSixFQUFrQjtBQUNoQkcsa0RBQXdDQyxrQ0FBa0NQLG9CQUFsQyxDQUF4Qzs7QUFFQSxjQUFJTSxxQ0FBSixFQUEyQztBQUN6Q0YsZ0RBQW9DLElBQXBDO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLGdEQUFvQ0osb0JBQXBDO0FBQ0Q7QUFDRixTQVJELE1BUU87QUFDTCxtQkFBUztBQUNQTSxvREFBd0NDLGtDQUFrQ1Asb0JBQWxDLENBQXhDOztBQUVBLGdCQUFJTSxxQ0FBSixFQUEyQztBQUN6Q04scUNBQXVCLEtBQUtLLHVCQUFMLEVBQXZCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xELGtEQUFvQ0osb0JBQXBDOztBQUVBO0FBQ0Q7O0FBRUQsZ0JBQUlBLHlCQUF5QixJQUE3QixFQUFtQztBQUNqQ0ksa0RBQW9DLElBQXBDOztBQUVBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0EsaUNBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTU4sUUFBUSxLQUFLVSxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxhQUFhWCxLQURuQixDQURXLENBRWU7O0FBRTFCLGFBQU9XLFVBQVA7QUFDRDs7OzhCQUVTQSxVLEVBQVk7QUFDcEIsV0FBS1gsS0FBTCxHQUFhVyxVQUFiLENBRG9CLENBQ007QUFDM0I7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsT0FBakI7O0FBRUEsU0FBU2MsaUNBQVQsQ0FBMkNLLGdCQUEzQyxFQUE2RDtBQUMzRCxNQUFNQyxPQUFPRCxpQkFBaUJFLE9BQWpCLEVBQWI7QUFBQSxNQUNNQyxrQkFBbUJGLFNBQVN0QixpQkFBaUJ5QixLQUFqQixDQUF1QkMsVUFEekQ7O0FBR0EsU0FBT0YsZUFBUDtBQUNEIiwiZmlsZSI6ImNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlbiA9IGxleGVycy5TaWduaWZpY2FudFRva2VuO1xuXG5jb25zdCBERUZBVUxUX01BWElNVU1fREVQVEggPSA5OTtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgcHJvZHVjdGlvbnMsIG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCkge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuXG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG5cbiAgICB0aGlzLmRlcHRoID0gMDtcblxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbnM7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGlzVG9vRGVlcCgpIHtcbiAgICBjb25zdCB0b29EZWVwID0gdGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoO1xuICAgIFxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cbiAgaW5jcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gIH1cblxuICBkZWNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG5cbiAgICAgIGlmIChuZXh0VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRUb2tlbiBpbnN0YW5jZW9mIFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBuZXh0VG9rZW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgbGV0IG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW47XG5cbiAgICAgIGlmIChub1doaXRlc3BhY2UpIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IGluZGV4OyAvLy9cbiAgICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gIGNvbnN0IHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gKHR5cGUgPT09IFNpZ25pZmljYW50VG9rZW4udHlwZXMud2hpdGVzcGFjZSk7XG4gIFxuICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xufVxuIl19