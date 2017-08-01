'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalNode = require('../terminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonTerminalNode = function (_TerminalNode) {
  _inherits(EpsilonTerminalNode, _TerminalNode);

  function EpsilonTerminalNode() {
    _classCallCheck(this, EpsilonTerminalNode);

    var significantToken = null,
        line = null;

    return _possibleConstructorReturn(this, (EpsilonTerminalNode.__proto__ || Object.getPrototypeOf(EpsilonTerminalNode)).call(this, significantToken, line));
  }

  _createClass(EpsilonTerminalNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = epsilon; ///

      return content;
    }
  }]);

  return EpsilonTerminalNode;
}(TerminalNode);

module.exports = EpsilonTerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwibGluZSIsImNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWVELFFBQVEsYUFBUixDQUFyQjs7QUFFTSxJQUFFRSxRQUFGLEdBQWVILE1BQWYsQ0FBRUcsUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxPQUZGLEdBRWNELGNBRmQsQ0FFRUMsT0FGRjs7SUFJQUMsbUI7OztBQUNKLGlDQUFjO0FBQUE7O0FBQ1osUUFBTUMsbUJBQW1CLElBQXpCO0FBQUEsUUFDTUMsT0FBTyxJQURiOztBQURZLHFJQUlORCxnQkFKTSxFQUlZQyxJQUpaO0FBS2I7Ozs7aUNBRVk7QUFDWCxVQUFNQyxVQUFVSixPQUFoQixDQURXLENBQ2U7O0FBRTFCLGFBQU9JLE9BQVA7QUFDRDs7OztFQVorQlAsWTs7QUFlbENRLE9BQU9DLE9BQVAsR0FBaUJMLG1CQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFcHNpbG9uVGVybWluYWxOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgbGluZSA9IG51bGw7XG5cbiAgICBzdXBlcihzaWduaWZpY2FudFRva2VuLCBsaW5lKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb247ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblRlcm1pbmFsTm9kZTtcbiJdfQ==