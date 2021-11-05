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
            value: function parse(nodes1, context, callback) {
                var parsed1;
                var savedIndex = context.getSavedIndex(), partsNodes1 = [];
                if (callback) {
                    var _this = this;
                    var index1 = 0, partsLength = this.parts.length;
                    var parseParts = function(nodes, index) {
                        var parsed;
                        if (index === partsLength) {
                            parsed = callback();
                        } else {
                            var part = _this.parts[index++];
                            parsed = parsePart(part, nodes, index);
                        }
                        return parsed;
                    };
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
                    parsed1 = parseParts(partsNodes1, index1);
                } else {
                    this.parts.every(function(part) {
                        parsed1 = part.parse(partsNodes1, context);
                        if (parsed1) {
                            return true;
                        }
                    });
                }
                if (parsed1) {
                    (0, _array).push(nodes1, partsNodes1);
                }
                if (!parsed1) {
                    context.backtrack(savedIndex);
                }
                return parsed1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgICBjb25zdCBwYXJzZVBhcnRzID0gKG5vZGVzLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2luZGV4KytdO1xuXG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVBhcnQgPSAocGFydCwgbm9kZXMsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHNOb2RlcywgaW5kZXgpKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzTm9kZXMsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJnZXRQYXJ0cyIsInBhcnNlIiwibm9kZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnRzTm9kZXMiLCJpbmRleCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFyc2VQYXJ0cyIsInBhcnQiLCJwYXJzZVBhcnQiLCJldmVyeSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJmcm9tTm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVnQixHQUF3QixDQUF4QixZQUF3QjtBQUUvQixHQUEwQixDQUExQixNQUEwQjtBQUVQLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwQ0EsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUZBLG1CQUFtQjthQUFuQkEsbUJBQW1CLENBQzFCQyxLQUFLOzhCQURFRCxtQkFBbUI7O1FBRXBDLEdBQUssQ0FBQ0UsSUFBSSxHQUowQixVQUFpQix5QkFJZixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7aUVBRnhCRixtQkFBbUIsYUFJOUJFLElBQUk7Y0FFTEQsS0FBSyxHQUFHQSxLQUFLOzs7aUJBTkRELG1CQUFtQjs7WUFTdENHLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixN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