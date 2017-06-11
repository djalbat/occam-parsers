'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('./node/nonTerminal'),
    EpsilonTerminalNode = require('./node/terminal/epsilon');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getNode',
    value: function getNode() {
      return this.Node;
    }
  }, {
    key: 'isFoundByProductionName',
    value: function isFoundByProductionName(productionName) {
      var found = this.name === productionName;

      return found;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setRules',
    value: function setRules(rules) {
      this.rules = rules;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
    }
  }, {
    key: 'addRules',
    value: function addRules(rules) {
      this.rules = this.rules.concat(rules);
    }
  }, {
    key: 'toString',
    value: function toString(maximumProductionNameLength) {
      var rulesString = this.rules.reduce(function (rulesString, rule) {
        var ruleString = rule.toString();

        if (rulesString === null) {
          rulesString = ruleString;
        } else {
          rulesString = rulesString + ' | ' + ruleString;
        }

        return rulesString;
      }, null),
          productionNameLength = this.name.length,
          ///
      paddingLength = maximumProductionNameLength - productionNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n  ' + this.name + padding + ' ::= ' + rulesString + '\n';

      return string;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var ruleNodes = null;

      var someRuleParsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, noWhitespace);

        var ruleParsed = ruleNodes !== null;

        return ruleParsed;
      });

      if (someRuleParsed) {
        var ruleNodesLength = ruleNodes.length;

        if (ruleNodesLength > 0) {
          var productionName = this.name,
              nodes = ruleNodes,
              ///
          lastNode = last(nodes),
              lastNodeNullified = isNodeNullified(lastNode);

          if (lastNodeNullified) {
            var start = -1,
                deleteCount = 1;

            nodes.splice(start, deleteCount);
          }

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, significantTokenTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, significantTokenTypes);

        return rule;
      }),
          Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }, {
    key: 'fromProduction',
    value: function fromProduction(production) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Production;

      var name = production.getName(),
          rules = production.getRules(),
          Node = production.getNode();

      production = new Class(name, rules, Node); ///

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;

function paddingFromPaddingLength(paddingLength) {
  var padding = '';

  for (var position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}

function isNodeNullified(node) {
  var nullified = false;

  if (node instanceof NonTerminalNode) {
    var nonTerminalNode = node,
        ///
    childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      var childNode = first(childNodes);

      nullified = childNode instanceof EpsilonTerminalNode; ///
    }
  }

  return nullified;
}

function first(array) {
  return array[0];
}

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uIiwibmFtZSIsInJ1bGVzIiwiTm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJub2RlIiwiY29uY2F0IiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicnVsZXNTdHJpbmciLCJyZWR1Y2UiLCJydWxlIiwicnVsZVN0cmluZyIsInRvU3RyaW5nIiwicHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJsZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsInN0cmluZyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJydWxlTm9kZXMiLCJzb21lUnVsZVBhcnNlZCIsInNvbWUiLCJwYXJzZSIsInJ1bGVQYXJzZWQiLCJydWxlTm9kZXNMZW5ndGgiLCJub2RlcyIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlTnVsbGlmaWVkIiwiaXNOb2RlTnVsbGlmaWVkIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwiZGVjcmVhc2VEZXB0aCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsImhhc093blByb3BlcnR5IiwicHJvZHVjdGlvbiIsIkNsYXNzIiwiZ2V0UnVsZXMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibnVsbGlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwiY2hpbGROb2RlIiwiZmlyc3QiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHhCO0FBQUEsSUFFTUUsc0JBQXNCRixRQUFRLHlCQUFSLENBRjVCOztJQUlNRyxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs0Q0FFdUJDLGMsRUFBZ0I7QUFDdEMsVUFBTUMsUUFBUyxLQUFLSixJQUFMLEtBQWNHLGNBQTdCOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7OzRCQUVPSixJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzZCQUVRQyxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzRCQUVPSSxJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzZCQUVRSixLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXSyxNQUFYLENBQWtCTCxLQUFsQixDQUFiO0FBQ0Q7Ozs2QkFFUU0sMkIsRUFBNkI7QUFDcEMsVUFBTUMsY0FBYyxLQUFLUCxLQUFMLENBQVdRLE1BQVgsQ0FBa0IsVUFBU0QsV0FBVCxFQUFzQkUsSUFBdEIsRUFBNEI7QUFDMUQsWUFBTUMsYUFBYUQsS0FBS0UsUUFBTCxFQUFuQjs7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QUFVbkQsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLENBQWIsQ0FMb0QsQ0FLVDs7QUFFM0MsYUFBT2dELFVBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJ4RCxVQUFqQjs7QUFFQSxTQUFTa0Isd0JBQVQsQ0FBa0NGLGFBQWxDLEVBQWlEO0FBQy9DLE1BQUlDLFVBQVUsRUFBZDs7QUFFQSxPQUFLLElBQUl3QyxXQUFXLENBQXBCLEVBQXVCQSxXQUFXekMsYUFBbEMsRUFBaUR5QyxVQUFqRCxFQUE2RDtBQUMzRHhDLGVBQVcsR0FBWDtBQUNEOztBQUVELFNBQU9BLE9BQVA7QUFDRDs7QUFFRCxTQUFTb0IsZUFBVCxDQUF5Qi9CLElBQXpCLEVBQStCO0FBQzdCLE1BQUlvRCxZQUFZLEtBQWhCOztBQUVBLE1BQUlwRCxnQkFBZ0JSLGVBQXBCLEVBQXFDO0FBQ25DLFFBQU02RCxrQkFBa0JyRCxJQUF4QjtBQUFBLFFBQThCO0FBQ3hCc0QsaUJBQWFELGdCQUFnQkUsYUFBaEIsRUFEbkI7QUFBQSxRQUVNQyxtQkFBbUJGLFdBQVc3QyxNQUZwQzs7QUFJQSxRQUFJK0MscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFVBQU1DLFlBQVlDLE1BQU1KLFVBQU4sQ0FBbEI7O0FBRUFGLGtCQUFhSyxxQkFBcUJoRSxtQkFBbEMsQ0FIMEIsQ0FHOEI7QUFDekQ7QUFDRjs7QUFFRCxTQUFPMkQsU0FBUDtBQUNEOztBQUVELFNBQVNNLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOztBQUUxQyxTQUFTOUIsSUFBVCxDQUFjOEIsS0FBZCxFQUFxQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1sRCxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQyIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIEVwc2lsb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuICBcbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob2RlO1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmb3VuZCA9ICh0aGlzLm5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcbiAgICBcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgXG4gIHNldFJ1bGVzKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG4gIFxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG4gIFxuICBhZGRSdWxlcyhydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSB0aGlzLnJ1bGVzLmNvbmNhdChydWxlcyk7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IHJ1bGVzU3RyaW5nID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXNTdHJpbmcsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChydWxlc1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBydWxlc1N0cmluZyA9IGAke3J1bGVzU3RyaW5nfSB8ICR7cnVsZVN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVMZW5ndGggPSB0aGlzLm5hbWUubGVuZ3RoLCAgLy8vXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCAtIHByb2R1Y3Rpb25OYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCksXG4gICAgICAgICAgc3RyaW5nID0gYFxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtydWxlc1N0cmluZ31cXG5gO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcHJvZHVjdGlvbiAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBydWxlTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVSdWxlUGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICBjb25zdCBydWxlUGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc29tZVJ1bGVQYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOb2Rlc0xlbmd0aCA9IHJ1bGVOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBub2RlcyA9IHJ1bGVOb2RlcywgIC8vL1xuICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICAgICAgICBsYXN0Tm9kZU51bGxpZmllZCA9IGlzTm9kZU51bGxpZmllZChsYXN0Tm9kZSk7XG5cbiAgICAgICAgaWYgKGxhc3ROb2RlTnVsbGlmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSAtMSxcbiAgICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiwgQ2xhc3MgPSBQcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKTtcbiAgICBcbiAgICBwcm9kdWN0aW9uID0gbmV3IENsYXNzKG5hbWUsIHJ1bGVzLCBOb2RlKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuICBcbiAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9ICcgJztcbiAgfVxuICBcbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZU51bGxpZmllZChub2RlKSB7XG4gIGxldCBudWxsaWZpZWQgPSBmYWxzZTtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgbnVsbGlmaWVkID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25UZXJtaW5hbE5vZGUpOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbGlmaWVkO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==