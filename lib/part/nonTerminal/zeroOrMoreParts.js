"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
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
                    (0, _array).push(nodes, partNodes);
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
exports.default = ZeroOrMorePartsPart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHthc3Rlcmlza31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0LmNsb25lKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHBhcnNlZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbImFzdGVyaXNrIiwic3BlY2lhbFN5bWJvbHMiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwicGFydCIsInR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsImdldFBhcnQiLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnROb2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0IiwicHVzaCIsImJhY2t0cmFjayIsImNsb25lIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFakIsSUFBQSxZQUF3QixrQ0FBeEIsd0JBQXdCLEVBQUE7QUFFL0IsSUFBQSxNQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTtBQUNKLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBTSxBQUFFQSxRQUFRLEdBQUtDLFlBQWMsZUFBQSxDQUEzQkQsUUFBUSxBQUFtQixBQUFDO0FBRXJCLElBQUEsQUFBTUUsbUJBQW1CLGlCQWdEckMsQUFoRFk7OzthQUFNQSxtQkFBbUIsQ0FDMUJDLElBQUk7OztRQUNkLElBQU1DLElBQUksR0FBR0MsVUFBdUIsd0JBQUEsQUFBQyxFQUFDLEdBQUc7a0NBRW5DRCxJQUFJLEVBQUU7UUFFWixNQUFLRCxJQUFJLEdBQUdBLElBQUksQ0FBQzs7Ozs7WUFHbkJHLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUM7YUFDbEI7OztZQUVESSxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDTCxJQUFJLENBQUNJLFFBQVEsRUFBRSxFQUNqQ0UsTUFBTSxHQUFHLEFBQUMsRUFBQSxDQUFlVCxNQUFRLENBQXJCUSxVQUFVLENBQVksQ0FBQSxNQUFBLENBQVRSLFFBQVEsQ0FBRSxBQUFDO2dCQUUxQyxPQUFPUyxNQUFNLENBQUM7YUFDZjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJQyxNQUFNLEFBQUM7Z0JBRVgsSUFBTVgsSUFBSSxHQUFHLElBQUksQ0FBQ0csT0FBTyxFQUFFLEVBQ3JCUyxTQUFTLEdBQUcsRUFBRSxFQUNkQyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ssYUFBYSxFQUFFLEFBQUM7Z0JBRXpDSCxNQUFNLEdBQUdJLFNBQVMsQ0FBQ2YsSUFBSSxFQUFFWSxTQUFTLEVBQUVILEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7Z0JBRXJELElBQUlDLE1BQU0sRUFBRTtvQkFDVkssQ0FBQUEsR0FBQUEsTUFBSSxBQUFrQixDQUFBLEtBQWxCLENBQUNSLEtBQUssRUFBRUksU0FBUyxDQUFDLENBQUM7aUJBQ3hCO2dCQUVELElBQUksQ0FBQ0QsTUFBTSxFQUFFO29CQUNYRixLQUFLLENBQUNRLFNBQVMsQ0FBQ0osVUFBVSxDQUFDLENBQUM7aUJBQzdCO2dCQUVELE9BQU9GLE1BQU0sQ0FBQzthQUNmOzs7WUFFRE8sR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLEdBQUc7Z0JBQ04sSUFBTWxCLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQ2tCLEtBQUssRUFBRSxFQUN4QkMsbUJBQW1CLEdBQUcsSUFBSXBCLG1CQUFtQixDQUFDQyxJQUFJLENBQUMsQUFBQztnQkFFMUQsT0FBT21CLG1CQUFtQixDQUFDO2FBQzVCOzs7O0NBQ0YsQ0E5Q2dEQyxZQUFlLFFBQUEsQ0E4Qy9EO0FBRUQsU0FBU0wsU0FBUyxDQUFDZixJQUFJLEVBQUVRLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDL0MsSUFBSUMsTUFBTSxBQUFDO0lBRVgsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtRQUNyQkMsTUFBTSxHQUFHRCxRQUFRLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUNDLE1BQU0sRUFBRTtZQUNYQSxNQUFNLEdBQUdYLElBQUksQ0FBQ08sS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRTt1QkFBTU0sU0FBUyxDQUFDZixJQUFJLEVBQUVRLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUM7YUFBQSxDQUFDLENBQUM7U0FDbEY7S0FDRixNQUFNO1FBQ0xDLE1BQU0sR0FBR1gsSUFBSSxDQUFDTyxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUFJQyxNQUFNLEVBQUU7WUFDVkksU0FBUyxDQUFDZixJQUFJLEVBQUVRLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztTQUN6QztRQUVEQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFPQSxNQUFNLENBQUM7Q0FDZjtrQkFwRW9CWixtQkFBbUIifQ==