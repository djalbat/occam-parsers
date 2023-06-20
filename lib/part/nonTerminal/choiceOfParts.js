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
    function ChoiceOfPartsPart(type, partChoices) {
        _class_call_check(this, ChoiceOfPartsPart);
        var _this;
        _this = _super.call(this, type);
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
            value: function parse(nodes, state, callback, precedence, ruleName) {
                var parsed;
                this.partChoices.some(function(partChoice) {
                    parsed = partChoice.parse(nodes, state, callback, precedence, ruleName);
                    if (parsed) {
                        return true;
                    }
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
                var type = _partTypes.ChoiceOfPartsPartType, choiceOfPartsPart = new ChoiceOfPartsPart(type, partChoices);
                return choiceOfPartsPart;
            }
        }
    ]);
    return ChoiceOfPartsPart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRDaG9pY2VzKSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgXG4gICAgdGhpcy5wYXJ0Q2hvaWNlcyA9IHBhcnRDaG9pY2VzO1xuICB9XG4gIFxuICBnZXRQYXJ0Q2hvaWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0Q2hvaWNlcztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIHRoaXMucGFydENob2ljZXMuc29tZSgocGFydENob2ljZSkgPT4ge1xuICAgICAgcGFyc2VkID0gcGFydENob2ljZS5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBydWxlTmFtZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydENob2ljZXNTdHJpbmcgPSB0aGlzLnBhcnRDaG9pY2VzLnJlZHVjZSgocGFydENob2ljZXNTdHJpbmcsIHBhcnRDaG9pY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRDaG9pY2VTdHJpbmcgPSBwYXJ0Q2hvaWNlLmFzU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydENob2ljZXNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydENob2ljZXNTdHJpbmcgPSBwYXJ0Q2hvaWNlU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydENob2ljZXNTdHJpbmcgPSBgJHtwYXJ0Q2hvaWNlc1N0cmluZ30gfCAke3BhcnRDaG9pY2VTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0Q2hvaWNlc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRDaG9pY2VzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0Q2hvaWNlcyhwYXJ0Q2hvaWNlcykge1xuICAgIGNvbnN0IHR5cGUgPSBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQodHlwZSwgcGFydENob2ljZXMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNQYXJ0IiwidHlwZSIsInBhcnRDaG9pY2VzIiwiZ2V0UGFydENob2ljZXMiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInByZWNlZGVuY2UiLCJydWxlTmFtZSIsInBhcnNlZCIsInNvbWUiLCJwYXJ0Q2hvaWNlIiwiYXNTdHJpbmciLCJwYXJ0Q2hvaWNlc1N0cmluZyIsInJlZHVjZSIsInBhcnRDaG9pY2VTdHJpbmciLCJzdHJpbmciLCJmcm9tUGFydENob2ljZXMiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJjaG9pY2VPZlBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSk87eUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUEsa0JBQ1BDLElBQUksRUFBRUMsV0FBVztnQ0FEVkY7O2tDQUVYQztRQUVOLE1BQUtDLGNBQWNBOzs7a0JBSkZGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRDtZQUNkOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsUUFBUTtnQkFDaEQsSUFBSUM7Z0JBRUosSUFBSSxDQUFDUixZQUFZUyxLQUFLLFNBQUNDO29CQUNyQkYsU0FBU0UsV0FBV1IsTUFBTUMsT0FBT0MsT0FBT0MsVUFBVUMsWUFBWUM7b0JBRTlELElBQUlDLFFBQVE7d0JBQ1YsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNaLFlBQVlhLE9BQU8sU0FBQ0QsbUJBQW1CRjtvQkFDOUQsSUFBTUksbUJBQW1CSixXQUFXQztvQkFFcEMsSUFBSUMsc0JBQXNCLE1BQU07d0JBQzlCQSxvQkFBb0JFO29CQUN0QixPQUFPO3dCQUNMRixvQkFBb0IsQUFBQyxHQUF5QkUsT0FBdkJGLG1CQUFrQixPQUFzQixPQUFqQkU7b0JBQ2hEO29CQUVBLE9BQU9GO2dCQUNULEdBQUcsT0FDSEcsU0FBUyxBQUFDLEtBQXNCLE9BQWxCSCxtQkFBa0I7Z0JBRXRDLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCaEIsV0FBVztnQkFDaEMsSUFBTUQsT0FBT2tCLGtDQUNQQyxvQkFBb0IsSUE1Q1RwQixrQkE0QytCQyxNQUFNQztnQkFFdEQsT0FBT2tCO1lBQ1Q7OztXQS9DbUJwQjtFQUEwQnFCIn0=