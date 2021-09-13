"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
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
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    function LexicalEntriesTextarea() {
        _classCallCheck(this, LexicalEntriesTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(LexicalEntriesTextarea).apply(this, arguments));
    }
    _createClass(LexicalEntriesTextarea, [
        {
            key: "getLexicalEntries",
            value: function getLexicalEntries() {
                var value = this.getValue(), lexicalEntries = JSON.parse(value);
                return lexicalEntries;
            }
        },
        {
            key: "setLexicalEntries",
            value: function setLexicalEntries(lexicalEntries) {
                var value = JSON.stringify(lexicalEntries, null, "  ");
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getLexicalEntries = this.getLexicalEntries.bind(this), setLexicalEntries = this.setLexicalEntries.bind(this);
                return {
                    getLexicalEntries: getLexicalEntries,
                    setLexicalEntries: setLexicalEntries
                };
            }
        }
    ]);
    return LexicalEntriesTextarea;
}(_textarea.default);
_defineProperty(LexicalEntriesTextarea, "defaultProperties", {
    className: "lexical-entries",
    spellCheck: "false"
});
exports.default = LexicalEntriesTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImxleGljYWxFbnRyaWVzIiwiSlNPTiIsInBhcnNlIiwic2V0TGV4aWNhbEVudHJpZXMiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWIsc0JBQXNCLGlCQUE1QixRQUFRO2NBQUYsc0JBQXNCO2FBQXRCLHNCQUFzQjs4QkFBdEIsc0JBQXNCO2dFQUF0QixzQkFBc0I7O2lCQUF0QixzQkFBc0I7O1lBQ3pDLEdBQWlCLEdBQWpCLGlCQUFpQjttQkFBakIsUUFBUSxDQUFSLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLEdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFDckIsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFFdkMsTUFBTSxDQUFDLGNBQWM7WUFDdkIsQ0FBQzs7O1lBRUQsR0FBaUIsR0FBakIsaUJBQWlCO21CQUFqQixRQUFRLENBQVIsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2pDLEdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxHQUFFLEVBQUk7Z0JBRXZELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNyQixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNwRCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBRTFELE1BQU0sQ0FBRSxDQUFDO29CQUNQLGlCQUFpQixFQUFqQixpQkFBaUI7b0JBQ2pCLGlCQUFpQixFQUFqQixpQkFBaUI7Z0JBQ25CLENBQUM7WUFDSCxDQUFDOzs7V0F0QmtCLHNCQUFzQjtFQUZ0QixTQUFhO2dCQUViLHNCQUFzQixHQXdCbEMsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsZUFBaUI7SUFDNUIsVUFBVSxHQUFFLEtBQU87QUFDckIsQ0FBQztrQkEzQmtCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldExleGljYWxFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsIFwiICBcIik7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGV4aWNhbC1lbnRyaWVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXX0=