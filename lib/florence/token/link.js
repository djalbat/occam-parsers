'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    Token = lexers.Token,
    SignificantToken = lexers.SignificantToken;

var LinkToken = function (_SignificantToken) {
  _inherits(LinkToken, _SignificantToken);

  function LinkToken(content, line) {
    _classCallCheck(this, LinkToken);

    var type = LinkToken.type;

    return _possibleConstructorReturn(this, (LinkToken.__proto__ || Object.getPrototypeOf(LinkToken)).call(this, content, line, type));
  }

  _createClass(LinkToken, [{
    key: 'getHTML',
    value: function getHTML() {
      var type = this.getType(),
          content = this.getContent(),
          innerHTML = content,
          ///
      className = type,
          ///
      sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
          html = '<a class="' + className + '" onClick="alert(\'click!\'); ">' + sanitisedInnerHTML + '</a>';

      return html;
    }
  }], [{
    key: 'fromStringToken',
    value: function fromStringToken(stringToken, clickHandler) {
      var content = stringToken.getContent(),
          line = stringToken.getLine(),
          lineToken = new LinkToken(content, line, clickHandler);

      return lineToken;
    }
  }]);

  return LinkToken;
}(SignificantToken);

module.exports = LinkToken;

LinkToken.type = 'link';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS90b2tlbi9saW5rLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUb2tlbiIsIlNpZ25pZmljYW50VG9rZW4iLCJMaW5rVG9rZW4iLCJjb250ZW50IiwibGluZSIsInR5cGUiLCJnZXRUeXBlIiwiZ2V0Q29udGVudCIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInNhbml0aXNlZElubmVySFRNTCIsInNhbml0aXNlSFRNTCIsImh0bWwiLCJzdHJpbmdUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldExpbmUiLCJsaW5lVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsUUFBUUYsT0FBT0UsS0FEbkI7QUFBQSxJQUVJQyxtQkFBbUJILE9BQU9HLGdCQUY5Qjs7SUFJTUMsUzs7O0FBQ0oscUJBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCO0FBQUE7O0FBQ3pCLFFBQUlDLE9BQU9ILFVBQVVHLElBQXJCOztBQUR5QixpSEFHbkJGLE9BSG1CLEVBR1ZDLElBSFUsRUFHSkMsSUFISTtBQUkxQjs7Ozs4QkFFUztBQUNSLFVBQUlBLE9BQU8sS0FBS0MsT0FBTCxFQUFYO0FBQUEsVUFDSUgsVUFBVSxLQUFLSSxVQUFMLEVBRGQ7QUFBQSxVQUVJQyxZQUFZTCxPQUZoQjtBQUFBLFVBRXlCO0FBQ3JCTSxrQkFBWUosSUFIaEI7QUFBQSxVQUd1QjtBQUNuQkssMkJBQXFCVixNQUFNVyxZQUFOLENBQW1CSCxTQUFuQixDQUp6QjtBQUFBLFVBS0lJLHNCQUFvQkgsU0FBcEIsd0NBQThEQyxrQkFBOUQsU0FMSjs7QUFPQSxhQUFPRSxJQUFQO0FBQ0Q7OztvQ0FFc0JDLFcsRUFBYUMsWSxFQUFjO0FBQ2hELFVBQUlYLFVBQVVVLFlBQVlOLFVBQVosRUFBZDtBQUFBLFVBQ0lILE9BQU9TLFlBQVlFLE9BQVosRUFEWDtBQUFBLFVBRUlDLFlBQVksSUFBSWQsU0FBSixDQUFjQyxPQUFkLEVBQXVCQyxJQUF2QixFQUE2QlUsWUFBN0IsQ0FGaEI7O0FBSUEsYUFBT0UsU0FBUDtBQUNEOzs7O0VBeEJxQmYsZ0I7O0FBMkJ4QmdCLE9BQU9DLE9BQVAsR0FBaUJoQixTQUFqQjs7QUFFQUEsVUFBVUcsSUFBVixHQUFpQixNQUFqQiIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgVG9rZW4gPSBsZXhlcnMuVG9rZW4sXG4gICAgU2lnbmlmaWNhbnRUb2tlbiA9IGxleGVycy5TaWduaWZpY2FudFRva2VuO1xuXG5jbGFzcyBMaW5rVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSkge1xuICAgIHZhciB0eXBlID0gTGlua1Rva2VuLnR5cGU7XG5cbiAgICBzdXBlcihjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgdmFyIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICBpbm5lckhUTUwgPSBjb250ZW50LCAvLy9cbiAgICAgICAgY2xhc3NOYW1lID0gdHlwZSwgIC8vL1xuICAgICAgICBzYW5pdGlzZWRJbm5lckhUTUwgPSBUb2tlbi5zYW5pdGlzZUhUTUwoaW5uZXJIVE1MKSxcbiAgICAgICAgaHRtbCA9IGA8YSBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG9uQ2xpY2s9XCJhbGVydCgnY2xpY2shJyk7IFwiPiR7c2FuaXRpc2VkSW5uZXJIVE1MfTwvYT5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ1Rva2VuKHN0cmluZ1Rva2VuLCBjbGlja0hhbmRsZXIpIHtcbiAgICB2YXIgY29udGVudCA9IHN0cmluZ1Rva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHN0cmluZ1Rva2VuLmdldExpbmUoKSxcbiAgICAgICAgbGluZVRva2VuID0gbmV3IExpbmtUb2tlbihjb250ZW50LCBsaW5lLCBjbGlja0hhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGxpbmVUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtUb2tlbjtcblxuTGlua1Rva2VuLnR5cGUgPSAnbGluayc7XG4iXX0=