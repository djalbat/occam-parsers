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
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _parse = require("../../utilities/parse");
var _nodes = require("../../utilities/nodes");
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
var push = _necessary.arrayUtilities.push;
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
                    var part = partChoice.getPart(), partNodes = [], savedIndex = state.getSavedIndex(), precedence = partChoice.getPrecedence();
                    if (precedence !== null) {
                        state.setPrecedence(precedence);
                    }
                    if (callAhead === null) {
                        callback = null; ///
                        parsed = (0, _parse.parsePart)(part, partNodes, state, callback, callAhead);
                        if (parsed) {
                            push(nodes, partNodes);
                        }
                    } else {
                        callback = function() {
                            var parsed;
                            push(nodes, partNodes);
                            parsed = callAhead();
                            if (!parsed) {
                                (0, _nodes.popPartNodes)(nodes, partNodes);
                            }
                            return parsed;
                        };
                        parsed = (0, _parse.parsePart)(part, partNodes, state, callback, callAhead);
                    }
                    if (!parsed) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHBhcnNlUGFydCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFyc2VcIjtcbmltcG9ydCB7IHBvcFBhcnROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZXNcIjtcbmltcG9ydCB7IENob2ljZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBsb29rQWhlYWQsIHBhcnRDaG9pY2VzKSB7XG4gICAgc3VwZXIodHlwZSwgbG9va0FoZWFkKTtcbiAgICBcbiAgICB0aGlzLnBhcnRDaG9pY2VzID0gcGFydENob2ljZXM7XG4gIH1cbiAgXG4gIGdldFBhcnRDaG9pY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRDaG9pY2VzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIHBhcnNlZCA9IHRoaXMucGFydENob2ljZXMuc29tZSgocGFydENob2ljZSkgPT4ge1xuICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgY29uc3QgcGFydCA9IHBhcnRDaG9pY2UuZ2V0UGFydCgpLFxuICAgICAgICAgICAgcGFydE5vZGVzID0gW10sXG4gICAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgICAgcHJlY2VkZW5jZSA9IHBhcnRDaG9pY2UuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbnVsbDsgIC8vL1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7ICAvLy9cbiAgICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcblxuICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIHBvcFBhcnROb2Rlcyhub2RlcywgcGFydE5vZGVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2VzU3RyaW5nID0gdGhpcy5wYXJ0Q2hvaWNlcy5yZWR1Y2UoKHBhcnRDaG9pY2VzU3RyaW5nLCBwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Q2hvaWNlU3RyaW5nID0gcGFydENob2ljZS5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRDaG9pY2VzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gcGFydENob2ljZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gYCR7cGFydENob2ljZXNTdHJpbmd9IHwgJHtwYXJ0Q2hvaWNlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydENob2ljZXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0Q2hvaWNlc1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydENob2ljZXMocGFydENob2ljZXMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcGFydENob2ljZXMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNQYXJ0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwidHlwZSIsImxvb2tBaGVhZCIsInBhcnRDaG9pY2VzIiwiZ2V0UGFydENob2ljZXMiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInNvbWUiLCJwYXJ0Q2hvaWNlIiwicGFydCIsImdldFBhcnQiLCJwYXJ0Tm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwic2V0UHJlY2VkZW5jZSIsInBhcnNlUGFydCIsInBvcFBhcnROb2RlcyIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydENob2ljZXNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0Q2hvaWNlU3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhcnRDaG9pY2VzIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVO2tFQUVIO3FCQUVGO3FCQUNHO3lCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCxrQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUEsa0JBQ1BHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXO2dDQURyQkw7O2tDQUVYRyxNQUFNQztRQUVaLE1BQUtDLFdBQVcsR0FBR0E7OztrQkFKRkw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFdBQVc7WUFDekI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUpBLFNBQVMsSUFBSSxDQUFDUCxXQUFXLENBQUNRLElBQUksQ0FBQyxTQUFDQztvQkFDOUIsSUFBSUY7b0JBRUosSUFBTUcsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QkMsWUFBWSxFQUFFLEVBQ2RDLGFBQWFULE1BQU1VLGFBQWEsSUFDaENDLGFBQWFOLFdBQVdPLGFBQWE7b0JBRTNDLElBQUlELGVBQWUsTUFBTTt3QkFDdkJYLE1BQU1hLGFBQWEsQ0FBQ0Y7b0JBQ3RCO29CQUVBLElBQUlULGNBQWMsTUFBTTt3QkFDdEJELFdBQVcsTUFBTyxHQUFHO3dCQUVyQkUsU0FBU1csSUFBQUEsZ0JBQVMsRUFBQ1IsTUFBTUUsV0FBV1IsT0FBT0MsVUFBVUM7d0JBRXJELElBQUlDLFFBQVE7NEJBQ1ZYLEtBQUtPLE9BQU9TO3dCQUNkO29CQUNGLE9BQU87d0JBQ0xQLFdBQVc7NEJBQ1QsSUFBSUU7NEJBRUpYLEtBQUtPLE9BQU9TOzRCQUVaTCxTQUFTRDs0QkFFVCxJQUFJLENBQUNDLFFBQVE7Z0NBQ1hZLElBQUFBLG1CQUFZLEVBQUNoQixPQUFPUzs0QkFDdEI7NEJBRUEsT0FBT0w7d0JBQ1Q7d0JBRUFBLFNBQVNXLElBQUFBLGdCQUFTLEVBQUNSLE1BQU1FLFdBQVdSLE9BQU9DLFVBQVVDO29CQUN2RDtvQkFFQSxJQUFJLENBQUNDLFFBQVE7d0JBQ1hILE1BQU1nQixTQUFTLENBQUNQO29CQUNsQjtvQkFFQSxPQUFPTjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUN0QixXQUFXLENBQUN1QixNQUFNLENBQUMsU0FBQ0QsbUJBQW1CYjtvQkFDOUQsSUFBTWUsbUJBQW1CZixXQUFXWSxRQUFRO29CQUU1QyxJQUFJQyxzQkFBc0IsTUFBTTt3QkFDOUJBLG9CQUFvQkU7b0JBQ3RCLE9BQU87d0JBQ0xGLG9CQUFvQixBQUFDLEdBQXlCRSxPQUF2QkYsbUJBQWtCLE9BQXNCLE9BQWpCRTtvQkFDaEQ7b0JBRUEsT0FBT0Y7Z0JBQ1QsR0FBRyxPQUNIRyxTQUFTLEFBQUMsS0FBc0IsT0FBbEJILG1CQUFrQjtnQkFFdEMsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0IxQixXQUFXO2dCQUNoQyxJQUFNRixPQUFPNkIsZ0NBQXFCLEVBQzVCNUIsWUFBWSxPQUNaNkIsb0JBQW9CLElBbEZUakMsa0JBa0YrQkcsTUFBTUMsV0FBV0M7Z0JBRWpFLE9BQU80QjtZQUNUOzs7V0FyRm1CakM7RUFBMEJrQyxvQkFBZSJ9