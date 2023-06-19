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
var _constants = require("./constants");
var _lookAhead = require("./utilities/lookAhead");
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
                var parts = [
                    this.part
                ], index = 0;
                parsed = (0, _lookAhead.parsePartOfParts)(this.part, parts, nodes, index, state, callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhcnNlUGFydE9mUGFydHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRDaG9pY2Uge1xuICBjb25zdHJ1Y3RvcihwYXJ0LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgZ2V0UHJlY2VkZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVjZWRlbmNlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRoaXMucGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyh0aGlzLnBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHByZWNlZGVuY2VTdHJpbmcgPSAodGhpcy5wcmVjZWRlbmNlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAoJHt0aGlzLnByZWNlZGVuY2V9KWAsXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke3ByZWNlZGVuY2VTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIHBhcnRDaG9pY2UgPSBuZXcgUGFydENob2ljZShwYXJ0LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJ0Q2hvaWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0QW5kUHJlY2VkZW5jZShwYXJ0LCBwcmVjZWRlbmNlKSB7XG4gICAgY29uc3QgcGFydENob2ljZSA9IG5ldyBQYXJ0Q2hvaWNlKHBhcnQsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcnRDaG9pY2U7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUGFydENob2ljZSIsInBhcnQiLCJwcmVjZWRlbmNlIiwiZ2V0UGFydCIsImdldFByZWNlZGVuY2UiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnRzIiwiaW5kZXgiLCJwYXJzZVBhcnRPZlBhcnRzIiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nIiwicHJlY2VkZW5jZVN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21QYXJ0IiwicGFydENob2ljZSIsImZyb21QYXJ0QW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSFE7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxVQUFVO2dDQURURjtRQUVqQixJQUFJLENBQUNDLE9BQU9BO1FBQ1osSUFBSSxDQUFDQyxhQUFhQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRO2dCQUMxQixJQUFJQztnQkFFSixJQUFNQyxRQUFRO29CQUNOLElBQUksQ0FBQ1Q7aUJBQ04sRUFDRFUsUUFBUTtnQkFFZEYsU0FBU0csSUFBQUEsNkJBQWlCLElBQUksQ0FBQ1gsTUFBTVMsT0FBT0osT0FBT0ssT0FBT0osT0FBT0M7Z0JBRWpFLE9BQU9DO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNiLEtBQUtZLFlBQ3ZCRSxtQkFBbUIsQUFBQyxJQUFJLENBQUNiLGVBQWUsT0FDbkJjLDBCQUNDLEFBQUMsS0FBb0IsT0FBaEIsSUFBSSxDQUFDZCxZQUFXLE1BQzNDZSxTQUFTLEFBQUMsR0FBZUYsT0FBYkQsWUFBOEIsT0FBakJDO2dCQUUvQixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNqQixJQUFJO2dCQUNsQixJQUFNQyxhQUFhLE1BQ2JpQixhQUFhLElBdkNGbkIsV0F1Q2lCQyxNQUFNQztnQkFFeEMsT0FBT2lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JuQixJQUFJLEVBQUVDLFVBQVU7Z0JBQzNDLElBQU1pQixhQUFhLElBN0NGbkIsV0E2Q2lCQyxNQUFNQztnQkFFeEMsT0FBT2lCO1lBQ1Q7OztXQWhEbUJuQiJ9