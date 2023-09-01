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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IFNQQUNFX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydENob2ljZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnQsIHByZWNlZGVuY2UpIHtcbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByZWNlZGVuY2U7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpO1xuXG4gICAgc3RyaW5nID0gcGFydFN0cmluZzsgIC8vL1xuXG4gICAgaWYgKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9ICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWNlZGVuY2U7XG5cbiAgICAgIHN0cmluZyA9IGAke3N0cmluZ30gKCR7cHJlY2VkZW5jZX0pYDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwYXJ0Q2hvaWNlID0gbmV3IFBhcnRDaG9pY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFydENob2ljZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFByZWNlZGVuY2UocGFydCwgcHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2UgPSBuZXcgUGFydENob2ljZShwYXJ0LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJ0Q2hvaWNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFydENob2ljZSIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJwYXJ0IiwicHJlY2VkZW5jZSIsImdldFBhcnQiLCJnZXRQcmVjZWRlbmNlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJwYXJ0U3RyaW5nIiwiSW5maW5pdHkiLCJmcm9tUGFydCIsInBhcnRDaG9pY2UiLCJmcm9tUGFydEFuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLEFBQUVDLGtCQUFvQkMscUJBQVUsQ0FBOUJEO0FBRU8sSUFBQSxBQUFNRCwyQkFBTjthQUFNQSxXQUNQRyxJQUFJLEVBQUVDLFVBQVU7Z0NBRFRKO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLGFBQWEsSUFBSSxDQUFDTixJQUFJLENBQUNJLFFBQVE7Z0JBRXJDQyxTQUFTQyxZQUFhLEdBQUc7Z0JBRXpCLElBQUksSUFBSSxDQUFDTCxVQUFVLEtBQUssTUFBTTtvQkFDNUIsSUFBTUEsYUFBYSxBQUFDLElBQUksQ0FBQ0EsVUFBVSxLQUFLTSxXQUNuQlQsa0JBQ0UsSUFBSSxDQUFDRyxVQUFVO29CQUV0Q0ksU0FBUyxBQUFDLEdBQWFKLE9BQVhJLFFBQU8sTUFBZSxPQUFYSixZQUFXO2dCQUNwQztnQkFFQSxPQUFPSTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNSLElBQUk7Z0JBQ2xCLElBQU1DLGFBQWEsTUFDYlEsYUFBYSxJQWxDRlosV0FrQ2lCRyxNQUFNQztnQkFFeEMsT0FBT1E7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQlYsSUFBSSxFQUFFQyxVQUFVO2dCQUMzQyxJQUFNUSxhQUFhLElBeENGWixXQXdDaUJHLE1BQU1DO2dCQUV4QyxPQUFPUTtZQUNUOzs7V0EzQ21CWiJ9