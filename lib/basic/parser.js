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
var BasicParser = function(CommonParser) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEJhc2ljUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBCYXNpY1BhcnNlci5mcm9tQk5GKGJuZik7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVhLFlBQWM7SUFFdkIsSUFBTztJQUNELE9BQWU7SUFDWixRQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQyxRQUFRLEdBTlcsWUFBYyxVQU1iLFdBQVcsSUFDL0IsU0FBUyxHQUpPLE9BQWUsU0FJVCxXQUFXO0lBRWxCLFdBQVc7Y0FBWCxXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO2dFQUFYLFdBQVc7O2lCQUFYLFdBQVc7O1lBR3ZCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxHQUFHO29CQUNWLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FDbkMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUN4QyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLO3VCQUV4QyxXQUFXOzs7O1lBR2IsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLEtBQUs7dUJBaEJDLFFBQWtCLFNBZ0JLLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSzs7OztZQUVuRSxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3VCQUFZLFdBQVcsQ0FBQyxPQUFPLENBcEJuQyxJQUFPOzs7O1dBT0YsV0FBVztFQUxQLFFBQWtCO2dCQUt0QixXQUFXLEdBQ3ZCLEdBQUcsR0FSSSxJQUFPO2tCQU9GLFdBQVcifQ==