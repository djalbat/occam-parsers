'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var BasicParser = require('../../basic/parser'),
    ExampleView = require('../../example/view');

var BasicLexer = lexers.BasicLexer;

var BasicExampleView = function (_ExampleView) {
  _inherits(BasicExampleView, _ExampleView);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _possibleConstructorReturn(this, (BasicExampleView.__proto__ || Object.getPrototypeOf(BasicExampleView)).apply(this, arguments));
  }

  _createClass(BasicExampleView, [{
    key: 'getParseTree',
    value: function getParseTree() {
      var parseTree = null;

      var basicLexer = BasicLexer.fromNothing(),
          basicParser = BasicParser.fromNothing(),
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'Basic parser example';

      return title;
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      _get(BasicExampleView.prototype.__proto__ || Object.getPrototypeOf(BasicExampleView.prototype), 'initialise', this).call(this);

      var bnf = BasicParser.bnf,
          entries = BasicLexer.entries,
          content = '1+2/3',
          lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setContent(content);
      this.setLexicalEntries(lexicalEntries);

      this.keyUpHandler();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(BasicExampleView, properties);
    }
  }]);

  return BasicExampleView;
}(ExampleView);

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: 'basic'
  }
});

module.exports = BasicExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZVZpZXciLCJCYXNpY0xleGVyIiwiQmFzaWNFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsImJhc2ljTGV4ZXIiLCJmcm9tTm90aGluZyIsImJhc2ljUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwidGl0bGUiLCJibmYiLCJlbnRyaWVzIiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJrZXlVcEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxjQUFjRCxRQUFRLG9CQUFSLENBQXBCO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSxvQkFBUixDQURwQjs7SUFHUUcsVSxHQUFlSixNLENBQWZJLFU7O0lBRUZDLGdCOzs7Ozs7Ozs7OzttQ0FDVztBQUNiLFVBQUlDLFlBQVksSUFBaEI7O0FBRUEsVUFBTUMsYUFBYUgsV0FBV0ksV0FBWCxFQUFuQjtBQUFBLFVBQ01DLGNBQWNQLFlBQVlNLFdBQVosRUFEcEI7QUFBQSxVQUVNRSxVQUFVLEtBQUtDLFVBQUwsRUFGaEI7QUFBQSxVQUdNQyxTQUFTTCxXQUFXTSxRQUFYLENBQW9CSCxPQUFwQixDQUhmO0FBQUEsVUFJTUksT0FBT0wsWUFBWU0sS0FBWixDQUFrQkgsTUFBbEIsQ0FKYjs7QUFNQSxVQUFJRSxTQUFTLElBQWIsRUFBbUI7QUFDakJSLG9CQUFZUSxLQUFLRSxXQUFMLENBQWlCSixNQUFqQixDQUFaO0FBQ0Q7O0FBRUQsYUFBT04sU0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVyxRQUFRLHNCQUFkOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O2lDQUVZO0FBQ1g7O0FBRU0sVUFBRUMsR0FBRixHQUFVaEIsV0FBVixDQUFFZ0IsR0FBRjtBQUFBLFVBQ0VDLE9BREYsR0FDY2YsVUFEZCxDQUNFZSxPQURGO0FBQUEsVUFFQVQsT0FGQSxHQUVVLE9BRlY7QUFBQSxVQUdBVSxjQUhBLEdBR2lCRCxPQUhqQixDQUhLLENBTXFCOztBQUVoQyxXQUFLRSxNQUFMLENBQVlILEdBQVo7QUFDQSxXQUFLSSxVQUFMLENBQWdCWixPQUFoQjtBQUNBLFdBQUthLGlCQUFMLENBQXVCSCxjQUF2Qjs7QUFFQSxXQUFLSSxZQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU90QixZQUFZdUIsY0FBWixDQUEyQnJCLGdCQUEzQixFQUE2Q29CLFVBQTdDLENBQVA7QUFBaUU7Ozs7RUF0Q3hFdEIsVzs7QUF5Qy9Cd0IsT0FBT0MsTUFBUCxDQUFjdkIsZ0JBQWQsRUFBZ0M7QUFDOUJ3QixxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURXLENBQWhDOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCM0IsZ0JBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBCYXNpY1BhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljL3BhcnNlcicpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlL3ZpZXcnKTtcblxuY29uc3QgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZVZpZXcgZXh0ZW5kcyBFeGFtcGxlVmlldyB7XG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSAnQmFzaWMgcGFyc2VyIGV4YW1wbGUnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXNlKCk7XG5cbiAgICBjb25zdCB7IGJuZiB9ID0gQmFzaWNQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBCYXNpY0xleGVyLFxuICAgICAgICAgIGNvbnRlbnQgPSAnMSsyLzMnLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoQmFzaWNFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJhc2ljRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdiYXNpYydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlVmlldztcbiJdfQ==