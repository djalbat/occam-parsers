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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ParseTreeTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ParseTreeTextarea, Textarea);
    function ParseTreeTextarea() {
        _classCallCheck(this, ParseTreeTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(ParseTreeTextarea).apply(this, arguments));
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
_defineProperty(ParseTreeTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});
exports.default = ParseTreeTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsIkVNUFRZX1NUUklORyIsIlBhcnNlVHJlZVRleHRhcmVhIiwic2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXJQYXJzZVRyZWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhO0FBRUwsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFekIsaUJBQWlCLGlCQUF2QixRQUFRO2NBQUYsaUJBQWlCO2FBQWpCLGlCQUFpQjs4QkFBakIsaUJBQWlCO2dFQUFqQixpQkFBaUI7O2lCQUFqQixpQkFBaUI7O1lBQ3BDLEdBQVksRUFBWixDQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZCLEVBQUUsRUFBRSxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLFNBQVMsQ0FBQyxTQUFTLEdBQUssQ0FBRSxBQUFGLEVBQUU7b0JBRTFCLEdBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFDcEMsS0FBSyxHQUFHLGVBQWUsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRW5DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztnQkFDckIsQ0FBQyxNQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLGNBQWM7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFjLEVBQWQsQ0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQyxLQUFLLEdBakJjLFVBQWlCO2dCQW1CMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLENBQUM7OztZQUVELEdBQWEsRUFBYixDQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksR0FDMUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBRXBELE1BQU0sQ0FBRSxDQUFDO29CQUNQLFlBQVksRUFBWixZQUFZO29CQUNaLGNBQWMsRUFBZCxjQUFjO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQzs7O1dBNUJrQixpQkFBaUI7RUFKakIsU0FBYTtnQkFJYixpQkFBaUIsRUE4QjdCLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQVE7SUFDbkIsVUFBVSxFQUFFLENBQU87SUFDbkIsUUFBUSxFQUFFLElBQUk7QUFDaEIsQ0FBQztrQkFsQ2tCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclBhcnNlVHJlZSA9IHRoaXMuY2xlYXJQYXJzZVRyZWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0UGFyc2VUcmVlLFxuICAgICAgY2xlYXJQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXX0=