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
      return InputElement.fromProperties(ParseTreeTextarea, properties);
    }
  }]);

  return ParseTreeTextarea;
}(InputElement);

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parseTree',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = ParseTreeTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJQYXJzZVRyZWVUZXh0YXJlYSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwiaHRtbCIsImNsZWFyUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGlCOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQUlBLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEJBLGtCQUFVQyxTQUFWLEdBRHNCLENBQ0U7O0FBRXhCLFlBQU1DLGtCQUFrQkYsVUFBVUcsUUFBVixFQUF4QjtBQUFBLFlBQ01DLE9BQU9GLGVBRGIsQ0FIc0IsQ0FJUzs7QUFFL0IsYUFBS0UsSUFBTCxDQUFVQSxJQUFWO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsYUFBS0MsY0FBTDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNRCxPQUFPLEVBQWI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRSxlQUFlLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCO0FBQUEsVUFDTUYsaUJBQWlCLEtBQUtBLGNBQUwsQ0FBb0JFLElBQXBCLENBQXlCLElBQXpCLENBRHZCOztBQUdBLGFBQVE7QUFDTkQsa0NBRE07QUFFTkQ7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJHLFUsRUFBWTtBQUFFLGFBQU9WLGFBQWFXLGNBQWIsQ0FBNEJWLGlCQUE1QixFQUErQ1MsVUFBL0MsQ0FBUDtBQUFvRTs7OztFQTlCMUVWLFk7O0FBaUNoQ1ksT0FBT0MsTUFBUCxDQUFjWixpQkFBZCxFQUFpQztBQUMvQmEsV0FBUyxVQURzQjtBQUUvQkMscUJBQW1CO0FBQ2pCQyxlQUFXLFdBRE07QUFFakJDLGdCQUFZLE9BRks7QUFHakJDLGNBQVU7QUFITztBQUZZLENBQWpDOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCbkIsaUJBQWpCIiwiZmlsZSI6InBhcnNlVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSkge1xuICAgIGlmIChwYXJzZVRyZWUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS5hc1N0cmluZygpLFxuICAgICAgICAgICAgaHRtbCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmh0bWwoaHRtbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICBjb25zdCBodG1sID0gJyc7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclBhcnNlVHJlZSA9IHRoaXMuY2xlYXJQYXJzZVRyZWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0UGFyc2VUcmVlLFxuICAgICAgY2xlYXJQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFyc2VUcmVlVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGFyc2VUcmVlVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdwYXJzZVRyZWUnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlVGV4dGFyZWE7XG4iXX0=