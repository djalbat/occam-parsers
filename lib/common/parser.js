"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CommonParser;
    }
});
var _parser = /*#__PURE__*/ _interop_require_default(require("../mixins/parser"));
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("./../node/nonTerminal"));
var _parser1 = require("../utilities/parser");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var CommonParser = /*#__PURE__*/ function() {
    function CommonParser(startRule, ruleMap) {
        _class_call_check(this, CommonParser);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
    }
    _create_class(CommonParser, [
        {
            key: "getStartRule",
            value: function getStartRule() {
                return this.startRule;
            }
        },
        {
            key: "getRuleMap",
            value: function getRuleMap() {
                return this.ruleMap;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var bnf = Class.bnf, rules = (0, _parser1.rulesFromBNF)(bnf), parser = (0, _parser1.parserFromRules)(Class, rules);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var rules = (0, _parser1.rulesFromBNF)(bnf), parser = (0, _parser1.parserFromRules)(Class, rules);
                return parser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var parser = (0, _parser1.parserFromRules)(Class, rules);
                return parser;
            }
        }
    ]);
    return CommonParser;
}();
_define_property(CommonParser, "NonTerminalNodeMap", {});
_define_property(CommonParser, "defaultNonTerminalNode", _nonTerminal.default);
Object.assign(CommonParser.prototype, _parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGFyc2VyTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcGFyc2VyXCI7XG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLy4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHN0YXRpYyBOb25UZXJtaW5hbE5vZGVNYXAgPSB7fTtcblxuICBzdGF0aWMgZGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbW1vblBhcnNlci5wcm90b3R5cGUsIHBhcnNlck1peGlucyk7XG4iXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiYm5mIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXIiLCJwYXJzZXJGcm9tUnVsZXMiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwiTm9uVGVybWluYWxOb2RlTWFwIiwiZGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInBhcnNlck1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NkRBTEk7a0VBQ0c7dUJBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLFNBQVMsRUFBRUMsT0FBTztnQ0FEWEY7UUFFakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBSEVGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7O1lBTU9HLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQ3RCLElBQU0sQUFBRUMsTUFBUUQsTUFBUkMsS0FDRkMsUUFBUUMsSUFBQUEscUJBQVksRUFBQ0YsTUFDckJHLFNBQVNDLElBQUFBLHdCQUFlLEVBQUNMLE9BQU9FO2dCQUV0QyxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUU4sS0FBSyxFQUFFQyxHQUFHO2dCQUN2QixJQUFNQyxRQUFRQyxJQUFBQSxxQkFBWSxFQUFDRixNQUNyQkcsU0FBU0MsSUFBQUEsd0JBQWUsRUFBQ0wsT0FBT0U7Z0JBRXRDLE9BQU9FO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVUCxLQUFLLEVBQUVFLEtBQUs7Z0JBQzNCLElBQU1FLFNBQVNDLElBQUFBLHdCQUFlLEVBQUNMLE9BQU9FO2dCQUV0QyxPQUFPRTtZQUNUOzs7V0FyQ21CVjs7QUFjbkIsaUJBZG1CQSxjQWNaYyxzQkFBcUIsQ0FBQztBQUU3QixpQkFoQm1CZCxjQWdCWmUsMEJBQXlCQyxvQkFBZTtBQXdCakRDLE9BQU9DLE1BQU0sQ0FBQ2xCLGFBQWFtQixTQUFTLEVBQUVDLGVBQVkifQ==