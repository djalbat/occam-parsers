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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHthc3Rlcmlza31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0LmNsb25lKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHBhcnNlZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwicGFydCIsInR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsImdldFBhcnQiLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnROb2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0IiwicHVzaCIsImJhY2t0cmFjayIsImNsb25lIiwiemVyb09yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBV1FBLG1CQUFtQjs7OzJCQVRULGNBQWM7Z0VBRWpCLHdCQUF3QjtxQkFFL0IsdUJBQXVCO3lCQUNKLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFNLEFBQUVDLFFBQVEsR0FBS0MsWUFBYyxlQUFBLENBQTNCRCxRQUFRLEFBQW1CLEFBQUM7QUFFckIsSUFBQSxBQUFNRCxtQkFBbUIsaUJBZ0RyQyxBQWhEWTs7O2FBQU1BLG1CQUFtQixDQUMxQkcsSUFBSTs7O1FBQ2QsSUFBTUMsSUFBSSxHQUFHQyxVQUF1Qix3QkFBQSxBQUFDLEVBQUMsR0FBRztrQ0FFbkNELElBQUksRUFBRTtRQUVaLE1BQUtELElBQUksR0FBR0EsSUFBSSxDQUFDOzs7OztZQUduQkcsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQzthQUNsQjs7O1lBRURJLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNMLElBQUksQ0FBQ0ksUUFBUSxFQUFFLEVBQ2pDRSxNQUFNLEdBQUcsQUFBQyxFQUFBLENBQWVSLE1BQVEsQ0FBckJPLFVBQVUsQ0FBWSxDQUFBLE1BQUEsQ0FBVFAsUUFBUSxDQUFFLEFBQUM7Z0JBRTFDLE9BQU9RLE1BQU0sQ0FBQzthQUNmOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVCLElBQUlDLE1BQU0sQUFBQztnQkFFWCxJQUFNWCxJQUFJLEdBQUcsSUFBSSxDQUFDRyxPQUFPLEVBQUUsRUFDckJTLFNBQVMsR0FBRyxFQUFFLEVBQ2RDLFVBQVUsR0FBR0osS0FBSyxDQUFDSyxhQUFhLEVBQUUsQUFBQztnQkFFekNILE1BQU0sR0FBR0ksU0FBUyxDQUFDZixJQUFJLEVBQUVZLFNBQVMsRUFBRUgsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztnQkFFckQsSUFBSUMsTUFBTSxFQUFFO29CQUNWSyxJQUFBQSxNQUFJLEtBQUEsRUFBQ1IsS0FBSyxFQUFFSSxTQUFTLENBQUMsQ0FBQztpQkFDeEI7Z0JBRUQsSUFBSSxDQUFDRCxNQUFNLEVBQUU7b0JBQ1hGLEtBQUssQ0FBQ1EsU0FBUyxDQUFDSixVQUFVLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsT0FBT0YsTUFBTSxDQUFDO2FBQ2Y7OztZQUVETyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssR0FBRztnQkFDTixJQUFNbEIsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0IsS0FBSyxFQUFFLEVBQ3hCQyxtQkFBbUIsR0FBRyxJQUFJdEIsbUJBQW1CLENBQUNHLElBQUksQ0FBQyxBQUFDO2dCQUUxRCxPQUFPbUIsbUJBQW1CLENBQUM7YUFDNUI7Ozs7Q0FDRixDQTlDZ0RDLFlBQWUsUUFBQSxDQThDL0Q7QUFFRCxTQUFTTCxTQUFTLENBQUNmLElBQUksRUFBRVEsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUMvQyxJQUFJQyxNQUFNLEFBQUM7SUFFWCxJQUFJRCxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3JCQyxNQUFNLEdBQUdELFFBQVEsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQ0MsTUFBTSxFQUFFO1lBQ1hBLE1BQU0sR0FBR1gsSUFBSSxDQUFDTyxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFO3VCQUFNTSxTQUFTLENBQUNmLElBQUksRUFBRVEsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQzthQUFBLENBQUMsQ0FBQztTQUNsRjtLQUNGLE1BQU07UUFDTEMsTUFBTSxHQUFHWCxJQUFJLENBQUNPLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLElBQUlDLE1BQU0sRUFBRTtZQUNWSSxTQUFTLENBQUNmLElBQUksRUFBRVEsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO1FBRURDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU9BLE1BQU0sQ0FBQztDQUNmIn0=