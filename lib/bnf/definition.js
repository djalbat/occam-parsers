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
      var parsed;
      var nodes = [];
      var index = 0;
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
  var parsed = false;

  if (callback) {
    var remainingNodes = [],
        partNodeOrNodes = part.parse(context, function () {
      return parseParts(parts, remainingNodes, index, context, callback);
    });

    if (partNodeOrNodes !== null) {
      (0, _array.concat)(nodes, partNodeOrNodes, remainingNodes);
      parsed = true;
    }
  } else {
    var partRuleNamePart = (0, _part.isPartRuleNamePart)(part);

    if (partRuleNamePart) {
      var ruleNamePart = part,
          ///
      lookAhead = ruleNamePart.isLookAhead(); ///

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
    } else {
      var _partNodeOrNodes3 = part.parse(context);

      if (_partNodeOrNodes3 !== null) {
        (0, _array.concat)(nodes, _partNodeOrNodes3);
        parsed = parseParts(parts, nodes, index, context);
      }
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJwYXJzZWQiLCJub2RlcyIsImluZGV4IiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicmVtYWluaW5nTm9kZXMiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFU7QUFDbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsU0FBUyxHQUFHLGtCQUFNLEtBQUtELEtBQVgsQ0FBbEI7QUFFQSxhQUFPQyxTQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0YsS0FBTCxDQUFXRyxNQUEvQjtBQUVBLGFBQU9ELFdBQVA7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNRSxnQkFBZ0IsR0FBRyx3QkFBWSxLQUFLSixLQUFqQixDQUF6QjtBQUVBLGFBQU9JLGdCQUFQO0FBQ0Q7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCRCxJQUFoQjtBQUNEOzs7MEJBRUtFLE8sRUFBU0MsUSxFQUFVO0FBQ3ZCLFVBQUlDLE1BQUo7QUFFQSxVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFVBQU1DLEtBQUssR0FBRyxDQUFkO0FB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QXdCUixLQUF4QixFQUErQkosT0FBL0IsQ0FBaEI7QUFBQSxTQUE1QixDQUR4Qjs7QUFHQSxZQUFJYSxnQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLDZCQUFPVixLQUFQLEVBQWNVLGdCQUFkLEVBQStCRCxlQUEvQjtBQUVBVixVQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNEO0FBQ0YsT0FURCxNQVNPO0FBQ0wsWUFBTVcsaUJBQWUsR0FBR0csWUFBWSxDQUFDRixLQUFiLENBQW1CZCxPQUFuQixDQUF4Qjs7QUFFQSxZQUFJYSxpQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLDZCQUFPVixLQUFQLEVBQWNVLGlCQUFkO0FBRUFYLFVBQUFBLE1BQU0sR0FBR0csVUFBVSxDQUFDWixLQUFELEVBQVFVLEtBQVIsRUFBZUMsS0FBZixFQUFzQkosT0FBdEIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0YsS0F0QkQsTUFzQk87QUFDTCxVQUFNYSxpQkFBZSxHQUFHZixJQUFJLENBQUNnQixLQUFMLENBQVdkLE9BQVgsQ0FBeEI7O0FBRUEsVUFBSWEsaUJBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QiwyQkFBT1YsS0FBUCxFQUFjVSxpQkFBZDtBQUVBWCxRQUFBQSxNQUFNLEdBQUdHLFVBQVUsQ0FBQ1osS0FBRCxFQUFRVSxLQUFSLEVBQWVDLEtBQWYsRUFBc0JKLE9BQXRCLENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU9FLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBpc1BhcnRSdWxlTmFtZVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGZpcnN0LCBjb25jYXQsIGFsbEJ1dEZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBcIlwiKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIFwiXCIpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4KytdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVtYWluaW5nTm9kZXMgPSBbXSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHJlbWFpbmluZ05vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spKTtcblxuICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzLCByZW1haW5pbmdOb2Rlcyk7XG5cbiAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnQgPSBpc1BhcnRSdWxlTmFtZVBhcnQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCk7ICAvLy9cblxuICAgICAgaWYgKGxvb2tBaGVhZCkge1xuICAgICAgICBjb25zdCByZW1haW5pbmdOb2RlcyA9IFtdLFxuICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcmVtYWluaW5nTm9kZXMsIGluZGV4LCBjb250ZXh0KSk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzLCByZW1haW5pbmdOb2Rlcyk7XG5cbiAgICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0KTtcblxuICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19