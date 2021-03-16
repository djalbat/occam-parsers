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
var SequenceOfPartsPart = function(NonTerminalPart) {
    _inherits(SequenceOfPartsPart, _nonTerminal.default);
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
                    var parseParts = (function(nodes1, index1) {
                        var parsed1;
                        if (index1 === partsLength) {
                            parsed1 = callback();
                        } else {
                            var part = this.parts[index1++];
                            parsed1 = parsePart(part, nodes1, index1);
                        }
                        return parsed1;
                    }).bind(this);
                    var parsePart = function(part, nodes1, index1) {
                        var parsed1;
                        var partsNodes1 = [];
                        parsed1 = part.parse(nodes1, context, function() {
                            return parseParts(partsNodes1, index1);
                        });
                        if (parsed1) {
                            _array.push(nodes1, partsNodes1);
                        }
                        return parsed1;
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
                    _array.push(nodes, partsNodes);
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
                var partsString = this.parts.reduce(function(partsString1, part) {
                    var partString = part.asString();
                    if (partsString1 === null) {
                        partsString1 = partString;
                    } else {
                        partsString1 = "".concat(partsString1, " ").concat(partString);
                    }
                    return partsString1;
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
                var allButFirstAndLastNodes = _array.allButFirstAndLast(nodes);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgICBjb25zdCBwYXJzZVBhcnRzID0gKG5vZGVzLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2luZGV4KytdO1xuXG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVBhcnQgPSAocGFydCwgbm9kZXMsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHNOb2RlcywgaW5kZXgpKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzTm9kZXMsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsWUFBQTtJQUVBLE1BQUE7SUFFQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLG1CQUFBLFlBQUEsZUFBQTtjQUFBLG1CQUFBLEVBTkEsWUFBQTthQU1BLG1CQUFBLENBQ0EsS0FBQTs4QkFEQSxtQkFBQTs7WUFFQSxJQUFBLEdBSkEsVUFBQSx5QkFJQSxDQUFBLEVBQUEsQ0FBQTtpRUFGQSxtQkFBQSxhQUlBLElBQUE7Y0FFQSxLQUFBLEdBQUEsS0FBQTs7O2lCQU5BLG1CQUFBOztBQVNBLGVBQUEsR0FBQSxRQUFBOzRCQUFBLFFBQUE7NEJBQ0EsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLFFBQUE7b0JBQ0EsTUFBQTtvQkFFQSxVQUFBLEdBQUEsT0FBQSxDQUFBLGFBQUEsSUFDQSxVQUFBO29CQUVBLFFBQUE7d0JBQ0EsS0FBQSxHQUFBLENBQUEsRUFDQSxXQUFBLFFBQUEsS0FBQSxDQUFBLE1BQUE7d0JBRUEsVUFBQSxhQUFBLE1BQUEsRUFBQSxNQUFBOzRCQUNBLE9BQUE7NEJBRUEsTUFBQSxLQUFBLFdBQUE7QUFDQSxtQ0FBQSxHQUFBLFFBQUE7O2dDQUVBLElBQUEsUUFBQSxLQUFBLENBQUEsTUFBQTtBQUVBLG1DQUFBLEdBQUEsU0FBQSxDQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQTs7K0JBR0EsT0FBQTs7d0JBR0EsU0FBQSxZQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQTs0QkFDQSxPQUFBOzRCQUVBLFdBQUE7QUFFQSwrQkFBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLE9BQUE7bUNBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxNQUFBOzs0QkFFQSxPQUFBO0FBaERBLGtDQUFBLE1BaURBLE1BQUEsRUFBQSxXQUFBOzsrQkFHQSxPQUFBOztBQUdBLDBCQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsRUFBQSxLQUFBOzt5QkFFQSxLQUFBLENBQUEsS0FBQSxVQUFBLElBQUE7QUFDQSw4QkFBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUE7NEJBRUEsTUFBQTttQ0FDQSxJQUFBOzs7O29CQUtBLE1BQUE7QUFsRUEsMEJBQUEsTUFtRUEsS0FBQSxFQUFBLFVBQUE7O3FCQUdBLE1BQUE7QUFDQSwyQkFBQSxDQUFBLFNBQUEsQ0FBQSxVQUFBOzt1QkFHQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTtvQkFDQSxXQUFBLFFBQUEsS0FBQSxDQUFBLE1BQUEsVUFBQSxZQUFBLEVBQUEsSUFBQTt3QkFDQSxVQUFBLEdBQUEsSUFBQSxDQUFBLFFBQUE7d0JBRUEsWUFBQSxLQUFBLElBQUE7QUFDQSxvQ0FBQSxHQUFBLFVBQUE7O0FBRUEsb0NBQUEsTUFBQSxNQUFBLENBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsVUFBQTs7MkJBR0EsWUFBQTttQkFDQSxJQUFBLEdBQ0EsTUFBQSxJQUFBLEVBQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxHQUFBLEVBQUE7dUJBRUEsTUFBQTs7OztBQUdBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUE7NENBMUZBLG1CQUFBLGNBMEZBLEtBQUEsb0JBQUEsbUJBQUEsT0FBQSxLQUFBOzs7OztBQUVBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxLQUFBO29CQUNBLHVCQUFBLEdBakdBLE1BQUEsb0JBaUdBLEtBQUE7QUFFQSxxQkFBQSxHQUFBLHVCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7b0JBRUEsU0FBQSxHQUFBLEtBQUEsRUFDQSxLQUFBLEdBQUEsS0FBQSxDQUFBLEdBQUEsVUFBQSxJQUFBO3dCQUNBLElBQUEsR0FBQSxJQUFBLENBQUEsWUFBQSxDQUFBLFNBQUE7MkJBRUEsSUFBQTtvQkFFQSxtQkFBQSxPQUFBLG1CQUFBLENBQUEsS0FBQTt1QkFFQSxtQkFBQTs7OztXQXpHQSxtQkFBQTtFQU5BLFlBQUE7a0JBTUEsbUJBQUEifQ==