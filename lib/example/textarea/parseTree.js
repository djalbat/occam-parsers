"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
var _constants = require("../../constants");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var ParseTreeTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ParseTreeTextarea, Textarea);
    var _super = _createSuper(ParseTreeTextarea);
    function ParseTreeTextarea() {
        _classCallCheck(this, ParseTreeTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(ParseTreeTextarea, [
        {
            key: "setParseTree",
            value: function setParseTree(parseTree) {
                if (parseTree !== null) {
                    parseTree.shiftLine(); //
                    var parseTreeString = parseTree.asString(), value = parseTreeString; ///
                    this.setValue(value);
                } else {
                    this.clearParseTree();
                }
            }
        },
        {
            key: "clearParseTree",
            value: function clearParseTree() {
                var value = _constants.EMPTY_STRING;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this);
                return {
                    setParseTree: setParseTree,
                    clearParseTree: clearParseTree
                };
            }
        }
    ]);
    return ParseTreeTextarea;
}(_textarea.default);
exports.default = ParseTreeTextarea;
_defineProperty(ParseTreeTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFBhcnNlVHJlZSA9IHRoaXMuc2V0UGFyc2VUcmVlLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJQYXJzZVRyZWUgPSB0aGlzLmNsZWFyUGFyc2VUcmVlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFBhcnNlVHJlZSxcbiAgICAgIGNsZWFyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRva2Vuc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZVRleHRhcmVhIiwic2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXJQYXJzZVRyZWUiLCJFTVBUWV9TVFJJTkciLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFcUIsSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVMLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKOUM7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLElBQUEsQUFBTUEsaUJBQWlCLGlCQ05uQyxBRE1ZOzBDQU5mOzthQU1xQkEsaUJBQWlCO2dEQU50Qzs7Ozs7WUFPRUMsR0FBWSxFQUFaQSxjQUFZO1lFUGQsT0ZPRUEsU0FBQUEsWUFBWSxDQUFDQyxTQUFTLEVBQUU7Z0JBQ3RCLElBQUlBLFNBQVMsS0FBSyxJQUFJLEVBQUU7b0JBQ3RCQSxTQUFTLENBQUNDLFNBQVMsRUFBRSxDQUFDLENBQUUsRUFBRTtvQkFFMUIsSUFBTUMsZUFBZSxHQUFHRixTQUFTLENBQUNHLFFBQVEsRUFBRSxFQUN0Q0MsS0FBSyxHQUFHRixlQUFlLEFBQUMsRUFBRSxHQUFHO29CQUVuQyxJQUFJLENBQUNHLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLENBQUM7aUJBQ3RCLE1BQU07b0JBQ0wsSUFBSSxDQUFDRSxjQUFjLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjs7O1lBRURBLEdBQWMsRUFBZEEsZ0JBQWM7WUVwQmhCLE9Gb0JFQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsSUFBTUYsS0FBSyxHQUFHRyxVQUFZLGFBQUEsQUFBQztnQkFFM0IsSUFBSSxDQUFDRixRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFREksR0FBYSxFQUFiQSxlQUFhO1lFMUJmLE9GMEJFQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTVQsWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWSxDQUFDVSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzNDSCxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztnQkFFdEQsT0FBUTtvQkFDTlYsWUFBWSxFQUFaQSxZQUFZO29CQUNaTyxjQUFjLEVBQWRBLGNBQWM7aUJBQ2YsQ0FBRTthQUNKOztNQWxDSDs7Q0F5Q0MsQ0FuQzhDSSxTQUFRLFNBbUN0RDtrQkFuQ29CWixpQkFBaUIsQUFOdEM7QUFvQ0UsZ0JBOUJtQkEsaUJBQWlCLEVBOEI3QmEsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxRQUFRO0lBQ25CQyxVQUFVLEVBQUUsT0FBTztJQUNuQkMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDLEFBeENKIn0=