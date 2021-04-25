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
var TokensTextarea = function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    function TokensTextarea() {
        _classCallCheck(this, TokensTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(TokensTextarea).apply(this, arguments));
    }
    _createClass(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                var lineNumber = 1, previousToken = null;
                var html = tokens.reduce(function(html1, token) {
                    var tokenHTML = token.asHTML();
                    if (previousToken === null) {
                        html1 += "".concat(lineNumber++, ": ");
                    } else {
                        var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                        if (previousTokenEndOfLineToken) {
                            html1 += "".concat(lineNumber++, ": ");
                        }
                    }
                    html1 += tokenHTML;
                    previousToken = token;
                    return html1;
                }, "");
                this.html(html);
            }
        },
        {
            key: "clearTokens",
            value: function clearTokens() {
                var html = "";
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
                return {
                    setTokens: setTokens,
                    clearTokens: clearTokens
                };
            }
        }
    ]);
    return TokensTextarea;
}(_textarea.default);
_defineProperty(TokensTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});
exports.default = TokensTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3Rva2Vucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgcHJldmlvdXNUb2tlbiA9IG51bGw7XG5cbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xuXG4gICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xuXG4gICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0sIFwiXCIpO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IFwiXCI7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFRva2VucyA9IHRoaXMuc2V0VG9rZW5zLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJUb2tlbnMgPSB0aGlzLmNsZWFyVG9rZW5zLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFRva2VucyxcbiAgICAgIGNsZWFyVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRva2Vuc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVMsU0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUViLGNBQWM7Y0FBZCxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2pDLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxNQUFNO29CQUNWLFVBQVUsR0FBRyxDQUFDLEVBQ2QsYUFBYSxHQUFHLElBQUk7b0JBRWxCLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxVQUFFLEtBQUksRUFBRSxLQUFLO3dCQUMvQixTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU07d0JBRTFCLGFBQWEsS0FBSyxJQUFJO3dCQUN4QixLQUFJLE9BQW9CLE1BQUUsQ0FBZixVQUFVLEtBQUcsRUFBRTs7NEJBRXBCLDJCQUEyQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0I7NEJBRTlELDJCQUEyQjs0QkFDN0IsS0FBSSxPQUFvQixNQUFFLENBQWYsVUFBVSxLQUFHLEVBQUU7OztvQkFJOUIsS0FBSSxJQUFJLFNBQVM7b0JBRWpCLGFBQWEsR0FBRyxLQUFLOzJCQUVkLEtBQUk7O3FCQUdSLElBQUksQ0FBQyxJQUFJOzs7O1lBR2hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsSUFBSTtxQkFFTCxJQUFJLENBQUMsSUFBSTs7OztZQUdoQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLFNBQVMsUUFBUSxTQUFTLENBQUMsSUFBSSxRQUMvQixXQUFXLFFBQVEsV0FBVyxDQUFDLElBQUk7O29CQUd2QyxTQUFTLEVBQVQsU0FBUztvQkFDVCxXQUFXLEVBQVgsV0FBVzs7Ozs7V0F4Q0ksY0FBYztFQUZkLFNBQWE7Z0JBRWIsY0FBYyxHQTRDMUIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxNQUFRO0lBQ25CLFVBQVUsR0FBRSxLQUFPO0lBQ25CLFFBQVEsRUFBRSxJQUFJOztrQkEvQ0csY0FBYyJ9