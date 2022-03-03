"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
var _array = require("../../utilities/array");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ChoiceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ChoiceOfPartsPart, NonTerminalPart);
    var _super = _createSuper(ChoiceOfPartsPart);
    function ChoiceOfPartsPart(parts) {
        _classCallCheck(this, ChoiceOfPartsPart);
        var _this;
        var type = _partTypes.ChoiceOfPartsPartType; ///
        _this = _super.call(this, type);
        _this.parts = parts;
        return _this;
    }
    _createClass(ChoiceOfPartsPart, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                this.parts.some(function(part) {
                    parsed = part.parse(nodes, state, callback);
                    if (parsed) {
                        return true;
                    }
                });
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partsString1 = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === null) {
                        partsString = partString;
                    } else {
                        partsString = "".concat(partsString, " | ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString1, " )");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(ChoiceOfPartsPart.prototype), "clone", this).call(this, ChoiceOfPartsPart, this.parts);
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes) {
                var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
                nodes = allButFirstAndLastNodes; ///
                var evenNodes = (0, _array).even(nodes);
                nodes = evenNodes; ///
                var lookAhead = false, parts = nodes.map(function(node) {
                    var part = node.generatePart(lookAhead);
                    return part;
                }), choiceOfPartsPart = new ChoiceOfPartsPart(parts);
                return choiceOfPartsPart;
            }
        }
    ]);
    return ChoiceOfPartsPart;
}(_nonTerminal.default);
exports.default = ChoiceOfPartsPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuaW1wb3J0IHsgZXZlbiwgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IENob2ljZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcbiAgICBcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICB0aGlzLnBhcnRzLnNvbWUoKHBhcnQpID0+IHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gfCAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShDaG9pY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuICAgIFxuICAgIGNvbnN0IGV2ZW5Ob2RlcyA9IGV2ZW4obm9kZXMpO1xuXG4gICAgbm9kZXMgPSBldmVuTm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJnZXRQYXJ0cyIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic29tZSIsInBhcnQiLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiZnJvbU5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJldmVuTm9kZXMiLCJldmVuIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFZSxHQUF3QixDQUF4QixZQUF3QjtBQUVkLEdBQWlCLENBQWpCLFVBQWlCO0FBQ2QsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs4RDtzQzs2RDtpRTs7Ozt3RTtnRTs7Ozs7MEI7Ozs7Ozs7Ozs7Uzs7Ozs7OztLOzs7Ozs7Ozs7Ozs7O007eUQ7Ozs7Ozs7Ozs7Ozs7Ozt1Qjs7Szs7Ozs7d0M7Ozs7OzsyQjs7Ozs7Ozs7cUY7Ozs7Ozs7Ozs7OzttRTs7aUQ7Ozs7O0lBRTNDQSxpQkFBaUIsaUJBQXZCLFFBQVE7aUQ7O2FBQUZBLGlCQUFpQixDQUN4QkMsS0FBSztnRDs7UUFDZixHQUFLLENBQUNDLElBQUksR0FBR0MsVUFBcUIsd0JBQUUsRUFBRyxBQUFILENBQUc7a0NBRWpDRCxJQUFJLENDWGQsQ0RXZ0I7Y0FFUEQsS0FBSyxHQUFHQSxLQUFLLENBQUM7Ozs7O1lBR3JCRyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQ0gsS0FBSztZQUNuQixDQUFDOzs7WUFFREksR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFR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