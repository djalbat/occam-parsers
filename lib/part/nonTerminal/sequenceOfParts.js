"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _array = require("../../utilities/array");
var _lookAhead = require("../../utilities/lookAhead");
var _partTypes = require("../../partTypes");
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
var SequenceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(SequenceOfPartsPart, NonTerminalPart);
    var _super = _createSuper(SequenceOfPartsPart);
    function SequenceOfPartsPart(parts) {
        _classCallCheck(this, SequenceOfPartsPart);
        var _this;
        var type = _partTypes.SequenceOfPartsPartType; ///
        _this = _super.call(this, type);
        _this.parts = parts;
        return _this;
    }
    _createClass(SequenceOfPartsPart, [
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
                var savedIndex = state.getSavedIndex(), partsNodes = [], index = 0;
                parsed = (0, _lookAhead).parseParts(this.parts, partsNodes, index, state, callback);
                if (parsed) {
                    (0, _array).push(nodes, partsNodes);
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
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
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString1, " )");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(SequenceOfPartsPart.prototype), "clone", this).call(this, SequenceOfPartsPart, this.parts);
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes) {
                var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
                nodes = allButFirstAndLastNodes; ///
                var lookAhead = false, parts = nodes.map(function(node) {
                    var part = node.generatePart(lookAhead);
                    return part;
                }), sequenceOfPartsPart = new SequenceOfPartsPart(parts);
                return sequenceOfPartsPart;
            }
        }
    ]);
    return SequenceOfPartsPart;
}(_nonTerminal.default);
exports.default = SequenceOfPartsPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcGFyc2VQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdLFxuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsImdldFBhcnRzIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnRzTm9kZXMiLCJpbmRleCIsInBhcnNlUGFydHMiLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJmcm9tTm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFNEIsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFL0IsR0FBdUIsQ0FBdkIsTUFBdUI7QUFDakIsR0FBMkIsQ0FBM0IsVUFBMkI7QUFFZCxHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7OzhEQVB6RDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7MEJBQUE7Ozs7Ozs7Ozs7U0FBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7d0NBQUE7Ozs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7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