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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHBhcnNlUGFydHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImdldEZpcnN0UGFydCIsImZpcnN0UGFydCIsImZpcnN0IiwiZ2V0UGFydHNMZW5ndGgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImFkZFBhcnQiLCJwYXJ0IiwicHVzaCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJzZVBhcnRzIiwiYXNTdHJpbmciLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsSUFBQSxNQUFtQixXQUFuQixtQkFBbUIsQ0FBQTtBQUNkLElBQUEsVUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDckIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBOzs7Ozs7Ozs7OERBSjFDO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7QUFNZSxJQUFBLEFBQU1BLFVBQVUsaUJDTjVCLEFETVk7YUFBTUEsVUFBVSxDQUNqQkMsS0FBSzt5Q0FQbkI7UUFRSSxJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFRLEVBQVJBLFVBQVE7WUVYVixPRldFQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQzthQUNuQjs7O1lBRURFLEdBQVksRUFBWkEsY0FBWTtZRWZkLE9GZUVBLFNBQUFBLFlBQVksR0FBRztnQkFDYixJQUFNQyxTQUFTLEdBQUdDLENBQUFBLEdBQUFBLE1BQUssQUFBWSxDQUFBLE9BQVgsSUFBSSxDQUFDSixLQUFLLENBQUMsQUFBQztnQkFFcEMsT0FBT0csU0FBUyxDQUFDO2FBQ2xCOzs7WUFFREUsR0FBYyxFQUFkQSxnQkFBYztZRXJCaEIsT0ZxQkVBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUNPLE1BQU0sQUFBQztnQkFFdEMsT0FBT0QsV0FBVyxDQUFDO2FBQ3BCOzs7WUFFREUsR0FBTyxFQUFQQSxTQUFPO1lFM0JULE9GMkJFQSxTQUFBQSxPQUFPLENBQUNDLElBQUksRUFBRTtnQkFDWixJQUFJLENBQUNULEtBQUssQ0FBQ1UsSUFBSSxDQUFDRCxJQUFJLENBQUMsQ0FBQzthQUN2Qjs7O1lBRURFLEdBQUssRUFBTEEsT0FBSztZRS9CUCxPRitCRUEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJQyxNQUFNLEFBQUM7Z0JBRVgsSUFBTUMsS0FBSyxHQUFHLENBQUMsQUFBQztnQkFFaEJELE1BQU0sR0FBR0UsQ0FBQUEsR0FBQUEsVUFBVSxBQUEyQyxDQUFBLFlBQTFDLElBQUksQ0FBQ2pCLEtBQUssRUFBRVksS0FBSyxFQUFFSSxLQUFLLEVBQUVILEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7Z0JBRS9ELE9BQU9DLE1BQU0sQ0FBQzthQUNmOzs7WUFFREcsR0FBUSxFQUFSQSxVQUFRO1lFekNWLE9GeUNFQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsSUFBTUMsWUFBVyxHQUFHLElBQUksQ0FBQ25CLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxTQUFDRCxXQUFXLEVBQUVWLElBQUksRUFBSztvQkFDdkQsSUFBTVksVUFBVSxHQUFHWixJQUFJLENBQUNTLFFBQVEsRUFBRSxBQUFDO29CQUVuQyxJQUFJQyxXQUFXLEtBQUtHLFVBQVksYUFBQSxFQUFFO3dCQUNoQ0gsV0FBVyxHQUFHRSxVQUFVLENBQUMsQ0FBQyxHQUFHO3FCQUM5QixNQUFNO3dCQUNMRixXQUFXLEdBQUcsQUFBQyxFQUFBLENBQWlCRSxNQUFVLENBQXpCRixXQUFXLEVBQUMsR0FBQyxDQUFhLENBQUEsTUFBQSxDQUFYRSxVQUFVLENBQUUsQ0FBQztxQkFDOUM7b0JBRUQsT0FBT0YsV0FBVyxDQUFDO2lCQUNwQixFQUFFRyxVQUFZLGNBQUMsRUFDaEJDLE1BQU0sR0FBR0osWUFBVyxBQUFDLEVBQUMsR0FBRztnQkFFN0IsT0FBT0ksTUFBTSxDQUFDO2FBQ2Y7O01BeERIOztDQXlEQyxFQUFBO2tCQW5Eb0J4QixVQUFVLEFBTi9CIn0=