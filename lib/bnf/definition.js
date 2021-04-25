"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var Definition = function() {
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
                    if (partsString1 === "") {
                        partsString1 = partString; ///
                    } else {
                        partsString1 = "".concat(partsString1, " ").concat(partString);
                    }
                    return partsString1;
                }, ""), string = partsString; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QsIGFsbEJ1dEZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXgrK107XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgPSBpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKHBhcnQpO1xuXG4gICAgaWYgKHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzTm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gcnVsZU5hbWVQYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgY29udGV4dCkpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFNkIsTUFBb0I7SUFDYixLQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsVUFBVTthQUFWLFVBQVUsQ0FDakIsS0FB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