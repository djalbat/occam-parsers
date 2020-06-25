"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _part = require("../utilities/part");

var _array = require("../utilities/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Definition = /*#__PURE__*/function () {
  function Definition(parts) {
    _classCallCheck(this, Definition);

    this.parts = parts;
  }

  _createClass(Definition, [{
    key: "getParts",
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: "getFirstPart",
    value: function getFirstPart() {
      var firstPart = (0, _array.first)(this.parts);
      return firstPart;
    }
  }, {
    key: "getPartsLength",
    value: function getPartsLength() {
      var partsLength = this.parts.length;
      return partsLength;
    }
  }, {
    key: "getAllButFirstParts",
    value: function getAllButFirstParts() {
      var allButFirstParts = (0, _array.allButFirst)(this.parts);
      return allButFirstParts;
    }
  }, {
    key: "addPart",
    value: function addPart(part) {
      this.parts.push(part);
    }
  }, {
    key: "parse",
    value: function parse(context) {
      var nodes = [];
      var parsed = parseParts(this.parts, nodes, context);

      if (!parsed) {
        nodes = null;
      }

      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === "") {
          partsString = partString; ///
        } else {
          partsString = "".concat(partsString, " ").concat(partString);
        }

        return partsString;
      }, ""),
          string = partsString; ///

      return string;
    }
  }]);

  return Definition;
}();

exports["default"] = Definition;

function parseParts(parts, nodes, context) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var parsed = false;
  var partsLength = parts.length;

  if (index === partsLength) {
    parsed = true;
    return parsed;
  }

  var part = parts[index],
      savedIndex = context.getSavedIndex(),
      partRuleNamePart = (0, _part.isPartRuleNamePart)(part);
  index++;

  if (partRuleNamePart) {
    var ruleNamePart = part,
        ///
    lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      var rule = ruleNamePart.findRule(context);
      ruleNamePart.parseRuleWithLookAhead(rule, context, function (node) {
        var partNodeOrNodes = [];

        if (node !== null) {
          parsed = parseParts(parts, partNodeOrNodes, context, index);
        }

        if (parsed) {
          nodes.push(node);
          (0, _array.concat)(nodes, partNodeOrNodes);
        }

        if (!parsed) {
          context.backtrack(savedIndex);
        }

        return parsed;
      });
      return parsed;
    }
  }

  var partNodeOrNodes = part.parse(context);

  if (partNodeOrNodes !== null) {
    (0, _array.concat)(nodes, partNodeOrNodes);
    parsed = parseParts(parts, nodes, context, index);

    if (!parsed) {
      context.backtrack(savedIndex);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0Iiwibm9kZXMiLCJwYXJzZWQiLCJwYXJzZVBhcnRzIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJpbmRleCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicnVsZSIsImZpbmRSdWxlIiwicGFyc2VSdWxlV2l0aExvb2tBaGVhZCIsIm5vZGUiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJiYWNrdHJhY2siLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFU7QUFDbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsU0FBUyxHQUFHLGtCQUFNLEtBQUtELEtBQVgsQ0FBbEI7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0YsS0FBTCxDQUFXRyxNQUEvQjtBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxnQkFBZ0IsR0FBRyx3QkFBWSxLQUFLSixLQUFqQixDQUF6QjtBQUVBLGFBQU9JLGdCQUFQO0FBQ0Q7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCRCxJQUFoQjtBQUNEOzs7MEJBRUtFLE8sRUFBUztBQUNiLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FB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QWE7QUFDWEYsTUFBQUEsT0FBTyxDQUFDcUIsU0FBUixDQUFrQlgsVUFBbEI7QUFDRDtBQUNGOztBQUVELFNBQU9SLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBpc1BhcnRSdWxlTmFtZVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGZpcnN0LCBjb25jYXQsIGFsbEJ1dEZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29udGV4dCwgaW5kZXggPSAwKSB7XG4gIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBpc1BhcnRSdWxlTmFtZVBhcnQocGFydCk7XG5cbiAgaW5kZXgrKztcblxuICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIGlmIChsb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTmFtZVBhcnQuZmluZFJ1bGUoY29udGV4dCk7XG5cbiAgICAgIHJ1bGVOYW1lUGFydC5wYXJzZVJ1bGVXaXRoTG9va0FoZWFkKHJ1bGUsIGNvbnRleHQsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydE5vZGVPck5vZGVzLCBjb250ZXh0LCBpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcblxuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0KTtcblxuICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbnRleHQsIGluZGV4KTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19