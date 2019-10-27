'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../../../common/node/nonTerminal');

var first = arrayUtilities.first;

var TerminalPartNode = function (_NonTerminalNode) {
      _inherits(TerminalPartNode, _NonTerminalNode);

      function TerminalPartNode() {
            _classCallCheck(this, TerminalPartNode);

            return _possibleConstructorReturn(this, (TerminalPartNode.__proto__ || Object.getPrototypeOf(TerminalPartNode)).apply(this, arguments));
      }

      _createClass(TerminalPartNode, [{
            key: 'generatePart',
            value: function generatePart(nonWhitespace, lookAhead) {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      node = firstChildNode,
                      ///
                  part = node.generatePart(nonWhitespace, lookAhead);

                  return part;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(TerminalPartNode, ruleName, childNodes);
            }
      }]);

      return TerminalPartNode;
}(NonTerminalNode);

module.exports = TerminalPartNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0L3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiVGVybWluYWxQYXJ0Tm9kZSIsIm5vbldoaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwibm9kZSIsInBhcnQiLCJnZW5lcmF0ZVBhcnQiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxrQ0FBUixDQUR4Qjs7SUFHUUUsSyxHQUFVSCxjLENBQVZHLEs7O0lBRUZDLGdCOzs7Ozs7Ozs7Ozt5Q0FDU0MsYSxFQUFlQyxTLEVBQVc7QUFDckMsc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJOLE1BQU1JLFVBQU4sQ0FEdkI7QUFBQSxzQkFFTUcsT0FBT0QsY0FGYjtBQUFBLHNCQUU4QjtBQUN4QkUseUJBQU9ELEtBQUtFLFlBQUwsQ0FBa0JQLGFBQWxCLEVBQWlDQyxTQUFqQyxDQUhiOztBQUtBLHlCQUFPSyxJQUFQO0FBQ0Q7OztzREFFZ0NFLFEsRUFBVU4sVSxFQUFZO0FBQUUseUJBQU9MLGdCQUFnQlkseUJBQWhCLENBQTBDVixnQkFBMUMsRUFBNERTLFFBQTVELEVBQXNFTixVQUF0RSxDQUFQO0FBQTJGOzs7O0VBVnZITCxlOztBQWEvQmEsT0FBT0MsT0FBUCxHQUFpQlosZ0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFRlcm1pbmFsUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9uV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vbldoaXRlc3BhY2UsIGxvb2tBaGVhZClcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFRlcm1pbmFsUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydE5vZGU7XG4iXX0=