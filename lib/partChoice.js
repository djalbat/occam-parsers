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
            value: function parse(nodes, state, callback, precedence) {
                var parsed;
                var parts = [
                    this.part
                ], index = 0;
                parsed = (0, _lookAhead.parsePartOfParts)(this.part, parts, nodes, index, state, callback, this.precedence);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhcnNlUGFydE9mUGFydHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRDaG9pY2Uge1xuICBjb25zdHJ1Y3RvcihwYXJ0LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgZ2V0UHJlY2VkZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVjZWRlbmNlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHRoaXMucGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyh0aGlzLnBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgdGhpcy5wcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgcHJlY2VkZW5jZVN0cmluZyA9ICh0aGlzLnByZWNlZGVuY2UgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICgke3RoaXMucHJlY2VkZW5jZX0pYCxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cHJlY2VkZW5jZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcGFydENob2ljZSA9IG5ldyBQYXJ0Q2hvaWNlKHBhcnQsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcnRDaG9pY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRBbmRQcmVjZWRlbmNlKHBhcnQsIHByZWNlZGVuY2UpIHtcbiAgICBjb25zdCBwYXJ0Q2hvaWNlID0gbmV3IFBhcnRDaG9pY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFydENob2ljZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQYXJ0Q2hvaWNlIiwicGFydCIsInByZWNlZGVuY2UiLCJnZXRQYXJ0IiwiZ2V0UHJlY2VkZW5jZSIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwicGFydHMiLCJpbmRleCIsInBhcnNlUGFydE9mUGFydHMiLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJwcmVjZWRlbmNlU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RyaW5nIiwiZnJvbVBhcnQiLCJwYXJ0Q2hvaWNlIiwiZnJvbVBhcnRBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozt5QkFIUTt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRFRGO1FBRWpCLElBQUksQ0FBQ0MsT0FBT0E7UUFDWixJQUFJLENBQUNDLGFBQWFBOztrQkFIREY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRU4sVUFBVTtnQkFDdEMsSUFBSU87Z0JBRUosSUFBTUMsUUFBUTtvQkFDTixJQUFJLENBQUNUO2lCQUNOLEVBQ0RVLFFBQVE7Z0JBRWRGLFNBQVNHLElBQUFBLDZCQUFpQixJQUFJLENBQUNYLE1BQU1TLE9BQU9KLE9BQU9LLE9BQU9KLE9BQU9DLFVBQVUsSUFBSSxDQUFDTjtnQkFFaEYsT0FBT087WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ2IsS0FBS1ksWUFDdkJFLG1CQUFtQixBQUFDLElBQUksQ0FBQ2IsZUFBZSxPQUNuQmMsMEJBQ0MsQUFBQyxLQUFvQixPQUFoQixJQUFJLENBQUNkLFlBQVcsTUFDM0NlLFNBQVMsQUFBQyxHQUFlRixPQUFiRCxZQUE4QixPQUFqQkM7Z0JBRS9CLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2pCLElBQUk7Z0JBQ2xCLElBQU1DLGFBQWEsTUFDYmlCLGFBQWEsSUF2Q0ZuQixXQXVDaUJDLE1BQU1DO2dCQUV4QyxPQUFPaUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQm5CLElBQUksRUFBRUMsVUFBVTtnQkFDM0MsSUFBTWlCLGFBQWEsSUE3Q0ZuQixXQTZDaUJDLE1BQU1DO2dCQUV4QyxPQUFPaUI7WUFDVDs7O1dBaERtQm5CIn0=