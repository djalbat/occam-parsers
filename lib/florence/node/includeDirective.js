'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

var IncludeDirectiveNode = function (_NonTerminalNode) {
  _inherits(IncludeDirectiveNode, _NonTerminalNode);

  function IncludeDirectiveNode(childNodes, productionName, filePath) {
    _classCallCheck(this, IncludeDirectiveNode);

    var _this = _possibleConstructorReturn(this, (IncludeDirectiveNode.__proto__ || Object.getPrototypeOf(IncludeDirectiveNode)).call(this, childNodes, productionName));

    _this.filePath = filePath;
    return _this;
  }

  _createClass(IncludeDirectiveNode, [{
    key: 'getFilePath',
    value: function getFilePath() {
      return this.filePath;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.keepThird(nodes),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      significantToken = terminalNode.getSignificantToken(),
          content = significantToken.getContent(),
          filePath = filePathFromContent(content),
          includeDirectiveNode = new IncludeDirectiveNode(childNodes, productionName, filePath);

      nodes = [includeDirectiveNode]; ///

      return nodes;
    }
  }]);

  return IncludeDirectiveNode;
}(NonTerminalNode);

module.exports = IncludeDirectiveNode;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}

function filePathFromContent(content) {
  var matches = content.match(/^"([^"]+)"$/),
      secondMatch = second(matches),
      filePath = secondMatch; ///

  return filePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2luY2x1ZGVEaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkluY2x1ZGVEaXJlY3RpdmVOb2RlIiwiY2hpbGROb2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZmlsZVBhdGgiLCJub2RlcyIsImtlZXBUaGlyZCIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZmlsZVBhdGhGcm9tQ29udGVudCIsImluY2x1ZGVEaXJlY3RpdmVOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Iiwic2Vjb25kIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxpQkFBUixDQUFoQjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSw0QkFBUixDQUR0Qjs7SUFHTUUsb0I7OztBQUNKLGdDQUFZQyxVQUFaLEVBQXdCQyxjQUF4QixFQUF3Q0MsUUFBeEMsRUFBa0Q7QUFBQTs7QUFBQSw0SUFDMUNGLFVBRDBDLEVBQzlCQyxjQUQ4Qjs7QUFHaEQsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFIZ0Q7QUFJakQ7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7OzhCQUVnQkMsSyxFQUFPRixjLEVBQWdCO0FBQ3RDLFVBQUlELGFBQWFKLFVBQVVRLFNBQVYsQ0FBb0JELEtBQXBCLENBQWpCO0FBQUEsVUFDSUUsaUJBQWlCQyxNQUFNTixVQUFOLENBRHJCO0FBQUEsVUFFSU8sZUFBZUYsY0FGbkI7QUFBQSxVQUVvQztBQUNoQ0cseUJBQW1CRCxhQUFhRSxtQkFBYixFQUh2QjtBQUFBLFVBSUlDLFVBQVVGLGlCQUFpQkcsVUFBakIsRUFKZDtBQUFBLFVBS0lULFdBQVdVLG9CQUFvQkYsT0FBcEIsQ0FMZjtBQUFBLFVBTUlHLHVCQUF1QixJQUFJZCxvQkFBSixDQUF5QkMsVUFBekIsRUFBcUNDLGNBQXJDLEVBQXFEQyxRQUFyRCxDQU4zQjs7QUFRQUMsY0FBUSxDQUFDVSxvQkFBRCxDQUFSLENBVHNDLENBU047O0FBRWhDLGFBQU9WLEtBQVA7QUFDRDs7OztFQXZCZ0NMLGU7O0FBMkJuQ2dCLE9BQU9DLE9BQVAsR0FBaUJoQixvQkFBakI7O0FBRUEsU0FBU08sS0FBVCxDQUFlVSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0MsTUFBVCxDQUFnQkQsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7QUFFM0MsU0FBU0osbUJBQVQsQ0FBNkJGLE9BQTdCLEVBQXNDO0FBQ3BDLE1BQUlRLFVBQVVSLFFBQVFTLEtBQVIsQ0FBYyxhQUFkLENBQWQ7QUFBQSxNQUNJQyxjQUFjSCxPQUFPQyxPQUFQLENBRGxCO0FBQUEsTUFFSWhCLFdBQVdrQixXQUZmLENBRG9DLENBR1I7O0FBRTVCLFNBQU9sQixRQUFQO0FBQ0QiLCJmaWxlIjoiaW5jbHVkZURpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEluY2x1ZGVEaXJlY3RpdmVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUsIGZpbGVQYXRoKSB7XG4gICAgc3VwZXIoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmtlZXBUaGlyZChub2RlcyksXG4gICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU5vZGUgPSBuZXcgSW5jbHVkZURpcmVjdGl2ZU5vZGUoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUsIGZpbGVQYXRoKTtcblxuICAgIG5vZGVzID0gW2luY2x1ZGVEaXJlY3RpdmVOb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluY2x1ZGVEaXJlY3RpdmVOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gZmlsZVBhdGhGcm9tQ29udGVudChjb250ZW50KSB7XG4gIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlwiKFteXCJdKylcIiQvKSxcbiAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgZmlsZVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGZpbGVQYXRoO1xufVxuIl19