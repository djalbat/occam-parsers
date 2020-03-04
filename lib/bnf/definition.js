'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var partUtilities = require('../utilities/part'),
    arrayUtilities = require('../utilities/array');

var isPartRuleNamePart = partUtilities.isPartRuleNamePart,
    first = arrayUtilities.first,
    concat = arrayUtilities.concat,
    allButFirst = arrayUtilities.allButFirst;

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
      var firstPart = first(this.parts);
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
      var allButFirstParts = allButFirst(this.parts);
      return allButFirstParts;
    }
  }, {
    key: "addPart",
    value: function addPart(part) {
      this.parts.push(part);
    }
  }, {
    key: "parse",
    value: function parse(configuration) {
      var nodes = [];
      var parsed = parseParts(this.parts, nodes, configuration);

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

        if (partsString === '') {
          partsString = partString; ///
        } else {
          partsString = "".concat(partsString, " ").concat(partString);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsicGFydFV0aWxpdGllcyIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsImlzUGFydFJ1bGVOYW1lUGFydCIsImZpcnN0IiwiY29uY2F0IiwiYWxsQnV0Rmlyc3QiLCJEZWZpbml0aW9uIiwicGFydHMiLCJmaXJzdFBhcnQiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImFsbEJ1dEZpcnN0UGFydHMiLCJwYXJ0IiwicHVzaCIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsInBhcnNlZCIsInBhcnNlUGFydHMiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJ1bGUiLCJmaW5kUnVsZSIsInBhcnNlUnVsZVdpdGhMb29rQWhlYWQiLCJub2RlIiwicGFydE5vZGVPck5vZGVzIiwiYmFja3RyYWNrIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsT0FBTyxDQUFDLG1CQUFELENBQTdCO0FBQUEsSUFDTUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEOUI7O0FBR00sSUFBRUUsa0JBQUYsR0FBeUJILGFBQXpCLENBQUVHLGtCQUFGO0FBQUEsSUFDRUMsS0FERixHQUNpQ0YsY0FEakMsQ0FDRUUsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDaUNILGNBRGpDLENBQ1NHLE1BRFQ7QUFBQSxJQUNpQkMsV0FEakIsR0FDaUNKLGNBRGpDLENBQ2lCSSxXQURqQjs7SUFHQUMsVTtBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFB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QixhQUF6QixDQUFuQjtBQUNEOztBQUVELFlBQUlFLE1BQUosRUFBWTtBQUNWWixVQUFBQSxNQUFNLENBQUNXLEtBQUQsRUFBUW1CLElBQVIsQ0FBTjtBQUVBOUIsVUFBQUEsTUFBTSxDQUFDVyxLQUFELEVBQVFvQixlQUFSLENBQU47QUFDRDs7QUFFRCxZQUFJLENBQUNuQixNQUFMLEVBQWE7QUFDWEYsVUFBQUEsYUFBYSxDQUFDc0IsU0FBZCxDQUF3QlgsVUFBeEI7QUFDRDs7QUFFRCxlQUFPVCxNQUFQO0FBQ0QsT0FsQkQ7QUFvQkEsYUFBT0EsTUFBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBTW1CLGVBQWUsR0FBR3ZCLElBQUksQ0FBQ3lCLEtBQUwsQ0FBV3ZCLGFBQVgsQ0FBeEI7O0FBRUEsTUFBSXFCLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1Qi9CLElBQUFBLE1BQU0sQ0FBQ1csS0FBRCxFQUFRb0IsZUFBUixDQUFOO0FBRUFuQixJQUFBQSxNQUFNLEdBQUdDLFVBQVUsQ0FBQ1YsS0FBRCxFQUFRUSxLQUFSLEVBQWVELGFBQWYsQ0FBbkI7O0FBRUEsUUFBSSxDQUFDRSxNQUFMLEVBQWE7QUFDWEYsTUFBQUEsYUFBYSxDQUFDc0IsU0FBZCxDQUF3QlgsVUFBeEI7QUFDRDtBQUNGOztBQUVELFNBQU9ULE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGlzUGFydFJ1bGVOYW1lUGFydCB9ID0gcGFydFV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIGNvbmNhdCwgYWxsQnV0Rmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCAnJyksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uO1xuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgY29uZmlndXJhdGlvbikge1xuICBsZXQgcGFyc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKHBhcnRzTGVuZ3RoID09PSAwKSB7XG4gICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIGFsbEJ1dEZpcnN0UGFydHMgPSBhbGxCdXRGaXJzdChwYXJ0cyksXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKTtcblxuICBwYXJ0cyA9IGFsbEJ1dEZpcnN0UGFydHM7IC8vL1xuXG4gIGNvbnN0IHBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gaXNQYXJ0UnVsZU5hbWVQYXJ0KHBhcnQpO1xuXG4gIGlmIChwYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpO1xuXG4gICAgaWYgKGxvb2tBaGVhZCkge1xuICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOYW1lUGFydC5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgICAgcnVsZU5hbWVQYXJ0LnBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBbXTtcblxuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIHBhcnROb2RlT3JOb2RlcywgY29uZmlndXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uY2F0KG5vZGVzLCBub2RlKTtcblxuICAgICAgICAgIGNvbmNhdChub2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKTtcblxuICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgY29uY2F0KG5vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXX0=