"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsPart;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _parse = require("../../utilities/parse");
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
var ChoiceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ChoiceOfPartsPart, NonTerminalPart);
    var _super = _create_super(ChoiceOfPartsPart);
    function ChoiceOfPartsPart(type, lookAhead, partChoices) {
        _class_call_check(this, ChoiceOfPartsPart);
        var _this;
        _this = _super.call(this, type, lookAhead);
        _this.partChoices = partChoices;
        return _this;
    }
    _create_class(ChoiceOfPartsPart, [
        {
            key: "getPartChoices",
            value: function getPartChoices() {
                return this.partChoices;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                parsed = this.partChoices.some(function(partChoice) {
                    var parsed;
                    var part = partChoice.getPart(), savedIndex = state.getSavedIndex(), precedence = partChoice.getPrecedence(), nodesLength = nodes.length;
                    if (precedence !== null) {
                        state.setPrecedence(precedence);
                    }
                    callback = null; ///
                    parsed = (0, _parse.parsePart)(part, nodes, state, callback, callAhead);
                    if (!parsed) {
                        var start = nodesLength; ///
                        nodes.splice(start);
                        state.backtrack(savedIndex);
                    }
                    return parsed;
                });
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partChoicesString = this.partChoices.reduce(function(partChoicesString, partChoice) {
                    var partChoiceString = partChoice.asString();
                    if (partChoicesString === null) {
                        partChoicesString = partChoiceString;
                    } else {
                        partChoicesString = "".concat(partChoicesString, " | ").concat(partChoiceString);
                    }
                    return partChoicesString;
                }, null), string = "( ".concat(partChoicesString, " )");
                return string;
            }
        }
    ], [
        {
            key: "fromPartChoices",
            value: function fromPartChoices(partChoices) {
                var type = _partTypes.ChoiceOfPartsPartType, lookAhead = false, choiceOfPartsPart = new ChoiceOfPartsPart(type, lookAhead, partChoices);
                return choiceOfPartsPart;
            }
        }
    ]);
    return ChoiceOfPartsPart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcGFyc2VQYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJzZVwiO1xuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydENob2ljZXMpIHtcbiAgICBzdXBlcih0eXBlLCBsb29rQWhlYWQpO1xuICAgIFxuICAgIHRoaXMucGFydENob2ljZXMgPSBwYXJ0Q2hvaWNlcztcbiAgfVxuICBcbiAgZ2V0UGFydENob2ljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydENob2ljZXM7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgcGFyc2VkID0gdGhpcy5wYXJ0Q2hvaWNlcy5zb21lKChwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICBjb25zdCBwYXJ0ID0gcGFydENob2ljZS5nZXRQYXJ0KCksXG4gICAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgICAgcHJlY2VkZW5jZSA9IHBhcnRDaG9pY2UuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrID0gbnVsbDsgIC8vL1xuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBub2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2VzU3RyaW5nID0gdGhpcy5wYXJ0Q2hvaWNlcy5yZWR1Y2UoKHBhcnRDaG9pY2VzU3RyaW5nLCBwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Q2hvaWNlU3RyaW5nID0gcGFydENob2ljZS5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRDaG9pY2VzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gcGFydENob2ljZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gYCR7cGFydENob2ljZXNTdHJpbmd9IHwgJHtwYXJ0Q2hvaWNlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydENob2ljZXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0Q2hvaWNlc1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydENob2ljZXMocGFydENob2ljZXMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcGFydENob2ljZXMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNQYXJ0IiwidHlwZSIsImxvb2tBaGVhZCIsInBhcnRDaG9pY2VzIiwiZ2V0UGFydENob2ljZXMiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInNvbWUiLCJwYXJ0Q2hvaWNlIiwicGFydCIsImdldFBhcnQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzZXRQcmVjZWRlbmNlIiwicGFyc2VQYXJ0Iiwic3RhcnQiLCJzcGxpY2UiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRDaG9pY2VzU3RyaW5nIiwicmVkdWNlIiwicGFydENob2ljZVN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0Q2hvaWNlcyIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsImNob2ljZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztrRUFMTztxQkFFRjt5QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BOytCQUFBQTthQUFBQSxrQkFDUEMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVc7Z0NBRHJCSDs7a0NBRVhDLE1BQU1DO1FBRVosTUFBS0MsV0FBVyxHQUFHQTs7O2tCQUpGSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsV0FBVztZQUN6Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSkEsU0FBUyxJQUFJLENBQUNQLFdBQVcsQ0FBQ1EsSUFBSSxDQUFDLFNBQUNDO29CQUM5QixJQUFJRjtvQkFFSixJQUFNRyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCQyxhQUFhUixNQUFNUyxhQUFhLElBQ2hDQyxhQUFhTCxXQUFXTSxhQUFhLElBQ3JDQyxjQUFjYixNQUFNYyxNQUFNO29CQUVoQyxJQUFJSCxlQUFlLE1BQU07d0JBQ3ZCVixNQUFNYyxhQUFhLENBQUNKO29CQUN0QjtvQkFFQVQsV0FBVyxNQUFPLEdBQUc7b0JBRXJCRSxTQUFTWSxJQUFBQSxnQkFBUyxFQUFDVCxNQUFNUCxPQUFPQyxPQUFPQyxVQUFVQztvQkFFakQsSUFBSSxDQUFDQyxRQUFRO3dCQUNYLElBQU1hLFFBQVFKLGFBQWMsR0FBRzt3QkFFL0JiLE1BQU1rQixNQUFNLENBQUNEO3dCQUViaEIsTUFBTWtCLFNBQVMsQ0FBQ1Y7b0JBQ2xCO29CQUVBLE9BQU9MO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUN4QixXQUFXLENBQUN5QixNQUFNLENBQUMsU0FBQ0QsbUJBQW1CZjtvQkFDOUQsSUFBTWlCLG1CQUFtQmpCLFdBQVdjLFFBQVE7b0JBRTVDLElBQUlDLHNCQUFzQixNQUFNO3dCQUM5QkEsb0JBQW9CRTtvQkFDdEIsT0FBTzt3QkFDTEYsb0JBQW9CLEFBQUMsR0FBeUJFLE9BQXZCRixtQkFBa0IsT0FBc0IsT0FBakJFO29CQUNoRDtvQkFFQSxPQUFPRjtnQkFDVCxHQUFHLE9BQ0hHLFNBQVMsQUFBQyxLQUFzQixPQUFsQkgsbUJBQWtCO2dCQUV0QyxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQjVCLFdBQVc7Z0JBQ2hDLElBQU1GLE9BQU8rQixnQ0FBcUIsRUFDNUI5QixZQUFZLE9BQ1orQixvQkFBb0IsSUFoRVRqQyxrQkFnRStCQyxNQUFNQyxXQUFXQztnQkFFakUsT0FBTzhCO1lBQ1Q7OztXQW5FbUJqQztFQUEwQmtDLG9CQUFlIn0=