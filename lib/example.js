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
    bnfGrammarTextareaSelector = 'textarea#bnfGrammar',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    bnfGrammarTextarea = new Textarea(bnfGrammarTextareaSelector),
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
    key: 'onBNFGrammarTextareaKeyUp',
    value: function onBNFGrammarTextareaKeyUp(handler) {
      bnfGrammarTextarea.onKeyUp(handler);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.onKeyUp(handler);
    }
  }, {
    key: 'updateParseTreeTextarea',
    value: function updateParseTreeTextarea(lexer, parser, production) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content),
            node = parser.nodeFromLines(lines, production),
            documentNode = node; ///

        if (documentNode === null) {
          throw new Error('The document cannot be parsed for some reason.');
        }

        var parseTree = documentNode.parseTree(lines);

        parseTree.shiftLine(); //

        var parseTreeString = parseTree.toString(),
            parseTreeTextareaHTML = parseTreeString; ///

        parseTreeTextarea.html(parseTreeTextareaHTML);

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearParseTreeTextarea();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsImJuZkdyYW1tYXJUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbktleVVwIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9kdWN0aW9uIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJkb2N1bWVudE5vZGUiLCJFcnJvciIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsInRvU3RyaW5nIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyUGFyc2VUcmVlVGV4dGFyZWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3dDRixVQUR4QyxDQUNFRSxlQURGO0FBQUEsSUFDbUJDLGdCQURuQixHQUN3Q0gsVUFEeEMsQ0FDbUJHLGdCQURuQjs7O0FBR04sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDRCQUE0QixvQkFEbEM7QUFBQSxJQUVNQyw2QkFBNkIscUJBRm5DO0FBQUEsSUFHTUMsMEJBQTBCLGtCQUhoQztBQUFBLElBSU1DLDJCQUEyQixtQkFKakM7QUFBQSxJQUtNQyxrQkFBa0IsSUFBSVIsUUFBSixDQUFhRyx1QkFBYixDQUx4QjtBQUFBLElBTU1NLG9CQUFvQixJQUFJVCxRQUFKLENBQWFJLHlCQUFiLENBTjFCO0FBQUEsSUFPTU0scUJBQXFCLElBQUlWLFFBQUosQ0FBYUssMEJBQWIsQ0FQM0I7QUFBQSxJQVFNTSxrQkFBa0IsSUFBSVYsZUFBSixDQUFvQkssdUJBQXBCLENBUnhCO0FBQUEsSUFTTU0sd0JBQXdCLEtBVDlCO0FBQUEsSUFVTUMsdUJBQXVCLElBVjdCOztBQVlBLElBQUlYLGdCQUFKLENBQXFCSyx3QkFBckIsRUFBK0NLLHFCQUEvQyxFQUFzRUMsb0JBQXRFOztJQUVNQyxPOzs7Ozs7O2lEQUNnQztBQUFFLGFBQU9KLG1CQUFtQkssUUFBbkIsRUFBUDtBQUF1Qzs7OytDQUUzQ0MsSyxFQUFPO0FBQUVOLHlCQUFtQk8sUUFBbkIsQ0FBNEJELEtBQTVCO0FBQXFDOzs7OENBRS9DRSxPLEVBQVM7QUFBRVIseUJBQW1CUyxPQUFuQixDQUEyQkQsT0FBM0I7QUFBc0M7OzsyQ0FFcERBLE8sRUFBUztBQUFFVixzQkFBZ0JXLE9BQWhCLENBQXdCRCxPQUF4QjtBQUFtQzs7OzRDQUU3Q0UsSyxFQUFPQyxNLEVBQVFDLFUsRUFBWTtBQUN4RCxVQUFJO0FBQ0YsWUFBTUMsdUJBQXVCZixnQkFBZ0JPLFFBQWhCLEVBQTdCO0FBQUEsWUFDTVMsVUFBVUQsb0JBRGhCO0FBQUEsWUFDc0M7QUFDaENFLGdCQUFRTCxNQUFNTSxnQkFBTixDQUF1QkYsT0FBdkIsQ0FGZDtBQUFBLFlBR01HLE9BQU9OLE9BQU9PLGFBQVAsQ0FBcUJILEtBQXJCLEVBQTRCSCxVQUE1QixDQUhiO0FBQUEsWUFJTU8sZUFBZUYsSUFKckIsQ0FERSxDQUswQjs7QUFFNUIsWUFBSUUsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLGdCQUFNLElBQUlDLEtBQUosQ0FBVSxnREFBVixDQUFOO0FBQ0Q7O0FBRUQsWUFBTUMsWUFBWUYsYUFBYUUsU0FBYixDQUF1Qk4sS0FBdkIsQ0FBbEI7O0FBRUFNLGtCQUFVQyxTQUFWLEdBYkUsQ0Fhc0I7O0FBRXhCLFlBQU1DLGtCQUFrQkYsVUFBVUcsUUFBVixFQUF4QjtBQUFBLFlBQ01DLHdCQUF3QkYsZUFEOUIsQ0FmRSxDQWdCOEM7O0FBRWhEeEIsMEJBQWtCMkIsSUFBbEIsQ0FBdUJELHFCQUF2Qjs7QUFFQTNCLHdCQUFnQjZCLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0FyQkQsQ0FxQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2Q5Qix3QkFBZ0IrQixRQUFoQixDQUF5QixPQUF6Qjs7QUFFQXpCLGdCQUFRMEIsc0JBQVI7QUFDRDtBQUNGOzs7NkNBRStCO0FBQzlCLFVBQU1MLHdCQUF3QixFQUE5Qjs7QUFFQTFCLHdCQUFrQjJCLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUI1QixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgICBibmZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNibmZHcmFtbWFyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShibmZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGdldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKCkgeyByZXR1cm4gYm5mR3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7IH1cblxuICBzdGF0aWMgc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUodmFsdWUpIHsgYm5mR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBvbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgYm5mR3JhbW1hclRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGxleGVyLCBwYXJzZXIsIHByb2R1Y3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gcGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgZG9jdW1lbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBpZiAoZG9jdW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUucGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICBcbiAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZVRleHRhcmVhKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuIl19