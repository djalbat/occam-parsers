'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicLexer = require('../../../Lexers/es6/basic/lexer'); ///

var Example = require('./example');

var mappings = {};

var BasicExample = function (_Example) {
  _inherits(BasicExample, _Example);

  function BasicExample() {
    _classCallCheck(this, BasicExample);

    return _possibleConstructorReturn(this, (BasicExample.__proto__ || Object.getPrototypeOf(BasicExample)).apply(this, arguments));
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      Example.updateParser(mappings);

      Example.specialSymbolsRegExpInput.onChange(function () {
        Example.updateParser(mappings);
        Example.updateParseTree(BasicLexer);
      });

      Example.grammarTextArea.onChange(function () {
        Example.updateParser(mappings);
        Example.updateParseTree(BasicLexer);
      });

      Example.contentTextArea.onChange(function () {
        Example.updateParseTree(BasicLexer);
      });
    }
  }]);

  return BasicExample;
}(Example);

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlIiwibWFwcGluZ3MiLCJCYXNpY0V4YW1wbGUiLCJ1cGRhdGVQYXJzZXIiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0Iiwib25DaGFuZ2UiLCJ1cGRhdGVQYXJzZVRyZWUiLCJncmFtbWFyVGV4dEFyZWEiLCJjb250ZW50VGV4dEFyZWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGFBQWFDLFFBQVEsaUNBQVIsQ0FBakIsQyxDQUE4RDs7QUFFOUQsSUFBSUMsVUFBVUQsUUFBUSxXQUFSLENBQWQ7O0FBRUEsSUFBSUUsV0FBVyxFQUFmOztJQUVNQyxZOzs7Ozs7Ozs7OzswQkFDUztBQUNYRixjQUFRRyxZQUFSLENBQXFCRixRQUFyQjs7QUFFQUQsY0FBUUkseUJBQVIsQ0FBa0NDLFFBQWxDLENBQTJDLFlBQVc7QUFDcERMLGdCQUFRRyxZQUFSLENBQXFCRixRQUFyQjtBQUNBRCxnQkFBUU0sZUFBUixDQUF3QlIsVUFBeEI7QUFDRCxPQUhEOztBQUtBRSxjQUFRTyxlQUFSLENBQXdCRixRQUF4QixDQUFpQyxZQUFXO0FBQzFDTCxnQkFBUUcsWUFBUixDQUFxQkYsUUFBckI7QUFDQUQsZ0JBQVFNLGVBQVIsQ0FBd0JSLFVBQXhCO0FBQ0QsT0FIRDs7QUFLQUUsY0FBUVEsZUFBUixDQUF3QkgsUUFBeEIsQ0FBaUMsWUFBVztBQUMxQ0wsZ0JBQVFNLGVBQVIsQ0FBd0JSLFVBQXhCO0FBQ0QsT0FGRDtBQUdEOzs7O0VBakJ3QkUsTzs7QUFvQjNCUyxPQUFPQyxPQUFQLEdBQWlCUixZQUFqQiIsImZpbGUiOiJiYXNpY0V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBCYXNpY0xleGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vTGV4ZXJzL2VzNi9iYXNpYy9sZXhlcicpOyAgLy8vXG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyk7XG5cbnZhciBtYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihtYXBwaW5ncyk7XG5cbiAgICBFeGFtcGxlLnNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXQub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihtYXBwaW5ncyk7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShCYXNpY0xleGVyKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoQmFzaWNMZXhlcik7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKEJhc2ljTGV4ZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuIl19