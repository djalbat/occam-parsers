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
      var partsNodeOrNodes = [],
          partNodeOrNodes = ruleNamePart.parse(context, function () {
        return parseParts(parts, partsNodeOrNodes, index, context) && callback();
      });

      if (partNodeOrNodes !== null) {
        (0, _array.concat)(nodes, partNodeOrNodes, partsNodeOrNodes);
        parsed = true;
      }
    } else {
      var lookAhead = ruleNamePart.isLookAhead(); ///

      if (lookAhead) {
        var _partsNodeOrNodes = [],
            _partNodeOrNodes = ruleNamePart.parse(context, function () {
          return parseParts(parts, _partsNodeOrNodes, index, context);
        });

        if (_partNodeOrNodes !== null) {
          (0, _array.concat)(nodes, _partNodeOrNodes, _partsNodeOrNodes);
          parsed = true;
        }
      } else {
        var _partNodeOrNodes2 = ruleNamePart.parse(context);

        if (_partNodeOrNodes2 !== null) {
          (0, _array.concat)(nodes, _partNodeOrNodes2);
          parsed = parseParts(parts, nodes, index, context);
        }
      }
    } // if (!callback) {
    //   const lookAhead = ruleNamePart.isLookAhead();  ///
    //
    //   if (lookAhead) {
    //     callback = () => true;  ///
    //   }
    // }
    //
    // if (callback) {
    //   const partsNodeOrNodes = [],
    //         partNodeOrNodes = ruleNamePart.parse(context, () => parseParts(parts, partsNodeOrNodes, index, context) && callback());
    //
    //   if (partNodeOrNodes !== null) {
    //     concat(nodes, partNodeOrNodes, partsNodeOrNodes);
    //
    //     parsed = true;
    //   }
    // } else {
    //   const partNodeOrNodes = ruleNamePart.parse(context);
    //
    //   if (partNodeOrNodes !== null) {
    //     concat(nodes, partNodeOrNodes);
    //
    //     parsed = parseParts(parts, nodes, index, context);
    //   }
    // }

  } else {
    var _partNodeOrNodes3 = part.parse(context, callback);

    if (_partNodeOrNodes3 !== null) {
      (0, _array.concat)(nodes, _partNodeOrNodes3);
      parsed = parseParts(parts, nodes, index, context, callback);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImluZGV4IiwicGFyc2VkIiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsInBhcnRzTm9kZU9yTm9kZXMiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7OztJQUVxQkEsVTtBQUNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxTQUFTLEdBQUcsa0JBQU0sS0FBS0QsS0FBWCxDQUFsQjtBQUVBLGFBQU9DLFNBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFdBQVcsR0FBRyxLQUFLRixLQUFMLENBQVdHLE1BQS9CO0FBRUEsYUFBT0QsV0FBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQU1FLGdCQUFnQixHQUFHLHdCQUFZLEtBQUtKLEtBQWpCLENBQXpCO0FBRUEsYUFBT0ksZ0JBQVA7QUFDRDs7OzRCQUVPQyxJLEVBQU07QUFDWixXQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JELElBQWhCO0FBQ0Q7OzswQkFFS0UsTyxFQUFTQyxRLEVBQVU7QUFDdkIsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFQSxVQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUFBLFVBQ01DLE1BQU0s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QUFBLFNBQTVCLENBRHhCOztBQUdBLFlBQUllLGdCQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsNkJBQU9iLEtBQVAsRUFBY2EsZ0JBQWQsRUFBK0JELGlCQUEvQjtBQUVBVixVQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNEO0FBQ0YsT0FURCxNQVNPO0FBQ0wsWUFBTVcsaUJBQWUsR0FBR0YsWUFBWSxDQUFDRyxLQUFiLENBQW1CaEIsT0FBbkIsQ0FBeEI7O0FBRUEsWUFBSWUsaUJBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1Qiw2QkFBT2IsS0FBUCxFQUFjYSxpQkFBZDtBQUVBWCxVQUFBQSxNQUFNLEdBQUdDLFVBQVUsQ0FBQ1osS0FBRCxFQUFRUyxLQUFSLEVBQWVDLEtBQWYsRUFBc0JILE9BQXRCLENBQW5CO0FBQ0Q7QUFDRjtBQUNGLEtBakNtQixDQWtDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxHQTVERCxNQTRETztBQUNMLFFBQU1lLGlCQUFlLEdBQUdqQixJQUFJLENBQUNrQixLQUFMLENBQVdoQixPQUFYLEVBQW9CQyxRQUFwQixDQUF4Qjs7QUFFQSxRQUFJYyxpQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLHlCQUFPYixLQUFQLEVBQWNhLGlCQUFkO0FBRUFYLE1BQUFBLE1BQU0sR0FBR0MsVUFBVSxDQUFDWixLQUFELEVBQVFTLEtBQVIsRUFBZUMsS0FBZixFQUFzQkgsT0FBdEIsRUFBK0JDLFFBQS9CLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRyxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gY2FsbGJhY2sgP1xuICAgICAgICAgICAgICAgY2FsbGJhY2soKSA6XG4gICAgICAgICAgICAgICAgIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4KytdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydFJ1bGVOYW1lUGFydCA9IGlzUGFydFJ1bGVOYW1lUGFydChwYXJ0KTtcblxuICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY29uc3QgcGFydHNOb2RlT3JOb2RlcyA9IFtdLFxuICAgICAgICAgICAgcGFydE5vZGVPck5vZGVzID0gcnVsZU5hbWVQYXJ0LnBhcnNlKGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZU9yTm9kZXMsIGluZGV4LCBjb250ZXh0KSAmJiBjYWxsYmFjaygpKTtcblxuICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2RlcywgcGFydHNOb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCk7ICAvLy9cblxuICAgICAgaWYgKGxvb2tBaGVhZCkge1xuICAgICAgICBjb25zdCBwYXJ0c05vZGVPck5vZGVzID0gW10sXG4gICAgICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHJ1bGVOYW1lUGFydC5wYXJzZShjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVPck5vZGVzLCBpbmRleCwgY29udGV4dCkpO1xuXG4gICAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2RlcywgcGFydHNOb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKCFjYWxsYmFjaykge1xuICAgIC8vICAgY29uc3QgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCk7ICAvLy9cbiAgICAvL1xuICAgIC8vICAgaWYgKGxvb2tBaGVhZCkge1xuICAgIC8vICAgICBjYWxsYmFjayA9ICgpID0+IHRydWU7ICAvLy9cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAvLyAgIGNvbnN0IHBhcnRzTm9kZU9yTm9kZXMgPSBbXSxcbiAgICAvLyAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHJ1bGVOYW1lUGFydC5wYXJzZShjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVPck5vZGVzLCBpbmRleCwgY29udGV4dCkgJiYgY2FsbGJhY2soKSk7XG4gICAgLy9cbiAgICAvLyAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAvLyAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMsIHBhcnRzTm9kZU9yTm9kZXMpO1xuICAgIC8vXG4gICAgLy8gICAgIHBhcnNlZCA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHJ1bGVOYW1lUGFydC5wYXJzZShjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgIC8vICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgLy9cbiAgICAvLyAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXX0=