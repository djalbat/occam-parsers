'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    TerminalNode = require('../../../common/node/terminal');

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var TerminalSymbolPart = function (_TerminalPart) {
  _inherits(TerminalSymbolPart, _TerminalPart);

  function TerminalSymbolPart(content, nonWhitespace) {
    _classCallCheck(this, TerminalSymbolPart);

    var _this = _possibleConstructorReturn(this, (TerminalSymbolPart.__proto__ || Object.getPrototypeOf(TerminalSymbolPart)).call(this, nonWhitespace));

    _this.content = content;
    return _this;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(configuration) {
      var terminalNode = null;

      var savedIndex = configuration.getSavedIndex(),
          nonWhitespace = this.hasNonWhitespace(),
          nextSignificantToken = configuration.getNextSignificantToken(nonWhitespace),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.content;

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        configuration.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var nonWhitespace = this.hasNonWhitespace(),
          nonWhitespaceString = nonWhitespace ? NO_WHITESPACE : '',
          string = nonWhitespaceString + '"' + this.content + '"';

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(TerminalSymbolPart.prototype.__proto__ || Object.getPrototypeOf(TerminalSymbolPart.prototype), 'clone', this).call(this, TerminalSymbolPart, this.content);
    }
  }]);

  return TerminalSymbolPart;
}(TerminalPart);

module.exports = TerminalSymbolPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVGVybWluYWxQYXJ0IiwiVGVybWluYWxOb2RlIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiY29udGVudCIsIm5vbldoaXRlc3BhY2UiLCJjb25maWd1cmF0aW9uIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJoYXNOb25XaGl0ZXNwYWNlIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwicGFyc2VkIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJiYWNrdHJhY2siLCJub25XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEscUJBQVIsQ0FBckI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLCtCQUFSLENBRHJCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLE1BQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CRCxjQURwQixDQUNFQyxhQURGOztJQUdBQyxrQjs7O0FBQ0osOEJBQVlDLE9BQVosRUFBcUJDLGFBQXJCLEVBQW9DO0FBQUE7O0FBQUEsd0lBQzVCQSxhQUQ0Qjs7QUFHbEMsVUFBS0QsT0FBTCxHQUFlQSxPQUFmO0FBSGtDO0FBSW5DOzs7OzBCQUVLRSxhLEVBQWU7QUFDbkIsVUFBSUMsZUFBZSxJQUFuQjs7QUFFQSxVQUFNQyxhQUFhRixjQUFjRyxhQUFkLEVBQW5CO0FBQUEsVUFDSUosZ0JBQWdCLEtBQUtLLGdCQUFMLEVBRHBCO0FBQUEsVUFFQ0MsdUJBQXVCTCxjQUFjTSx1QkFBZCxDQUFzQ1AsYUFBdEMsQ0FGeEI7QUFBQSxVQUdDUSxtQkFBbUJGLG9CQUhwQixDQUhtQixDQU11Qjs7QUFFMUMsVUFBSUUscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQU1ULFVBQVVTLGlCQUFpQkMsVUFBakIsRUFBaEI7QUFBQSxZQUNNQyxTQUFVWCxZQUFZLEtBQUtBLE9BRGpDOztBQUdBLFlBQUlXLE1BQUosRUFBWTtBQUNWUix5QkFBZVAsYUFBYWdCLG9CQUFiLENBQWtDSCxnQkFBbEMsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSU4saUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRCxzQkFBY1csU0FBZCxDQUF3QlQsVUFBeEI7QUFDRDs7QUFFRCxhQUFPRCxZQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1GLGdCQUFnQixLQUFLSyxnQkFBTCxFQUF0QjtBQUFBLFVBQ0lRLHNCQUFzQmIsZ0JBQ0dILGFBREgsR0FFSyxFQUgvQjtBQUFBLFVBSU1pQixTQUFZRCxtQkFBWixTQUFtQyxLQUFLZCxPQUF4QyxNQUpOOztBQU1BLGFBQU9lLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMklBQW1CaEIsa0JBQW5CLEVBQXVDLEtBQUtDLE9BQTVDO0FBQXVEOzs7O0VBekNsQ0wsWTs7QUE0Q2pDcUIsT0FBT0MsT0FBUCxHQUFpQmxCLGtCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvdGVybWluYWwnKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIG5vbldoaXRlc3BhY2UpIHtcbiAgICBzdXBlcihub25XaGl0ZXNwYWNlKTtcbiAgICBcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcblx0XHQgICAgICBub25XaGl0ZXNwYWNlID0gdGhpcy5oYXNOb25XaGl0ZXNwYWNlKCksXG5cdFx0XHRcdFx0bmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb25maWd1cmF0aW9uLmdldE5leHRTaWduaWZpY2FudFRva2VuKG5vbldoaXRlc3BhY2UpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGNvbnRlbnQgPT09IHRoaXMuY29udGVudCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG5vbldoaXRlc3BhY2UgPSB0aGlzLmhhc05vbldoaXRlc3BhY2UoKSxcblx0XHQgICAgICBub25XaGl0ZXNwYWNlU3RyaW5nID0gbm9uV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9uV2hpdGVzcGFjZVN0cmluZ31cIiR7dGhpcy5jb250ZW50fVwiYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShUZXJtaW5hbFN5bWJvbFBhcnQsIHRoaXMuY29udGVudCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFBhcnQ7XG4iXX0=