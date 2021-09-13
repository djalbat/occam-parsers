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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJOb25UZXJtaW5hbE5vZGUiLCJEZWZpbml0aW9uTm9kZSIsImdlbmVyYXRlRGVmaW5pdGlvbiIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicGFydE5vZGVzIiwibG9va0FoZWFkIiwicGFydHMiLCJtYXAiLCJwYXJ0Tm9kZSIsInBhcnQiLCJnZW5lcmF0ZVBhcnQiLCJkZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVXLEdBQWUsQ0FBZixXQUFlO0FBQ1YsR0FBK0IsQ0FBL0IsWUFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QyxjQUFjLGlCQUFwQixRQUFRO2NBQUYsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztnRUFBZCxjQUFjOztpQkFBZCxjQUFjOztZQUNqQyxHQUFrQixHQUFsQixrQkFBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQy9CLFNBQVMsR0FBRyxVQUFVLEVBQ3RCLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxRQUFRLEVBQUssQ0FBQztvQkFDbkMsR0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVM7b0JBRTVDLE1BQU0sQ0FBQyxJQUFJO2dCQUNiLENBQUMsR0FDRCxVQUFVLEdBQUcsR0FBRyxDQWJILFdBQWUsU0FhQSxLQUFLO2dCQUV2QyxNQUFNLENBQUMsVUFBVTtZQUNuQixDQUFDOzs7O1lBRU0sR0FBeUIsR0FBekIseUJBQXlCO21CQUFoQyxRQUFRLENBQUQseUJBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FqQnJDLFlBQStCLFNBaUJ1Qix5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLFVBQVU7WUFBRyxDQUFDOzs7V0FmL0gsY0FBYztFQUZQLFlBQStCO2tCQUV0QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlRGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcGFydE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBwYXJ0cyA9IHBhcnROb2Rlcy5tYXAoKHBhcnROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydE5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERlZmluaXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdfQ==