"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _bnf = _interopRequireDefault(require("./bnf"));
var _parser = _interopRequireDefault(require("../bnf/parser"));
var _parser1 = _interopRequireDefault(require("../common/parser"));
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
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _parser.default.fromNothing();
var BasicParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(BasicParser, CommonParser);
    function BasicParser() {
        _classCallCheck(this, BasicParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(BasicParser).apply(this, arguments));
    }
    _createClass(BasicParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), basicParser = BasicParser.fromRules(rules);
                return basicParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _parser1.default.fromRules(BasicParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return BasicParser.fromBNF(_bnf.default);
            }
        }
    ]);
    return BasicParser;
}(_parser1.default);
_defineProperty(BasicParser, "bnf", _bnf.default);
exports.default = BasicParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJibmYiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQmFzaWNQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiYmFzaWNQYXJzZXIiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBYyxDQUFkLFlBQWM7QUFFdkIsR0FBTyxDQUFQLElBQU87QUFDRCxHQUFlLENBQWYsT0FBZTtBQUNaLEdBQWtCLENBQWxCLFFBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQyxRQUFRLEdBTlcsWUFBYyxVQU1iLFdBQVcsSUFDL0IsU0FBUyxHQUpPLE9BQWUsU0FJVCxXQUFXO0lBRWxCLFdBQVcsaUJBQWpCLFFBQVE7Y0FBRixXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO2dFQUFYLFdBQVc7O2lCQUFYLFdBQVc7O1lBR3ZCLEdBQU8sR0FBUCxPQUFPO21CQUFkLFFBQVEsQ0FBRCxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQ25DLEtBQUssR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FDeEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFL0MsTUFBTSxDQUFDLFdBQVc7WUFDcEIsQ0FBQzs7O1lBRU0sR0FBUyxHQUFULFNBQVM7bUJBQWhCLFFBQVEsQ0FBRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWhCVCxRQUFrQixTQWdCSyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUs7WUFBRyxDQUFDOzs7WUFFdkUsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FwQm5DLElBQU87WUFvQm1DLENBQUM7OztXQWJ0QyxXQUFXO0VBTFAsUUFBa0I7Z0JBS3RCLFdBQVcsR0FDdkIsR0FBRyxHQVJJLElBQU87a0JBT0YsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBCTkZQYXJzZXIgZnJvbSBcIi4uL2JuZi9wYXJzZXJcIjtcbmltcG9ydCBDb21tb25QYXJzZXIgZnJvbSBcIi4uL2NvbW1vbi9wYXJzZXJcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhCYXNpY1BhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQmFzaWNQYXJzZXIuZnJvbUJORihibmYpOyB9XG59XG4iXX0=