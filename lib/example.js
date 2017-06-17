'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;


var contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    sizeableElement = new SizeableElement(sizeableElementSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'getBNFGrammarTextareaValue',
    value: function getBNFGrammarTextareaValue() {
      return bnfGrammarTextarea.getValue();
    }
  }, {
    key: 'setBNFGrammarTextareaValue',
    value: function setBNFGrammarTextareaValue(value) {
      bnfGrammarTextarea.setValue(value);
    }
  }, {
    key: 'setContentTextareaValue',
    value: function setContentTextareaValue(value) {
      contentTextarea.setValue(value);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.onKeyUp(handler);
    }
  }, {
    key: 'updateParseTreeTextarea',
    value: function updateParseTreeTextarea(lexer, parser, production) {
      var node = null;

      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content);

        node = parser.nodeFromLines(lines, production);

        if (node === null) {
          throw new Error('The document cannot be parsed for some reason.'); ///
        }

        var parseTree = node.generateParseTree(lines);

        parseTree.shiftLine(); //

        var parseTreeString = parseTree.toString(),
            parseTreeTextareaHTML = parseTreeString; ///

        parseTreeTextarea.html(parseTreeTextareaHTML);

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearParseTreeTextarea();
      }

      return node;
    }
  }, {
    key: 'clearParseTreeTextarea',
    value: function clearParseTreeTextarea() {
      var parseTreeTextareaHTML = '';

      parseTreeTextarea.html(parseTreeTextareaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwidmVydGljYWxTcGxpdHRlclNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhIiwicGFyc2VUcmVlVGV4dGFyZWEiLCJzaXplYWJsZUVsZW1lbnQiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsIkV4YW1wbGUiLCJibmZHcmFtbWFyVGV4dGFyZWEiLCJnZXRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwib25LZXlVcCIsImxleGVyIiwicGFyc2VyIiwicHJvZHVjdGlvbiIsIm5vZGUiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImNvbnRlbnQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnQiLCJub2RlRnJvbUxpbmVzIiwiRXJyb3IiLCJwYXJzZVRyZWUiLCJnZW5lcmF0ZVBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsInRvU3RyaW5nIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyUGFyc2VUcmVlVGV4dGFyZWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3dDRixVQUR4QyxDQUNFRSxlQURGO0FBQUEsSUFDbUJDLGdCQURuQixHQUN3Q0gsVUFEeEMsQ0FDbUJHLGdCQURuQjs7O0FBR04sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDRCQUE0QixvQkFEbEM7QUFBQSxJQUVNQywwQkFBMEIsa0JBRmhDO0FBQUEsSUFHTUMsMkJBQTJCLG1CQUhqQztBQUFBLElBSU1DLGtCQUFrQixJQUFJUCxRQUFKLENBQWFHLHVCQUFiLENBSnhCO0FBQUEsSUFLTUssb0JBQW9CLElBQUlSLFFBQUosQ0FBYUkseUJBQWIsQ0FMMUI7QUFBQSxJQU1NSyxrQkFBa0IsSUFBSVIsZUFBSixDQUFvQkksdUJBQXBCLENBTnhCO0FBQUEsSUFPTUssd0JBQXdCLEtBUDlCO0FBQUEsSUFRTUMsdUJBQXVCLElBUjdCOztBQVVBLElBQUlULGdCQUFKLENBQXFCSSx3QkFBckIsRUFBK0NJLHFCQUEvQyxFQUFzRUMsb0JBQXRFOztJQUVNQyxPOzs7Ozs7O2lEQUNnQztBQUFFLGFBQU9DLG1CQUFtQkMsUUFBbkIsRUFBUDtBQUF1Qzs7OytDQUUzQ0MsSyxFQUFPO0FBQUVGLHlCQUFtQkcsUUFBbkIsQ0FBNEJELEtBQTVCO0FBQXFDOzs7NENBRWpEQSxLLEVBQU87QUFBRVIsc0JBQWdCUyxRQUFoQixDQUF5QkQsS0FBekI7QUFBa0M7OzsyQ0FFNUNFLE8sRUFBUztBQUFFVixzQkFBZ0JXLE9BQWhCLENBQXdCRCxPQUF4QjtBQUFtQzs7OzRDQUU3Q0UsSyxFQUFPQyxNLEVBQVFDLFUsRUFBWTtBQUN4RCxVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLHVCQUF1QmhCLGdCQUFnQk8sUUFBaEIsRUFBN0I7QUFBQSxZQUNNVSxVQUFVRCxvQkFEaEI7QUFBQSxZQUNzQztBQUNoQ0UsZ0JBQVFOLE1BQU1PLGdCQUFOLENBQXVCRixPQUF2QixDQUZkOztBQUlBRixlQUFPRixPQUFPTyxhQUFQLENBQXFCRixLQUFyQixFQUE0QkosVUFBNUIsQ0FBUDs7QUFFQSxZQUFJQyxTQUFTLElBQWIsRUFBbUI7QUFDakIsZ0JBQU0sSUFBSU0sS0FBSixDQUFVLGdEQUFWLENBQU4sQ0FEaUIsQ0FDbUQ7QUFDckU7O0FBRUQsWUFBTUMsWUFBWVAsS0FBS1EsaUJBQUwsQ0FBdUJMLEtBQXZCLENBQWxCOztBQUVBSSxrQkFBVUUsU0FBVixHQWJFLENBYXNCOztBQUV4QixZQUFNQyxrQkFBa0JILFVBQVVJLFFBQVYsRUFBeEI7QUFBQSxZQUNNQyx3QkFBd0JGLGVBRDlCLENBZkUsQ0FnQjhDOztBQUVoRHhCLDBCQUFrQjJCLElBQWxCLENBQXVCRCxxQkFBdkI7O0FBRUEzQix3QkFBZ0I2QixXQUFoQixDQUE0QixPQUE1QjtBQUNELE9BckJELENBcUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkOUIsd0JBQWdCK0IsUUFBaEIsQ0FBeUIsT0FBekI7O0FBRUExQixnQkFBUTJCLHNCQUFSO0FBQ0Q7O0FBRUQsYUFBT2pCLElBQVA7QUFDRDs7OzZDQUUrQjtBQUM5QixVQUFNWSx3QkFBd0IsRUFBOUI7O0FBRUExQix3QkFBa0IyQixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCN0IsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lsYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpIHsgcmV0dXJuIGJuZkdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGJuZkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgc2V0Q29udGVudFRleHRhcmVhVmFsdWUodmFsdWUpIHsgY29udGVudFRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBvbkNvbnRlbnRUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgY29udGVudFRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEobGV4ZXIsIHBhcnNlciwgcHJvZHVjdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgIG5vZGUgPSBwYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcywgcHJvZHVjdGlvbik7XG4gICAgICBcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuZ2VuZXJhdGVQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSgpIHtcbiAgICBjb25zdCBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG5cbiJdfQ==