"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OptionalPartPart;
    }
});
var _necessary = require("necessary");
var _occamlexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var push = _necessary.arrayUtilities.push, questionMark = _occamlexers.specialSymbols.questionMark;
var OptionalPartPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OptionalPartPart, NonTerminalPart);
    var _super = _create_super(OptionalPartPart);
    function OptionalPartPart(type, part) {
        _class_call_check(this, OptionalPartPart);
        var _this;
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _create_class(OptionalPartPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, precedence, parentRuleName) {
                var parsed;
                var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
                parsed = parsePart(part, partNodes, state, callback, precedence, parentRuleName);
                if (parsed) {
                    push(nodes, partNodes);
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
        }
    ], [
        {
            key: "fromPart",
            value: function fromPart(part) {
                var type = _partTypes.OptionalPartPartType, optionalPartPart = new OptionalPartPart(type, part);
                return optionalPartPart;
            }
        }
    ]);
    return OptionalPartPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback, precedence, parentRuleName) {
    var parsed;
    if (callback !== null) {
        parsed = callback(precedence, parentRuleName);
        if (!parsed) {
            parsed = part.parse(nodes, state, callback, precedence, parentRuleName);
        }
    } else {
        part.parse(nodes, state, callback, precedence, parentRuleName);
        parsed = true;
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPcHRpb25hbFBhcnRQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnQpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBwYXJlbnRSdWxlTmFtZSkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydE5vZGVzID0gW10sXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke3F1ZXN0aW9uTWFya31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydCh0eXBlLCBwYXJ0KTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBwYXJlbnRSdWxlTmFtZSkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgIHBhcnNlZCA9IGNhbGxiYWNrKHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBwYXJlbnRSdWxlTmFtZSk7XG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJPcHRpb25hbFBhcnRQYXJ0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicXVlc3Rpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJ0eXBlIiwicGFydCIsImdldFBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInByZWNlZGVuY2UiLCJwYXJlbnRSdWxlTmFtZSIsInBhcnNlZCIsInBhcnROb2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0IiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIm9wdGlvbmFsUGFydFBhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOzJCQUNBO2tFQUVIO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsT0FBU0MsMEJBQVRELE1BQ0YsQUFBRUUsZUFBaUJDLDRCQUFqQkQ7QUFFTyxJQUFBLEFBQU1ILGlDQThDbEIsQUE5Q1k7Y0FBTUE7K0JBQUFBO2FBQUFBLGlCQUNQSyxJQUFJLEVBQUVDLElBQUk7Z0NBREhOOztrQ0FFWEs7UUFFTixNQUFLQyxPQUFPQTs7O2tCQUpLTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGNBQWM7Z0JBQ3RELElBQUlDO2dCQUVKLElBQU1SLE9BQU8sSUFBSSxDQUFDQyxXQUNaUSxZQUFZLEVBQUUsRUFDZEMsYUFBYU4sTUFBTU87Z0JBRXpCSCxTQUFTSSxVQUFVWixNQUFNUyxXQUFXTCxPQUFPQyxVQUFVQyxZQUFZQztnQkFFakUsSUFBSUMsUUFBUTtvQkFDVmIsS0FBS1EsT0FBT007Z0JBQ2Q7Z0JBRUEsSUFBSSxDQUFDRCxRQUFRO29CQUNYSixNQUFNUyxVQUFVSDtnQkFDbEI7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ2YsS0FBS2MsWUFDdkJFLFNBQVMsQUFBQyxHQUFlbkIsT0FBYmtCLFlBQTBCLE9BQWJsQjtnQkFFL0IsT0FBT21CO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2pCLElBQUk7Z0JBQ2xCLElBQU1ELE9BQU9tQixpQ0FDUEMsbUJBQW1CLElBeENSekIsaUJBd0M2QkssTUFBTUM7Z0JBRXBELE9BQU9tQjtZQUNUOzs7V0EzQ21CekI7RUFBeUIwQjtBQThDOUMsU0FBU1IsVUFBVVosSUFBSSxFQUFFRyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGNBQWM7SUFDekUsSUFBSUM7SUFFSixJQUFJSCxhQUFhLE1BQU07UUFDckJHLFNBQVNILFNBQVNDLFlBQVlDO1FBRTlCLElBQUksQ0FBQ0MsUUFBUTtZQUNYQSxTQUFTUixLQUFLRSxNQUFNQyxPQUFPQyxPQUFPQyxVQUFVQyxZQUFZQztRQUMxRDtJQUNGLE9BQU87UUFDTFAsS0FBS0UsTUFBTUMsT0FBT0MsT0FBT0MsVUFBVUMsWUFBWUM7UUFFL0NDLFNBQVM7SUFDWDtJQUVBLE9BQU9BO0FBQ1QifQ==