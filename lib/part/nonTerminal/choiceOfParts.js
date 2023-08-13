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
            key: "getParts",
            value: function getParts() {
                var parts = this.partChoices.map(function(partChoice) {
                    var part = partChoice.getPart();
                    return part;
                });
                return parts;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var precedence = state.getPrecedence();
                parsed = this.partChoices.some(function(partChoice) {
                    var parsed;
                    var part = partChoice.getPart(), savedIndex = state.getSavedIndex(), precedence = partChoice.getPrecedence(), nodesLength = nodes.length;
                    if (precedence !== null) {
                        state.setPrecedence(precedence);
                    }
                    callback = callAhead === null ? null : function() {
                        var parsed;
                        parsed = callAhead();
                        return parsed;
                    };
                    parsed = (0, _parse.parsePart)(part, nodes, state, callback, callAhead);
                    if (!parsed) {
                        var start = nodesLength; ///
                        nodes.splice(start);
                        state.backtrack(savedIndex);
                    }
                    return parsed;
                });
                if (!parsed) {
                    state.setPrecedence(precedence);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcGFyc2VQYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJzZVwiO1xuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydENob2ljZXMpIHtcbiAgICBzdXBlcih0eXBlLCBsb29rQWhlYWQpO1xuICAgIFxuICAgIHRoaXMucGFydENob2ljZXMgPSBwYXJ0Q2hvaWNlcztcbiAgfVxuICBcbiAgZ2V0UGFydENob2ljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydENob2ljZXM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydENob2ljZXMubWFwKChwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0ID0gcGFydENob2ljZS5nZXRQYXJ0KCk7XG5cbiAgICAgIHJldHVybiBwYXJ0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBzdGF0ZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICBwYXJzZWQgPSB0aGlzLnBhcnRDaG9pY2VzLnNvbWUoKHBhcnRDaG9pY2UpID0+IHtcbiAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0Q2hvaWNlLmdldFBhcnQoKSxcbiAgICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgICBwcmVjZWRlbmNlID0gcGFydENob2ljZS5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sgPSAoY2FsbEFoZWFkID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICgpID0+IHsgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbm9kZXNMZW5ndGg7ICAvLy9cblxuICAgICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQpO1xuXG4gICAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0Q2hvaWNlc1N0cmluZyA9IHRoaXMucGFydENob2ljZXMucmVkdWNlKChwYXJ0Q2hvaWNlc1N0cmluZywgcGFydENob2ljZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydENob2ljZVN0cmluZyA9IHBhcnRDaG9pY2UuYXNTdHJpbmcoKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0Q2hvaWNlc1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0Q2hvaWNlc1N0cmluZyA9IHBhcnRDaG9pY2VTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0Q2hvaWNlc1N0cmluZyA9IGAke3BhcnRDaG9pY2VzU3RyaW5nfSB8ICR7cGFydENob2ljZVN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRDaG9pY2VzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydENob2ljZXNTdHJpbmd9IClgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRDaG9pY2VzKHBhcnRDaG9pY2VzKSB7XG4gICAgY29uc3QgdHlwZSA9IENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydCh0eXBlLCBsb29rQWhlYWQsIHBhcnRDaG9pY2VzKTtcblxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDaG9pY2VPZlBhcnRzUGFydCIsInR5cGUiLCJsb29rQWhlYWQiLCJwYXJ0Q2hvaWNlcyIsImdldFBhcnRDaG9pY2VzIiwiZ2V0UGFydHMiLCJwYXJ0cyIsIm1hcCIsInBhcnRDaG9pY2UiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJzb21lIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInNldFByZWNlZGVuY2UiLCJwYXJzZVBhcnQiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydENob2ljZXNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0Q2hvaWNlU3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhcnRDaG9pY2VzIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2tFQUxPO3FCQUVGO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBLGtCQUNQQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVztnQ0FEckJIOztrQ0FFWEMsTUFBTUM7UUFFWixNQUFLQyxXQUFXLEdBQUdBOzs7a0JBSkZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxXQUFXO1lBQ3pCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDSCxXQUFXLENBQUNJLEdBQUcsQ0FBQyxTQUFDQztvQkFDbEMsSUFBTUMsT0FBT0QsV0FBV0UsT0FBTztvQkFFL0IsT0FBT0Q7Z0JBQ1Q7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixNQUFNSyxhQUFhO2dCQUV0Q0YsU0FBUyxJQUFJLENBQUNiLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQyxTQUFDWDtvQkFDOUIsSUFBSVE7b0JBRUosSUFBTVAsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QlUsYUFBYVAsTUFBTVEsYUFBYSxJQUNoQ0osYUFBYVQsV0FBV1UsYUFBYSxJQUNyQ0ksY0FBY1YsTUFBTVcsTUFBTTtvQkFFaEMsSUFBSU4sZUFBZSxNQUFNO3dCQUN2QkosTUFBTVcsYUFBYSxDQUFDUDtvQkFDdEI7b0JBRUFILFdBQVcsQUFBQ0MsY0FBYyxPQUNaLE9BQ0U7d0JBQ0UsSUFBSUM7d0JBRUpBLFNBQVNEO3dCQUVULE9BQU9DO29CQUNUO29CQUVoQkEsU0FBU1MsSUFBQUEsZ0JBQVMsRUFBQ2hCLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVDO29CQUVqRCxJQUFJLENBQUNDLFFBQVE7d0JBQ1gsSUFBTVUsUUFBUUosYUFBYyxHQUFHO3dCQUUvQlYsTUFBTWUsTUFBTSxDQUFDRDt3QkFFYmIsTUFBTWUsU0FBUyxDQUFDUjtvQkFDbEI7b0JBRUEsT0FBT0o7Z0JBQ1Q7Z0JBRUEsSUFBSSxDQUFDQSxRQUFRO29CQUNYSCxNQUFNVyxhQUFhLENBQUNQO2dCQUN0QjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUMzQixXQUFXLENBQUM0QixNQUFNLENBQUMsU0FBQ0QsbUJBQW1CdEI7b0JBQzlELElBQU13QixtQkFBbUJ4QixXQUFXcUIsUUFBUTtvQkFFNUMsSUFBSUMsc0JBQXNCLE1BQU07d0JBQzlCQSxvQkFBb0JFO29CQUN0QixPQUFPO3dCQUNMRixvQkFBb0IsQUFBQyxHQUF5QkUsT0FBdkJGLG1CQUFrQixPQUFzQixPQUFqQkU7b0JBQ2hEO29CQUVBLE9BQU9GO2dCQUNULEdBQUcsT0FDSEcsU0FBUyxBQUFDLEtBQXNCLE9BQWxCSCxtQkFBa0I7Z0JBRXRDLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCL0IsV0FBVztnQkFDaEMsSUFBTUYsT0FBT2tDLGdDQUFxQixFQUM1QmpDLFlBQVksT0FDWmtDLG9CQUFvQixJQXhGVHBDLGtCQXdGK0JDLE1BQU1DLFdBQVdDO2dCQUVqRSxPQUFPaUM7WUFDVDs7O1dBM0ZtQnBDO0VBQTBCcUMsb0JBQWUifQ==