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
var TokensTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    var _super = _createSuper(TokensTextarea);
    function TokensTextarea() {
        _classCallCheck(this, TokensTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                var lineNumber = 1, previousToken = null;
                var html1 = tokens.reduce(function(html, token) {
                    var tokenHTML = token.asHTML();
                    if (previousToken === null) {
                        html += "".concat(lineNumber++, ": ");
                    } else {
                        var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                        if (previousTokenEndOfLineToken) {
                            html += "".concat(lineNumber++, ": ");
                        }
                    }
                    html += tokenHTML;
                    previousToken = token;
                    return html;
                }, _constants.EMPTY_STRING);
                this.html(html1);
            }
        },
        {
            key: "clearTokens",
            value: function clearTokens() {
                var html = _constants.EMPTY_STRING;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3Rva2Vucy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKChodG1sLCB0b2tlbikgPT4ge1xuICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKCk7XG5cbiAgICAgIGlmIChwcmV2aW91c1Rva2VuID09PSBudWxsKSB7XG4gICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFRva2VucyA9IHRoaXMuc2V0VG9rZW5zLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJUb2tlbnMgPSB0aGlzLmNsZWFyVG9rZW5zLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFRva2VucyxcbiAgICAgIGNsZWFyVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRva2Vuc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsInNldFRva2VucyIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsIkVNUFRZX1NUUklORyIsImNsZWFyVG9rZW5zIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVMLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsY0FBYyxpQkNOaEMsQURNWTs7O2FBQU1BLGNBQWM7Ozs7OztZQUNqQ0MsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLENBQUNDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSUMsVUFBVSxHQUFHLENBQUMsRUFDZEMsYUFBYSxHQUFHLElBQUksQUFBQztnQkFFekIsSUFBTUMsS0FBSSxHQUFHSCxNQUFNLENBQUNJLE1BQU0sQ0FBQyxTQUFDRCxJQUFJLEVBQUVFLEtBQUssRUFBSztvQkFDMUMsSUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sRUFBRSxBQUFDO29CQUVqQyxJQUFJTCxhQUFhLEtBQUssSUFBSSxFQUFFO3dCQUMxQkMsSUFBSSxJQUFJLEFBQUMsRUFBQSxDQUFlLE1BQUUsQ0FBZkYsVUFBVSxFQUFFLEVBQUMsSUFBRSxDQUFDLENBQUM7cUJBQzdCLE1BQU07d0JBQ0wsSUFBTU8sMkJBQTJCLEdBQUdOLGFBQWEsQ0FBQ08sZ0JBQWdCLEVBQUUsQUFBQzt3QkFFckUsSUFBSUQsMkJBQTJCLEVBQUU7NEJBQy9CTCxJQUFJLElBQUksQUFBQyxFQUFBLENBQWUsTUFBRSxDQUFmRixVQUFVLEVBQUUsRUFBQyxJQUFFLENBQUMsQ0FBQzt5QkFDN0I7cUJBQ0Y7b0JBRURFLElBQUksSUFBSUcsU0FBUyxDQUFDO29CQUVsQkosYUFBYSxHQUFHRyxLQUFLLENBQUM7b0JBRXRCLE9BQU9GLElBQUksQ0FBQztpQkFDYixFQUFFTyxVQUFZLGFBQUEsQ0FBQyxBQUFDO2dCQUVqQixJQUFJLENBQUNQLElBQUksQ0FBQ0EsS0FBSSxDQUFDLENBQUM7YUFDakI7OztZQUVEUSxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNUixJQUFJLEdBQUdPLFVBQVksYUFBQSxBQUFDO2dCQUUxQixJQUFJLENBQUNQLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUM7YUFDakI7OztZQUVEUyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNYixTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNjLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDckNGLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDO2dCQUVoRCxPQUFRO29CQUNOZCxTQUFTLEVBQVRBLFNBQVM7b0JBQ1RZLFdBQVcsRUFBWEEsV0FBVztpQkFDWixDQUFFO2FBQ0o7Ozs7Q0FPRixDQWpEMkNHLFNBQVEsUUFBQSxDQWlEbkQ7QUFMQyxnQkE1Q21CaEIsY0FBYyxFQTRDMUJpQixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFFBQVE7SUFDbkJDLFVBQVUsRUFBRSxPQUFPO0lBQ25CQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7a0JBaERpQnBCLGNBQWMifQ==