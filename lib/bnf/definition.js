'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var partUtilities = require('../utilities/part'),
    arrayUtilities = require('../utilities/array');

var lookAheadFromPart = partUtilities.lookAheadFromPart,
    first = arrayUtilities.first,
    concat = arrayUtilities.concat,
    allButFirst = arrayUtilities.allButFirst;

var Definition = function () {
  function Definition(parts) {
    _classCallCheck(this, Definition);

    this.parts = parts;
  }

  _createClass(Definition, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'getFirstPart',
    value: function getFirstPart() {
      var firstPart = first(this.parts);

      return firstPart;
    }
  }, {
    key: 'getPartsLength',
    value: function getPartsLength() {
      var partsLength = this.parts.length;

      return partsLength;
    }
  }, {
    key: 'getAllButFirstParts',
    value: function getAllButFirstParts() {
      var allButFirstParts = allButFirst(this.parts);

      return allButFirstParts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var nodes = [];

      var parsed = parseParts(this.parts, nodes, configuration, noWhitespace);

      if (!parsed) {
        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === null) {
          partsString = partString; ///
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = partsString; ///

      return string;
    }
  }]);

  return Definition;
}();

module.exports = Definition;

function parseParts(parts, nodes, configuration, noWhitespace) {
  var parsed = false;

  var partsLength = parts.length;

  if (partsLength === 0) {
    parsed = true;
  } else {
    var firstPart = first(parts),
        allButFirstParts = allButFirst(parts),
        savedIndex = configuration.getSavedIndex();

    parts = allButFirstParts; ///

    var part = firstPart,
        ///
    lookAhead = lookAheadFromPart(part);

    if (lookAhead) {
      part.parseWithLookAhead(configuration, noWhitespace, function (node) {
        var partNodeOrNodes = [];

        if (node !== null) {
          noWhitespace = false; ///

          parsed = parseParts(parts, partNodeOrNodes, configuration, noWhitespace);
        }

        if (parsed) {
          concat(nodes, node);

          concat(nodes, partNodeOrNodes);
        }

        if (!parsed) {
          configuration.backtrack(savedIndex);
        }

        return parsed;
      });
    } else {
      var partNodeOrNodes = part.parse(configuration, noWhitespace);

      if (partNodeOrNodes !== null) {
        concat(nodes, partNodeOrNodes);

        noWhitespace = false; ///

        parsed = parseParts(parts, nodes, configuration, noWhitespace);

        if (!parsed) {
          configuration.backtrack(savedIndex);
        }
      }
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJwYXJ0VXRpbGl0aWVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwibG9va0FoZWFkRnJvbVBhcnQiLCJmaXJzdCIsImNvbmNhdCIsImFsbEJ1dEZpcnN0IiwiRGVmaW5pdGlvbiIsInBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwicGFyc2VkIiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImxvb2tBaGVhZCIsInBhcnNlV2l0aExvb2tBaGVhZCIsIm5vZGUiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJiYWNrdHJhY2siLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7QUFHTSxJQUFFRSxpQkFBRixHQUF3QkgsYUFBeEIsQ0FBRUcsaUJBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ2lDRixjQURqQyxDQUNFRSxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNpQ0gsY0FEakMsQ0FDU0csTUFEVDtBQUFBLElBQ2lCQyxXQURqQixHQUNpQ0osY0FEakMsQ0FDaUJJLFdBRGpCOztJQUdBQyxVO0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsWUFBWUwsTUFBTSxLQUFLSSxLQUFYLENBQWxCOztB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QUVBLFlBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hILHdCQUFjbUIsU0FBZCxDQUF3Qk4sVUFBeEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPVixNQUFQO0FBQ0QiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGxvb2tBaGVhZEZyb21QYXJ0IH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbjtcblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKHBhcnRzTGVuZ3RoID09PSAwKSB7XG4gICAgcGFyc2VkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJ0cyA9IGFsbEJ1dEZpcnN0UGFydHM7IC8vL1xuXG4gICAgY29uc3QgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gbG9va0FoZWFkRnJvbVBhcnQocGFydCk7XG5cbiAgICBpZiAobG9va0FoZWFkKSB7XG4gICAgICBwYXJ0LnBhcnNlV2l0aExvb2tBaGVhZChjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0Tm9kZU9yTm9kZXMsIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBub2RlKTtcblxuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19