"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
var _array = require("../../../utilities/array");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ChoiceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ChoiceOfPartsPart, NonTerminalPart);
    function ChoiceOfPartsPart(parts) {
        _classCallCheck(this, ChoiceOfPartsPart);
        var _this;
        var type = _partTypes.ChoiceOfPartsPartType; ///
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsPart).call(this, type));
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
            value: function parse(nodes, context, callback) {
                var parsed;
                this.parts.some(function(part) {
                    parsed = part.parse(nodes, context, callback);
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
                var partsString = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === null) {
                        partsString = partString;
                    } else {
                        partsString = "".concat(partsString, " | ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString, " )");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsImV2ZW4iLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJDaG9pY2VPZlBhcnRzUGFydCIsImNvbnN0cnVjdG9yIiwicGFydHMiLCJ0eXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwic29tZSIsInBhcnQiLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiZnJvbU5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJldmVuTm9kZXMiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWdCLEdBQXdCLENBQXhCLFlBQXdCO0FBRWQsR0FBaUIsQ0FBakIsVUFBaUI7QUFDZCxHQUEwQixDQUExQixNQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsaUJBQWlCLGlCQUF2QixRQUFRO2NBQUYsaUJBQWlCO2FBQWpCLGlCQUFpQixDQUN4QixLQUFLOzhCQURFLGlCQUFpQjs7UUFFbEMsR0FBSyxDQUFDLElBQUksR0FMd0IsVUFBaUIsdUJBS2YsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2lFQUZ0QixpQkFBaUIsYUFJNUIsSUFBSTtjQUVMLEtBQUssR0FBRyxLQUFLOzs7aUJBTkQsaUJBQWlCOztZQVNwQyxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsTUFB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