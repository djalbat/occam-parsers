"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../terminal"));
var _noWhitespaceNode = _interopRequireDefault(require("../../parseTree/noWhitespaceNode"));
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
var NoWhitespaceNode = /*#__PURE__*/ function(TerminalNode) {
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
                var content = _constants.EMPTY_STRING;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwiTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsIkVNUFRZX1NUUklORyIsIk5vV2hpdGVzcGFjZU5vZGUiLCJnZXRUeXBlIiwidHlwZSIsImdldENvbnRlbnQiLCJjb250ZW50IiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwibm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVhLEdBQWEsQ0FBYixTQUFhO0FBQ0EsR0FBa0MsQ0FBbEMsaUJBQWtDO0FBRTNDLEdBQW9CLENBQXBCLFVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsZ0JBQWdCLGlCQUF0QixRQUFRO2NBQUYsZ0JBQWdCO2FBQWhCLGdCQUFnQjs4QkFBaEIsZ0JBQWdCO2dFQUFoQixnQkFBZ0I7O2lCQUFoQixnQkFBZ0I7O1lBQ25DLEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZCLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLEdBQUssQ0FBQyxPQUFPLEdBVlksVUFBb0I7Z0JBWTdDLE1BQU0sQ0FBQyxPQUFPO1lBQ2hCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjttQkFBbEIsUUFBUSxDQUFSLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJO2dCQUU3QixNQUFNLENBQUMsZ0JBQWdCO1lBQ3pCLENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQyx5QkFBeUIsR0F4QkcsaUJBQWtDLFNBd0JSLFdBQVcsSUFDakUsU0FBUyxHQUFHLHlCQUF5QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakQsTUFBTSxDQUFDLFNBQVM7WUFDbEIsQ0FBQzs7OztZQUVNLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEVBQ3ZCLGdCQUFnQixHQWpDRCxTQUFhLFNBaUNJLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLGdCQUFnQjtnQkFFN0YsTUFBTSxDQUFDLGdCQUFnQjtZQUN6QixDQUFDOzs7V0EvQmtCLGdCQUFnQjtFQUxaLFNBQWE7a0JBS2pCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgZnJvbSBcIi4uLy4uL3BhcnNlVHJlZS9ub1doaXRlc3BhY2VOb2RlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgPSBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2VOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKE5vV2hpdGVzcGFjZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cbn1cbiJdfQ==