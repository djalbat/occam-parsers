"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var TerminalNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(TerminalNodeParseTree, VerticalBranchParseTree);
    function TerminalNodeParseTree() {
        _classCallCheck(this, TerminalNodeParseTree);
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalNodeParseTree).apply(this, arguments));
    }
    _createClass(TerminalNodeParseTree, null, [
        {
            key: "fromTerminalNodeAndTokens",
            value: function fromTerminalNodeAndTokens(terminalNode, tokens) {
                var significantToken = terminalNode.getSignificantToken(), content = terminalNode.getContent(), type = significantToken.getType(), tokenIndex = tokens.indexOf(significantToken), string = "".concat(content, "[").concat(type, "](").concat(tokenIndex, ")"), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                return terminalNodeParseTree;
            }
        }
    ]);
    return TerminalNodeParseTree;
}(_verticalBranch.default);
exports.default = TerminalNodeParseTree;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4IiwiaW5kZXhPZiIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFd0IsR0FBa0IsQ0FBbEIsZUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQyxxQkFBcUIsaUJBQTNCLFFBQVE7Y0FBRixxQkFBcUI7YUFBckIscUJBQXFCOzhCQUFyQixxQkFBcUI7Z0VBQXJCLHFCQUFxQjs7aUJBQXJCLHFCQUFxQjs7WUFDakMsR0FBeUIsR0FBekIseUJBQXlCO21CQUFoQyxRQUFRLENBQUQseUJBQXlCLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN0RCxHQUFLLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixJQUNuRCxPQUFPLEdBQUcsWUFBWSxDQUFDLFVBQVUsSUFDakMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sSUFDL0IsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQzVDLE1BQU0sTUFBaUIsTUFBSSxDQUFmLE9BQU8sR0FBQyxDQUFDLEdBQVcsTUFBVSxDQUFuQixJQUFJLEdBQUMsRUFBRSxHQUFhLE1BQUMsQ0FBWixVQUFVLEdBQUMsQ0FBQyxJQUM1QyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFDNUIsNEJBQTRCLEdBQUcsWUFBWSxFQUMzQyx1QkFBdUIsR0FYRyxlQUFrQixTQVdNLFNBQVMsQ0FBQyw0QkFBNEIsR0FDeEYsc0JBQXNCLEdBQUcsdUJBQXVCLENBQUMseUJBQXlCLElBQzFFLHFCQUFxQixHQWJLLGVBQWtCLFNBYUksbUNBQW1DLENBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLHNCQUFzQjtnQkFFL0kscUJBQXFCLENBQUMsV0FBVyxDQUFDLHVCQUF1QjtnQkFFekQsTUFBTSxDQUFDLHFCQUFxQjtZQUM5QixDQUFDOzs7V0FoQmtCLHFCQUFxQjtFQUZOLGVBQWtCO2tCQUVqQyxxQkFBcUIifQ==