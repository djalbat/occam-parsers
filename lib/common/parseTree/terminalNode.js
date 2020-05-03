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

var VerticalBranchParseTree = require("./verticalBranch");

var TerminalNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(TerminalNodeParseTree, _VerticalBranchParseT);

  function TerminalNodeParseTree() {
    _classCallCheck(this, TerminalNodeParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalNodeParseTree).apply(this, arguments));
  }

  _createClass(TerminalNodeParseTree, null, [{
    key: "fromTerminalNodeAndTokens",
    value: function fromTerminalNodeAndTokens(terminalNode, tokens) {
      var significantToken = terminalNode.getSignificantToken(),
          content = terminalNode.getContent(),
          type = significantToken.getType(),
          tokenIndex = tokens.indexOf(significantToken),
          string = "".concat(content, "[").concat(type, "](").concat(tokenIndex, ")"),
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);
      terminalNodeParseTree.appendToTop(verticalBranchParseTree);
      return terminalNodeParseTree;
    }
  }]);

  return TerminalNodeParseTree;
}(VerticalBranchParseTree);

module.exports = TerminalNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4IiwiaW5kZXhPZiIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHQyxPQUFPLENBQUMsa0JBQUQsQ0FBdkM7O0lBRU1DLHFCOzs7Ozs7Ozs7Ozs4Q0FDNkJDLFksRUFBY0MsTSxFQUFRO0FBQ3JELFVBQU1DLGdCQUFnQixHQUFHRixZQUFZLENBQUNHLG1CQUFiLEVBQXpCO0FBQUEsVUFDTUMsT0FBTyxHQUFHSixZQUFZLENBQUNLLFVBQWIsRUFEaEI7QUFBQSxVQUVNQyxJQUFJLEdBQUdKLGdCQUFnQixDQUFDSyxPQUFqQixFQUZiO0FBQUEsVUFHTUMsVUFBVSxHQUFHUCxNQUFNLENBQUNRLE9BQVAsQ0FBZVAsZ0JBQWYsQ0FIbkI7QUFBQSxVQUlNUSxNQUFNLGFBQU1OLE9BQU4sY0FBaUJFLElBQWpCLGVBQTBCRSxVQUExQixNQUpaO0FBQUEsVUFLTUcsWUFBWSxHQUFHRCxNQUFNLENBQUNFLE1BTDVCO0FBQUEsVUFNTUMsNEJBQTRCLEdBQUdGLFlBTnJDO0FBQUEsVUFNbUQ7QUFDN0NHLE1BQUFBLHVCQUF1QixHQUFHakIsdUJBQXVCLENBQUNrQixTQUF4QixDQUFrQ0YsNEJBQWxDLENBUGhDO0FBQUEsVUFRTUcsc0JBQXNCLEdBQUdGLHVCQUF1QixDQUFDRyx5QkFBeEIsRUFSL0I7QUFBQSxVQVNNQyxxQkFBcUIsR0FBR3JCLHVCQUF1QixDQUFDc0IsbUNBQXhCLENBQTREcEIscUJBQTVELEVBQW1GVyxNQUFuRixFQUEyRk0sc0JBQTNGLENBVDlCO0FBV0FFLE1BQUFBLHFCQUFxQixDQUFDRSxXQUF0QixDQUFrQ04sdUJBQWxDO0FBRUEsYUFBT0kscUJBQVA7QUFDRDs7OztFQWhCaUNyQix1Qjs7QUFtQnBDd0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIscUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZShcIi4vdmVydGljYWxCcmFuY2hcIik7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgdG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHN0cmluZyA9IGAke2NvbnRlbnR9WyR7dHlwZX1dKCR7dG9rZW5JbmRleH0pYCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oVGVybWluYWxOb2RlUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4iXX0=