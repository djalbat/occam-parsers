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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwicGFydCIsInB1c2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImluZGV4IiwicGFyc2VkIiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsInBhcnRzTm9kZU9yTm9kZXMiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7OztJQUVxQkEsVTtBQUNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxTQUFTLEdBQUcsa0JBQU0sS0FBS0QsS0FBWCxDQUFsQjtBQUVBLGFBQU9DLFNBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLFdBQVcsR0FBRyxLQUFLRixLQUFMLENBQVdHLE1BQS9CO0FBRUEsYUFBT0QsV0FBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQU1FLGdCQUFnQixHQUFHLHdCQUFZLEtBQUtKLEtBQWpCLENBQXpCO0FBRUEsYUFBT0ksZ0JBQVA7QUFDRDs7OzRCQUVPQyxJLEVBQU07QUFDWixXQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JELElBQWhCO0FBQ0Q7OzswQkFFS0UsTyxFQUFTQyxRLEVBQVU7QUFDdkIsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFQSxVQUFNQyxLQUFLLEdBQUcsQ0FBZDtBQUFBLFVBQ01DLE1BQU0s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QUFBLFNBQTVCLENBRHhCOztBQUdBLFlBQUllLGdCQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsNkJBQU9iLEtBQVAsRUFBY2EsZ0JBQWQsRUFBK0JELGlCQUEvQjtBQUVBVixVQUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNEO0FBQ0YsT0FURCxNQVNPO0FBQ0wsWUFBTVcsaUJBQWUsR0FBR0YsWUFBWSxDQUFDRyxLQUFiLENBQW1CaEIsT0FBbkIsQ0FBeEI7O0FBRUEsWUFBSWUsaUJBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1Qiw2QkFBT2IsS0FBUCxFQUFjYSxpQkFBZDtBQUVBWCxVQUFBQSxNQUFNLEdBQUdDLFVBQVUsQ0FBQ1osS0FBRCxFQUFRUyxLQUFSLEVBQWVDLEtBQWYsRUFBc0JILE9BQXRCLENBQW5CO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0FsQ0QsTUFrQ087QUFDTCxRQUFNZSxpQkFBZSxHQUFHakIsSUFBSSxDQUFDa0IsS0FBTCxDQUFXaEIsT0FBWCxFQUFvQkMsUUFBcEIsQ0FBeEI7O0FBRUEsUUFBSWMsaUJBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1Qix5QkFBT2IsS0FBUCxFQUFjYSxpQkFBZDtBQUVBWCxNQUFBQSxNQUFNLEdBQUdDLFVBQVUsQ0FBQ1osS0FBRCxFQUFRUyxLQUFSLEVBQWVDLEtBQWYsRUFBc0JILE9BQXRCLEVBQStCQyxRQUEvQixDQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0csTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGlzUGFydFJ1bGVOYW1lUGFydCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgZmlyc3QsIGNvbmNhdCwgYWxsQnV0Rmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgYWRkUGFydChwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgXCJcIiksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IGNhbGxiYWNrID9cbiAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleCsrXTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnQocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnQgPSBpc1BhcnRSdWxlTmFtZVBhcnQocGFydCk7XG5cbiAgaWYgKHBhcnRSdWxlTmFtZVBhcnQpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHBhcnRzTm9kZU9yTm9kZXMgPSBbXSxcbiAgICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHJ1bGVOYW1lUGFydC5wYXJzZShjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVPck5vZGVzLCBpbmRleCwgY29udGV4dCkgJiYgY2FsbGJhY2soKSk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMsIHBhcnRzTm9kZU9yTm9kZXMpO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpOyAgLy8vXG5cbiAgICAgIGlmIChsb29rQWhlYWQpIHtcbiAgICAgICAgY29uc3QgcGFydHNOb2RlT3JOb2RlcyA9IFtdLFxuICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBydWxlTmFtZVBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlT3JOb2RlcywgaW5kZXgsIGNvbnRleHQpKTtcblxuICAgICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMsIHBhcnRzTm9kZU9yTm9kZXMpO1xuXG4gICAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcnVsZU5hbWVQYXJ0LnBhcnNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19