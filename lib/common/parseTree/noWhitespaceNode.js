"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
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
var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
var NoWhitespaceNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(NoWhitespaceNodeParseTree, VerticalBranchParseTree);
    function NoWhitespaceNodeParseTree() {
        _classCallCheck(this, NoWhitespaceNodeParseTree);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespaceNodeParseTree).apply(this, arguments));
    }
    _createClass(NoWhitespaceNodeParseTree, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var string = NO_WHITESPACE, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(NoWhitespaceNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                var epsilonNodeParseTree = terminalNodeParseTree; ///
                return epsilonNodeParseTree;
            }
        }
    ]);
    return NoWhitespaceNodeParseTree;
}(_verticalBranch.default);
exports.default = NoWhitespaceNodeParseTree;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL25vV2hpdGVzcGFjZU5vZGUuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIk5PX1dISVRFU1BBQ0UiLCJOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFVCxHQUFrQixDQUFsQixlQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELEdBQUssQ0FBRyxhQUFhLEdBSlUsWUFBYyxnQkFJckMsYUFBYTtJQUVBLHlCQUF5QixpQkFBL0IsUUFBUTtjQUFGLHlCQUF5QjthQUF6Qix5QkFBeUI7OEJBQXpCLHlCQUF5QjtnRUFBekIseUJBQXlCOztpQkFBekIseUJBQXlCOztZQUNyQyxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFDdEIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQzVCLDRCQUE0QixHQUFHLFlBQVksRUFDM0MsdUJBQXVCLEdBVEcsZUFBa0IsU0FTTSxTQUFTLENBQUMsNEJBQTRCLEdBQ3hGLHNCQUFzQixHQUFHLHVCQUF1QixDQUFDLHlCQUF5QixJQUMxRSxxQkFBcUIsR0FYSyxlQUFrQixTQVdJLG1DQUFtQyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxzQkFBc0I7Z0JBRW5KLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyx1QkFBdUI7Z0JBRXpELEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZELE1BQU0sQ0FBQyxvQkFBb0I7WUFDN0IsQ0FBQzs7O1dBZGtCLHlCQUF5QjtFQUpWLGVBQWtCO2tCQUlqQyx5QkFBeUIifQ==