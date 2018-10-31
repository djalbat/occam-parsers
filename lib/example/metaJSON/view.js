'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ExampleView = require('../../example/view'),
    MetaJSONParser = require('../../metaJSON/parser');

var MetaJSONLexer = lexers.MetaJSONLexer;

var MetaJSONExampleView = function (_ExampleView) {
  _inherits(MetaJSONExampleView, _ExampleView);

  function MetaJSONExampleView() {
    _classCallCheck(this, MetaJSONExampleView);

    return _possibleConstructorReturn(this, (MetaJSONExampleView.__proto__ || Object.getPrototypeOf(MetaJSONExampleView)).apply(this, arguments));
  }

  _createClass(MetaJSONExampleView, [{
    key: 'getTitle',
    value: function getTitle() {
      var title = 'MetaJSON parser example';

      return title;
    }
  }, {
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = MetaJSONLexer; ///

      return Lexer;
    }
  }, {
    key: 'getParser',
    value: function getParser() {
      var Parser = MetaJSONParser; ///

      return Parser;
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var initialContent = '{\n  "repository" : "https://github.com/jecs-imperial/occam-lexers"\n}';

      return initialContent;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(MetaJSONExampleView, properties);
    }
  }]);

  return MetaJSONExampleView;
}(ExampleView);

Object.assign(MetaJSONExampleView, {
  defaultProperties: {
    className: 'metaJSON'
  }
});

module.exports = MetaJSONExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL21ldGFKU09OL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkV4YW1wbGVWaWV3IiwiTWV0YUpTT05QYXJzZXIiLCJNZXRhSlNPTkxleGVyIiwiTWV0YUpTT05FeGFtcGxlVmlldyIsInRpdGxlIiwiTGV4ZXIiLCJQYXJzZXIiLCJpbml0aWFsQ29udGVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxjQUFjRCxRQUFRLG9CQUFSLENBQXBCO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRHZCOztJQUdRRyxhLEdBQWtCSixNLENBQWxCSSxhOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7K0JBQ087QUFDVCxVQUFNQyxRQUFRLHlCQUFkOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsUUFBUUgsYUFBZCxDQURTLENBQ3FCOztBQUU5QixhQUFPRyxLQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVNMLGNBQWYsQ0FEVSxDQUNzQjs7QUFFaEMsYUFBT0ssTUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLHlGQUFOOztBQUlBLGFBQU9BLGNBQVA7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1IsWUFBWVMsY0FBWixDQUEyQk4sbUJBQTNCLEVBQWdESyxVQUFoRCxDQUFQO0FBQW9FOzs7O0VBM0J4RVIsVzs7QUE4QmxDVSxPQUFPQyxNQUFQLENBQWNSLG1CQUFkLEVBQW1DO0FBQ2pDUyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURjLENBQW5DOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCWixtQkFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3JyksXG4gICAgICBNZXRhSlNPTlBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL21ldGFKU09OL3BhcnNlcicpO1xuXG5jb25zdCB7IE1ldGFKU09OTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgTWV0YUpTT05FeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSAnTWV0YUpTT04gcGFyc2VyIGV4YW1wbGUnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBNZXRhSlNPTkxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgUGFyc2VyID0gTWV0YUpTT05QYXJzZXI7ICAvLy9cblxuICAgIHJldHVybiBQYXJzZXI7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IGB7XG4gIFwicmVwb3NpdG9yeVwiIDogXCJodHRwczovL2dpdGh1Yi5jb20vamVjcy1pbXBlcmlhbC9vY2NhbS1sZXhlcnNcIlxufWA7XG5cbiAgICByZXR1cm4gaW5pdGlhbENvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoTWV0YUpTT05FeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKE1ldGFKU09ORXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhSlNPTidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YUpTT05FeGFtcGxlVmlldztcbiJdfQ==