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

var arrayUtilities = require("../../utilities/array"),
    NonTerminalNode = require("../../common/node/nonTerminal");

var first = arrayUtilities.first,
    third = arrayUtilities.third;

var RuleNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RuleNode, _NonTerminalNode);

  function RuleNode() {
    _classCallCheck(this, RuleNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNode).apply(this, arguments));
  }

  _createClass(RuleNode, [{
    key: "generateRule",
    value: function generateRule(Rule) {
      var name = this.getName(),
          definitions = this.generateDefinitions(),
          Node = NonTerminalNode,
          rule = new Rule(name, definitions, Node);
      return rule;
    }
  }, {
    key: "getName",
    value: function getName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          nameNode = firstChildNode,
          ///
      name = nameNode.getName();
      return name;
    }
  }, {
    key: "generateDefinitions",
    value: function generateDefinitions() {
      var childNodes = this.getChildNodes(),
          thirdChildNode = third(childNodes),
          definitionsNode = thirdChildNode,
          ///
      definitions = definitionsNode.generateDefinitions();
      return definitions;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);
    }
  }]);

  return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiZmlyc3QiLCJ0aGlyZCIsIlJ1bGVOb2RlIiwiUnVsZSIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwiTm9kZSIsInJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwibmFtZU5vZGUiLCJ0aGlyZENoaWxkTm9kZSIsImRlZmluaXRpb25zTm9kZSIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLHVCQUFELENBQTlCO0FBQUEsSUFDTUMsZUFBZSxHQUFHRCxPQUFPLENBQUMsK0JBQUQsQ0FEL0I7O0lBR1FFLEssR0FBaUJILGMsQ0FBakJHLEs7SUFBT0MsSyxHQUFVSixjLENBQVZJLEs7O0lBRVRDLFE7Ozs7Ozs7Ozs7O2lDQUNTQyxJLEVBQU07QUFDakIsVUFBTUMsSUFBSSxHQUFHLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01DLFdBQVcsR0FBRyxLQUFLQyxtQkFBTCxFQURwQjtBQUFBLFVBRU1DLElBQUksR0FBR1QsZUFGYjtBQUFBLFVBR01VLElBQUksR0FBRyxJQUFJTixJQUFKLENBQVNDLElBQVQsRUFBZUUsV0FBZixFQUE0QkUsSUFBNUIsQ0FIYjtBQUtBLGFBQU9DLElBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxjQUFjLEdBQUdaLEtBQUssQ0FBQ1UsVUFBRCxDQUQ1QjtBQUFBLFVBRU1HLFFBQVEsR0FBR0QsY0FGakI7QUFBQSxVQUVrQztBQUM1QlIsTUFBQUEsSUFBSSxHQUFHUyxRQUFRLENBQUNSLE9BQVQsRUFIYjtBQUtBLGFBQU9ELElBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNTSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01HLGNBQWMsR0FBR2IsS0FBSyxDQUFDUyxVQUFELENBRDVCO0FBQUEsVUFFTUssZUFBZSxHQUFHRCxjQUZ4QjtBQUFBLFVBRXlDO0FBQ25DUixNQUFBQSxXQUFXLEdBQUdTLGVBQWUsQ0FBQ1IsbUJBQWhCLEVBSHBCO0FBS0EsYUFBT0QsV0FBUDtBQUNEOzs7OENBRWdDVSxRLEVBQVVOLFUsRUFBWTtBQUFFLGFBQU9YLGVBQWUsQ0FBQ2tCLHlCQUFoQixDQUEwQ2YsUUFBMUMsRUFBb0RjLFFBQXBELEVBQThETixVQUE5RCxDQUFQO0FBQW1GOzs7O0VBNUJ2SFgsZTs7QUErQnZCbUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsUUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCIpO1xuXG5jb25zdCB7IGZpcnN0LCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlKFJ1bGUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSB0aGlzLmdlbmVyYXRlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lTm9kZS5nZXROYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgXG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHRoaXJkQ2hpbGROb2RlID0gdGhpcmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb2RlID0gdGhpcmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKCk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJ1bGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTm9kZTtcbiJdfQ==