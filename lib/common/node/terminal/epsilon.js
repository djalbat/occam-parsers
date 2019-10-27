'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalNode = require('../terminal'),
    EpsilonNodeParseTree = require('../../parseTree/epsilonNode');

var specialSymbols = lexers.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonNode = function (_TerminalNode) {
  _inherits(EpsilonNode, _TerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    var significantToken = null,
        parentNode = undefined;

    return _possibleConstructorReturn(this, (EpsilonNode.__proto__ || Object.getPrototypeOf(EpsilonNode)).call(this, significantToken, parentNode));
  }

  _createClass(EpsilonNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = epsilon; ///

      return content;
    }
  }, {
    key: 'isEpsilonNode',
    value: function isEpsilonNode() {
      var epsilonNode = true;

      return epsilonNode;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree; ///

      return parseTree;
    }
  }]);

  return EpsilonNode;
}(TerminalNode);

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJFcHNpbG9uTm9kZVBhcnNlVHJlZSIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25Ob2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInBhcmVudE5vZGUiLCJ1bmRlZmluZWQiLCJjb250ZW50IiwiZXBzaWxvbk5vZGUiLCJ0b2tlbnMiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLGFBQVIsQ0FBckI7QUFBQSxJQUNNRSx1QkFBdUJGLFFBQVEsNkJBQVIsQ0FEN0I7O0FBR00sSUFBRUcsY0FBRixHQUFxQkosTUFBckIsQ0FBRUksY0FBRjtBQUFBLElBQ0VDLE9BREYsR0FDY0QsY0FEZCxDQUNFQyxPQURGOztJQUdBQyxXOzs7QUFDSix5QkFBYztBQUFBOztBQUNaLFFBQU1DLG1CQUFtQixJQUF6QjtBQUFBLFFBQ01DLGFBQWFDLFNBRG5COztBQURZLHFIQUlORixnQkFKTSxFQUlZQyxVQUpaO0FBS2I7Ozs7aUNBRVk7QUFDWCxVQUFNRSxVQUFVTCxPQUFoQixDQURXLENBQ2U7O0FBRTFCLGFBQU9LLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxJQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztnQ0FFV0MsTSxFQUFRO0FBQ2xCLFVBQU1DLHVCQUF1QlYscUJBQXFCVyxXQUFyQixFQUE3QjtBQUFBLFVBQ01DLFlBQVlGLG9CQURsQixDQURrQixDQUV1Qjs7QUFFekMsYUFBT0UsU0FBUDtBQUNEOzs7O0VBekJ1QmIsWTs7QUE0QjFCYyxPQUFPQyxPQUFQLEdBQWlCWCxXQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKSxcbiAgICAgIEVwc2lsb25Ob2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vcGFyc2VUcmVlL2Vwc2lsb25Ob2RlJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25Ob2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHVuZGVmaW5lZDtcblxuICAgIHN1cGVyKHNpZ25pZmljYW50VG9rZW4sIHBhcmVudE5vZGUpO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uTm9kZTtcbiJdfQ==