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
                callback = null; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFyc2VcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Q2hvaWNlIHtcbiAgY29uc3RydWN0b3IocGFydCwgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHRoaXMucHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sgPSBudWxsOyAgLy8vXG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQodGhpcy5wYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBwcmVjZWRlbmNlU3RyaW5nID0gKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgKCR7dGhpcy5wcmVjZWRlbmNlfSlgLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtwcmVjZWRlbmNlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwYXJ0Q2hvaWNlID0gbmV3IFBhcnRDaG9pY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFydENob2ljZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFByZWNlZGVuY2UocGFydCwgcHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2UgPSBuZXcgUGFydENob2ljZShwYXJ0LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJ0Q2hvaWNlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlBhcnRDaG9pY2UiLCJwYXJ0IiwicHJlY2VkZW5jZSIsImdldFBhcnQiLCJnZXRQcmVjZWRlbmNlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJzZXRQcmVjZWRlbmNlIiwicGFyc2VQYXJ0IiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nIiwicHJlY2VkZW5jZVN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21QYXJ0IiwicGFydENob2ljZSIsImZyb21QYXJ0QW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7cUJBSEs7eUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRFRGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKLElBQUksSUFBSSxDQUFDUixVQUFVLEtBQUssTUFBTTtvQkFDNUJLLE1BQU1JLGFBQWEsQ0FBQyxJQUFJLENBQUNULFVBQVU7Z0JBQ3JDO2dCQUVBTSxXQUFXLE1BQU8sR0FBRztnQkFFckJFLFNBQVNFLElBQUFBLGdCQUFTLEVBQUMsSUFBSSxDQUFDWCxJQUFJLEVBQUVLLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUV0RCxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDYixJQUFJLENBQUNZLFFBQVEsSUFDL0JFLG1CQUFtQixBQUFDLElBQUksQ0FBQ2IsVUFBVSxLQUFLLE9BQ25CYyx1QkFBWSxHQUNYLEFBQUMsS0FBb0IsT0FBaEIsSUFBSSxDQUFDZCxVQUFVLEVBQUMsTUFDM0NlLFNBQVMsQUFBQyxHQUFlRixPQUFiRCxZQUE4QixPQUFqQkM7Z0JBRS9CLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2pCLElBQUk7Z0JBQ2xCLElBQU1DLGFBQWEsTUFDYmlCLGFBQWEsSUF4Q0ZuQixXQXdDaUJDLE1BQU1DO2dCQUV4QyxPQUFPaUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQm5CLElBQUksRUFBRUMsVUFBVTtnQkFDM0MsSUFBTWlCLGFBQWEsSUE5Q0ZuQixXQThDaUJDLE1BQU1DO2dCQUV4QyxPQUFPaUI7WUFDVDs7O1dBakRtQm5CIn0=