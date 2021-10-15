"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../terminal"));
var _endOfLineNode = _interopRequireDefault(require("../../parseTree/endOfLineNode"));
var _constants = require("../../../constants");
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
var EndOfLineNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EndOfLineNode, TerminalNode);
    function EndOfLineNode() {
        _classCallCheck(this, EndOfLineNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNode).apply(this, arguments));
    }
    _createClass(EndOfLineNode, [
        {
            key: "getContent",
            value: function getContent() {
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromSignificantToken",
            value: function fromSignificantToken(significantToken) {
                return _terminal.default.fromSignificantToken(EndOfLineNode, significantToken);
            }
        }
    ]);
    return EndOfLineNode;
}(_terminal.default);
exports.default = EndOfLineNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwiRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSIsIkVNUFRZX1NUUklORyIsIkVuZE9mTGluZU5vZGUiLCJnZXRDb250ZW50IiwiY29udGVudCIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwiZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQWEsQ0FBYixTQUFhO0FBQ0gsR0FBK0IsQ0FBL0IsY0FBK0I7QUFFckMsR0FBb0IsQ0FBcEIsVUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixhQUFhLGlCQUFuQixRQUFRO2NBQUYsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNoQyxHQUFVLEVBQVYsQ0FBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDLE9BQU8sR0FKWSxVQUFvQjtnQkFNN0MsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1lBRUQsR0FBVyxFQUFYLENBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDLHNCQUFzQixHQVpHLGNBQStCLFNBWVIsV0FBVyxJQUMzRCxTQUFTLEdBQUcsc0JBQXNCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU5QyxNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7O1lBRU0sR0FBb0IsRUFBcEIsQ0FBb0I7bUJBQTNCLFFBQVEsQ0FBRCxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQi9CLFNBQWEsU0FtQmdDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxnQkFBZ0I7WUFBRyxDQUFDOzs7V0FkekcsYUFBYTtFQUxULFNBQWE7a0JBS2pCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZW5kT2ZMaW5lTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVuZE9mTGluZU5vZGVQYXJzZVRyZWUgPSBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7IHJldHVybiBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRW5kT2ZMaW5lTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7IH1cbn1cbiJdfQ==