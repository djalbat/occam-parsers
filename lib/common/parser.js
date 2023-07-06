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
Object.assign(CommonParser.prototype, _parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGFyc2VyTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcGFyc2VyXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENvbW1vblBhcnNlci5wcm90b3R5cGUsIHBhcnNlck1peGlucyk7XG4iXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwiYm5mIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXIiLCJwYXJzZXJGcm9tUnVsZXMiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwicGFyc2VyTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs2REFKSTt1QkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSw2QkFvQ2xCLEFBcENZO2FBQU1BLGFBQ1BDLFNBQVMsRUFBRUMsT0FBTztnQ0FEWEY7UUFFakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBSEVGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQ3RCLElBQU0sQUFBRUMsTUFBUUQsTUFBUkMsS0FDRkMsUUFBUUMsSUFBQUEscUJBQVksRUFBQ0YsTUFDckJHLFNBQVNDLElBQUFBLHdCQUFlLEVBQUNMLE9BQU9FO2dCQUV0QyxPQUFPRTtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUU4sS0FBSyxFQUFFQyxHQUFHO2dCQUN2QixJQUFNQyxRQUFRQyxJQUFBQSxxQkFBWSxFQUFDRixNQUNyQkcsU0FBU0MsSUFBQUEsd0JBQWUsRUFBQ0wsT0FBT0U7Z0JBRXRDLE9BQU9FO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVUCxLQUFLLEVBQUVFLEtBQUs7Z0JBQzNCLElBQU1FLFNBQVNDLElBQUFBLHdCQUFlLEVBQUNMLE9BQU9FO2dCQUV0QyxPQUFPRTtZQUNUOzs7V0FqQ21CVjs7QUFvQ3JCYyxPQUFPQyxNQUFNLENBQUNmLGFBQWFnQixTQUFTLEVBQUVDLGVBQVkifQ==