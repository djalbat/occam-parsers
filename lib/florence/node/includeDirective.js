'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkToken = require('../token/link'),
    arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

var IncludeDirectiveNode = function (_NonTerminalNode) {
    _inherits(IncludeDirectiveNode, _NonTerminalNode);

    function IncludeDirectiveNode() {
        _classCallCheck(this, IncludeDirectiveNode);

        return _possibleConstructorReturn(this, (IncludeDirectiveNode.__proto__ || Object.getPrototypeOf(IncludeDirectiveNode)).apply(this, arguments));
    }

    _createClass(IncludeDirectiveNode, [{
        key: 'getStringToken',
        value: function getStringToken() {
            var childNodes = this.getChildNodes(),
                firstChildNode = first(childNodes),
                terminalNode = firstChildNode,
                ///
            significantToken = terminalNode.getSignificantToken(),
                stringToken = significantToken; ///

            return stringToken;
        }
    }, {
        key: 'getFilePath',
        value: function getFilePath() {
            var stringToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getStringToken();

            var content = stringToken.getContent(),
                filePath = filePathFromContent(content);

            return filePath;
        }
    }, {
        key: 'update',
        value: function update(clickHandler) {
            var stringToken = this.getStringToken(),
                linkToken = LinkToken.fromStringToken(stringToken, clickHandler);

            stringToken.replaceWith(linkToken);
        }
    }], [{
        key: 'fromNodes',
        value: function fromNodes(nodes, productionName) {
            var childNodes = arrayUtil.keepThird(nodes),
                includeDirectiveNode = new IncludeDirectiveNode(childNodes, productionName);

            nodes = [includeDirectiveNode]; ///

            return nodes;
        }
    }]);

    return IncludeDirectiveNode;
}(NonTerminalNode);

module.exports = IncludeDirectiveNode;

function filePathFromContent(content) {
    var matches = content.match(/^"([^"]+)"$/),
        secondMatch = second(matches),
        filePath = secondMatch; ///

    return filePath;
}

