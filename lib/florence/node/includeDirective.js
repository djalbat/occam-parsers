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
          firstChildNodeSignificantToken = firstChildNode.getSignificantToken(),
          firstChildNodeSignificantTokenContent = firstChildNodeSignificantToken.getContent(),
          filePath = filePathFromContent(firstChildNodeSignificantTokenContent),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2luY2x1ZGVEaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkluY2x1ZGVEaXJlY3RpdmVOb2RlIiwiY2hpbGROb2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZmlsZVBhdGgiLCJub2RlcyIsImtlZXBUaGlyZCIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZVNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZmlyc3RDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuQ29udGVudCIsImdldENvbnRlbnQiLCJmaWxlUGF0aEZyb21Db250ZW50IiwiaW5jbHVkZURpcmVjdGl2ZU5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJzZWNvbmQiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxpQkFBUixDQUFoQjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSw0QkFBUixDQUR0Qjs7SUFHTUUsb0I7OztBQUNKLGdDQUFZQyxVQUFaLEVBQXdCQyxjQUF4QixFQUF3Q0MsUUFBeEMsRUFBa0Q7QUFBQTs7QUFBQSw0SUFDMUNGLFVBRDBDLEVBQzlCQyxjQUQ4Qjs7QUFHaEQsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFIZ0Q7QUFJakQ7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFFBQVo7QUFDRDs7OzhCQUVnQkMsSyxFQUFPRixjLEVBQWdCO0FBQ3RDLFVBQUlELGFBQWFKLFVBQVVRLFNBQVYsQ0FBb0JELEtBQXBCLENBQWpCO0FBQUEsVUFDSUUsaUJBQWlCQyxNQUFNTixVQUFOLENBRHJCO0FBQUEsVUFFSU8saUNBQWlDRixlQUFlRyxtQkFBZixFQUZyQztBQUFBLFVBR0lDLHdDQUF3Q0YsK0JBQStCRyxVQUEvQixFQUg1QztBQUFBLFVBSUlSLFdBQVdTLG9CQUFvQkYscUNBQXBCLENBSmY7QUFBQSxVQUtJRyx1QkFBdUIsSUFBSWIsb0JBQUosQ0FBeUJDLFVBQXpCLEVBQXFDQyxjQUFyQyxFQUFxREMsUUFBckQsQ0FMM0I7O0FBT0FDLGNBQVEsQ0FBQ1Msb0JBQUQsQ0FBUixDQVJzQyxDQVFOOztBQUVoQyxhQUFPVCxLQUFQO0FBQ0Q7Ozs7RUF0QmdDTCxlOztBQTBCbkNlLE9BQU9DLE9BQVAsR0FBaUJmLG9CQUFqQjs7QUFFQSxTQUFTTyxLQUFULENBQWVTLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTQyxNQUFULENBQWdCRCxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOztBQUUzQyxTQUFTSixtQkFBVCxDQUE2Qk0sT0FBN0IsRUFBc0M7QUFDcEMsTUFBSUMsVUFBVUQsUUFBUUUsS0FBUixDQUFjLGFBQWQsQ0FBZDtBQUFBLE1BQ0lDLGNBQWNKLE9BQU9FLE9BQVAsQ0FEbEI7QUFBQSxNQUVJaEIsV0FBV2tCLFdBRmYsQ0FEb0MsQ0FHUjs7QUFFNUIsU0FBT2xCLFFBQVA7QUFDRCIsImZpbGUiOiJpbmNsdWRlRGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vYXJyYXlVdGlsJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vYm5mL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgZmlsZVBhdGgpIHtcbiAgICBzdXBlcihjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwua2VlcFRoaXJkKG5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdENoaWxkTm9kZVNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gZmlyc3RDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aEZyb21Db250ZW50KGZpcnN0Q2hpbGROb2RlU2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQpLFxuICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTm9kZSA9IG5ldyBJbmNsdWRlRGlyZWN0aXZlTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgZmlsZVBhdGgpO1xuXG4gICAgbm9kZXMgPSBbaW5jbHVkZURpcmVjdGl2ZU5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5jbHVkZURpcmVjdGl2ZU5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5mdW5jdGlvbiBmaWxlUGF0aEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eXCIoW15cIl0rKVwiJC8pLFxuICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICBmaWxlUGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG4iXX0=