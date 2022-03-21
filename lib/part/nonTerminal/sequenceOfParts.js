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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcGFyc2VQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdLFxuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsImdldFBhcnRzIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnRzTm9kZXMiLCJpbmRleCIsInBhcnNlUGFydHMiLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJmcm9tTm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTRCLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRS9CLElBQUEsTUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDakIsSUFBQSxVQUEyQixXQUEzQiwyQkFBMkIsQ0FBQTtBQUVkLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFQekQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7OzBCQUFBOzs7Ozs7Ozs7O1NBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7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