function first(array) {
    return array[0];
}
function second(array) {
    return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2luY2x1ZGVEaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiTGlua1Rva2VuIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIk5vblRlcm1pbmFsTm9kZSIsIkluY2x1ZGVEaXJlY3RpdmVOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzdHJpbmdUb2tlbiIsImdldFN0cmluZ1Rva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmaWxlUGF0aCIsImZpbGVQYXRoRnJvbUNvbnRlbnQiLCJjbGlja0hhbmRsZXIiLCJsaW5rVG9rZW4iLCJmcm9tU3RyaW5nVG9rZW4iLCJyZXBsYWNlV2l0aCIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJrZWVwVGhpcmQiLCJpbmNsdWRlRGlyZWN0aXZlTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsZUFBUixDQUFoQjtBQUFBLElBQ0lDLFlBQVlELFFBQVEsaUJBQVIsQ0FEaEI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEsNEJBQVIsQ0FGdEI7O0lBSU1HLG9COzs7Ozs7Ozs7Ozt5Q0FDYTtBQUNmLGdCQUFJQyxhQUFhLEtBQUtDLGFBQUwsRUFBakI7QUFBQSxnQkFDSUMsaUJBQWlCQyxNQUFNSCxVQUFOLENBRHJCO0FBQUEsZ0JBRUlJLGVBQWVGLGNBRm5CO0FBQUEsZ0JBRW9DO0FBQ2hDRywrQkFBbUJELGFBQWFFLG1CQUFiLEVBSHZCO0FBQUEsZ0JBSUlDLGNBQWNGLGdCQUpsQixDQURlLENBS3FCOztBQUVwQyxtQkFBT0UsV0FBUDtBQUNEOzs7c0NBRWdEO0FBQUEsZ0JBQXJDQSxXQUFxQyx1RUFBdkIsS0FBS0MsY0FBTCxFQUF1Qjs7QUFDL0MsZ0JBQUlDLFVBQVVGLFlBQVlHLFVBQVosRUFBZDtBQUFBLGdCQUNJQyxXQUFXQyxvQkFBb0JILE9BQXBCLENBRGY7O0FBR0EsbUJBQU9FLFFBQVA7QUFDRDs7OytCQUVNRSxZLEVBQWM7QUFDbkIsZ0JBQUlOLGNBQWMsS0FBS0MsY0FBTCxFQUFsQjtBQUFBLGdCQUNJTSxZQUFZbkIsVUFBVW9CLGVBQVYsQ0FBMEJSLFdBQTFCLEVBQXVDTSxZQUF2QyxDQURoQjs7QUFHQU4sd0JBQVlTLFdBQVosQ0FBd0JGLFNBQXhCO0FBQ0Q7OztrQ0FFZ0JHLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxnQkFBSWxCLGFBQWFILFVBQVVzQixTQUFWLENBQW9CRixLQUFwQixDQUFqQjtBQUFBLGdCQUNJRyx1QkFBdUIsSUFBSXJCLG9CQUFKLENBQXlCQyxVQUF6QixFQUFxQ2tCLGNBQXJDLENBRDNCOztBQUdBRCxvQkFBUSxDQUFDRyxvQkFBRCxDQUFSLENBSnNDLENBSU47O0FBRWhDLG1CQUFPSCxLQUFQO0FBQ0Q7Ozs7RUFoQ2dDbkIsZTs7QUFtQ25DdUIsT0FBT0MsT0FBUCxHQUFpQnZCLG9CQUFqQjs7QUFFQSxTQUFTYSxtQkFBVCxDQUE2QkgsT0FBN0IsRUFBc0M7QUFDcEMsUUFBSWMsVUFBVWQsUUFBUWUsS0FBUixDQUFjLGFBQWQsQ0FBZDtBQUFBLFFBQ0lDLGNBQWNDLE9BQU9ILE9BQVAsQ0FEbEI7QUFBQSxRQUVJWixXQUFXYyxXQUZmLENBRG9DLENBR1I7O0FBRTVCLFdBQU9kLFFBQVA7QUFDRDs7QUFFRCxTQUFTUixLQUFULENBQWV3QixLQUFmLEVBQXNCO0FBQUUsV0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0QsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxXQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJpbmNsdWRlRGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGlua1Rva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vbGluaycpLFxuICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEluY2x1ZGVEaXJlY3RpdmVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0U3RyaW5nVG9rZW4oKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIHN0cmluZ1Rva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nVG9rZW47XG4gIH1cblxuICBnZXRGaWxlUGF0aChzdHJpbmdUb2tlbiA9IHRoaXMuZ2V0U3RyaW5nVG9rZW4oKSkge1xuICAgIHZhciBjb250ZW50ID0gc3RyaW5nVG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cblxuICB1cGRhdGUoY2xpY2tIYW5kbGVyKSB7XG4gICAgdmFyIHN0cmluZ1Rva2VuID0gdGhpcy5nZXRTdHJpbmdUb2tlbigpLFxuICAgICAgICBsaW5rVG9rZW4gPSBMaW5rVG9rZW4uZnJvbVN0cmluZ1Rva2VuKHN0cmluZ1Rva2VuLCBjbGlja0hhbmRsZXIpO1xuXG4gICAgc3RyaW5nVG9rZW4ucmVwbGFjZVdpdGgobGlua1Rva2VuKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwua2VlcFRoaXJkKG5vZGVzKSxcbiAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU5vZGUgPSBuZXcgSW5jbHVkZURpcmVjdGl2ZU5vZGUoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgbm9kZXMgPSBbaW5jbHVkZURpcmVjdGl2ZU5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluY2x1ZGVEaXJlY3RpdmVOb2RlO1xuXG5mdW5jdGlvbiBmaWxlUGF0aEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eXCIoW15cIl0rKVwiJC8pLFxuICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICBmaWxlUGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19