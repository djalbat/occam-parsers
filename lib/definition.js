"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _lookAhead = require("./utilities/lookAhead");
var _constants = require("./constants");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
            key: "addPart",
            value: function addPart(part) {
                this.parts.push(part);
            }
        },
        {
            key: "replaceParts",
            value: function replaceParts(start) {
                for(var _len = arguments.length, replacementParts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    replacementParts[_key - 1] = arguments[_key];
                }
                var _parts;
                var deleteCount = Infinity, replacedParts = (_parts = this.parts).splice.apply(_parts, [
                    start,
                    deleteCount
                ].concat(_toConsumableArray(replacementParts)));
                return replacedParts;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xvb2tBaGVhZFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgYWRkUGFydChwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpO1xuICB9XG5cbiAgcmVwbGFjZVBhcnRzKHN0YXJ0LCAuLi5yZXBsYWNlbWVudFBhcnRzKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSBJbmZpbml0eSxcbiAgICAgICAgICByZXBsYWNlZFBhcnRzID0gdGhpcy5wYXJ0cy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFBhcnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlZFBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiYWRkUGFydCIsInBhcnQiLCJwdXNoIiwicmVwbGFjZVBhcnRzIiwic3RhcnQiLCJyZXBsYWNlbWVudFBhcnRzIiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsInJlcGxhY2VkUGFydHMiLCJzcGxpY2UiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImluZGV4IiwicGFyc2VQYXJ0cyIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWMsSUFBQSxVQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTtBQUNyQixJQUFBLFVBQWEsV0FBYixhQUFhLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLFVBQVUsaUJBQWhCO2FBQU1BLFVBQVUsQ0FDakJDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBUSxFQUFSQSxV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