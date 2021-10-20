"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../../common/node/nonTerminal"));
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
var NonTerminalPartNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(NonTerminalPartNode, NonTerminalNode);
    function NonTerminalPartNode() {
        _classCallCheck(this, NonTerminalPartNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartNode).apply(this, arguments));
    }
    _createClass(NonTerminalPartNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes, lookAhead);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(NonTerminalPartNode, ruleName, childNodes);
            }
        }
    ]);
    return NonTerminalPartNode;
}(_nonTerminal.default);
exports.default = NonTerminalPartNode;
function partFromNodes(nodes, lookAhead) {
    var part = null;
    var nodesLength = nodes.length;
    if (nodesLength === 1) {
        var node = nodes.pop();
        part = node.generatePart(lookAhead);
    } else {
        nodes.pop();
        lookAhead = true;
        part = partFromNodes(nodes, lookAhead);
    }
    return part;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvbm9kZS9wYXJ0L25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2RlcywgbG9va0FoZWFkKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKE5vblRlcm1pbmFsUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKTtcblxuICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzLnBvcCgpO1xuXG4gICAgbG9va0FoZWFkID0gdHJ1ZTtcblxuICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0Tm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVnQixHQUFrQyxDQUFsQyxZQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpDQSxtQkFBbUIsaUJBQXpCLFFBQVE7Y0FBRkEsbUJBQW1CO2FBQW5CQSxtQkFBbUI7OEJBQW5CQSxtQkFBbUI7Z0VBQW5CQSxtQkFBbUI7O2lCQUFuQkEsbUJBQW1COztZQUN0Q0MsR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksQ0FBQ0MsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsS0FBSyxHQUFHRixVQUFVLENBQUNHLEtBQUssSUFDeEJDLElBQUksR0FBR0MsYUFBYSxDQUFDSCxLQUFLLEVBQUVILFNBQVM7Z0JBRTNDLE1BQU0sQ0FBQ0ssSUFBSTtZQUNiLENBQUM7Ozs7WUFFTUUsR0FBeUIsRUFBekJBLENBQXlCO21CQUFoQyxRQUFRLENBQURBLHlCQUF5QixDQUFDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FYckMsWUFBa0MsU0FXb0JNLHlCQUF5QixDQUFDVCxtQkFBbUIsRUFBRVUsUUFBUSxFQUFFUCxVQUFVO1lBQUcsQ0FBQzs7O1dBVHBJSCxtQkFBbUI7RUFGWixZQUFrQztrQkFFekNBLG1CQUFtQjtTQVkvQlEsYUFBYSxDQUFDSCxLQUFLLEVBQUVILFNBQVMsRUFBRSxDQUFDO0lBQ3hDLEdBQUcsQ0FBQ0ssSUFBSSxHQUFHLElBQUk7SUFFZixHQUFLLENBQUNJLFdBQVcsR0FBR04sS0FBSyxDQUFDTyxNQUFNO0lBRWhDLEVBQUUsRUFBRUQsV0FBVyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3RCLEdBQUssQ0FBQ0UsSUFBSSxHQUFHUixLQUFLLENBQUNTLEdBQUc7UUFFdEJQLElBQUksR0FBR00sSUFBSSxDQUFDWixZQUFZLENBQUNDLFNBQVM7SUFDcEMsQ0FBQyxNQUFNLENBQUM7UUFDTkcsS0FBSyxDQUFDUyxHQUFHO1FBRVRaLFNBQVMsR0FBRyxJQUFJO1FBRWhCSyxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0gsS0FBSyxFQUFFSCxTQUFTO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLENBQUNLLElBQUk7QUFDYixDQUFDIn0=