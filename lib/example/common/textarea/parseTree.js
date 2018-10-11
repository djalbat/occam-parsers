'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var ParseTreeTextarea = function (_InputElement) {
  _inherits(ParseTreeTextarea, _InputElement);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _possibleConstructorReturn(this, (ParseTreeTextarea.__proto__ || Object.getPrototypeOf(ParseTreeTextarea)).apply(this, arguments));
  }

  _createClass(ParseTreeTextarea, [{
    key: 'setParseTree',
    value: function setParseTree(parseTree) {
      if (parseTree !== null) {
        parseTree.shiftLine(); //

        var parseTreeString = parseTree.asString(),
            html = parseTreeString; ///

        this.html(html);
      } else {
        this.clearParseTree();
      }
    }
  }, {
    key: 'clearParseTree',
    value: function clearParseTree() {
      var html = '';

      return html;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);

      return {
        setParseTree: setParseTree,
        clearParseTree: clearParseTree
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onKeyUp = properties.onKeyUp,
          keyUpHandler = onKeyUp,
          parseTreeTextarea = InputElement.fromProperties(ParseTreeTextarea, properties, keyUpHandler);


      return parseTreeTextarea;
    }
  }]);

  return ParseTreeTextarea;
}(InputElement);

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parseTree',
    spellcheck: false,
    readOnly: true
  }
});

module.exports = ParseTreeTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJQYXJzZVRyZWVUZXh0YXJlYSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwiaHRtbCIsImNsZWFyUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiYmluZCIsInByb3BlcnRpZXMiLCJvbktleVVwIiwia2V5VXBIYW5kbGVyIiwicGFyc2VUcmVlVGV4dGFyZWEiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsY2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGlCOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQUlBLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEJBLGtCQUFVQyxTQUFWLEdBRHNCLENBQ0U7O0FBRXhCLFlBQU1DLGtCQUFrQkYsVUFBVUcsUUFBVixFQUF4QjtBQUFBLFlBQ01DLE9BQU9GLGVBRGIsQ0FIc0IsQ0FJUzs7QUFFL0IsYUFBS0UsSUFBTCxDQUFVQSxJQUFWO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsYUFBS0MsY0FBTDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNRCxPQUFPLEVBQWI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRSxlQUFlLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCO0FBQUEsVUFDTUYsaUJBQWlCLEtBQUtBLGNBQUwsQ0FBb0JFLElBQXBCLENBQXlCLElBQXpCLENBRHZCOztBQUdBLGFBQVE7QUFDTkQsa0NBRE07QUFFTkQ7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJHLFUsRUFBWTtBQUMxQixVQUFFQyxPQUFGLEdBQWNELFVBQWQsQ0FBRUMsT0FBRjtBQUFBLFVBQ0FDLFlBREEsR0FDZUQsT0FEZjtBQUFBLFVBRUFFLGlCQUZBLEdBRW9CYixhQUFhYyxjQUFiLENBQTRCYixpQkFBNUIsRUFBK0NTLFVBQS9DLEVBQTJERSxZQUEzRCxDQUZwQjs7O0FBSU4sYUFBT0MsaUJBQVA7QUFDRDs7OztFQXBDNkJiLFk7O0FBdUNoQ2UsT0FBT0MsTUFBUCxDQUFjZixpQkFBZCxFQUFpQztBQUMvQmdCLFdBQVMsVUFEc0I7QUFFL0JDLHFCQUFtQjtBQUNqQkMsZUFBVyxXQURNO0FBRWpCQyxnQkFBWSxLQUZLO0FBR2pCQyxjQUFVO0FBSE87QUFGWSxDQUFqQzs7QUFTQUMsT0FBT0MsT0FBUCxHQUFpQnRCLGlCQUFqQiIsImZpbGUiOiJwYXJzZVRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIGh0bWwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5odG1sKGh0bWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgaHRtbCA9ICcnO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFBhcnNlVHJlZSA9IHRoaXMuc2V0UGFyc2VUcmVlLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJQYXJzZVRyZWUgPSB0aGlzLmNsZWFyUGFyc2VUcmVlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFBhcnNlVHJlZSxcbiAgICAgIGNsZWFyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSBvbktleVVwLCAvLy9cbiAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJzZVRyZWVUZXh0YXJlYSwgcHJvcGVydGllcywga2V5VXBIYW5kbGVyKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWVUZXh0YXJlYTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFBhcnNlVHJlZVRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAncGFyc2VUcmVlJyxcbiAgICBzcGVsbGNoZWNrOiBmYWxzZSxcbiAgICByZWFkT25seTogdHJ1ZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZVRyZWVUZXh0YXJlYTtcbiJdfQ==