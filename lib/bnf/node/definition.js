"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
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
var DefinitionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionNode, NonTerminalNode);
    function DefinitionNode() {
        _classCallCheck(this, DefinitionNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionNode).apply(this, arguments));
    }
    _createClass(DefinitionNode, [
        {
            key: "generateDefinition",
            value: function generateDefinition() {
                var childNodes = this.getChildNodes(), partNodes = childNodes, lookAhead = false, parts = partNodes.map(function(partNode) {
                    var part = partNode.generatePart(lookAhead);
                    return part;
                }), definition = new _definition.default(parts);
                return definition;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionNode, ruleName, childNodes);
            }
        }
    ]);
    return DefinitionNode;
}(_nonTerminal.default);
exports.default = DefinitionNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJOb25UZXJtaW5hbE5vZGUiLCJEZWZpbml0aW9uTm9kZSIsImdlbmVyYXRlRGVmaW5pdGlvbiIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydE5vZGVzIiwibG9va0FoZWFkIiwicGFydHMiLCJtYXAiLCJwYXJ0Tm9kZSIsInBhcnQiLCJnZW5lcmF0ZVBhcnQiLCJkZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVXLEdBQWUsQ0FBZixXQUFlO0FBQ1YsR0FBK0IsQ0FBL0IsWUFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QyxjQUFjLGlCQUFwQixRQUFRO2NBQUYsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztnRUFBZCxjQUFjOztpQkFBZCxjQUFjOztZQUNqQyxHQUFrQixFQUFsQixDQUFrQjttQkFBbEIsUUFBUSxDQUFSLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFDL0IsU0FBUyxHQUFHLFVBQVUsRUFDdEIsU0FBUyxHQUFHLEtBQUssRUFDakIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLFFBQVEsRUFBSyxDQUFDO29CQUNuQyxHQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUztvQkFFNUMsTUFBTSxDQUFDLElBQUk7Z0JBQ2IsQ0FBQyxHQUNELFVBQVUsR0FBRyxHQUFHLENBYkgsV0FBZSxTQWFBLEtBQUs7Z0JBRXZDLE1BQU0sQ0FBQyxVQUFVO1lBQ25CLENBQUM7Ozs7WUFFTSxHQUF5QixFQUF6QixDQUF5QjttQkFBaEMsUUFBUSxDQUFELHlCQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBakJyQyxZQUErQixTQWlCdUIseUJBQXlCLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQUcsQ0FBQzs7O1dBZi9ILGNBQWM7RUFGUCxZQUErQjtrQkFFdEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAgcGFydHMgPSBwYXJ0Tm9kZXMubWFwKChwYXJ0Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnROb2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEZWZpbml0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG4iXX0=