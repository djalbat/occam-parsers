'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
  }

  _createClass(TerminalNode, [{
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      var line = this.significantToken.getLine();

      return line;
    }
  }, {
    key: 'getFirstLine',
    value: function getFirstLine() {
      var line = this.getLine(),
          firstLine = line; ///

      return firstLine;
    }
  }, {
    key: 'getLastLine',
    value: function getLastLine() {
      var line = this.getLine(),
          lastLine = line; ///

      return lastLine;
    }
  }, {
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      var firstSignificantToken = this.significantToken; ///

      return firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      var lastSignificantToken = this.significantToken; ///

      return lastSignificantToken;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TerminalNode;

      var terminalNode = new Class(significantToken);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImxpbmUiLCJnZXRMaW5lIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJDbGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSx3QkFBd0JDLFFBQVEsa0NBQVIsQ0FBNUI7O0lBRU1DLFk7QUFDSix3QkFBWUMsZ0JBQVosRUFBOEI7QUFBQTs7QUFDNUIsU0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtBLGdCQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlDLE9BQU8sS0FBS0QsZ0JBQUwsQ0FBc0JFLE9BQXRCLEVBQVg7O0FBRUEsYUFBT0QsSUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQSxPQUFPLEtBQUtDLE9BQUwsRUFBWDtBQUFBLFVBQ0lDLFlBQVlGLElBRGhCLENBRGEsQ0FFUzs7QUFFdEIsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFJRixPQUFPLEtBQUtDLE9BQUwsRUFBWDtBQUFBLFVBQ0lFLFdBQVdILElBRGYsQ0FEWSxDQUVVOztBQUV0QixhQUFPRyxRQUFQO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsVUFBSUMsd0JBQXdCLEtBQUtMLGdCQUFqQyxDQUR5QixDQUMyQjs7QUFFcEQsYUFBT0sscUJBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFJQyx1QkFBdUIsS0FBS04sZ0JBQWhDLENBRHdCLENBQzJCOztBQUVuRCxhQUFPTSxvQkFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxlQUFlLElBQW5CO0FBQUEsVUFBMEI7QUFDdEJDLDhCQUF3Qlgsc0JBQXNCWSxnQkFBdEIsQ0FBdUNGLFlBQXZDLENBRDVCO0FBQUEsVUFFSUcsWUFBWUYscUJBRmhCLENBRGEsQ0FHMkI7O0FBRXhDLGFBQU9FLFNBQVA7QUFDRDs7O3lDQUUyQlYsZ0IsRUFBd0M7QUFBQSxVQUF0QlcsS0FBc0IsdUVBQWRaLFlBQWM7O0FBQ2xFLFVBQUlRLGVBQWUsSUFBSUksS0FBSixDQUFVWCxnQkFBVixDQUFuQjs7QUFFQSxhQUFPTyxZQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGluZSgpIHtcbiAgICB2YXIgbGluZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCk7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxuXG4gIGdldEZpcnN0TGluZSgpIHtcbiAgICB2YXIgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBmaXJzdExpbmUgPSBsaW5lOyAvLy9cblxuICAgIHJldHVybiBmaXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICB2YXIgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBsYXN0TGluZSA9IGxpbmU7ICAvLy9cblxuICAgIHJldHVybiBsYXN0TGluZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICB2YXIgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgdmFyIGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4sIENsYXNzID0gVGVybWluYWxOb2RlKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=