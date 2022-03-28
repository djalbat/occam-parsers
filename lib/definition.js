"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("./utilities/array");
var _lookAhead = require("./utilities/lookAhead");
var _constants = require("./constants");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcGFyc2VQYXJ0cyB9IGZyb20gXCIuL3V0aWxpdGllcy9sb29rQWhlYWRcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgYWRkUGFydChwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZ2V0Rmlyc3RQYXJ0IiwiZmlyc3RQYXJ0IiwiZmlyc3QiLCJnZXRQYXJ0c0xlbmd0aCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiYWRkUGFydCIsInBhcnQiLCJwdXNoIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJpbmRleCIsInBhcnNlUGFydHMiLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsTUFBbUIsV0FBbkIsbUJBQW1CLENBQUE7QUFDZCxJQUFBLFVBQXVCLFdBQXZCLHVCQUF1QixDQUFBO0FBQ3JCLElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSxVQUFVLGlCQ041QixBRE1ZO2FBQU1BLFVBQVUsQ0FDakJDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQzthQUNuQjs7O1lBRURFLEdBQVksRUFBWkEsY0FBWTttQkFBWkEsU0FBQUEsWUFBWSxHQUFHO2dCQUNiLElBQU1DLFNBQVMsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBSyxBQUFZLENBQUEsTUFBWixDQUFDLElBQUksQ0FBQ0osS0FBSyxDQUFDLEFBQUM7Z0JBRXBDLE9BQU9HLFNBQVMsQ0FBQzthQUNsQjs7O1lBRURFLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUNPLE1BQU0sQUFBQztnQkFFdEMsT0FBT0QsV0FBVyxDQUFDO2FBQ3BCOzs7WUFFREUsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLElBQUksRUFBRTtnQkFDWixJQUFJLENBQUNULEtBQUssQ0FBQ1UsSUFBSSxDQUFDRCxJQUFJLENBQUMsQ0FBQzthQUN2Qjs7O1lBRURFLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJQyxNQUFNLEFBQUM7Z0JBRVgsSUFBTUMsS0FBSyxHQUFHLENBQUMsQUFBQztnQkFFaEJELE1BQU0sR0FBR0UsQ0FBQUEsR0FBQUEsVUFBVSxBQUEyQyxDQUFBLFdBQTNDLENBQUMsSUFBSSxDQUFDakIsS0FBSyxFQUFFWSxLQUFLLEVBQUVJLEtBQUssRUFBRUgsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztnQkFFL0QsT0FBT0MsTUFBTSxDQUFDO2FBQ2Y7OztZQUVERyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUFNQyxZQUFXLEdBQUcsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsTUFBTSxDQUFDLFNBQUNELFdBQVcsRUFBRVYsSUFBSSxFQUFLO29CQUN2RCxJQUFNWSxVQUFVLEdBQUdaLElBQUksQ0FBQ1MsUUFBUSxFQUFFLEFBQUM7b0JBRW5DLElBQUlDLFdBQVcsS0FBS0csVUFBWSxhQUFBLEVBQUU7d0JBQ2hDSCxXQUFXLEdBQUdFLFVBQVUsQ0FBQyxDQUFDLEdBQUc7cUJBQzlCLE1BQU07d0JBQ0xGLFdBQVcsR0FBRyxBQUFDLEVBQUEsQ0FBaUJFLE1BQVUsQ0FBekJGLFdBQVcsRUFBQyxHQUFDLENBQWEsQ0FBQSxNQUFBLENBQVhFLFVBQVUsQ0FBRSxDQUFDO3FCQUM5QztvQkFFRCxPQUFPRixXQUFXLENBQUM7aUJBQ3BCLEVBQUVHLFVBQVksYUFBQSxDQUFDLEVBQ2hCQyxNQUFNLEdBQUdKLFlBQVcsQUFBQyxFQUFDLEdBQUc7Z0JBRTdCLE9BQU9JLE1BQU0sQ0FBQzthQUNmOzs7O0NBQ0YsRUFBQTtrQkFuRG9CeEIsVUFBVSJ9