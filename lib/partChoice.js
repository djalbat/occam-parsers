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
var _necessary = require("necessary");
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
var SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
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
            key: "asString",
            value: function asString() {
                var string;
                var partString = this.part.asString();
                string = partString; ///
                if (this.precedence !== null) {
                    var precedence = this.precedence === Infinity ? SPACE_CHARACTER : this.precedence;
                    string = "".concat(string, " (").concat(precedence, ")");
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRDaG9pY2Uge1xuICBjb25zdHJ1Y3RvcihwYXJ0LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgZ2V0UHJlY2VkZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVjZWRlbmNlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IHBhcnRTdHJpbmc7ICAvLy9cblxuICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSAodGhpcy5wcmVjZWRlbmNlID09PSBJbmZpbml0eSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgU1BBQ0VfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVjZWRlbmNlO1xuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9ICgke3ByZWNlZGVuY2V9KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgcGFydENob2ljZSA9IG5ldyBQYXJ0Q2hvaWNlKHBhcnQsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcnRDaG9pY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRBbmRQcmVjZWRlbmNlKHBhcnQsIHByZWNlZGVuY2UpIHtcbiAgICBjb25zdCBwYXJ0Q2hvaWNlID0gbmV3IFBhcnRDaG9pY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFydENob2ljZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQYXJ0Q2hvaWNlIiwiU1BBQ0VfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsInBhcnQiLCJwcmVjZWRlbmNlIiwiZ2V0UGFydCIsImdldFByZWNlZGVuY2UiLCJhc1N0cmluZyIsInN0cmluZyIsInBhcnRTdHJpbmciLCJJbmZpbml0eSIsImZyb21QYXJ0IiwicGFydENob2ljZSIsImZyb21QYXJ0QW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTk07eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsa0JBQW9CQyxxQkFBVSxDQUE5QkQ7QUFFTyxJQUFBLEFBQU1ELDJCQUFOO2FBQU1BLFdBQ1BHLElBQUksRUFBRUMsVUFBVTtnQ0FEVEo7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIREo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsYUFBYSxJQUFJLENBQUNOLElBQUksQ0FBQ0ksUUFBUTtnQkFFckNDLFNBQVNDLFlBQWEsR0FBRztnQkFFekIsSUFBSSxJQUFJLENBQUNMLFVBQVUsS0FBSyxNQUFNO29CQUM1QixJQUFNQSxhQUFhLEFBQUMsSUFBSSxDQUFDQSxVQUFVLEtBQUtNLFdBQ25CVCxrQkFDRSxJQUFJLENBQUNHLFVBQVU7b0JBRXRDSSxTQUFTLEFBQUMsR0FBYUosT0FBWEksUUFBTyxNQUFlLE9BQVhKLFlBQVc7Z0JBQ3BDO2dCQUVBLE9BQU9JO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsU0FBU1IsSUFBSTtnQkFDbEIsSUFBTUMsYUFBYSxNQUNiUSxhQUFhLElBbENGWixXQWtDaUJHLE1BQU1DO2dCQUV4QyxPQUFPUTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCVixJQUFJLEVBQUVDLFVBQVU7Z0JBQzNDLElBQU1RLGFBQWEsSUF4Q0ZaLFdBd0NpQkcsTUFBTUM7Z0JBRXhDLE9BQU9RO1lBQ1Q7OztXQTNDbUJaIn0=