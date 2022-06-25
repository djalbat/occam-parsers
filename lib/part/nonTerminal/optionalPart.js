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
var questionMark = _occamLexers.specialSymbols.questionMark;
var OptionalPartPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OptionalPartPart, NonTerminalPart);
    var _super = _createSuper(OptionalPartPart);
    function OptionalPartPart(part) {
        _classCallCheck(this, OptionalPartPart);
        var _this;
        var type = _partTypes.OptionalPartPartType; ///
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _createClass(OptionalPartPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
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
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(questionMark);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var part = this.part.clone(), optionalPartPart = new OptionalPartPart(part);
                return optionalPartPart;
            }
        }
    ]);
    return OptionalPartPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = callback();
        if (!parsed) {
            parsed = part.parse(nodes, state, callback);
        }
    } else {
        part.parse(nodes, state, callback);
        parsed = true;
    }
    return parsed;
}
exports.default = OptionalPartPart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE9wdGlvbmFsUGFydFBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9wdGlvbmFsUGFydFBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke3F1ZXN0aW9uTWFya31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnQuY2xvbmUoKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocGFydCk7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQYXJ0UGFydDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIHBhcnNlZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInF1ZXN0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiT3B0aW9uYWxQYXJ0UGFydCIsInBhcnQiLCJ0eXBlIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJnZXRQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJwYXJ0Tm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlUGFydCIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIm9wdGlvbmFsUGFydFBhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRWpCLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRS9CLElBQUEsTUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDUCxJQUFBLFVBQWlCLFdBQWpCLGlCQUFpQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELElBQU0sQUFBRUEsWUFBWSxHQUFLQyxZQUFjLGVBQUEsQ0FBL0JELFlBQVksQUFBbUIsQUFBQztBQUV6QixJQUFBLEFBQU1FLGdCQUFnQixpQkFnRGxDLEFBaERZOzs7YUFBTUEsZ0JBQWdCLENBQ3ZCQyxJQUFJOzs7UUFDZCxJQUFNQyxJQUFJLEdBQUdDLFVBQW9CLHFCQUFBLEFBQUMsRUFBQyxHQUFHO2tDQUVoQ0QsSUFBSSxFQUFFO1FBRVosTUFBS0QsSUFBSSxHQUFHQSxJQUFJLENBQUM7Ozs7O1lBR25CRyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDO2FBQ2xCOzs7WUFFREksR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVCLElBQUlDLE1BQU0sQUFBQztnQkFFWCxJQUFNUixJQUFJLEdBQUcsSUFBSSxDQUFDRyxPQUFPLEVBQUUsRUFDckJNLFNBQVMsR0FBRyxFQUFFLEVBQ2RDLFVBQVUsR0FBR0osS0FBSyxDQUFDSyxhQUFhLEVBQUUsQUFBQztnQkFFekNILE1BQU0sR0FBR0ksU0FBUyxDQUFDWixJQUFJLEVBQUVTLFNBQVMsRUFBRUgsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztnQkFFckQsSUFBSUMsTUFBTSxFQUFFO29CQUNWSyxDQUFBQSxHQUFBQSxNQUFJLEFBQWtCLENBQUEsS0FBbEIsQ0FBQ1IsS0FBSyxFQUFFSSxTQUFTLENBQUMsQ0FBQztpQkFDeEI7Z0JBRUQsSUFBSSxDQUFDRCxNQUFNLEVBQUU7b0JBQ1hGLEtBQUssQ0FBQ1EsU0FBUyxDQUFDSixVQUFVLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsT0FBT0YsTUFBTSxDQUFDO2FBQ2Y7OztZQUVETyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDaEIsSUFBSSxDQUFDZSxRQUFRLEVBQUUsRUFDakNFLE1BQU0sR0FBRyxBQUFDLEVBQUEsQ0FBZXBCLE1BQVksQ0FBekJtQixVQUFVLENBQWdCLENBQUEsTUFBQSxDQUFibkIsWUFBWSxDQUFFLEFBQUM7Z0JBRTlDLE9BQU9vQixNQUFNLENBQUM7YUFDZjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxHQUFHO2dCQUNOLElBQU1sQixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNrQixLQUFLLEVBQUUsRUFDeEJDLGdCQUFnQixHQUFHLElBQUlwQixnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLEFBQUM7Z0JBRXBELE9BQU9tQixnQkFBZ0IsQ0FBQzthQUN6Qjs7OztDQUNGLENBOUM2Q0MsWUFBZSxRQUFBLENBOEM1RDtBQUVELFNBQVNSLFNBQVMsQ0FBQ1osSUFBSSxFQUFFSyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQy9DLElBQUlDLE1BQU0sQUFBQztJQUVYLElBQUlELFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDckJDLE1BQU0sR0FBR0QsUUFBUSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDQyxNQUFNLEVBQUU7WUFDWEEsTUFBTSxHQUFHUixJQUFJLENBQUNJLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO0tBQ0YsTUFBTTtRQUNMUCxJQUFJLENBQUNJLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1FBRW5DQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFPQSxNQUFNLENBQUM7Q0FDZjtrQkFoRW9CVCxnQkFBZ0IifQ==