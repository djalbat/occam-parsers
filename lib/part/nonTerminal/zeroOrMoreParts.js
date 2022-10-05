"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZeroOrMorePartsPart;
    }
});
var _occamLexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interopRequireDefault(require("../../part/nonTerminal"));
var _array = require("../../utilities/array");
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
var asterisk = _occamLexers.specialSymbols.asterisk;
var ZeroOrMorePartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ZeroOrMorePartsPart, NonTerminalPart);
    var _super = _createSuper(ZeroOrMorePartsPart);
    function ZeroOrMorePartsPart(part) {
        _classCallCheck(this, ZeroOrMorePartsPart);
        var _this;
        var type = _partTypes.ZeroOrMorePartsPartType; ///
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _createClass(ZeroOrMorePartsPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(asterisk);
                return string;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
                parsed = parsePart(part, partNodes, state, callback);
                if (parsed) {
                    (0, _array.push)(nodes, partNodes);
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var part = this.part.clone(), zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
                return zeroOrMorePartsPart;
            }
        }
    ]);
    return ZeroOrMorePartsPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = callback();
        if (!parsed) {
            parsed = part.parse(nodes, state, function() {
                return parsePart(part, nodes, state, callback);
            });
        }
    } else {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
            parsePart(part, nodes, state, callback);
        }
        parsed = true;
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHthc3Rlcmlza31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0LmNsb25lKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHBhcnNlZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwicGFydCIsInR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsImdldFBhcnQiLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnROb2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0IiwicHVzaCIsImJhY2t0cmFjayIsImNsb25lIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkJBVFU7Z0VBRUg7cUJBRVA7eUJBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCxvQ0FnRGxCLEFBaERZO2NBQU1BOzhCQUFBQTthQUFBQSxvQkFDUEcsSUFBSTs4QkFER0g7O1FBRWpCLElBQU1JLE9BQU9DLGtDQUF1QixFQUFFLEdBQUc7a0NBRW5DRDtRQUVOLE1BQUtELElBQUksR0FBR0E7OztpQkFOS0g7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLGFBQWEsSUFBSSxDQUFDTCxJQUFJLENBQUNJLFFBQVEsSUFDL0JFLFNBQVMsQUFBQyxHQUFlUixPQUFiTyxZQUFzQixPQUFUUDtnQkFFL0IsT0FBT1E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJQztnQkFFSixJQUFNWCxPQUFPLElBQUksQ0FBQ0csT0FBTyxJQUNuQlMsWUFBWSxFQUFFLEVBQ2RDLGFBQWFKLE1BQU1LLGFBQWE7Z0JBRXRDSCxTQUFTSSxVQUFVZixNQUFNWSxXQUFXSCxPQUFPQztnQkFFM0MsSUFBSUMsUUFBUTtvQkFDVkssSUFBQUEsV0FBSSxFQUFDUixPQUFPSTtnQkFDZCxDQUFDO2dCQUVELElBQUksQ0FBQ0QsUUFBUTtvQkFDWEYsTUFBTVEsU0FBUyxDQUFDSjtnQkFDbEIsQ0FBQztnQkFFRCxPQUFPRjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVE7Z0JBQ04sSUFBTWxCLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNrQixLQUFLLElBQ3RCQyxzQkFBc0IsSUExQ1h0QixvQkEwQ21DRztnQkFFcEQsT0FBT21CO1lBQ1Q7OztXQTdDbUJ0QjtFQUE0QnVCLG9CQUFlO0FBZ0RoRSxTQUFTTCxVQUFVZixJQUFJLEVBQUVRLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDL0MsSUFBSUM7SUFFSixJQUFJRCxhQUFhLElBQUksRUFBRTtRQUNyQkMsU0FBU0Q7UUFFVCxJQUFJLENBQUNDLFFBQVE7WUFDWEEsU0FBU1gsS0FBS08sS0FBSyxDQUFDQyxPQUFPQyxPQUFPO3VCQUFNTSxVQUFVZixNQUFNUSxPQUFPQyxPQUFPQzs7UUFDeEUsQ0FBQztJQUNILE9BQU87UUFDTEMsU0FBU1gsS0FBS08sS0FBSyxDQUFDQyxPQUFPQyxPQUFPQztRQUVsQyxJQUFJQyxRQUFRO1lBQ1ZJLFVBQVVmLE1BQU1RLE9BQU9DLE9BQU9DO1FBQ2hDLENBQUM7UUFFREMsU0FBUyxJQUFJO0lBQ2YsQ0FBQztJQUVELE9BQU9BO0FBQ1QifQ==