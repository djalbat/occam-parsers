"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var arrayUtilities = require("../../../utilities/array"),
    NonTerminalNode = require("../../../common/node/nonTerminal");

var first = arrayUtilities.first;

var TerminalPartNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(TerminalPartNode, _NonTerminalNode);

  function TerminalPartNode() {
    _classCallCheck(this, TerminalPartNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartNode).apply(this, arguments));
  }

  _createClass(TerminalPartNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          node = firstChildNode,
          ///
      part = node.generatePart(lookAhead);
      return part;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(TerminalPartNode, ruleName, childNodes);
    }
  }]);

  return TerminalPartNode;
}(NonTerminalNode);

module.exports = TerminalPartNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiVGVybWluYWxQYXJ0Tm9kZSIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJub2RlIiwicGFydCIsImdlbmVyYXRlUGFydCIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLDBCQUFELENBQTlCO0FBQUEsSUFDTUMsZUFBZSxHQUFHRCxPQUFPLENBQUMsa0NBQUQsQ0FEL0I7O0lBR1FFLEssR0FBVUgsYyxDQUFWRyxLOztJQUVGQyxnQjs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGNBQWMsR0FBR0wsS0FBSyxDQUFDRyxVQUFELENBRDVCO0FBQUEsVUFFTUcsSUFBSSxHQUFHRCxjQUZiO0FBQUEsVUFFOEI7QUFDeEJFLE1BQUFBLElBQUksR0FBR0QsSUFBSSxDQUFDRSxZQUFMLENBQWtCTixTQUFsQixDQUhiO0FBS0EsYUFBT0ssSUFBUDtBQUNEOzs7OENBRWdDRSxRLEVBQVVOLFUsRUFBWTtBQUFFLGFBQU9KLGVBQWUsQ0FBQ1cseUJBQWhCLENBQTBDVCxnQkFBMUMsRUFBNERRLFFBQTVELEVBQXNFTixVQUF0RSxDQUFQO0FBQTJGOzs7O0VBVnZISixlOztBQWEvQlksTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVGVybWluYWxQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBub2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFRlcm1pbmFsUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydE5vZGU7XG4iXX0=