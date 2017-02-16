'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var VerticalBranchParseTree = function (_ParseTree) {
  _inherits(VerticalBranchParseTree, _ParseTree);

  function VerticalBranchParseTree(lines, verticalBranchPosition) {
    _classCallCheck(this, VerticalBranchParseTree);

    var _this = _possibleConstructorReturn(this, (VerticalBranchParseTree.__proto__ || Object.getPrototypeOf(VerticalBranchParseTree)).call(this, lines));

    _this.verticalBranchPosition = verticalBranchPosition;
    return _this;
  }

  _createClass(VerticalBranchParseTree, [{
    key: 'getVerticalBranchPosition',
    value: function getVerticalBranchPosition() {
      return this.verticalBranchPosition;
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      _get(VerticalBranchParseTree.prototype.__proto__ || Object.getPrototypeOf(VerticalBranchParseTree.prototype), 'addLeftMargin', this).call(this, leftMarginWidth);

      this.verticalBranchPosition += leftMarginWidth; ///
    }
  }], [{
    key: 'fromWidth',
    value: function fromWidth(width) {
      var string = '|',
          verticalBranchPosition = 0,
          verticalBranchParseTree = VerticalBranchParseTree.fromString(string, VerticalBranchParseTree, verticalBranchPosition),
          leftMarginWidth = Math.floor(width / 2),
          rightMarginWidth = width - leftMarginWidth - 1;

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);

      return verticalBranchParseTree;
    }
  }, {
    key: 'fromString',
    value: function fromString(string, Class, verticalBranchPosition) {
      Class = Class || ParseTree;

      var line = string,
          ///
      lines = [line],
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return verticalBranchParseTree;
    }
  }]);

  return VerticalBranchParseTree;
}(ParseTree);

module.exports = VerticalBranchParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImxpbmVzIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxlZnRNYXJnaW5XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsIkNsYXNzIiwibGluZSIsImFyZ3MiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJhcHBseSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGNBQVIsQ0FBaEI7O0lBRU1DLHVCOzs7QUFDSixtQ0FBWUMsS0FBWixFQUFtQkMsc0JBQW5CLEVBQTJDO0FBQUE7O0FBQUEsa0pBQ25DRCxLQURtQzs7QUFHekMsVUFBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUh5QztBQUkxQzs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLQSxzQkFBWjtBQUNEOzs7a0NBRWFDLGUsRUFBaUI7QUFDN0Isc0pBQW9CQSxlQUFwQjs7QUFFQSxXQUFLRCxzQkFBTCxJQUErQkMsZUFBL0IsQ0FINkIsQ0FHbUI7QUFDakQ7Ozs4QkFFZ0JDLEssRUFBTztBQUN0QixVQUFJQyxTQUFTLEdBQWI7QUFBQSxVQUNJSCx5QkFBeUIsQ0FEN0I7QUFBQSxVQUVJSSwwQkFBMEJOLHdCQUF3Qk8sVUFBeEIsQ0FBbUNGLE1BQW5DLEVBQTJDTCx1QkFBM0MsRUFBb0VFLHNCQUFwRSxDQUY5QjtBQUFBLFVBR0lDLGtCQUFrQkssS0FBS0MsS0FBTCxDQUFXTCxRQUFNLENBQWpCLENBSHRCO0FBQUEsVUFJSU0sbUJBQW1CTixRQUFRRCxlQUFSLEdBQTBCLENBSmpEOztBQU1BRyw4QkFBd0JLLGFBQXhCLENBQXNDUixlQUF0QztBQUNBRyw4QkFBd0JNLGNBQXhCLENBQXVDRixnQkFBdkM7O0FBRUEsYUFBT0osdUJBQVA7QUFDRDs7OytCQUVpQkQsTSxFQUFRUSxLLEVBQU9YLHNCLEVBQXdCO0FBQ3ZEVyxjQUFRQSxTQUFTZixTQUFqQjs7QUFFQSxVQUFJZ0IsT0FBT1QsTUFBWDtBQUFBLFVBQW1CO0FBQ2ZKLGNBQVEsQ0FBQ2EsSUFBRCxDQURaO0FBQUEsVUFFSUMsT0FBTyxDQUFDLElBQUQsRUFBT2QsS0FBUCxFQUFjQyxzQkFBZCxDQUZYO0FBQUEsVUFHSUksMEJBQTBCLEtBQUtVLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLENBQXdCQyxLQUF4QixDQUE4Qk4sS0FBOUIsRUFBcUNFLElBQXJDLENBQUwsR0FIOUIsQ0FIdUQsQ0FNMEI7O0FBRWpGLGFBQU9ULHVCQUFQO0FBQ0Q7Ozs7RUF2Q21DUixTOztBQTBDdENzQixPQUFPQyxPQUFQLEdBQWlCckIsdUJBQWpCIiwiZmlsZSI6InZlcnRpY2FsQnJhbmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBzdXBlcihsaW5lcyk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBzdXBlci5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG5cbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGVmdE1hcmdpbldpZHRoOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICB2YXIgc3RyaW5nID0gJ3wnLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pLFxuICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSAxO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIENsYXNzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBQYXJzZVRyZWU7XG5cbiAgICB2YXIgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuIl19