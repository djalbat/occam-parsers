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
function _get(target1, property1, receiver1) {
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
    return _get(target1, property1, receiver1 || target1);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHBhcnNlUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvb2tBaGVhZFwiO1xuaW1wb3J0IHsgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIHBhcnRzTm9kZXMgPSBbXSxcbiAgICAgICAgICBpbmRleCA9IDA7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2VxdWVuY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRzIiwidHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImluZGV4IiwicGFyc2VQYXJ0cyIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsImZyb21Ob2RlcyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0IiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFZSxJQUFBLFlBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUUvQixJQUFBLE1BQXVCLFdBQXZCLHVCQUF1QixDQUFBO0FBQ2pCLElBQUEsVUFBMkIsV0FBM0IsMkJBQTJCLENBQUE7QUFFZCxJQUFBLFVBQWlCLFdBQWpCLGlCQUFpQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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