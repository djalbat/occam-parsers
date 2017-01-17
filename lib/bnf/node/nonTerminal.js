'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(childNodes, productionName) {
    _classCallCheck(this, NonTerminalNode);

    this.childNodes = childNodes;
    this.productionName = productionName;
  }

  _createClass(NonTerminalNode, [{
    key: 'getChildNodes',
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode),
          parseTree = nonTerminalNodeParseTree; ///

      return parseTree;
    }
  }, {
    key: 'query',
    value: function query(expression) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (expression === '*' || expression === this.productionName) {
        return this;
      }

      var queryRegExpPattern = '^(?:' + this.productionName + '|\\*)(?:\\[(\\d+)\\])?/(.+)',
          queryRegExp = new RegExp(queryRegExpPattern),
          matches = expression.match(queryRegExp);

      if (matches === null) {
        return null;
      }

      var secondMatch = second(matches),
          modifierIndex = parseInt(secondMatch),
          ///
      modifierIndexInteger = !isNaN(modifierIndex);

      if (modifierIndexInteger) {
        if (modifierIndex !== index) {
          return [];
        }
      }

      var thirdMatch = third(matches),
          childExpression = thirdMatch,
          ///
      childIndex = 0,
          nodes = this.childNodes.reduce(function (nodes, childNode) {
        var childNodeNodes = childNode.query(childExpression, childIndex);

        if (childNodeNodes !== null) {
          nodes = nodes.concat(childNodeNodes);

          childIndex++;
        }

        return nodes;
      }, []);

      return nodes;
    }
  }, {
    key: 'update',
    value: function update() {
      this.childNodes.forEach(function (childNode) {
        childNode.update();
      });
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes,
          ///
      nonTerminalNode = new NonTerminalNode(childNodes, productionName);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsInByb2R1Y3Rpb25OYW1lIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsImV4cHJlc3Npb24iLCJpbmRleCIsInF1ZXJ5UmVnRXhwUGF0dGVybiIsInF1ZXJ5UmVnRXhwIiwiUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJtb2RpZmllckluZGV4IiwicGFyc2VJbnQiLCJtb2RpZmllckluZGV4SW50ZWdlciIsImlzTmFOIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiY2hpbGRFeHByZXNzaW9uIiwiY2hpbGRJbmRleCIsIm5vZGVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJxdWVyeSIsImNvbmNhdCIsImZvckVhY2giLCJ1cGRhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSwyQkFBMkJDLFFBQVEsOEJBQVIsQ0FBL0I7O0lBRU1DLGU7QUFDSiwyQkFBWUMsVUFBWixFQUF3QkMsY0FBeEIsRUFBd0M7QUFBQTs7QUFDdEMsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLRCxVQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLGtCQUFrQixJQUF0QjtBQUFBLFVBQTZCO0FBQ3pCQyxpQ0FBMkJOLHlCQUF5Qk8sbUJBQXpCLENBQTZDRixlQUE3QyxDQUQvQjtBQUFBLFVBRUlHLFlBQVlGLHdCQUZoQixDQURhLENBRzhCOztBQUUzQyxhQUFPRSxTQUFQO0FBQ0Q7OzswQkFFS0MsVSxFQUEwQjtBQUFBLFVBQWRDLEtBQWMsdUVBQU4sSUFBTTs7QUFDOUIsVUFBS0QsZUFBZSxHQUFoQixJQUNDQSxlQUFlLEtBQUtMLGNBRHpCLEVBQzBDO0FBQ3hDLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlPLDhCQUE0QixLQUFLUCxjQUFqQyxnQ0FBSjtBQUFBLFVBQ0lRLGNBQWMsSUFBSUMsTUFBSixDQUFXRixrQkFBWCxDQURsQjtBQUFBLFVBRUlHLFVBQVVMLFdBQVdNLEtBQVgsQ0FBaUJILFdBQWpCLENBRmQ7O0FBSUEsVUFBSUUsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJRSxjQUFjQyxPQUFPSCxPQUFQLENBQWxCO0FBQUEsVUFDSUksZ0JBQWdCQyxTQUFTSCxXQUFULENBRHBCO0FBQUEsVUFDNEM7QUFDeENJLDZCQUF1QixDQUFDQyxNQUFNSCxhQUFOLENBRjVCOztBQUlBLFVBQUlFLG9CQUFKLEVBQTBCO0FBQ3hCLFlBQUlGLGtCQUFrQlIsS0FBdEIsRUFBNkI7QUFDM0IsaUJBQU8sRUFBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSVksYUFBYUMsTUFBTVQsT0FBTixDQUFqQjtBQUFBLFVBQ0lVLGtCQUFrQkYsVUFEdEI7QUFBQSxVQUNtQztBQUMvQkcsbUJBQWEsQ0FGakI7QUFBQSxVQUdJQyxRQUFRLEtBQUt2QixVQUFMLENBQWdCd0IsTUFBaEIsQ0FBdUIsVUFBU0QsS0FBVCxFQUFnQkUsU0FBaEIsRUFBMkI7QUFDeEQsWUFBSUMsaUJBQWlCRCxVQUFVRSxLQUFWLENBQWdCTixlQUFoQixFQUFpQ0MsVUFBakMsQ0FBckI7O0FBRUEsWUFBSUksbUJBQW1CLElBQXZCLEVBQTZCO0FBQzNCSCxrQkFBUUEsTUFBTUssTUFBTixDQUFhRixjQUFiLENBQVI7O0FBRUFKO0FBQ0Q7O0FBRUQsZUFBT0MsS0FBUDtBQUNELE9BVk8sRUFVTCxFQVZLLENBSFo7O0FBZUEsYUFBT0EsS0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLdkIsVUFBTCxDQUFnQjZCLE9BQWhCLENBQXdCLFVBQVNKLFNBQVQsRUFBb0I7QUFDMUNBLGtCQUFVSyxNQUFWO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRWdCUCxLLEVBQU90QixjLEVBQWdCO0FBQ3RDLFVBQUlELGFBQWF1QixLQUFqQjtBQUFBLFVBQXdCO0FBQ3BCckIsd0JBQWtCLElBQUlILGVBQUosQ0FBb0JDLFVBQXBCLEVBQWdDQyxjQUFoQyxDQUR0Qjs7QUFHQXNCLGNBQVEsQ0FBQ3JCLGVBQUQsQ0FBUixDQUpzQyxDQUlYOztBQUUzQixhQUFPcUIsS0FBUDtBQUNEOzs7Ozs7QUFHSFEsT0FBT0MsT0FBUCxHQUFpQmpDLGVBQWpCOztBQUVBLFNBQVNlLE1BQVQsQ0FBZ0JtQixLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNiLEtBQVQsQ0FBZWEsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG4gIFxuICBxdWVyeShleHByZXNzaW9uLCBpbmRleCA9IG51bGwpIHtcbiAgICBpZiAoKGV4cHJlc3Npb24gPT09ICcqJykgfHxcbiAgICAgICAgKGV4cHJlc3Npb24gPT09IHRoaXMucHJvZHVjdGlvbk5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcXVlcnlSZWdFeHBQYXR0ZXJuID0gYF4oPzoke3RoaXMucHJvZHVjdGlvbk5hbWV9fFxcXFwqKSg/OlxcXFxbKFxcXFxkKylcXFxcXSk/XFwvKC4rKWAsXG4gICAgICAgIHF1ZXJ5UmVnRXhwID0gbmV3IFJlZ0V4cChxdWVyeVJlZ0V4cFBhdHRlcm4pLFxuICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChxdWVyeVJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBtb2RpZmllckluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpLCAgLy8vXG4gICAgICAgIG1vZGlmaWVySW5kZXhJbnRlZ2VyID0gIWlzTmFOKG1vZGlmaWVySW5kZXgpO1xuXG4gICAgaWYgKG1vZGlmaWVySW5kZXhJbnRlZ2VyKSB7XG4gICAgICBpZiAobW9kaWZpZXJJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIGNoaWxkRXhwcmVzc2lvbiA9IHRoaXJkTWF0Y2gsICAvLy9cbiAgICAgICAgY2hpbGRJbmRleCA9IDAsXG4gICAgICAgIG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihub2RlcywgY2hpbGROb2RlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZU5vZGVzID0gY2hpbGROb2RlLnF1ZXJ5KGNoaWxkRXhwcmVzc2lvbiwgY2hpbGRJbmRleCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICAgICAgY2hpbGRJbmRleCsrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgY2hpbGROb2RlLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IE5vblRlcm1pbmFsTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIl19