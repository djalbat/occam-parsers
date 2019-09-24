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
    value: function parse(configuration) {
      var nodes = [];

      var parsed = parseParts(this.parts, nodes, configuration);

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

function parseParts(parts, nodes, configuration) {
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

      ruleNamePart.parseRuleWithLookAhead(rule, configuration, function (node) {
        var partNodeOrNodes = [];

        if (node !== null) {
          parsed = parseParts(parts, partNodeOrNodes, configuration);
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

  var partNodeOrNodes = part.parse(configuration);

  if (partNodeOrNodes !== null) {
    concat(nodes, partNodeOrNodes);

    parsed = parseParts(parts, nodes, configuration);

    if (!parsed) {
      configuration.backtrack(savedIndex);
    }
  }

  return parsed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJwYXJ0VXRpbGl0aWVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0IiwiZmlyc3QiLCJjb25jYXQiLCJhbGxCdXRGaXJzdCIsIkRlZmluaXRpb24iLCJwYXJ0cyIsImZpcnN0UGFydCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiYWxsQnV0Rmlyc3RQYXJ0cyIsInBhcnQiLCJwdXNoIiwiY29uZmlndXJhdGlvbiIsIm5vZGVzIiwicGFyc2VkIiwicGFyc2VQYXJ0cyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicnVsZSIsImZpbmRSdWxlIiwicGFyc2VSdWxlV2l0aExvb2tBaGVhZCIsIm5vZGUiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJiYWNrdHJhY2siLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7QUFHTSxJQUFFRSxrQkFBRixHQUF5QkgsYUFBekIsQ0FBRUcsa0JBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ2lDRixjQURqQyxDQUNFRSxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNpQ0gsY0FEakMsQ0FDU0csTUFEVDtBQUFBLElBQ2lCQyxXQURqQixHQUNpQ0osY0FEakMsQ0FDaUJJLFdBRGpCOztJQUdBQyxVO0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtB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a0J2QixLQUFLeUIsS0FBTCxDQUFXdkIsYUFBWCxDQUF4Qjs7QUFFQSxNQUFJcUIsb0JBQW9CLElBQXhCLEVBQThCO0FBQzVCL0IsV0FBT1csS0FBUCxFQUFjb0IsZUFBZDs7QUFFQW5CLGFBQVNDLFdBQVdWLEtBQVgsRUFBa0JRLEtBQWxCLEVBQXlCRCxhQUF6QixDQUFUOztBQUVBLFFBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hGLG9CQUFjc0IsU0FBZCxDQUF3QlgsVUFBeEI7QUFDRDtBQUNGOztBQUVELFNBQU9ULE1BQVA7QUFDRCIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0IH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgY29uY2F0LCBhbGxCdXRGaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG5cbiAgYWRkUGFydChwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbik7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sICcnKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb247XG5cbmZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBjb25maWd1cmF0aW9uKSB7XG4gIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDApIHtcbiAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHBhcnRzKSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpO1xuXG4gIHBhcnRzID0gYWxsQnV0Rmlyc3RQYXJ0czsgLy8vXG5cbiAgY29uc3QgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBpc1BhcnRSdWxlTmFtZVBhcnQocGFydCk7XG5cbiAgaWYgKHBhcnRSdWxlTmFtZVBhcnQpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICBpZiAobG9va0FoZWFkKSB7XG4gICAgICBjb25zdCBydWxlID0gcnVsZU5hbWVQYXJ0LmZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBydWxlTmFtZVBhcnQucGFyc2VSdWxlV2l0aExvb2tBaGVhZChydWxlLCBjb25maWd1cmF0aW9uLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IFtdO1xuXG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydE5vZGVPck5vZGVzLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25jYXQobm9kZXMsIG5vZGUpO1xuXG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuXG4gIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICBjb25jYXQobm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbik7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdfQ==