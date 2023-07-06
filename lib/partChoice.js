"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoice;
    }
});
var _parse = require("./utilities/parse");
var _constants = require("./constants");
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
var PartChoice = /*#__PURE__*/ function() {
    function PartChoice(part, precedence) {
        _class_call_check(this, PartChoice);
        this.part = part;
        this.precedence = precedence;
    }
    _create_class(PartChoice, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                parsed = (0, _parse.parsePart)(this.part, nodes, state, callback);
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), precedenceString = this.precedence === null ? _constants.EMPTY_STRING : " (".concat(this.precedence, ")"), string = "".concat(partString).concat(precedenceString);
                return string;
            }
        }
    ], [
        {
            key: "fromPart",
            value: function fromPart(part) {
                var precedence = null, partChoice = new PartChoice(part, precedence);
                return partChoice;
            }
        },
        {
            key: "fromPartAndPrecedence",
            value: function fromPartAndPrecedence(part, precedence) {
                var partChoice = new PartChoice(part, precedence);
                return partChoice;
            }
        }
    ]);
    return PartChoice;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFyc2VcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlIHtcbiAgY29uc3RydWN0b3IocGFydCwgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHRoaXMucGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHByZWNlZGVuY2VTdHJpbmcgPSAodGhpcy5wcmVjZWRlbmNlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAoJHt0aGlzLnByZWNlZGVuY2V9KWAsXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke3ByZWNlZGVuY2VTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIHBhcnRDaG9pY2UgPSBuZXcgUGFydENob2ljZShwYXJ0LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJ0Q2hvaWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0QW5kUHJlY2VkZW5jZShwYXJ0LCBwcmVjZWRlbmNlKSB7XG4gICAgY29uc3QgcGFydENob2ljZSA9IG5ldyBQYXJ0Q2hvaWNlKHBhcnQsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcnRDaG9pY2U7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUGFydENob2ljZSIsInBhcnQiLCJwcmVjZWRlbmNlIiwiZ2V0UGFydCIsImdldFByZWNlZGVuY2UiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnNlUGFydCIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInByZWNlZGVuY2VTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJmcm9tUGFydCIsInBhcnRDaG9pY2UiLCJmcm9tUGFydEFuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3FCQUhLO3lCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxVQUFVO2dDQURURjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtnQkFDMUIsSUFBSUM7Z0JBRUpBLFNBQVNDLElBQUFBLGdCQUFTLEVBQUMsSUFBSSxDQUFDVCxJQUFJLEVBQUVLLE9BQU9DLE9BQU9DO2dCQUU1QyxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDWCxJQUFJLENBQUNVLFFBQVEsSUFDL0JFLG1CQUFtQixBQUFDLElBQUksQ0FBQ1gsVUFBVSxLQUFLLE9BQ25CWSx1QkFBWSxHQUNYLEFBQUMsS0FBb0IsT0FBaEIsSUFBSSxDQUFDWixVQUFVLEVBQUMsTUFDM0NhLFNBQVMsQUFBQyxHQUFlRixPQUFiRCxZQUE4QixPQUFqQkM7Z0JBRS9CLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2YsSUFBSTtnQkFDbEIsSUFBTUMsYUFBYSxNQUNiZSxhQUFhLElBbENGakIsV0FrQ2lCQyxNQUFNQztnQkFFeEMsT0FBT2U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQmpCLElBQUksRUFBRUMsVUFBVTtnQkFDM0MsSUFBTWUsYUFBYSxJQXhDRmpCLFdBd0NpQkMsTUFBTUM7Z0JBRXhDLE9BQU9lO1lBQ1Q7OztXQTNDbUJqQiJ9