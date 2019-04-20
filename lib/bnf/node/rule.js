'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var first = arrayUtilities.first,
    third = arrayUtilities.third;

var RuleNode = function (_NonTerminalNode) {
      _inherits(RuleNode, _NonTerminalNode);

      function RuleNode() {
            _classCallCheck(this, RuleNode);

            return _possibleConstructorReturn(this, (RuleNode.__proto__ || Object.getPrototypeOf(RuleNode)).apply(this, arguments));
      }

      _createClass(RuleNode, [{
            key: 'generateRule',
            value: function generateRule(Rule) {
                  var name = this.getName(),
                      definitions = this.generateDefinitions(),
                      Node = NonTerminalNode,
                      rule = new Rule(name, definitions, Node);

                  return rule;
            }
      }, {
            key: 'getName',
            value: function getName() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      nameNode = firstChildNode,
                      ///
                  name = nameNode.getName();

                  return name;
            }
      }, {
            key: 'generateDefinitions',
            value: function generateDefinitions() {
                  var childNodes = this.getChildNodes(),
                      thirdChildNode = third(childNodes),
                      definitionsNode = thirdChildNode,
                      ///
                  definitions = definitionsNode.generateDefinitions();

                  return definitions;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);
            }
      }]);

      return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwidGhpcmQiLCJSdWxlTm9kZSIsIlJ1bGUiLCJuYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsIk5vZGUiLCJydWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsIm5hbWVOb2RlIiwidGhpcmRDaGlsZE5vZGUiLCJkZWZpbml0aW9uc05vZGUiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHUUUsSyxHQUFpQkgsYyxDQUFqQkcsSztJQUFPQyxLLEdBQVVKLGMsQ0FBVkksSzs7SUFFVEMsUTs7Ozs7Ozs7Ozs7eUNBQ1NDLEksRUFBTTtBQUNqQixzQkFBTUMsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxzQkFDTUMsY0FBYyxLQUFLQyxtQkFBTCxFQURwQjtBQUFBLHNCQUVNQyxPQUFPVCxlQUZiO0FBQUEsc0JBR01VLE9BQU8sSUFBSU4sSUFBSixDQUFTQyxJQUFULEVBQWVFLFdBQWYsRUFBNEJFLElBQTVCLENBSGI7O0FBS0EseUJBQU9DLElBQVA7QUFDRDs7O3NDQUVTO0FBQ1Isc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJaLE1BQU1VLFVBQU4sQ0FEdkI7QUFBQSxzQkFFTUcsV0FBV0QsY0FGakI7QUFBQSxzQkFFa0M7QUFDNUJSLHlCQUFPUyxTQUFTUixPQUFULEVBSGI7O0FBS0EseUJBQU9ELElBQVA7QUFDRDs7O2tEQUVxQjtBQUNwQixzQkFBTU0sYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01HLGlCQUFpQmIsTUFBTVMsVUFBTixDQUR2QjtBQUFBLHNCQUVNSyxrQkFBa0JELGNBRnhCO0FBQUEsc0JBRXlDO0FBQ25DUixnQ0FBY1MsZ0JBQWdCUixtQkFBaEIsRUFIcEI7O0FBS0EseUJBQU9ELFdBQVA7QUFDRDs7O3NEQUVnQ1UsUSxFQUFVTixVLEVBQVk7QUFBRSx5QkFBT1gsZ0JBQWdCa0IseUJBQWhCLENBQTBDZixRQUExQyxFQUFvRGMsUUFBcEQsRUFBOEROLFVBQTlELENBQVA7QUFBbUY7Ozs7RUE1QnZIWCxlOztBQStCdkJtQixPQUFPQyxPQUFQLEdBQWlCakIsUUFBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGUoUnVsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBuYW1lTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG5hbWVOb2RlLmdldE5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgdGhpcmRDaGlsZE5vZGUgPSB0aGlyZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSB0aGlyZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNOb2RlLmdlbmVyYXRlRGVmaW5pdGlvbnMoKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOb2RlO1xuIl19