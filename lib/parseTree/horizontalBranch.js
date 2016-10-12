'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var HorizontalBranchParseTree = function (_ParseTree) {
  _inherits(HorizontalBranchParseTree, _ParseTree);

  function HorizontalBranchParseTree() {
    _classCallCheck(this, HorizontalBranchParseTree);

    return _possibleConstructorReturn(this, (HorizontalBranchParseTree.__proto__ || Object.getPrototypeOf(HorizontalBranchParseTree)).apply(this, arguments));
  }

  _createClass(HorizontalBranchParseTree, null, [{
    key: 'fromWidths',
    value: function fromWidths(width, leftMarginWidth, rightMarginWidth) {
      var horizontalBranchStrWidth = width - leftMarginWidth - rightMarginWidth,
          horizontalBranchStr = strFromCharactersWidth(horizontalBranchStrWidth, '-'),
          horizontalBranchParseTree = ParseTree.fromString(horizontalBranchStr);

      horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
      horizontalBranchParseTree.addRightMargin(rightMarginWidth);

      return horizontalBranchParseTree;
    }
  }]);

  return HorizontalBranchParseTree;
}(ParseTree);

module.exports = HorizontalBranchParseTree;

function strFromCharactersWidth(charactersWidth, character) {
  var str = '';

  for (var index = 0; index < charactersWidth; index++) {
    str += character;
  }

  return str;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWUiLCJyZXF1aXJlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIndpZHRoIiwibGVmdE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5XaWR0aCIsImhvcml6b250YWxCcmFuY2hTdHJXaWR0aCIsImhvcml6b250YWxCcmFuY2hTdHIiLCJzdHJGcm9tQ2hhcmFjdGVyc1dpZHRoIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiY2hhcmFjdGVyc1dpZHRoIiwiY2hhcmFjdGVyIiwic3RyIiwiaW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCOztJQUVNQyx5Qjs7Ozs7Ozs7Ozs7K0JBQ2NDLEssRUFBT0MsZSxFQUFpQkMsZ0IsRUFBa0I7QUFDMUQsVUFBSUMsMkJBQTJCSCxRQUFRQyxlQUFSLEdBQTBCQyxnQkFBekQ7QUFBQSxVQUNJRSxzQkFBc0JDLHVCQUF1QkYsd0JBQXZCLEVBQWlELEdBQWpELENBRDFCO0FBQUEsVUFFSUcsNEJBQTRCVCxVQUFVVSxVQUFWLENBQXFCSCxtQkFBckIsQ0FGaEM7O0FBSUFFLGdDQUEwQkUsYUFBMUIsQ0FBd0NQLGVBQXhDO0FBQ0FLLGdDQUEwQkcsY0FBMUIsQ0FBeUNQLGdCQUF6Qzs7QUFFQSxhQUFPSSx5QkFBUDtBQUNEOzs7O0VBVnFDVCxTOztBQWF4Q2EsT0FBT0MsT0FBUCxHQUFpQloseUJBQWpCOztBQUVBLFNBQVNNLHNCQUFULENBQWdDTyxlQUFoQyxFQUFpREMsU0FBakQsRUFBNEQ7QUFDMUQsTUFBSUMsTUFBTSxFQUFWOztBQUVBLE9BQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUgsZUFBNUIsRUFBNkNHLE9BQTdDLEVBQXNEO0FBQ3BERCxXQUFPRCxTQUFQO0FBQ0Q7O0FBRUQsU0FBT0MsR0FBUDtBQUNEIiwiZmlsZSI6Imhvcml6b250YWxCcmFuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tV2lkdGhzKHdpZHRoLCBsZWZ0TWFyZ2luV2lkdGgsIHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICB2YXIgaG9yaXpvbnRhbEJyYW5jaFN0cldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSByaWdodE1hcmdpbldpZHRoLFxuICAgICAgICBob3Jpem9udGFsQnJhbmNoU3RyID0gc3RyRnJvbUNoYXJhY3RlcnNXaWR0aChob3Jpem9udGFsQnJhbmNoU3RyV2lkdGgsICctJyksXG4gICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVN0cmluZyhob3Jpem9udGFsQnJhbmNoU3RyKTtcblxuICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIHN0ckZyb21DaGFyYWN0ZXJzV2lkdGgoY2hhcmFjdGVyc1dpZHRoLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJzV2lkdGg7IGluZGV4KyspIHtcbiAgICBzdHIgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cbiJdfQ==