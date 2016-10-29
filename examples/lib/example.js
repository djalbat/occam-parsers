'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var lexers = require('../../es6/occam-lexers'),
    BNFLexer = lexers.BNFLexer;

var Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser');

var leftColumnSelector = '#leftColumn',
    grammarTextAreaSelector = 'textarea#grammar',
    contentTextAreaSelector = 'textarea#content',
    parseTreeTextAreaSelector = 'textarea#parseTree',
    leftColumn = new SizeableElement(leftColumnSelector),
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var parser = undefined;

var Example = function () {
    function Example() {
        _classCallCheck(this, Example);
    }

    _createClass(Example, null, [{
        key: 'getGrammarTextAreaValue',
        value: function getGrammarTextAreaValue() {
            return grammarTextArea.getValue();
        }
    }, {
        key: 'setGrammarTextAreaValue',
        value: function setGrammarTextAreaValue(value) {
            grammarTextArea.setValue(value);
        }
    }, {
        key: 'onContentTextAreaChange',
        value: function onContentTextAreaChange(handler) {
            contentTextArea.onChange(handler);
        }
    }, {
        key: 'onGrammarTextAreaChange',
        value: function onGrammarTextAreaChange(handler) {
            grammarTextArea.onChange(handler);
        }
    }, {
        key: 'updateParser',
        value: function updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes) {
            var lines = BNFLexer.linesFromGrammar(grammar),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

            parser = new Parser(productions);
        }
    }, {
        key: 'updateParseTree',
        value: function updateParseTree(lexer) {
            var contentTextAreaValue = contentTextArea.getValue(),
                content = contentTextAreaValue,
                ///
            tokens = lexer.tokensFromContent(content),
                documentNode = parser.parse(tokens);

            if (documentNode !== null) {
                var parseTree = documentNode.getParseTree();

                parseTree.shiftLine(); //

                var parseTreeString = parseTree.toString(),
                    parseTreeTextAreaHTML = parseTreeString; ///

                parseTreeTextArea.html(parseTreeTextAreaHTML);
            } else {
                Example.clearParseTree();
            }
        }
    }, {
        key: 'clearParseTree',
        value: function clearParseTree() {
            var parseTreeTextAreaHTML = '';

            parseTreeTextArea.html(parseTreeTextAreaHTML);
        }
    }]);

    return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZXhlcnMiLCJCTkZMZXhlciIsIlBhcnNlciIsIkJORlBhcnNlciIsImxlZnRDb2x1bW5TZWxlY3RvciIsImdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRBcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yIiwibGVmdENvbHVtbiIsImNvbnRlbnRUZXh0QXJlYSIsImdyYW1tYXJUZXh0QXJlYSIsInBhcnNlVHJlZVRleHRBcmVhIiwiVE9fVEhFX1JJR0hUX09GIiwic2l0dWF0ZWQiLCJwYXJzZXIiLCJ1bmRlZmluZWQiLCJFeGFtcGxlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uQ2hhbmdlIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJsZXhlciIsImNvbnRlbnRUZXh0QXJlYVZhbHVlIiwiY29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwiZG9jdW1lbnROb2RlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxTQUFTTCxRQUFRLHdCQUFSLENBQWI7QUFBQSxJQUNJTSxXQUFXRCxPQUFPQyxRQUR0Qjs7QUFHQSxJQUFJQyxTQUFTUCxRQUFRLGtCQUFSLENBQWI7QUFBQSxJQUNJUSxZQUFZUixRQUFRLHFCQUFSLENBRGhCOztBQUdBLElBQUlTLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywwQkFBMEIsa0JBRjlCO0FBQUEsSUFHSUMsNEJBQTRCLG9CQUhoQztBQUFBLElBSUlDLGFBQWEsSUFBSVYsZUFBSixDQUFvQk0sa0JBQXBCLENBSmpCO0FBQUEsSUFLSUssa0JBQWtCLElBQUlaLFFBQUosQ0FBYVMsdUJBQWIsQ0FMdEI7QUFBQSxJQU1JSSxrQkFBa0IsSUFBSWIsUUFBSixDQUFhUSx1QkFBYixDQU50QjtBQUFBLElBT0lNLG9CQUFvQixJQUFJZCxRQUFKLENBQWFVLHlCQUFiLENBUHhCO0FBQUEsSUFRSUssa0JBQWtCYixpQkFBaUJjLFFBQWpCLENBQTBCRCxlQVJoRDs7QUFVQSxJQUFJYixnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RhLGVBQWhELEVBQWlFSixVQUFqRTs7QUFFQSxJQUFJTSxTQUFTQyxTQUFiOztJQUVNQyxPOzs7Ozs7O2tEQUM2QjtBQUFFLG1CQUFPTixnQkFBZ0JPLFFBQWhCLEVBQVA7QUFBb0M7OztnREFFeENDLEssRUFBTztBQUFFUiw0QkFBZ0JTLFFBQWhCLENBQXlCRCxLQUF6QjtBQUFrQzs7O2dEQUUzQ0UsTyxFQUFTO0FBQUVYLDRCQUFnQlksUUFBaEIsQ0FBeUJELE9BQXpCO0FBQW9DOzs7Z0RBRS9DQSxPLEVBQVM7QUFBRVYsNEJBQWdCVyxRQUFoQixDQUF5QkQsT0FBekI7QUFBb0M7OztxQ0FFMURFLE8sRUFBU0MsNEIsRUFBOEJDLHFCLEVBQXVCO0FBQ2hGLGdCQUFJQyxRQUFReEIsU0FBU3lCLGdCQUFULENBQTBCSixPQUExQixDQUFaO0FBQUEsZ0JBQ0lLLFdBQVcsRUFEZjtBQUFBLGdCQUVJQyxjQUFjekIsVUFBVTBCLEtBQVYsQ0FBZ0JKLEtBQWhCLEVBQXVCRiw0QkFBdkIsRUFBcURDLHFCQUFyRCxFQUE0RUcsUUFBNUUsQ0FGbEI7O0FBSUFiLHFCQUFTLElBQUlaLE1BQUosQ0FBVzBCLFdBQVgsQ0FBVDtBQUNEOzs7d0NBRXNCRSxLLEVBQU87QUFDNUIsZ0JBQUlDLHVCQUF1QnRCLGdCQUFnQlEsUUFBaEIsRUFBM0I7QUFBQSxnQkFDSWUsVUFBVUQsb0JBRGQ7QUFBQSxnQkFDcUM7QUFDakNFLHFCQUFTSCxNQUFNSSxpQkFBTixDQUF3QkYsT0FBeEIsQ0FGYjtBQUFBLGdCQUdJRyxlQUFlckIsT0FBT2UsS0FBUCxDQUFhSSxNQUFiLENBSG5COztBQUtBLGdCQUFJRSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsb0JBQUlDLFlBQVlELGFBQWFFLFlBQWIsRUFBaEI7O0FBRUFELDBCQUFVRSxTQUFWLEdBSHlCLENBR0Q7O0FBRXhCLG9CQUFJQyxrQkFBa0JILFVBQVVJLFFBQVYsRUFBdEI7QUFBQSxvQkFDSUMsd0JBQXdCRixlQUQ1QixDQUx5QixDQU1xQjs7QUFFOUM1QixrQ0FBa0IrQixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0QsYUFURCxNQVNPO0FBQ0x6Qix3QkFBUTJCLGNBQVI7QUFDRDtBQUNGOzs7eUNBRXVCO0FBQ3RCLGdCQUFJRix3QkFBd0IsRUFBNUI7O0FBRUE5Qiw4QkFBa0IrQixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCN0IsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGVhc3l1aWxheW91dCA9IHJlcXVpcmUoJ2Vhc3l1aS1sYXlvdXQnKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYSxcbiAgICBTaXplYWJsZUVsZW1lbnQgPSBlYXN5dWlsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5dWlsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJy4uLy4uL2VzNi9vY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcjtcblxudmFyIFBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2VzNi9wYXJzZXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9lczYvYm5mUGFyc2VyJyk7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2dyYW1tYXInLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxudmFyIHBhcnNlciA9IHVuZGVmaW5lZDtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSgpIHsgcmV0dXJuIGdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKHZhbHVlKSB7IGdyYW1tYXJUZXh0QXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dEFyZWFDaGFuZ2UoaGFuZGxlcikgeyBjb250ZW50VGV4dEFyZWEub25DaGFuZ2UoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UoaGFuZGxlcikgeyBncmFtbWFyVGV4dEFyZWEub25DaGFuZ2UoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGdyYW1tYXIsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcykge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKTtcblxuICAgIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlcikge1xuICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKGRvY3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFyIHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgdmFyIHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==