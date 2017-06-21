'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easyLayout.SizeableElement,
    VerticalSplitter = easyLayout.VerticalSplitter;


var contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    extendedBNFGrammarTextareaSelector = 'textarea#extendedBNFGrammar',
    adjustedExtendedBNFGrammarTextareaSelector = 'textarea#adjustedExtendedBNFGrammar',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    extendedBNFGrammarTextarea = new Textarea(extendedBNFGrammarTextareaSelector),
    adjustedExtendedBNFGrammarTextarea = new Textarea(adjustedExtendedBNFGrammarTextareaSelector),
    sizeableElement = new SizeableElement(sizeableElementSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
      function Example() {
            _classCallCheck(this, Example);
      }

      _createClass(Example, null, [{
            key: 'getExtendedBNFGrammarTextareaValue',
            value: function getExtendedBNFGrammarTextareaValue() {
                  return extendedBNFGrammarTextarea.getValue();
            }
      }, {
            key: 'setExtendedBNFGrammarTextareaValue',
            value: function setExtendedBNFGrammarTextareaValue(value) {
                  extendedBNFGrammarTextarea.setValue(value);
            }
      }, {
            key: 'setContentTextareaValue',
            value: function setContentTextareaValue(value) {
                  contentTextarea.setValue(value);
            }
      }, {
            key: 'onExtendedBNFGrammarTextareaKeyUp',
            value: function onExtendedBNFGrammarTextareaKeyUp(handler) {
                  extendedBNFGrammarTextarea.onKeyUp(handler);
            }
      }, {
            key: 'onContentTextareaKeyUp',
            value: function onContentTextareaKeyUp(handler) {
                  contentTextarea.onKeyUp(handler);
            }
      }, {
            key: 'updateParseTreeTextarea',
            value: function updateParseTreeTextarea(lexer, parser, production) {
                  var extendedBNFParserString = parser.toString(),
                      adjustedExtendedBNFGrammarTextareaValue = extendedBNFParserString; ///

                  adjustedExtendedBNFGrammarTextarea.setValue(adjustedExtendedBNFGrammarTextareaValue);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJhZGp1c3RlZEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwiZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWEiLCJhZGp1c3RlZEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJFeGFtcGxlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uS2V5VXAiLCJsZXhlciIsInBhcnNlciIsInByb2R1Y3Rpb24iLCJleHRlbmRlZEJORlBhcnNlclN0cmluZyIsInRvU3RyaW5nIiwiYWRqdXN0ZWRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwibm9kZSIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiY29udGVudCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudCIsIm5vZGVGcm9tTGluZXMiLCJFcnJvciIsInBhcnNlVHJlZSIsImdlbmVyYXRlUGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsImNsZWFyUGFyc2VUcmVlVGV4dGFyZWEi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UDtBQUNEOzs7cURBRStCO0FBQzlCLHNCQUFNVyx3QkFBd0IsRUFBOUI7O0FBRUE3QixvQ0FBa0I4QixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCOUIsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNleHRlbmRlZEJORkdyYW1tYXInLFxuICAgICAgYWRqdXN0ZWRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2FkanVzdGVkRXh0ZW5kZWRCTkZHcmFtbWFyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYWRqdXN0ZWRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShhZGp1c3RlZEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKCkgeyByZXR1cm4gZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBzZXRDb250ZW50VGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uRXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGxleGVyLCBwYXJzZXIsIHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBleHRlbmRlZEJORlBhcnNlclN0cmluZyA9IHBhcnNlci50b1N0cmluZygpLFxuICAgICAgICAgIGFkanVzdGVkRXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGV4dGVuZGVkQk5GUGFyc2VyU3RyaW5nOyAgLy8vXG5cbiAgICBhZGp1c3RlZEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGFkanVzdGVkRXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgICBub2RlID0gcGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24pO1xuICAgICAgXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTsgIC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKSB7XG4gICAgY29uc3QgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19