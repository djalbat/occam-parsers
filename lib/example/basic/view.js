'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ExampleView = require('../../example/view'),
    BasicParser = require('../../basic/parser');

var BasicLexer = lexers.BasicLexer;

var BasicExampleView = function (_ExampleView) {
  _inherits(BasicExampleView, _ExampleView);

  function BasicExampleView() {
    _classCallCheck(this, BasicExampleView);

    return _possibleConstructorReturn(this, (BasicExampleView.__proto__ || Object.getPrototypeOf(BasicExampleView)).apply(this, arguments));
  }

  _createClass(BasicExampleView, [{
    key: 'getTitle',
    value: function getTitle() {
      var title = 'Basic parser example';

      return title;
    }
  }, {
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = BasicLexer; ///

      return Lexer;
    }
  }, {
    key: 'getParser',
    value: function getParser() {
      var Parser = BasicParser; ///

      return Parser;
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var initialContent = '1+2/3 4 ;';

      return initialContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiQmFzaWNQYXJzZXIiLCJCYXNpY0xleGVyIiwiQmFzaWNFeGFtcGxlVmlldyIsInRpdGxlIiwiTGV4ZXIiLCJQYXJzZXIiLCJpbml0aWFsQ29udGVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxjQUFjRCxRQUFRLG9CQUFSLENBQXBCO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSxvQkFBUixDQURwQjs7SUFHUUcsVSxHQUFlSixNLENBQWZJLFU7O0lBRUZDLGdCOzs7Ozs7Ozs7OzsrQkFDTztBQUNULFVBQU1DLFFBQVEsc0JBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxRQUFRSCxVQUFkLENBRFMsQ0FDa0I7O0FBRTNCLGFBQU9HLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsU0FBU0wsV0FBZixDQURVLENBQ21COztBQUU3QixhQUFPSyxNQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsaUJBQWlCLFdBQXZCOztBQUVBLGFBQU9BLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1IsWUFBWVMsY0FBWixDQUEyQk4sZ0JBQTNCLEVBQTZDSyxVQUE3QyxDQUFQO0FBQWlFOzs7O0VBekJ4RVIsVzs7QUE0Qi9CVSxPQUFPQyxNQUFQLENBQWNSLGdCQUFkLEVBQWdDO0FBQzlCUyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURXLENBQWhDOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCWixnQkFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3JyksXG4gICAgICBCYXNpY1BhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2Jhc2ljL3BhcnNlcicpO1xuXG5jb25zdCB7IEJhc2ljTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSAnQmFzaWMgcGFyc2VyIGV4YW1wbGUnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBCYXNpY0xleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgUGFyc2VyID0gQmFzaWNQYXJzZXI7ICAvLy9cblxuICAgIHJldHVybiBQYXJzZXI7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9ICcxKzIvMyA0IDsnO1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEV4YW1wbGVWaWV3LmZyb21Qcm9wZXJ0aWVzKEJhc2ljRXhhbXBsZVZpZXcsIHByb3BlcnRpZXMpO31cbn1cblxuT2JqZWN0LmFzc2lnbihCYXNpY0V4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYmFzaWMnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZVZpZXc7XG4iXX0=