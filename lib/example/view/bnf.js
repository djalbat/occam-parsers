"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFView;
    }
});
var _occamlexers = require("occam-lexers");
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
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
var bnf = _index.BNFParser.bnf;
var BNFView = /*#__PURE__*/ function(View) {
    _inherits(BNFView, View);
    function BNFView() {
        _class_call_check(this, BNFView);
        return _call_super(this, BNFView, arguments);
    }
    _create_class(BNFView, [
        {
            key: "getNode",
            value: function getNode(tokens) {
                var Parser = this.constructor.Parser, parser = Parser.fromNothing(), node = parser.parse(tokens);
                return node;
            }
        }
    ]);
    return BNFView;
}(_view.default);
_define_property(BNFView, "Lexer", _occamlexers.BNFLexer);
_define_property(BNFView, "Parser", _index.BNFParser);
_define_property(BNFView, "initialContent", bnf); ///
_define_property(BNFView, "defaultProperties", {
    className: "bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gQk5GTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEJORlBhcnNlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBibmY7ICAvLy9cblxuICBnZXROb2RlKHRva2Vucykge1xuICAgIGNvbnN0IHsgUGFyc2VyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuXG4iXSwibmFtZXMiOlsiQk5GVmlldyIsImJuZiIsIkJORlBhcnNlciIsImdldE5vZGUiLCJ0b2tlbnMiLCJQYXJzZXIiLCJwYXJzZXIiLCJmcm9tTm90aGluZyIsIm5vZGUiLCJwYXJzZSIsIlZpZXciLCJMZXhlciIsIkJORkxleGVyIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkJBUEk7cUJBQ0M7MkRBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQU0sQUFBRUMsTUFBUUMsZ0JBQVMsQ0FBakJEO0FBRU8sSUFBQSxBQUFNRCx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE1BQU07Z0JBQ1osSUFBTSxBQUFFQyxTQUFXLElBQUksQ0FBQyxXQUFXLENBQTNCQSxRQUNGQyxTQUFTRCxPQUFPRSxXQUFXLElBQzNCQyxPQUFPRixPQUFPRyxLQUFLLENBQUNMO2dCQUUxQixPQUFPSTtZQUNUOzs7V0FibUJSO0VBQWdCVSxhQUFJO0FBQ3ZDLGlCQURtQlYsU0FDWlcsU0FBUUMscUJBQVE7QUFFdkIsaUJBSG1CWixTQUdaSyxVQUFTSCxnQkFBUztBQUV6QixpQkFMbUJGLFNBS1phLGtCQUFpQlosTUFBTSxHQUFHO0FBVWpDLGlCQWZtQkQsU0FlWmMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==