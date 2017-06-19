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
    adjustedBNFGrammarTextareaSelector = 'textarea#adjustedBNFGrammar',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    bnfGrammarTextarea = new Textarea(bnfGrammarTextareaSelector),
    adjustedBNFGrammarTextarea = new Textarea(adjustedBNFGrammarTextareaSelector),
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
                  var bnfParserString = parser.toString(),
                      adjustedBNFGrammarTextareaValue = bnfParserString; ///

                  adjustedBNFGrammarTextarea.setValue(adjustedBNFGrammarTextareaValue);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwiYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwidmVydGljYWxTcGxpdHRlclNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhIiwicGFyc2VUcmVlVGV4dGFyZWEiLCJibmZHcmFtbWFyVGV4dGFyZWEiLCJhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbktleVVwIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9kdWN0aW9uIiwiYm5mUGFyc2VyU3RyaW5nIiwidG9TdHJpbmciLCJhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwibm9kZSIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiY29udGVudCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudCIsIm5vZGVGcm9tTGluZXMiLCJFcnJvciIsInBhcnNlVHJlZSIsImdlbmVyYXRlUGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyUGFyc2VUcmVlVGV4dGFyZWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEs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b0NBQWtCOEIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjlCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZkdyYW1tYXInLFxuICAgICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNhZGp1c3RlZEJORkdyYW1tYXInLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpIHsgcmV0dXJuIGJuZkdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGJuZkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgc2V0Q29udGVudFRleHRhcmVhVmFsdWUodmFsdWUpIHsgY29udGVudFRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBvbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgYm5mR3JhbW1hclRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGxleGVyLCBwYXJzZXIsIHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBibmZQYXJzZXJTdHJpbmcgPSBwYXJzZXIudG9TdHJpbmcoKSxcbiAgICAgICAgICBhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gYm5mUGFyc2VyU3RyaW5nOyAgLy8vXG5cbiAgICBhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZShhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgIG5vZGUgPSBwYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcywgcHJvZHVjdGlvbik7XG4gICAgICBcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuZ2VuZXJhdGVQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSgpIHtcbiAgICBjb25zdCBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=