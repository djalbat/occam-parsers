'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var partTypes = require('../../partTypes'),
    NonTerminalPart = require('../../part/nonTerminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    questionMark = specialSymbols.questionMark,
    OptionalPartPartType = partTypes.OptionalPartPartType;

var OptionalPartPart = function (_NonTerminalPart) {
  _inherits(OptionalPartPart, _NonTerminalPart);

  function OptionalPartPart(part) {
    _classCallCheck(this, OptionalPartPart);

    var type = OptionalPartPartType; ///

    var _this = _possibleConstructorReturn(this, (OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart)).call(this, type));

    _this.part = part;
    return _this;
  }

  _createClass(OptionalPartPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
        nodes = partNodeOrNodes;
      }

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var operatorString = questionMark,
          ///
      partString = this.part.asString(),
          string = '' + partString + operatorString;

      return string;
    }
  }]);

  return OptionalPartPart;
}(NonTerminalPart);

module.exports = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInBhcnRUeXBlcyIsIk5vblRlcm1pbmFsUGFydCIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJxdWVzdGlvbk1hcmsiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsIm9wZXJhdG9yU3RyaW5nIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLHdCQUFSLENBRHhCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLFlBRkYsR0FFbUJELGNBRm5CLENBRUVDLFlBRkY7QUFBQSxJQUdFQyxvQkFIRixHQUcyQkwsU0FIM0IsQ0FHRUssb0JBSEY7O0lBS0FDLGdCOzs7QUFDSiw0QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxPQUFPSCxvQkFBYixDQURnQixDQUNtQjs7QUFEbkIsb0lBR1ZHLElBSFU7O0FBS2hCLFVBQUtELElBQUwsR0FBWUEsSUFBWjtBQUxnQjtBQU1qQjs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZSxLQUFmLENBRGlDLENBQ1g7O0FBRXRCLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFNSixPQUFPLEtBQUtLLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGtCQUFrQk4sS0FBS08sS0FBTCxDQUFXTCxhQUFYLEVBQTBCQyxZQUExQixDQUR4QjtBQUFBLFVBRU1LLFNBQVVGLG9CQUFvQixJQUZwQzs7QUFJQSxVQUFJRSxNQUFKLEVBQVk7QUFDVkosZ0JBQVFFLGVBQVI7QUFDRDs7QUFFRCxhQUFPRixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1LLGlCQUFpQlosWUFBdkI7QUFBQSxVQUFzQztBQUNoQ2EsbUJBQWEsS0FBS1YsSUFBTCxDQUFVVyxRQUFWLEVBRG5CO0FBQUEsVUFFTUMsY0FBWUYsVUFBWixHQUF5QkQsY0FGL0I7O0FBSUEsYUFBT0csTUFBUDtBQUNEOzs7O0VBbkM0QmxCLGU7O0FBc0MvQm1CLE9BQU9DLE9BQVAsR0FBaUJmLGdCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IE9wdGlvbmFsUGFydFBhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9wdGlvbmFsUGFydFBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cblxuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHF1ZXN0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQYXJ0O1xuIl19