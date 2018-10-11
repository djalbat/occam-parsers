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

      var content = this.getContent(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      basicLexer = BasicLexer.fromEntries(entries),
          tokens = basicLexer.tokenise(content),
          basicParser = BasicParser.fromNothing(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZVZpZXciLCJCYXNpY0xleGVyIiwiQmFzaWNFeGFtcGxlVmlldyIsInBhcnNlVHJlZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImJhc2ljUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsInRpdGxlIiwiYm5mIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwia2V5VXBIYW5kbGVyIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsY0FBY0QsUUFBUSxvQkFBUixDQUFwQjtBQUFBLElBQ01FLGNBQWNGLFFBQVEsb0JBQVIsQ0FEcEI7O0lBR1FHLFUsR0FBZUosTSxDQUFmSSxVOztJQUVGQyxnQjs7Ozs7Ozs7Ozs7bUNBQ1c7QUFDYixVQUFJQyxZQUFZLElBQWhCOztBQUVBLFVBQU1DLFVBQVUsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLGlCQUFpQixLQUFLQyxpQkFBTCxFQUR2QjtBQUFBLFVBRU1DLFVBQVVGLGNBRmhCO0FBQUEsVUFFZ0M7QUFDMUJHLG1CQUFhUixXQUFXUyxXQUFYLENBQXVCRixPQUF2QixDQUhuQjtBQUFBLFVBSU1HLFNBQVNGLFdBQVdHLFFBQVgsQ0FBb0JSLE9BQXBCLENBSmY7QUFBQSxVQUtNUyxjQUFjZCxZQUFZZSxXQUFaLEVBTHBCO0FBQUEsVUFNTUMsT0FBT0YsWUFBWUcsS0FBWixDQUFrQkwsTUFBbEIsQ0FOYjs7QUFRQSxVQUFJSSxTQUFTLElBQWIsRUFBbUI7QUFDakJaLG9CQUFZWSxLQUFLRSxXQUFMLENBQWlCTixNQUFqQixDQUFaO0FBQ0Q7O0FBRUQsYUFBT1IsU0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNZSxRQUFRLHNCQUFkOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O2lDQUVZO0FBQ1g7O0FBRU0sVUFBRUMsR0FBRixHQUFVcEIsV0FBVixDQUFFb0IsR0FBRjtBQUFBLFVBQ0VYLE9BREYsR0FDY1AsVUFEZCxDQUNFTyxPQURGO0FBQUEsVUFFQUosT0FGQSxHQUVVLE9BRlY7QUFBQSxVQUdBRSxjQUhBLEdBR2lCRSxPQUhqQixDQUhLLENBTXFCOztBQUVoQyxXQUFLWSxNQUFMLENBQVlELEdBQVo7QUFDQSxXQUFLRSxVQUFMLENBQWdCakIsT0FBaEI7QUFDQSxXQUFLa0IsaUJBQUwsQ0FBdUJoQixjQUF2Qjs7QUFFQSxXQUFLaUIsWUFBTDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPeEIsWUFBWXlCLGNBQVosQ0FBMkJ2QixnQkFBM0IsRUFBNkNzQixVQUE3QyxDQUFQO0FBQWlFOzs7O0VBeEN4RXhCLFc7O0FBMkMvQjBCLE9BQU9DLE1BQVAsQ0FBY3pCLGdCQUFkLEVBQWdDO0FBQzlCMEIscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEVyxDQUFoQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQjdCLGdCQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgQmFzaWNQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9iYXNpYy9wYXJzZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3Jyk7XG5cbmNvbnN0IHsgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0Jhc2ljIHBhcnNlciBleGFtcGxlJztcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGlzZSgpO1xuXG4gICAgY29uc3QgeyBibmYgfSA9IEJhc2ljUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gJzErMi8zJyxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEV4YW1wbGVWaWV3LmZyb21Qcm9wZXJ0aWVzKEJhc2ljRXhhbXBsZVZpZXcsIHByb3BlcnRpZXMpO31cbn1cblxuT2JqZWN0LmFzc2lnbihCYXNpY0V4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYmFzaWMnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZVZpZXc7XG4iXX0=