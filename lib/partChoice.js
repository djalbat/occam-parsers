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
            value: function parse(nodes, state, callback, precedence, ruleName) {
                var parsed;
                var parts = [
                    this.part
                ], index = 0;
                precedence = this.precedence; ///
                parsed = (0, _lookAhead.parsePartOfParts)(this.part, parts, nodes, index, state, callback, precedence, ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhcnNlUGFydE9mUGFydHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRDaG9pY2Uge1xuICBjb25zdHJ1Y3RvcihwYXJ0LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgZ2V0UHJlY2VkZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVjZWRlbmNlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydHMgPSBbXG4gICAgICAgICAgICB0aGlzLnBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgIHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2U7IC8vL1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyh0aGlzLnBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBwcmVjZWRlbmNlU3RyaW5nID0gKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgKCR7dGhpcy5wcmVjZWRlbmNlfSlgLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtwcmVjZWRlbmNlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwYXJ0Q2hvaWNlID0gbmV3IFBhcnRDaG9pY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFydENob2ljZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFByZWNlZGVuY2UocGFydCwgcHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2UgPSBuZXcgUGFydENob2ljZShwYXJ0LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJ0Q2hvaWNlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlBhcnRDaG9pY2UiLCJwYXJ0IiwicHJlY2VkZW5jZSIsImdldFBhcnQiLCJnZXRQcmVjZWRlbmNlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJydWxlTmFtZSIsInBhcnNlZCIsInBhcnRzIiwiaW5kZXgiLCJwYXJzZVBhcnRPZlBhcnRzIiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nIiwicHJlY2VkZW5jZVN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21QYXJ0IiwicGFydENob2ljZSIsImZyb21QYXJ0QW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSFE7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxVQUFVO2dDQURURjtRQUVqQixJQUFJLENBQUNDLE9BQU9BO1FBQ1osSUFBSSxDQUFDQyxhQUFhQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVOLFVBQVUsRUFBRU8sUUFBUTtnQkFDaEQsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUTtvQkFDTixJQUFJLENBQUNWO2lCQUNOLEVBQ0RXLFFBQVE7Z0JBRWRWLGFBQWEsSUFBSSxDQUFDQSxZQUFZLEdBQUc7Z0JBRWpDUSxTQUFTRyxJQUFBQSw2QkFBaUIsSUFBSSxDQUFDWixNQUFNVSxPQUFPTCxPQUFPTSxPQUFPTCxPQUFPQyxVQUFVTixZQUFZTztnQkFFdkYsT0FBT0M7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ2QsS0FBS2EsWUFDdkJFLG1CQUFtQixBQUFDLElBQUksQ0FBQ2QsZUFBZSxPQUNuQmUsMEJBQ0MsQUFBQyxLQUFvQixPQUFoQixJQUFJLENBQUNmLFlBQVcsTUFDM0NnQixTQUFTLEFBQUMsR0FBZUYsT0FBYkQsWUFBOEIsT0FBakJDO2dCQUUvQixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNsQixJQUFJO2dCQUNsQixJQUFNQyxhQUFhLE1BQ2JrQixhQUFhLElBekNGcEIsV0F5Q2lCQyxNQUFNQztnQkFFeEMsT0FBT2tCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JwQixJQUFJLEVBQUVDLFVBQVU7Z0JBQzNDLElBQU1rQixhQUFhLElBL0NGcEIsV0ErQ2lCQyxNQUFNQztnQkFFeEMsT0FBT2tCO1lBQ1Q7OztXQWxEbUJwQiJ9