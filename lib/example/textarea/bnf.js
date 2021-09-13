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
var BNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(BNFTextarea, Textarea);
    function BNFTextarea() {
        _classCallCheck(this, BNFTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(BNFTextarea).apply(this, arguments));
    }
    _createClass(BNFTextarea, [
        {
            key: "getBNF",
            value: function getBNF() {
                var value = this.getValue(), bnf = value; ///
                return bnf;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(bnf) {
                var value = bnf;
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
                return {
                    getBNF: getBNF,
                    setBNF: setBNF
                };
            }
        }
    ]);
    return BNFTextarea;
}(_textarea.default);
_defineProperty(BNFTextarea, "defaultProperties", {
    className: "bnf",
    spellCheck: "false"
});
exports.default = BNFTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsIkJORlRleHRhcmVhIiwiZ2V0Qk5GIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldEJORiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVMsR0FBYSxDQUFiLFNBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYixXQUFXLGlCQUFqQixRQUFRO2NBQUYsV0FBVzthQUFYLFdBQVc7OEJBQVgsV0FBVztnRUFBWCxXQUFXOztpQkFBWCxXQUFXOztZQUM5QixHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxJQUNyQixHQUFHLEdBQUcsS0FBSyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdEIsTUFBTSxDQUFDLEdBQUc7WUFDWixDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNYLEdBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRztnQkFFakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBRXBDLE1BQU0sQ0FBRSxDQUFDO29CQUNQLE1BQU0sRUFBTixNQUFNO29CQUNOLE1BQU0sRUFBTixNQUFNO2dCQUNSLENBQUM7WUFDSCxDQUFDOzs7V0F0QmtCLFdBQVc7RUFGWCxTQUFhO2dCQUViLFdBQVcsR0F3QnZCLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLEdBQUs7SUFDaEIsVUFBVSxHQUFFLEtBQU87QUFDckIsQ0FBQztrQkEzQmtCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXRCTkYoYm5mKSB7XG4gICAgY29uc3QgdmFsdWUgPSBibmY7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXX0=