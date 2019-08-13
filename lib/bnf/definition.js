'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var partUtilities = require('../utilities/part'),
    arrayUtilities = require('../utilities/array');

var isPartRuleNamePart = partUtilities.isPartRuleNamePart,
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
    key: 'addPart',
    value: function addPart(part) {
      this.parts.push(part);
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

        if (partsString === '') {
          partsString = partString; ///
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, ''),
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

    return parsed;
  }

  var firstPart = first(parts),
      allButFirstParts = allButFirst(parts),
      savedIndex = configuration.getSavedIndex();

  parts = allButFirstParts; ///

  var part = firstPart,
      ///
  partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    var ruleNamePart = part,
        ///
    lookAhead = ruleNamePart.isLookAhead();

    if (lookAhead) {
      var rule = ruleNamePart.findRule(configuration);

      ruleNamePart.parseRuleWithLookAhead(rule, configuration, noWhitespace, function (node) {
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

      return parsed;
    }
  }

  var partNodeOrNodes = part.parse(configuration, noWhitespace);

  if (partNodeOrNodes !== null) {
    concat(nodes, partNodeOrNodes);

    noWhitespace = false; ///

    parsed = parseParts(parts, nodes, configuration, noWhitespace);

    if (!parsed) {
      configuration.backtrack(savedIndex);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJwYXJ0VXRpbGl0aWVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0IiwiZmlyc3QiLCJjb25jYXQiLCJhbGxCdXRGaXJzdCIsIkRlZmluaXRpb24iLCJwYXJ0cyIsImZpcnN0UGFydCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiYWxsQnV0Rmlyc3RQYXJ0cyIsInBhcnQiLCJwdXNoIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwicGFyc2VkIiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicnVsZSIsImZpbmRSdWxlIiwicGFyc2VSdWxlV2l0aExvb2tBaGVhZCIsIm5vZGUiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJiYWNrdHJhY2siLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7QUFHTSxJQUFFRSxrQkFBRixHQUF5QkgsYUFBekIsQ0FBRUcsa0JBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ2lDRixjQURqQyxDQUNFRSxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNpQ0gsY0FEakMsQ0FDU0csTUFEVDtBQUFBLElBQ2lCQyxXQURqQixHQUNpQ0osY0FEakMsQ0FDaUJJLFdBRGpCOztJQUdBQyxVO0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JB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SCx3QkFBY3VCLFNBQWQsQ0FBd0JYLFVBQXhCO0FBQ0Q7O0FBRUQsZUFBT1QsTUFBUDtBQUNELE9BcEJEOztBQXNCQSxhQUFPQSxNQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNbUIsa0JBQWtCeEIsS0FBSzBCLEtBQUwsQ0FBV3hCLGFBQVgsRUFBMEJDLFlBQTFCLENBQXhCOztBQUVBLE1BQUlxQixvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJoQyxXQUFPWSxLQUFQLEVBQWNvQixlQUFkOztBQUVBckIsbUJBQWUsS0FBZixDQUg0QixDQUdOOztBQUV0QkUsYUFBU0MsV0FBV1gsS0FBWCxFQUFrQlMsS0FBbEIsRUFBeUJGLGFBQXpCLEVBQXdDQyxZQUF4QyxDQUFUOztBQUVBLFFBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hILG9CQUFjdUIsU0FBZCxDQUF3QlgsVUFBeEI7QUFDRDtBQUNGOztBQUVELFNBQU9ULE1BQVA7QUFDRCIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgYWRkUGFydChwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCAnJyksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uO1xuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDApIHtcbiAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHBhcnRzKSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpO1xuXG4gIHBhcnRzID0gYWxsQnV0Rmlyc3RQYXJ0czsgLy8vXG5cbiAgY29uc3QgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBpc1BhcnRSdWxlTmFtZVBhcnQocGFydCk7XG5cbiAgaWYgKHBhcnRSdWxlTmFtZVBhcnQpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICBpZiAobG9va0FoZWFkKSB7XG4gICAgICBjb25zdCBydWxlID0gcnVsZU5hbWVQYXJ0LmZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBydWxlTmFtZVBhcnQucGFyc2VSdWxlV2l0aExvb2tBaGVhZChydWxlLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0Tm9kZU9yTm9kZXMsIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBub2RlKTtcblxuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19