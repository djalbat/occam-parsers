"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _array = require("../utilities/array");
var _part = require("../utilities/part");
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
            value: function parse(nodes, context, callback) {
                var parsed;
                var index = 0;
                parsed = parseParts(this.parts, nodes, index, context, callback);
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partsString = this.parts.reduce(function(partsString1, part) {
                    var partString = part.asString();
                    if (partsString1 === _constants.EMPTY_STRING) {
                        partsString1 = partString; ///
                    } else {
                        partsString1 = "".concat(partsString1, " ").concat(partString);
                    }
                    return partsString1;
                }, _constants.EMPTY_STRING), string = partsString; ///
                return string;
            }
        }
    ]);
    return Definition;
}();
exports.default = Definition;
function parseParts(parts, nodes, index, context, callback) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = true;
        if (callback) {
            parsed = callback();
        }
    } else {
        var part = parts[index++];
        parsed = parsePart(part, parts, nodes, index, context, callback);
    }
    return parsed;
}
function parsePart(part, parts, nodes, index, context, callback) {
    var parsed;
    if (callback) {
        var partsNodes = [];
        parsed = part.parse(nodes, context, function() {
            return parseParts(parts, partsNodes, index, context, callback);
        });
        if (parsed) {
            (0, _array).push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part).isPartRuleNamePartWithLookAhead(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part, partsNodes = [];
            parsed = ruleNamePart.parse(nodes, context, function() {
                return parseParts(parts, partsNodes, index, context);
            });
            if (parsed) {
                (0, _array).push(nodes, partsNodes);
            }
        } else {
            parsed = part.parse(nodes, context);
            if (parsed) {
                parsed = parseParts(parts, nodes, index, context);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHVzaCwgZmlyc3QsIGFsbEJ1dEZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4KytdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkID0gaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZChwYXJ0KTtcblxuICAgIGlmIChwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHJ1bGVOYW1lUGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIGNvbnRleHQpKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWlCLEdBQWMsQ0FBZCxVQUFjO0FBQ0YsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDYixHQUFtQixDQUFuQixLQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsVUFBVTthQUFWLFVBQVUsQ0FDakIsS0FBSzs4QkFERSxVQUFVO2FBRXRCLEtBQUssR0FBRyxLQUFLOztpQkFGRCxVQUFVOztZQUs3QixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQzs0QkFDRSxLQUFLO1lBQ25CLENBQUM7OztZQUVELEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksR0FBRyxDQUFDO2dCQUNkLEdBQUssQ0FBQyxTQUFTLE9BYnNCLE1BQW9CLGFBYTVCLEtBQUs7dUJBRTNCLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQyxXQUFXLFFBQVEsS0FBSyxDQUFDLE1BQU07dUJBRTlCLFdBQVc7WUFDcEIsQ0FBQzs7O1lBRUQsR0FBbUIsR0FBbkIsbUJBQW1COzRCQUFuQixtQkFBbUIsR0FBRyxDQUFDO2dCQUNyQixHQUFLLENBQUMsZ0JBQWdCLE9BekJlLE1BQW9CLG1CQXlCZixLQUFLO3VCQUV4QyxnQkFBZ0I7WUFDekIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN0QixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLE1BQU07Z0JBRVYsR0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUVmLE1BQU0sR0FBRyxVQUFVLE1BQU0sS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVE7dUJBRXhELE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUMsV0FBVyxRQUFRLEtBQUssQ0FBQyxNQUFNLFVBQUUsWUFBVyxFQUFFLElBQUksRUFBSyxDQUFDO29CQUN4RCxHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRO29CQUVoQyxFQUFFLEVBQUUsWUFBVyxLQWpESSxVQUFjLGVBaURDLENBQUM7d0JBQ2pDLFlBQVcsR0FBRyxVQUFVLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUMvQixDQUFDLE1BQU0sQ0FBQzt3QkFDTixZQUFXLE1BQXFCLE1BQVUsQ0FBekIsWUFBVyxHQUFDLENBQUMsR0FBYSxNQUFBLENBQVgsVUFBVTtvQkFDNUMsQ0FBQzsyQkFFTSxZQUFXO2dCQUNwQixDQUFDLEVBeERvQixVQUFjLGdCQXlEbkMsTUFBTSxHQUFHLFdBQVcsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXRCLE1BQU07WUFDZixDQUFDOzs7V0F4RGtCLFVBQVU7O2tCQUFWLFVBQVU7U0EyRHRCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDM0QsR0FBRyxDQUFDLE1BQU07SUFFVixHQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNO0lBRWhDLEVBQUUsRUFBRSxLQUFLLEtBQUssV0FBVyxFQUFFLENBQUM7UUFDMUIsTUFBTSxHQUFHLElBQUk7UUFFYixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDWixNQUFNLEdBQUcsUUFBUTtRQUNwQixDQUFDO0lBQ0gsQ0FBQyxNQUFNLENBQUM7UUFDTixHQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLO1FBRXhCLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRO0lBQ2pFLENBQUM7V0FFTSxNQUFNO0FBQ2YsQ0FBQztTQUVRLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ2hFLEdBQUcsQ0FBQyxNQUFNO0lBRVYsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ2IsR0FBSyxDQUFDLFVBQVU7UUFFaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU87bUJBQVEsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFROztRQUVoRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBMUZ3QixNQUFvQixPQTJGbEQsS0FBSyxFQUFFLFVBQVU7UUFDeEIsQ0FBQztJQUNILENBQUMsTUFBTSxDQUFDO1FBQ04sR0FBSyxDQUFDLDZCQUE2QixPQTdGUyxLQUFtQixrQ0E2Rk8sSUFBSTtRQUUxRSxFQUFFLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQztZQUNsQyxHQUFLLENBQUMsWUFBWSxHQUFHLElBQUksRUFDbkIsVUFBVTtZQUVoQixNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTzt1QkFBUSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTzs7WUFFOUYsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQXRHc0IsTUFBb0IsT0F1R2hELEtBQUssRUFBRSxVQUFVO1lBQ3hCLENBQUM7UUFDSCxDQUFDLE1BQU0sQ0FBQztZQUNOLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPO1lBRWxDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDWCxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU87WUFDbEQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO1dBRU0sTUFBTTtBQUNmLENBQUMifQ==