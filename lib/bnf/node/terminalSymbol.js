'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var TerminalSymbolPart = require('../part/terminalSymbol'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var array = necessary.array;

var TerminalSymbolNode = function (_NonTerminalNode) {
      _inherits(TerminalSymbolNode, _NonTerminalNode);

      function TerminalSymbolNode() {
            _classCallCheck(this, TerminalSymbolNode);

            return _possibleConstructorReturn(this, (TerminalSymbolNode.__proto__ || Object.getPrototypeOf(TerminalSymbolNode)).apply(this, arguments));
      }

      _createClass(TerminalSymbolNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var content = this.getContent(),
                      terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

                  return terminalSymbolPart;
            }
      }, {
            key: 'getContent',
            value: function getContent() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = array.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(TerminalSymbolNode.regularExpression),
                      secondMatch = array.second(matches),
                      content = secondMatch.replace(/\\"/g, '"'); ///

                  return content;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(TerminalSymbolNode, nodes, ruleName);
            }
      }]);

      return TerminalSymbolNode;
}(NonTerminalNode);

module.exports = TerminalSymbolNode;

TerminalSymbolNode.regularExpression = /^"((?:\\.|[^"])*)"$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiTm9uVGVybWluYWxOb2RlIiwiYXJyYXkiLCJUZXJtaW5hbFN5bWJvbE5vZGUiLCJub1doaXRlc3BhY2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRlcm1pbmFsU3ltYm9sUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwicmVwbGFjZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUEzQjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUR4Qjs7SUFHUUcsSyxHQUFVSixTLENBQVZJLEs7O0lBRUZDLGtCOzs7Ozs7Ozs7Ozt5Q0FDU0MsWSxFQUFjO0FBQ3pCLHNCQUFNQyxVQUFVLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxzQkFDTUMscUJBQXFCLElBQUlQLGtCQUFKLENBQXVCSyxPQUF2QixFQUFnQ0QsWUFBaEMsQ0FEM0I7O0FBR0EseUJBQU9HLGtCQUFQO0FBQ0Q7Ozt5Q0FFWTtBQUNYLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCUixNQUFNUyxLQUFOLENBQVlILFVBQVosQ0FEdkI7QUFBQSxzQkFFTUksZUFBZUYsY0FGckI7QUFBQSxzQkFFc0M7QUFDaENHLHdDQUFzQkQsYUFBYU4sVUFBYixFQUg1QjtBQUFBLHNCQUlNUSxVQUFVRCxvQkFBb0JFLEtBQXBCLENBQTBCWixtQkFBbUJhLGlCQUE3QyxDQUpoQjtBQUFBLHNCQUtNQyxjQUFjZixNQUFNZ0IsTUFBTixDQUFhSixPQUFiLENBTHBCO0FBQUEsc0JBTU1ULFVBQVVZLFlBQVlFLE9BQVosQ0FBb0IsTUFBcEIsRUFBMkIsR0FBM0IsQ0FOaEIsQ0FEVyxDQU9zQzs7QUFFakQseUJBQU9kLE9BQVA7QUFDRDs7O2lEQUUyQmUsSyxFQUFPQyxRLEVBQVU7QUFBRSx5QkFBT3BCLGdCQUFnQnFCLG9CQUFoQixDQUFxQ25CLGtCQUFyQyxFQUF5RGlCLEtBQXpELEVBQWdFQyxRQUFoRSxDQUFQO0FBQW1GOzs7O0VBcEJuR3BCLGU7O0FBdUJqQ3NCLE9BQU9DLE9BQVAsR0FBaUJyQixrQkFBakI7O0FBRUFBLG1CQUFtQmEsaUJBQW5CLEdBQXVDLHFCQUF2QyIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBhcnJheS5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKFRlcm1pbmFsU3ltYm9sTm9kZS5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBhcnJheS5zZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgY29udGVudCA9IHNlY29uZE1hdGNoLnJlcGxhY2UoL1xcXFxcIi9nLCdcIicpOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKFRlcm1pbmFsU3ltYm9sTm9kZSwgbm9kZXMsIHJ1bGVOYW1lKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sTm9kZTtcblxuVGVybWluYWxTeW1ib2xOb2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cIigoPzpcXFxcLnxbXlwiXSkqKVwiJC87XG4iXX0=