'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    EndOfLineRule = require('../rule/endOfLine'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EndOfLineProduction = function (_Production) {
  _inherits(EndOfLineProduction, _Production);

  function EndOfLineProduction() {
    _classCallCheck(this, EndOfLineProduction);

    var endOfLineRule = new EndOfLineRule(),
        name = 'endOfLine',
        rules = [endOfLineRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (EndOfLineProduction.__proto__ || Object.getPrototypeOf(EndOfLineProduction)).call(this, name, rules, Node));
  }

  return EndOfLineProduction;
}(Production);

module.exports = EndOfLineProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJFbmRPZkxpbmVSdWxlIiwiTm9uVGVybWluYWxOb2RlIiwiRW5kT2ZMaW5lUHJvZHVjdGlvbiIsImVuZE9mTGluZVJ1bGUiLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBRHRCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxnQkFBZ0IsSUFBSUgsYUFBSixFQUF0QjtBQUFBLFFBQ01JLE9BQU8sV0FEYjtBQUFBLFFBRU1DLFFBQVEsQ0FDTkYsYUFETSxDQUZkO0FBQUEsUUFLTUcsT0FBT0wsZUFMYjs7QUFEWSxxSUFRTkcsSUFSTSxFQVFBQyxLQVJBLEVBUU9DLElBUlA7QUFTYjs7O0VBVitCUixVOztBQWFsQ1MsT0FBT0MsT0FBUCxHQUFpQk4sbUJBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL2VuZE9mTGluZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ2VuZE9mTGluZScsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUHJvZHVjdGlvbjtcbiJdfQ==