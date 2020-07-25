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
    value: function parse(context, callback) {
      var nodes = [];
      var index = 0,
          parsed = parseParts(this.parts, nodes, index, context, callback);

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

function parseParts(parts, nodes, index, context, callback) {
  var parsed = false;
  var partsLength = parts.length;

  if (index === partsLength) {
    parsed = callback ? callback() : true;
  } else {
    var part = parts[index++];
    parsed = parsePart(part, parts, nodes, index, context, callback);
  }

  return parsed;
}

function parsePart(part, parts, nodes, index, context, callback) {
  var parsed = false;
  var partRuleNamePart = (0, _part.isPartRuleNamePart)(part);

  if (partRuleNamePart) {
    var ruleNamePart = part; ///

    if (callback) {
      var remainingNodes = [],
          partNodeOrNodes = ruleNamePart.parse(context, function () {
        return parseParts(parts, remainingNodes, index, context) && callback();
      });

      if (partNodeOrNodes !== null) {
        (0, _array.concat)(nodes, partNodeOrNodes, remainingNodes);
        parsed = true;
      }
    } else {
      var lookAhead = ruleNamePart.isLookAhead(); ///

      if (lookAhead) {
        var _remainingNodes = [],
            _partNodeOrNodes = ruleNamePart.parse(context, function () {
          return parseParts(parts, _remainingNodes, index, context);
        });

        if (_partNodeOrNodes !== null) {
          (0, _array.concat)(nodes, _partNodeOrNodes, _remainingNodes);
          parsed = true;
        }
      } else {
        var _partNodeOrNodes2 = ruleNamePart.parse(context);

        if (_partNodeOrNodes2 !== null) {
          (0, _array.concat)(nodes, _partNodeOrNodes2);
          parsed = parseParts(parts, nodes, index, context);
        }
      }
    }
  } else {
    var _partNodeOrNodes3 = part.parse(context, callback);

    if (_partNodeOrNodes3 !== null) {
      (0, _array.concat)(nodes, _partNodeOrNodes3);
      parsed = parseParts(parts, nodes, index, context, callback);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImluZGV4IiwicGFyc2VkIiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsInJlbWFpbmluZ05vZGVzIiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFU7QUFDbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsU0FBUyxHQUFHLGtCQUFNLEtBQUtELEtBQVgsQ0FBbEI7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0YsS0FBTCxDQUFXRyxNQUEvQjtBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxnQkFBZ0IsR0FBRyx3QkFBWSxLQUFLSixLQUFqQixDQUF6QjtBQUVBLGFBQU9JLGdCQUFQO0FBQ0Q7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCRCxJQUFoQjtBQUNEOzs7MEJBRUtFLE8sRUFBU0MsUSxFQUFVO0FBQ3ZCLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBRUEsVUFBTUMsS0FBSyxHQUFHLENBQWQ7QUFBQSxVQUNNQyxNQUFNLEdB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LENBRHhCOztBQUdBLFlBQUllLGdCQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsNkJBQU9iLEtBQVAsRUFBY2EsZ0JBQWQsRUFBK0JELGVBQS9CO0FBRUFWLFVBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0Q7QUFDRixPQVRELE1BU087QUFDTCxZQUFNVyxpQkFBZSxHQUFHRixZQUFZLENBQUNHLEtBQWIsQ0FBbUJoQixPQUFuQixDQUF4Qjs7QUFFQSxZQUFJZSxpQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLDZCQUFPYixLQUFQLEVBQWNhLGlCQUFkO0FBRUFYLFVBQUFBLE1BQU0sR0FBR0MsVUFBVSxDQUFDWixLQUFELEVBQVFTLEtBQVIsRUFBZUMsS0FBZixFQUFzQkgsT0FBdEIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQWxDRCxNQWtDTztBQUNMLFFBQU1lLGlCQUFlLEdBQUdqQixJQUFJLENBQUNrQixLQUFMLENBQVdoQixPQUFYLEVBQW9CQyxRQUFwQixDQUF4Qjs7QUFFQSxRQUFJYyxpQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLHlCQUFPYixLQUFQLEVBQWNhLGlCQUFkO0FBRUFYLE1BQUFBLE1BQU0sR0FBR0MsVUFBVSxDQUFDWixLQUFELEVBQVFTLEtBQVIsRUFBZUMsS0FBZixFQUFzQkgsT0FBdEIsRUFBK0JDLFFBQS9CLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRyxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gY2FsbGJhY2sgP1xuICAgICAgICAgICAgICAgY2FsbGJhY2soKSA6XG4gICAgICAgICAgICAgICAgIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4KytdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydFJ1bGVOYW1lUGFydCA9IGlzUGFydFJ1bGVOYW1lUGFydChwYXJ0KTtcblxuICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY29uc3QgcmVtYWluaW5nTm9kZXMgPSBbXSxcbiAgICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHJ1bGVOYW1lUGFydC5wYXJzZShjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCByZW1haW5pbmdOb2RlcywgaW5kZXgsIGNvbnRleHQpICYmIGNhbGxiYWNrKCkpO1xuXG4gICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzLCByZW1haW5pbmdOb2Rlcyk7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCk7ICAvLy9cblxuICAgICAgaWYgKGxvb2tBaGVhZCkge1xuICAgICAgICBjb25zdCByZW1haW5pbmdOb2RlcyA9IFtdLFxuICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcmVtYWluaW5nTm9kZXMsIGluZGV4LCBjb250ZXh0KSk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzLCByZW1haW5pbmdOb2Rlcyk7XG5cbiAgICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXX0=