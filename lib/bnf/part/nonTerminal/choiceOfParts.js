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
var ChoiceOfPartsPart = function(NonTerminalPart) {
    _inherits(ChoiceOfPartsPart, _nonTerminal.default);
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
                var partsString = this.parts.reduce(function(partsString1, part) {
                    var partString = part.asString();
                    if (partsString1 === null) {
                        partsString1 = partString;
                    } else {
                        partsString1 = "".concat(partsString1, " | ").concat(partString);
                    }
                    return partsString1;
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
                var allButFirstAndLastNodes = _array.allButFirstAndLast(nodes);
                nodes = allButFirstAndLastNodes; ///
                var evenNodes = _array.even(nodes);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IENob2ljZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcbmltcG9ydCB7IGV2ZW4sIGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBDaG9pY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG4gICAgXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICB0aGlzLnBhcnRzLnNvbWUoKHBhcnQpID0+IHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSB8ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKENob2ljZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG4gICAgXG4gICAgY29uc3QgZXZlbk5vZGVzID0gZXZlbihub2Rlcyk7XG5cbiAgICBub2RlcyA9IGV2ZW5Ob2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFlBQUE7SUFFQSxVQUFBO0lBQ0EsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxpQkFBQSxZQUFBLGVBQUE7Y0FBQSxpQkFBQSxFQUxBLFlBQUE7YUFLQSxpQkFBQSxDQUNBLEtBQUE7OEJBREEsaUJBQUE7O1lBRUEsSUFBQSxHQUxBLFVBQUEsdUJBS0EsQ0FBQSxFQUFBLENBQUE7aUVBRkEsaUJBQUEsYUFJQSxJQUFBO2NBRUEsS0FBQSxHQUFBLEtBQUE7OztpQkFOQSxpQkFBQTs7QUFTQSxlQUFBLEdBQUEsUUFBQTs0QkFBQSxRQUFBOzRCQUNBLEtBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsS0FBQTs0QkFBQSxLQUFBLENBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxRQUFBO29CQUNBLE1BQUE7cUJBRUEsS0FBQSxDQUFBLElBQUEsVUFBQSxJQUFBO0FBQ0EsMEJBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQTt3QkFFQSxNQUFBOytCQUNBLElBQUE7Ozt1QkFJQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTtvQkFDQSxXQUFBLFFBQUEsS0FBQSxDQUFBLE1BQUEsVUFBQSxZQUFBLEVBQUEsSUFBQTt3QkFDQSxVQUFBLEdBQUEsSUFBQSxDQUFBLFFBQUE7d0JBRUEsWUFBQSxLQUFBLElBQUE7QUFDQSxvQ0FBQSxHQUFBLFVBQUE7O0FBRUEsb0NBQUEsTUFBQSxNQUFBLENBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxNQUFBLENBQUEsVUFBQTs7MkJBR0EsWUFBQTttQkFDQSxJQUFBLEdBQ0EsTUFBQSxJQUFBLEVBQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxHQUFBLEVBQUE7dUJBRUEsTUFBQTs7OztBQUdBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUE7NENBNUNBLGlCQUFBLGNBNENBLEtBQUEsb0JBQUEsaUJBQUEsT0FBQSxLQUFBOzs7OztBQUVBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxLQUFBO29CQUNBLHVCQUFBLEdBakRBLE1BQUEsb0JBaURBLEtBQUE7QUFFQSxxQkFBQSxHQUFBLHVCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7b0JBRUEsU0FBQSxHQXJEQSxNQUFBLE1BcURBLEtBQUE7QUFFQSxxQkFBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtvQkFFQSxTQUFBLEdBQUEsS0FBQSxFQUNBLEtBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxVQUFBLElBQUE7d0JBQ0EsSUFBQSxHQUFBLElBQUEsQ0FBQSxZQUFBLENBQUEsU0FBQTsyQkFFQSxJQUFBO29CQUVBLGlCQUFBLE9BQUEsaUJBQUEsQ0FBQSxLQUFBO3VCQUVBLGlCQUFBOzs7O1dBL0RBLGlCQUFBO0VBTEEsWUFBQTtrQkFLQSxpQkFBQSJ9