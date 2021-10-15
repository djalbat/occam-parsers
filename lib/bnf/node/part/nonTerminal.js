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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvbm9kZS9wYXJ0L25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsUGFydE5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBa0MsQ0FBbEMsWUFBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QyxtQkFBbUIsaUJBQXpCLFFBQVE7Y0FBRixtQkFBbUI7YUFBbkIsbUJBQW1COzhCQUFuQixtQkFBbUI7Z0VBQW5CLG1CQUFtQjs7aUJBQW5CLG1CQUFtQjs7WUFDdEMsR0FBWSxFQUFaLENBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUMvQixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFDeEIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUztnQkFFM0MsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7O1lBRU0sR0FBeUIsRUFBekIsQ0FBeUI7bUJBQWhDLFFBQVEsQ0FBRCx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQVhyQyxZQUFrQyxTQVdvQix5QkFBeUIsQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsVUFBVTtZQUFHLENBQUM7OztXQVRwSSxtQkFBbUI7RUFGWixZQUFrQztrQkFFekMsbUJBQW1CO1NBWS9CLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDeEMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJO0lBRWYsR0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTTtJQUVoQyxFQUFFLEVBQUUsV0FBVyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3RCLEdBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUc7UUFFdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUztJQUNwQyxDQUFDLE1BQU0sQ0FBQztRQUNOLEtBQUssQ0FBQyxHQUFHO1FBRVQsU0FBUyxHQUFHLElBQUk7UUFFaEIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUk7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLFxuICAgICAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoTm9uVGVybWluYWxQYXJ0Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCkge1xuICBsZXQgcGFydCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpO1xuXG4gICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZXMucG9wKCk7XG5cbiAgICBsb29rQWhlYWQgPSB0cnVlO1xuXG4gICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCk7XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cbiJdfQ==