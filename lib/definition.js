"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _lookAhead = require("./utilities/lookAhead");
var _constants = require("./constants");
var _array = require("./utilities/array");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Definition = /*#__PURE__*/ function() {
    function Definition(parts) {
        _classCallCheck(this, Definition);
        this.parts = parts;
    }
    _createClass(Definition, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "getFirstPart",
            value: function getFirstPart() {
                var firstPart = (0, _array).first(this.parts);
                return firstPart;
            }
        },
        {
            key: "getPartsLength",
            value: function getPartsLength() {
                var partsLength = this.parts.length;
                return partsLength;
            }
        },
        {
            key: "getAllButFirstParts",
            value: function getAllButFirstParts() {
                var allButFirstParts = (0, _array).allButFirst(this.parts);
                return allButFirstParts;
            }
        },
        {
            key: "addPart",
            value: function addPart(part) {
                this.parts.push(part);
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var index = 0;
                parsed = (0, _lookAhead).parseParts(this.parts, nodes, index, state, callback);
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partsString1 = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === _constants.EMPTY_STRING) {
                        partsString = partString; ///
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, _constants.EMPTY_STRING), string = partsString1; ///
                return string;
            }
        }
    ]);
    return Definition;
}();
exports.default = Definition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xvb2tBaGVhZFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgYWxsQnV0Rmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IGluZGV4ID0gMDtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImdldEZpcnN0UGFydCIsImZpcnN0UGFydCIsImZpcnN0IiwiZ2V0UGFydHNMZW5ndGgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImdldEFsbEJ1dEZpcnN0UGFydHMiLCJhbGxCdXRGaXJzdFBhcnRzIiwiYWxsQnV0Rmlyc3QiLCJhZGRQYXJ0IiwicGFydCIsInB1c2giLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImluZGV4IiwicGFyc2VQYXJ0cyIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFMkIsR0FBdUIsQ0FBdkIsVUFBdUI7QUFDckIsR0FBYSxDQUFiLFVBQWE7QUFD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