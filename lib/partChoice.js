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
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                if (this.precedence !== null) {
                    state.setPrecedence(this.precedence);
                }
                parsed = (0, _parse.parsePart)(this.part, nodes, state, callback, callAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFyc2VcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlIHtcbiAgY29uc3RydWN0b3IocGFydCwgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHRoaXMucHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHRoaXMucGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgcHJlY2VkZW5jZVN0cmluZyA9ICh0aGlzLnByZWNlZGVuY2UgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICgke3RoaXMucHJlY2VkZW5jZX0pYCxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cHJlY2VkZW5jZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcGFydENob2ljZSA9IG5ldyBQYXJ0Q2hvaWNlKHBhcnQsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcnRDaG9pY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRBbmRQcmVjZWRlbmNlKHBhcnQsIHByZWNlZGVuY2UpIHtcbiAgICBjb25zdCBwYXJ0Q2hvaWNlID0gbmV3IFBhcnRDaG9pY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFydENob2ljZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQYXJ0Q2hvaWNlIiwicGFydCIsInByZWNlZGVuY2UiLCJnZXRQYXJ0IiwiZ2V0UHJlY2VkZW5jZSIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwic2V0UHJlY2VkZW5jZSIsInBhcnNlUGFydCIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInByZWNlZGVuY2VTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJmcm9tUGFydCIsInBhcnRDaG9pY2UiLCJmcm9tUGFydEFuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3FCQUhLO3lCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxVQUFVO2dDQURURjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFJLElBQUksQ0FBQ1IsVUFBVSxLQUFLLE1BQU07b0JBQzVCSyxNQUFNSSxhQUFhLENBQUMsSUFBSSxDQUFDVCxVQUFVO2dCQUNyQztnQkFFQVEsU0FBU0UsSUFBQUEsZ0JBQVMsRUFBQyxJQUFJLENBQUNYLElBQUksRUFBRUssT0FBT0MsT0FBT0MsVUFBVUM7Z0JBRXRELE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNiLElBQUksQ0FBQ1ksUUFBUSxJQUMvQkUsbUJBQW1CLEFBQUMsSUFBSSxDQUFDYixVQUFVLEtBQUssT0FDbkJjLHVCQUFZLEdBQ1gsQUFBQyxLQUFvQixPQUFoQixJQUFJLENBQUNkLFVBQVUsRUFBQyxNQUMzQ2UsU0FBUyxBQUFDLEdBQWVGLE9BQWJELFlBQThCLE9BQWpCQztnQkFFL0IsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTakIsSUFBSTtnQkFDbEIsSUFBTUMsYUFBYSxNQUNiaUIsYUFBYSxJQXRDRm5CLFdBc0NpQkMsTUFBTUM7Z0JBRXhDLE9BQU9pQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCbkIsSUFBSSxFQUFFQyxVQUFVO2dCQUMzQyxJQUFNaUIsYUFBYSxJQTVDRm5CLFdBNENpQkMsTUFBTUM7Z0JBRXhDLE9BQU9pQjtZQUNUOzs7V0EvQ21CbkIifQ==