'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var VerticalBranchParseTree = function (_ParseTree) {
  _inherits(VerticalBranchParseTree, _ParseTree);

  function VerticalBranchParseTree() {
    _classCallCheck(this, VerticalBranchParseTree);

    return _possibleConstructorReturn(this, (VerticalBranchParseTree.__proto__ || Object.getPrototypeOf(VerticalBranchParseTree)).apply(this, arguments));
  }

  _createClass(VerticalBranchParseTree, null, [{
    key: 'fromWidth',
    value: function fromWidth(width) {
      var leftMarginWidth = Math.floor(width / 2),
          verticalBranchStr = '|',
          verticalBranchStrLength = verticalBranchStr.length,
          rightMarginWidth = width - leftMarginWidth - verticalBranchStrLength,
          verticalBranchParseTree = ParseTree.fromString(verticalBranchStr);

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);

      return verticalBranchParseTree;
    }
  }]);

  return VerticalBranchParseTree;
}(ParseTree);

module.exports = VerticalBranchParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2guanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwid2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2ZXJ0aWNhbEJyYW5jaFN0ciIsInZlcnRpY2FsQnJhbmNoU3RyTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHRNYXJnaW5XaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCOztJQUVNQyx1Qjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBTztBQUN0QixVQUFJQyxrQkFBa0JDLEtBQUtDLEtBQUwsQ0FBV0gsUUFBTSxDQUFqQixDQUF0QjtBQUFBLFVBQ0lJLG9CQUFvQixHQUR4QjtBQUFBLFVBRUlDLDBCQUEwQkQsa0JBQWtCRSxNQUZoRDtBQUFBLFVBR0lDLG1CQUFtQlAsUUFBUUMsZUFBUixHQUEwQkksdUJBSGpEO0FBQUEsVUFJSUcsMEJBQTBCWCxVQUFVWSxVQUFWLENBQXFCTCxpQkFBckIsQ0FKOUI7O0FBTUFJLDhCQUF3QkUsYUFBeEIsQ0FBc0NULGVBQXRDO0FBQ0FPLDhCQUF3QkcsY0FBeEIsQ0FBdUNKLGdCQUF2Qzs7QUFFQSxhQUFPQyx1QkFBUDtBQUNEOzs7O0VBWm1DWCxTOztBQWV0Q2UsT0FBT0MsT0FBUCxHQUFpQmQsdUJBQWpCIiwiZmlsZSI6InZlcnRpY2FsQnJhbmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIHZhciBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFN0ciA9ICd8JyxcbiAgICAgICAgdmVydGljYWxCcmFuY2hTdHJMZW5ndGggPSB2ZXJ0aWNhbEJyYW5jaFN0ci5sZW5ndGgsXG4gICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIHZlcnRpY2FsQnJhbmNoU3RyTGVuZ3RoLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFBhcnNlVHJlZS5mcm9tU3RyaW5nKHZlcnRpY2FsQnJhbmNoU3RyKTtcblxuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuIl19