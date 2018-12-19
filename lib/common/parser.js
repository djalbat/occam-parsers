'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = require('./configuration'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first;

var CommonParser = function () {
  function CommonParser(rules) {
    _classCallCheck(this, CommonParser);

    this.rules = rules;
  }

  _createClass(CommonParser, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'parse',
    value: function parse(tokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var node = null;

      if (rule === null) {
        var rulesLength = this.rules.length;

        if (rulesLength > 0) {
          var firstRule = first(this.rules);

          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var configuration = Configuration.fromTokensAndRules(tokens, this.rules),
            noWhitespace = false,
            ///
        nodeOrNodes = rule.parse(configuration, noWhitespace);

        if (nodeOrNodes !== null) {
          if (nodeOrNodes instanceof Array) {
            var nodes = nodeOrNodes,
                ///
            firstNode = first(nodes);

            node = firstNode; ///
          } else {
            node = nodeOrNodes; ///
          }
        }
      }

      return node;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwidG9rZW5zIiwicnVsZSIsIm5vZGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UnVsZSIsImNvbmZpZ3VyYXRpb24iLCJmcm9tVG9rZW5zQW5kUnVsZXMiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsInBhcnNlIiwiQXJyYXkiLCJub2RlcyIsImZpcnN0Tm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7O0lBR1FFLEssR0FBVUQsYyxDQUFWQyxLOztJQUVGQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzBCQUVLQyxNLEVBQXFCO0FBQUEsVUFBYkMsSUFBYSx1RUFBTixJQUFNOztBQUN6QixVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBSUQsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1FLGNBQWMsS0FBS0osS0FBTCxDQUFXSyxNQUEvQjs7QUFFQSxZQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQU1FLFlBQVlSLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQUUsaUJBQU9JLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlKLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNSyxnQkFBZ0JaLGNBQWNhLGtCQUFkLENBQWlDUCxNQUFqQyxFQUF5QyxLQUFLRCxLQUE5QyxDQUF0QjtBQUFBLFlBQ01TLGVBQWUsS0FEckI7QUFBQSxZQUM0QjtBQUN0QkMsc0JBQWNSLEtBQUtTLEtBQUwsQ0FBV0osYUFBWCxFQUEwQkUsWUFBMUIsQ0FGcEI7O0FBSUEsWUFBSUMsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCLGNBQUlBLHVCQUF1QkUsS0FBM0IsRUFBa0M7QUFDaEMsZ0JBQU1DLFFBQVFILFdBQWQ7QUFBQSxnQkFBNEI7QUFDdEJJLHdCQUFZaEIsTUFBTWUsS0FBTixDQURsQjs7QUFHQVYsbUJBQU9XLFNBQVAsQ0FKZ0MsQ0FJZDtBQUNuQixXQUxELE1BS087QUFDTFgsbUJBQU9PLFdBQVAsQ0FESyxDQUNlO0FBQ3JCO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPUCxJQUFQO0FBQ0Q7Ozs7OztBQUdIWSxPQUFPQyxPQUFQLEdBQWlCakIsWUFBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IENvbmZpZ3VyYXRpb24uZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgdGhpcy5ydWxlcyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBub2RlT3JOb2RlcywgIC8vL1xuICAgICAgICAgICAgICAgIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUgPSBub2RlT3JOb2RlczsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcbiJdfQ==