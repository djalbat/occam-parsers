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

    return _possibleConstructorReturn(this, (EpsilonNode.__proto__ || Object.getPrototypeOf(EpsilonNode)).apply(this, arguments));
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
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var significantToken = null,
          epsilonNode = TerminalNode.fromSignificantToken(EpsilonNode, significantToken);

      return epsilonNode;
    }
  }]);

  return EpsilonNode;
}(TerminalNode);

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJFcHNpbG9uTm9kZVBhcnNlVHJlZSIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25Ob2RlIiwiY29udGVudCIsImVwc2lsb25Ob2RlIiwidG9rZW5zIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxhQUFSLENBQXJCO0FBQUEsSUFDTUUsdUJBQXVCRixRQUFRLDZCQUFSLENBRDdCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLE1BQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NELGNBRGQsQ0FDRUMsT0FERjs7SUFHQUMsVzs7Ozs7Ozs7Ozs7aUNBQ1M7QUFDWCxVQUFNQyxVQUFVRixPQUFoQixDQURXLENBQ2U7O0FBRTFCLGFBQU9FLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxJQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztnQ0FFV0MsTSxFQUFRO0FBQ2xCLFVBQU1DLHVCQUF1QlAscUJBQXFCUSxXQUFyQixFQUE3QjtBQUFBLFVBQ01DLFlBQVlGLG9CQURsQixDQURrQixDQUV1Qjs7QUFFekMsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1DLG1CQUFtQixJQUF6QjtBQUFBLFVBQ01MLGNBQWNOLGFBQWFZLG9CQUFiLENBQWtDUixXQUFsQyxFQUErQ08sZ0JBQS9DLENBRHBCOztBQUdBLGFBQU9MLFdBQVA7QUFDRDs7OztFQXpCdUJOLFk7O0FBNEIxQmEsT0FBT0MsT0FBUCxHQUFpQlYsV0FBakIiLCJmaWxlIjoiZXBzaWxvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL3BhcnNlVHJlZS9lcHNpbG9uTm9kZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFcHNpbG9uTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb247ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGVQYXJzZVRyZWUgPSBFcHNpbG9uTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVwc2lsb25Ob2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIGVwc2lsb25Ob2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVwc2lsb25Ob2RlLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25Ob2RlO1xuIl19