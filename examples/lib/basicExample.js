'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicLexer = require('../../../Lexers/es6/basic/lexer'); ///

var Example = require('./example');

var mappings = {},
    basicLexer = undefined;

var BasicExample = function (_Example) {
  _inherits(BasicExample, _Example);

  function BasicExample() {
    _classCallCheck(this, BasicExample);

    return _possibleConstructorReturn(this, (BasicExample.__proto__ || Object.getPrototypeOf(BasicExample)).apply(this, arguments));
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      updateBasicLexer();

      Example.updateParser(mappings);

      Example.terminalSymbolsRegExpPatternInput.onChange(function () {
        updateBasicLexer();

        Example.updateParser(mappings);
        Example.updateParseTree(basicLexer);
      });

      Example.grammarTextArea.onChange(function () {
        Example.updateParser(mappings);
        Example.updateParseTree(basicLexer);
      });

      Example.contentTextArea.onChange(function () {
        Example.updateParseTree(basicLexer);
      });
    }
  }]);

  return BasicExample;
}(Example);

module.exports = BasicExample;

function updateBasicLexer() {
  var terminalSymbolsRegExpPatternInputValue = Example.terminalSymbolsRegExpPatternInput.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExp = new RegExp('^(' + terminalSymbolsRegExpPattern + ')'),
      grammar = [{ terminal: terminalSymbolsRegExp }];

  basicLexer = BasicLexer.fromGrammar(grammar);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlIiwibWFwcGluZ3MiLCJiYXNpY0xleGVyIiwidW5kZWZpbmVkIiwiQmFzaWNFeGFtcGxlIiwidXBkYXRlQmFzaWNMZXhlciIsInVwZGF0ZVBhcnNlciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dCIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwiZ3JhbW1hciIsInRlcm1pbmFsIiwiZnJvbUdyYW1tYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxpQ0FBUixDQUFqQixDLENBQThEOztBQUU5RCxJQUFJQyxVQUFVRCxRQUFRLFdBQVIsQ0FBZDs7QUFFQSxJQUFJRSxXQUFXLEVBQWY7QUFBQSxJQUNJQyxhQUFhQyxTQURqQjs7SUFHTUMsWTs7Ozs7Ozs7Ozs7MEJBQ1M7QUFDWEM7O0FBRUFMLGNBQVFNLFlBQVIsQ0FBcUJMLFFBQXJCOztBQUVBRCxjQUFRTyxpQ0FBUixDQUEwQ0MsUUFBMUMsQ0FBbUQsWUFBVztBQUM1REg7O0FBRUFMLGdCQUFRTSxZQUFSLENBQXFCTCxRQUFyQjtBQUNBRCxnQkFBUVMsZUFBUixDQUF3QlAsVUFBeEI7QUFDRCxPQUxEOztBQU9BRixjQUFRVSxlQUFSLENBQXdCRixRQUF4QixDQUFpQyxZQUFXO0FBQzFDUixnQkFBUU0sWUFBUixDQUFxQkwsUUFBckI7QUFDQUQsZ0JBQVFTLGVBQVIsQ0FBd0JQLFVBQXhCO0FBQ0QsT0FIRDs7QUFLQUYsY0FBUVcsZUFBUixDQUF3QkgsUUFBeEIsQ0FBaUMsWUFBVztBQUMxQ1IsZ0JBQVFTLGVBQVIsQ0FBd0JQLFVBQXhCO0FBQ0QsT0FGRDtBQUdEOzs7O0VBckJ3QkYsTzs7QUF3QjNCWSxPQUFPQyxPQUFQLEdBQWlCVCxZQUFqQjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUMxQixNQUFJUyx5Q0FBeUNkLFFBQVFPLGlDQUFSLENBQTBDUSxRQUExQyxFQUE3QztBQUFBLE1BQ0lDLCtCQUErQkYsc0NBRG5DO0FBQUEsTUFDMkU7QUFDdkVHLDBCQUF3QixJQUFJQyxNQUFKLENBQVcsT0FBT0YsNEJBQVAsR0FBc0MsR0FBakQsQ0FGNUI7QUFBQSxNQUdJRyxVQUFVLENBQ1IsRUFBRUMsVUFBV0gscUJBQWIsRUFEUSxDQUhkOztBQU9BZixlQUFhSixXQUFXdUIsV0FBWCxDQUF1QkYsT0FBdkIsQ0FBYjtBQUNEIiwiZmlsZSI6ImJhc2ljRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEJhc2ljTGV4ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9MZXhlcnMvZXM2L2Jhc2ljL2xleGVyJyk7ICAvLy9cblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKTtcblxudmFyIG1hcHBpbmdzID0ge30sXG4gICAgYmFzaWNMZXhlciA9IHVuZGVmaW5lZDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdXBkYXRlQmFzaWNMZXhlcigpO1xuXG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuXG4gICAgRXhhbXBsZS50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVCYXNpY0xleGVyKCk7XG5cbiAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VyKG1hcHBpbmdzKTtcbiAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGJhc2ljTGV4ZXIpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5ncmFtbWFyVGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihtYXBwaW5ncyk7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShiYXNpY0xleGVyKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoYmFzaWNMZXhlcik7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljTGV4ZXIoKSB7XG4gIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IEV4YW1wbGUudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsIC8vL1xuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCgnXignICsgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiArICcpJyksXG4gICAgICBncmFtbWFyID0gW1xuICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgIF07XG5cbiAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG59XG4iXX0=