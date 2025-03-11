"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BasicView;
    }
});
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../basic/lexer"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _define_property(obj, key, value) {
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var BasicView = /*#__PURE__*/ function(View) {
    _inherits(BasicView, View);
    function BasicView() {
        _class_call_check(this, BasicView);
        return _call_super(this, BasicView, arguments);
    }
    _create_class(BasicView, [
        {
            key: "getTokens",
            value: function getTokens(content) {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, basicLexer = _lexer.default.fromEntries(entries), tokens = basicLexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode(tokens) {
                var bnf = this.getBNF(), basicParser = _index.BasicParser.fromBNF(bnf), node = basicParser.parse(tokens);
                return node;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialLexicalEntries = _this_constructor.initialLexicalEntries, initialContent = _this_constructor.initialContent, initialBNF = _this_constructor.initialBNF, lexicalEntries = initialLexicalEntries, content = initialContent, bnf = initialBNF; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ]);
    return BasicView;
}(_view.default);
_define_property(BasicView, "initialBNF", '\n  \n  S   ::= A... <END_OF_LINE> ;\n  \n  A   ::= T ":" . ;\n  \n  T   ::= T_ T~* ;\n  \n  B   ::= T_ T~* B~T ;\n  \n  V   ::= . ;\n  \n  T_  ::= V ;\n  \n  T~B ::= ":" B ;\n  \n  B~T ::= ε ;\n  \n  T~  ::= B~T B~* T~B ;\n  \n  B~  ::= T~B T~* B~T ;\n\n');
_define_property(BasicView, "initialContent", "f:A:M\n");
_define_property(BasicView, "initialLexicalEntries", [
    {
        "unassigned": "."
    }
]);
_define_property(BasicView, "defaultProperties", {
    className: "basic"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBCYXNpY0xleGVyIGZyb20gXCIuLi9iYXNpYy9sZXhlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgZ2V0VG9rZW5zKGNvbnRlbnQpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSh0b2tlbnMpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTGV4aWNhbEVudHJpZXMsIGluaXRpYWxDb250ZW50LCBpbml0aWFsQk5GIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gaW5pdGlhbExleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkY7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuICBcbiAgUyAgIDo6PSBBLi4uIDxFTkRfT0ZfTElORT4gO1xuICBcbiAgQSAgIDo6PSBUIFwiOlwiIC4gO1xuICBcbiAgVCAgIDo6PSBUXyBUfiogO1xuICBcbiAgQiAgIDo6PSBUXyBUfiogQn5UIDtcbiAgXG4gIFYgICA6Oj0gLiA7XG4gIFxuICBUXyAgOjo9IFYgO1xuICBcbiAgVH5CIDo6PSBcIjpcIiBCIDtcbiAgXG4gIEJ+VCA6Oj0gzrUgO1xuICBcbiAgVH4gIDo6PSBCflQgQn4qIFR+QiA7XG4gIFxuICBCfiAgOjo9IFR+QiBUfiogQn5UIDtcblxuYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgZjpBOk1cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsRW50cmllcyA9IFtcbiAgICB7XG4gICAgICBcInVuYXNzaWduZWRcIjogXCIuXCJcbiAgICB9XG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJiYXNpY1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQmFzaWNWaWV3IiwiZ2V0VG9rZW5zIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYmFzaWNMZXhlciIsIkJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0Tm9kZSIsImJuZiIsImdldEJORiIsImJhc2ljUGFyc2VyIiwiQmFzaWNQYXJzZXIiLCJmcm9tQk5GIiwibm9kZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxMZXhpY2FsRW50cmllcyIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbEJORiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsImtleVVwSGFuZGxlciIsIlZpZXciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTE87MkRBRVg7NERBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsVUFBVUYsZ0JBQ1ZHLGFBQWFDLGNBQVUsQ0FBQ0MsV0FBVyxDQUFDSCxVQUNwQ0ksU0FBU0gsV0FBV0ksUUFBUSxDQUFDUjtnQkFFbkMsT0FBT087WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRixNQUFNO2dCQUNaLElBQU1HLE1BQU0sSUFBSSxDQUFDQyxNQUFNLElBQ2pCQyxjQUFjQyxrQkFBVyxDQUFDQyxPQUFPLENBQUNKLE1BQ2xDSyxPQUFPSCxZQUFZSSxLQUFLLENBQUNUO2dCQUUvQixPQUFPUTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBOEQsb0JBQUEsSUFBSSxDQUFDQyxXQUFXLEVBQXRFQyx3QkFBc0Qsa0JBQXREQSx1QkFBdUJDLGlCQUErQixrQkFBL0JBLGdCQUFnQkMsYUFBZSxrQkFBZkEsWUFDekNyQixpQkFBaUJtQix1QkFDakJwQixVQUFVcUIsZ0JBQ1ZYLE1BQU1ZLFlBQVksR0FBRztnQkFFM0IsSUFBSSxDQUFDQyxNQUFNLENBQUNiO2dCQUVaLElBQUksQ0FBQ2MsVUFBVSxDQUFDeEI7Z0JBRWhCLElBQUksQ0FBQ3lCLGlCQUFpQixDQUFDeEI7Z0JBRXZCLElBQUksQ0FBQ3lCLFlBQVk7WUFDbkI7OztXQWpDbUI1QjtFQUFrQjZCLGFBQUk7QUFtQ3pDLGlCQW5DbUI3QixXQW1DWndCLGNBQWM7QUF3QnJCLGlCQTNEbUJ4QixXQTJEWnVCLGtCQUFrQjtBQUd6QixpQkE5RG1CdkIsV0E4RFpzQix5QkFBd0I7SUFDN0I7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7QUFFRCxpQkFwRW1CdEIsV0FvRVo4QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9