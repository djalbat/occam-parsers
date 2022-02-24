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
            value: function parse(nodes1, state, callback1) {
                var parsed1;
                var savedIndex = state.getSavedIndex(), partsNodes1 = [];
                if (callback1 !== null) {
                    var _this = this;
                    var index1 = 0;
                    var parseParts = function(nodes, index) {
                        var parsed;
                        var partsLength = _this.parts.length;
                        if (index === partsLength) {
                            parsed = callback1();
                        } else {
                            var part = _this.parts[index];
                            parsed = parsePart(part, nodes, index);
                        }
                        return parsed;
                    };
                    var parsePart = function(part, nodes, index) {
                        var parsed;
                        var partsNodes = [];
                        parsed = part.parse(nodes, state, function() {
                            index++;
                            parseParts(partsNodes, index);
                        });
                        if (parsed) {
                            (0, _array).push(nodes, partsNodes);
                        }
                        return parsed;
                    };
                    parsed1 = parseParts(partsNodes1, index1);
                } else {
                    this.parts.every(function(part) {
                        var callback = null;
                        parsed1 = part.parse(partsNodes1, state, callback);
                        if (parsed1) {
                            return true;
                        }
                    });
                }
                if (parsed1) {
                    (0, _array).push(nodes1, partsNodes1);
                }
                if (!parsed1) {
                    state.backtrack(savedIndex);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gMDtcblxuICAgICAgY29uc3QgcGFyc2VQYXJ0cyA9IChub2RlcywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2luZGV4XTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2RlcywgaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VQYXJ0ID0gKHBhcnQsIG5vZGVzLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgICBwYXJzZVBhcnRzKHBhcnRzTm9kZXMsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0c05vZGVzLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2UocGFydHNOb2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFNlcXVlbmNlT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRzIiwidHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImluZGV4IiwicGFyc2VQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydCIsInBhcnNlUGFydCIsInB1c2giLCJldmVyeSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJmcm9tTm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVnQixHQUF3QixDQUF4QixZQUF3QjtBQUUvQixHQUEwQixDQUExQixNQUEwQjtBQUVQLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcENBLG1CQUFtQixpQkFBekIsUUFBUTs7O2FBQUZBLG1CQUFtQixDQUMxQkMsS0FBSzs7O1FBQ2YsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQXVC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