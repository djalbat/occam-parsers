"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../terminal"));
var _noWhitespaceNode = _interopRequireDefault(require("../../parseTree/noWhitespaceNode"));
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
var NoWhitespaceNode = function(TerminalNode) {
    _inherits(NoWhitespaceNode, TerminalNode);
    function NoWhitespaceNode() {
        _classCallCheck(this, NoWhitespaceNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespaceNode).apply(this, arguments));
    }
    _createClass(NoWhitespaceNode, [
        {
            key: "getType",
            value: function getType() {
                var type = null; ///
                return type;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var content = ""; ///
                return content;
            }
        },
        {
            key: "isNoWhitespaceNode",
            value: function isNoWhitespaceNode() {
                var noWhitespaceNode = true;
                return noWhitespaceNode;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var noWhitespaceNodeParseTree = _noWhitespaceNode.default.fromNothing(), parseTree = noWhitespaceNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantToken = null, noWhitespaceNode = _terminal.default.fromSignificantToken(NoWhitespaceNode, significantToken);
                return noWhitespaceNode;
            }
        }
    ]);
    return NoWhitespaceNode;
}(_terminal.default);
exports.default = NoWhitespaceNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC9ub1doaXRlc3BhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uL3Rlcm1pbmFsXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL25vV2hpdGVzcGFjZU5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gXCJcIjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgPSBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2VOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKE5vV2hpdGVzcGFjZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVhLFNBQWE7SUFDQSxpQkFBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuRCxnQkFBZ0I7Y0FBaEIsZ0JBQWdCO2FBQWhCLGdCQUFnQjs4QkFBaEIsZ0JBQWdCO2dFQUFoQixnQkFBZ0I7O2lCQUFoQixnQkFBZ0I7O1lBQ25DLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ0MsSUFBSSxHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRWhCLElBQUk7Ozs7WUFHYixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVO29CQUNGLE9BQU8sTUFBUSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRWpCLE9BQU87Ozs7WUFHaEIsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0I7b0JBQ1YsZ0JBQWdCLEdBQUcsSUFBSTt1QkFFdEIsZ0JBQWdCOzs7O1lBR3pCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxNQUFNO29CQUNWLHlCQUF5QixHQXRCRyxpQkFBa0MsU0FzQlIsV0FBVyxJQUNqRSxTQUFTLEdBQUcseUJBQXlCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUUxQyxTQUFTOzs7OztZQUdYLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ1YsZ0JBQWdCLEdBQUcsSUFBSSxFQUN2QixnQkFBZ0IsR0EvQkQsU0FBYSxTQStCSSxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0I7dUJBRXRGLGdCQUFnQjs7OztXQTlCTixnQkFBZ0I7RUFIWixTQUFhO2tCQUdqQixnQkFBZ0IifQ==