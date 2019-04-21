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
    lookAhead = ruleNamePart.getLookAhead();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJwYXJ0VXRpbGl0aWVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0IiwiZmlyc3QiLCJjb25jYXQiLCJhbGxCdXRGaXJzdCIsIkRlZmluaXRpb24iLCJwYXJ0cyIsImZpcnN0UGFydCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiYWxsQnV0Rmlyc3RQYXJ0cyIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInBhcnNlZCIsInBhcnNlUGFydHMiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0UnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkIiwiZ2V0TG9va0FoZWFkIiwicnVsZSIsImZpbmRSdWxlIiwicGFyc2VSdWxlV2l0aExvb2tBaGVhZCIsIm5vZGUiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJiYWNrdHJhY2siLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7QUFHTSxJQUFFRSxrQkFBRixHQUF5QkgsYUFBekIsQ0FBRUcsa0JBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ2lDRixjQURqQyxDQUNFRSxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNpQ0gsY0FEakMsQ0FDU0csTUFEVDtBQUFBLElBQ2lCQyxXQURqQixHQUNpQ0osY0FEakMsQ0FDaUJJLFdBRGpCOztJQUdBQyxVO0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFD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YUFBT0EsTUFBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBTW9CLGtCQUFrQmhCLEtBQUtrQixLQUFMLENBQVd6QixhQUFYLEVBQTBCQyxZQUExQixDQUF4Qjs7QUFFQSxNQUFJc0Isb0JBQW9CLElBQXhCLEVBQThCO0FBQzVCL0IsV0FBT1UsS0FBUCxFQUFjcUIsZUFBZDs7QUFFQXRCLG1CQUFlLEtBQWYsQ0FINEIsQ0FHTjs7QUFFdEJFLGFBQVNDLFdBQVdULEtBQVgsRUFBa0JPLEtBQWxCLEVBQXlCRixhQUF6QixFQUF3Q0MsWUFBeEMsQ0FBVDs7QUFFQSxRQUFJLENBQUNFLE1BQUwsRUFBYTtBQUNYSCxvQkFBY3dCLFNBQWQsQ0FBd0JYLFVBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPVixNQUFQO0FBQ0QiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGlzUGFydFJ1bGVOYW1lUGFydCB9ID0gcGFydFV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIGNvbmNhdCwgYWxsQnV0Rmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb247XG5cbmZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgbGV0IHBhcnNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChwYXJ0c0xlbmd0aCA9PT0gMCkge1xuICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QocGFydHMpLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCk7XG5cbiAgcGFydHMgPSBhbGxCdXRGaXJzdFBhcnRzOyAvLy9cblxuICBjb25zdCBwYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IGlzUGFydFJ1bGVOYW1lUGFydChwYXJ0KTtcblxuICBpZiAocGFydFJ1bGVOYW1lUGFydCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuZ2V0TG9va0FoZWFkKCk7XG5cbiAgICBpZiAobG9va0FoZWFkKSB7XG4gICAgICBjb25zdCBydWxlID0gcnVsZU5hbWVQYXJ0LmZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBydWxlTmFtZVBhcnQucGFyc2VSdWxlV2l0aExvb2tBaGVhZChydWxlLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gW107XG5cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0Tm9kZU9yTm9kZXMsIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBub2RlKTtcblxuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19