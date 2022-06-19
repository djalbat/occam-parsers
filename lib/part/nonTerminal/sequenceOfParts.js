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
                var partsString = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === null) {
                        partsString = partString;
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString, " )");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcGFyc2VQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdLFxuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJnZXRQYXJ0cyIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0c05vZGVzIiwiaW5kZXgiLCJwYXJzZVBhcnRzIiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiZnJvbU5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVlLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRS9CLElBQUEsTUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDakIsSUFBQSxVQUEyQixXQUEzQiwyQkFBMkIsQ0FBQTtBQUVkLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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