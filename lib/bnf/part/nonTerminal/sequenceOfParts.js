"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _array = require("../../../utilities/array");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var SequenceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(SequenceOfPartsPart, NonTerminalPart);
    function SequenceOfPartsPart(parts) {
        _classCallCheck(this, SequenceOfPartsPart);
        var _this;
        var type = _partTypes.SequenceOfPartsPartType; ///
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsPart).call(this, type));
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
            value: function parse(nodes, context, callback) {
                var parsed;
                var savedIndex = context.getSavedIndex(), partsNodes = [];
                if (callback) {
                    var index = 0, partsLength = this.parts.length;
                    var parseParts = (function(nodes, index) {
                        var parsed;
                        if (index === partsLength) {
                            parsed = callback();
                        } else {
                            var part = this.parts[index++];
                            parsed = parsePart(part, nodes, index);
                        }
                        return parsed;
                    }).bind(this);
                    var parsePart = function(part, nodes, index) {
                        var parsed;
                        var partsNodes = [];
                        parsed = part.parse(nodes, context, function() {
                            return parseParts(partsNodes, index);
                        });
                        if (parsed) {
                            (0, _array).push(nodes, partsNodes);
                        }
                        return parsed;
                    };
                    parsed = parseParts(partsNodes, index);
                } else {
                    this.parts.every(function(part) {
                        parsed = part.parse(partsNodes, context);
                        if (parsed) {
                            return true;
                        }
                    });
                }
                if (parsed) {
                    (0, _array).push(nodes, partsNodes);
                }
                if (!parsed) {
                    context.backtrack(savedIndex);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwicHVzaCIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImNvbnN0cnVjdG9yIiwicGFydHMiLCJ0eXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0c05vZGVzIiwiaW5kZXgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnNlUGFydHMiLCJwYXJ0IiwicGFyc2VQYXJ0IiwiZXZlcnkiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiZnJvbU5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFL0IsR0FBMEIsQ0FBMUIsTUFBMEI7QUFFUCxHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEMsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUYsbUJBQW1CO2FBQW5CLG1CQUFtQixDQUMxQixLQUFLOzhCQURFLG1CQUFtQjs7UUFFcEMsR0FBSyxDQUFDLElBQUksR0FKMEIsVUFBaUIseUJBSWYsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2lFQUZ4QixtQkFBbUIs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