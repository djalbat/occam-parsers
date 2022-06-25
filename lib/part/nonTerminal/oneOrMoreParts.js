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
var plus = _occamLexers.specialSymbols.plus;
var OneOrMorePartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OneOrMorePartsPart, NonTerminalPart);
    var _super = _createSuper(OneOrMorePartsPart);
    function OneOrMorePartsPart(part) {
        _classCallCheck(this, OneOrMorePartsPart);
        var _this;
        var type = _partTypes.OneOrMorePartsPartType; ///
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _createClass(OneOrMorePartsPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(plus);
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
                var part = this.part.clone(), oneOrMorePartsPart = new OneOrMorePartsPart(part);
                return oneOrMorePartsPart;
            }
        }
    ]);
    return OneOrMorePartsPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = part.parse(nodes, state, function() {
            var parsed = callback();
            if (!parsed) {
                parsed = parsePart(part, nodes, state, callback);
            }
            return parsed;
        });
    } else {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
            parsePart(part, nodes, state, callback);
        }
    }
    return parsed;
}
exports.default = OneOrMorePartsPart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cGx1c31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0LmNsb25lKCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgIHJldHVybiBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgbGV0IHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwidHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJnZXRQYXJ0IiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJwYXJ0Tm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlUGFydCIsInB1c2giLCJiYWNrdHJhY2siLCJjbG9uZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFakIsSUFBQSxZQUF3QixrQ0FBeEIsd0JBQXdCLEVBQUE7QUFFL0IsSUFBQSxNQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTtBQUNMLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBTSxBQUFFQSxJQUFJLEdBQUtDLFlBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUUsa0JBQWtCLGlCQWdEcEMsQUFoRFk7OzthQUFNQSxrQkFBa0IsQ0FDekJDLElBQUk7OztRQUNkLElBQU1DLElBQUksR0FBR0MsVUFBc0IsdUJBQUEsQUFBQyxFQUFDLEdBQUc7a0NBRWxDRCxJQUFJLEVBQUU7UUFFWixNQUFLRCxJQUFJLEdBQUdBLElBQUksQ0FBQzs7Ozs7WUFHbkJHLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUM7YUFDbEI7OztZQUVESSxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDTCxJQUFJLENBQUNJLFFBQVEsRUFBRSxFQUNqQ0UsTUFBTSxHQUFHLEFBQUMsRUFBQSxDQUFlVCxNQUFJLENBQWpCUSxVQUFVLENBQVEsQ0FBQSxNQUFBLENBQUxSLElBQUksQ0FBRSxBQUFDO2dCQUV0QyxPQUFPUyxNQUFNLENBQUM7YUFDZjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJQyxNQUFNLEFBQUM7Z0JBRVgsSUFBTVgsSUFBSSxHQUFHLElBQUksQ0FBQ0csT0FBTyxFQUFFLEVBQ3JCUyxTQUFTLEdBQUcsRUFBRSxFQUNkQyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ssYUFBYSxFQUFFLEFBQUM7Z0JBRXpDSCxNQUFNLEdBQUdJLFNBQVMsQ0FBQ2YsSUFBSSxFQUFFWSxTQUFTLEVBQUVILEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7Z0JBRXJELElBQUlDLE1BQU0sRUFBRTtvQkFDVkssQ0FBQUEsR0FBQUEsTUFBSSxBQUFrQixDQUFBLEtBQWxCLENBQUNSLEtBQUssRUFBRUksU0FBUyxDQUFDLENBQUM7aUJBQ3hCO2dCQUVELElBQUksQ0FBQ0QsTUFBTSxFQUFFO29CQUNYRixLQUFLLENBQUNRLFNBQVMsQ0FBQ0osVUFBVSxDQUFDLENBQUM7aUJBQzdCO2dCQUVELE9BQU9GLE1BQU0sQ0FBQzthQUNmOzs7WUFFRE8sR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLEdBQUc7Z0JBQ04sSUFBTWxCLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQ2tCLEtBQUssRUFBRSxFQUN4QkMsa0JBQWtCLEdBQUcsSUFBSXBCLGtCQUFrQixDQUFDQyxJQUFJLENBQUMsQUFBQztnQkFFeEQsT0FBT21CLGtCQUFrQixDQUFDO2FBQzNCOzs7O0NBQ0YsQ0E5QytDQyxZQUFlLFFBQUEsQ0E4QzlEO0FBRUQsU0FBU0wsU0FBUyxDQUFDZixJQUFJLEVBQUVRLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDL0MsSUFBSUMsTUFBTSxBQUFDO0lBRVgsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtRQUNyQkMsTUFBTSxHQUFHWCxJQUFJLENBQUNPLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUUsV0FBTTtZQUN0QyxJQUFJRSxNQUFNLEdBQUdELFFBQVEsRUFBRSxBQUFDO1lBRXhCLElBQUksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNYQSxNQUFNLEdBQUdJLFNBQVMsQ0FBQ2YsSUFBSSxFQUFFUSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7WUFFRCxPQUFPQyxNQUFNLENBQUM7U0FDZixDQUFDLENBQUM7S0FDSixNQUFNO1FBQ0xBLE1BQU0sR0FBR1gsSUFBSSxDQUFDTyxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUFJQyxNQUFNLEVBQUU7WUFDVkksU0FBUyxDQUFDZixJQUFJLEVBQUVRLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUM7U0FDeEM7S0FDRjtJQUVELE9BQU9DLE1BQU0sQ0FBQztDQUNmO2tCQXRFb0JaLGtCQUFrQiJ9