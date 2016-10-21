'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('../../es6/occam-lexers'),
    Div = easyui.Div,
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var NonBasicExample = require('./nonBasicExample'),
    Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser'),
    PreProcessor = require('../../es6/preprocessor'),
    grammar = require('../../es6/grammar/florence');

var preprocessor = new PreProcessor(),
    lexer = undefined,
    parser = undefined,
    containerDivSelector = 'div.container',
    containerDiv = new Div(containerDivSelector);

var FlorenceExample = function (_NonBasicExample) {
    _inherits(FlorenceExample, _NonBasicExample);

    function FlorenceExample() {
        _classCallCheck(this, FlorenceExample);

        return _possibleConstructorReturn(this, (FlorenceExample.__proto__ || Object.getPrototypeOf(FlorenceExample)).apply(this, arguments));
    }

    _createClass(FlorenceExample, null, [{
        key: 'run',
        value: function run() {
            lexer = FlorenceLexer.fromNothing();

            var grammarTextAreaValue = grammar,
                ///
            lines = BNFLexer.linesFromGrammar(grammar),
                terminalSymbolsRegExpPattern = lexer.terminalSymbolsRegExpPattern(),
                significantTokenTypes = lexer.significantTokenTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

            parser = new Parser(productions);

            NonBasicExample.grammarTextArea.setValue(grammarTextAreaValue);

            NonBasicExample.contentTextArea.onChange(function () {
                NonBasicExample.updateParseTree(preprocessor, lexer, parser);
            });

            containerDiv.removeClass('hidden');
        }
    }]);

    return FlorenceExample;
}(NonBasicExample);

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImxleGVycyIsIkRpdiIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsIk5vbkJhc2ljRXhhbXBsZSIsIlBhcnNlciIsIkJORlBhcnNlciIsIlByZVByb2Nlc3NvciIsImdyYW1tYXIiLCJwcmVwcm9jZXNzb3IiLCJsZXhlciIsInVuZGVmaW5lZCIsInBhcnNlciIsImNvbnRhaW5lckRpdlNlbGVjdG9yIiwiY29udGFpbmVyRGl2IiwiRmxvcmVuY2VFeGFtcGxlIiwiZnJvbU5vdGhpbmciLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJncmFtbWFyVGV4dEFyZWEiLCJzZXRWYWx1ZSIsImNvbnRlbnRUZXh0QXJlYSIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsU0FBU0QsUUFBUSx3QkFBUixDQURiO0FBQUEsSUFFSUUsTUFBTUgsT0FBT0csR0FGakI7QUFBQSxJQUdJQyxXQUFXRixPQUFPRSxRQUh0QjtBQUFBLElBSUlDLGdCQUFnQkgsT0FBT0csYUFKM0I7O0FBTUEsSUFBSUMsa0JBQWtCTCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDSU0sU0FBU04sUUFBUyxrQkFBVCxDQURiO0FBQUEsSUFFSU8sWUFBWVAsUUFBUyxxQkFBVCxDQUZoQjtBQUFBLElBR0lRLGVBQWVSLFFBQVEsd0JBQVIsQ0FIbkI7QUFBQSxJQUlJUyxVQUFVVCxRQUFTLDRCQUFULENBSmQ7O0FBTUEsSUFBSVUsZUFBZSxJQUFJRixZQUFKLEVBQW5CO0FBQUEsSUFDSUcsUUFBUUMsU0FEWjtBQUFBLElBRUlDLFNBQVNELFNBRmI7QUFBQSxJQUdJRSx1QkFBdUIsZUFIM0I7QUFBQSxJQUlJQyxlQUFlLElBQUliLEdBQUosQ0FBUVksb0JBQVIsQ0FKbkI7O0lBTU1FLGU7Ozs7Ozs7Ozs7OzhCQUNTO0FBQ1hMLG9CQUFRUCxjQUFjYSxXQUFkLEVBQVI7O0FBRUEsZ0JBQUlDLHVCQUF1QlQsT0FBM0I7QUFBQSxnQkFBb0M7QUFDaENVLG9CQUFRaEIsU0FBU2lCLGdCQUFULENBQTBCWCxPQUExQixDQURaO0FBQUEsZ0JBRUlZLCtCQUErQlYsTUFBTVUsNEJBQU4sRUFGbkM7QUFBQSxnQkFHSUMsd0JBQXdCWCxNQUFNVyxxQkFBTixFQUg1QjtBQUFBLGdCQUlJQyxXQUFXLEVBSmY7QUFBQSxnQkFLSUMsY0FBY2pCLFVBQVVrQixLQUFWLENBQWdCTixLQUFoQixFQUF1QkUsNEJBQXZCLEVBQXFEQyxxQkFBckQsRUFBNEVDLFFBQTVFLENBTGxCOztBQU9BVixxQkFBUyxJQUFJUCxNQUFKLENBQVdrQixXQUFYLENBQVQ7O0FBRUFuQiw0QkFBZ0JxQixlQUFoQixDQUFnQ0MsUUFBaEMsQ0FBeUNULG9CQUF6Qzs7QUFFQWIsNEJBQWdCdUIsZUFBaEIsQ0FBZ0NDLFFBQWhDLENBQXlDLFlBQVc7QUFDbER4QixnQ0FBZ0J5QixlQUFoQixDQUFnQ3BCLFlBQWhDLEVBQThDQyxLQUE5QyxFQUFxREUsTUFBckQ7QUFDRCxhQUZEOztBQUlBRSx5QkFBYWdCLFdBQWIsQ0FBeUIsUUFBekI7QUFDRDs7OztFQXBCMkIxQixlOztBQXVCOUIyQixPQUFPQyxPQUFQLEdBQWlCakIsZUFBakIiLCJmaWxlIjoiZmxvcmVuY2VFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgbGV4ZXJzID0gcmVxdWlyZSgnLi4vLi4vZXM2L29jY2FtLWxleGVycycpLFxuICAgIERpdiA9IGVhc3l1aS5EaXYsXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgTm9uQmFzaWNFeGFtcGxlID0gcmVxdWlyZSgnLi9ub25CYXNpY0V4YW1wbGUnKSxcbiAgICBQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L3BhcnNlcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvYm5mUGFyc2VyJyksXG4gICAgUHJlUHJvY2Vzc29yID0gcmVxdWlyZSgnLi4vLi4vZXM2L3ByZXByb2Nlc3NvcicpLFxuICAgIGdyYW1tYXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2dyYW1tYXIvZmxvcmVuY2UnKTtcblxudmFyIHByZXByb2Nlc3NvciA9IG5ldyBQcmVQcm9jZXNzb3IoKSxcbiAgICBsZXhlciA9IHVuZGVmaW5lZCxcbiAgICBwYXJzZXIgPSB1bmRlZmluZWQsXG4gICAgY29udGFpbmVyRGl2U2VsZWN0b3IgPSAnZGl2LmNvbnRhaW5lcicsXG4gICAgY29udGFpbmVyRGl2ID0gbmV3IERpdihjb250YWluZXJEaXZTZWxlY3Rvcik7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSBleHRlbmRzIE5vbkJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gbGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBsZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7fSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpO1xuXG4gICAgcGFyc2VyID0gbmV3IFBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICBOb25CYXNpY0V4YW1wbGUuZ3JhbW1hclRleHRBcmVhLnNldFZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIE5vbkJhc2ljRXhhbXBsZS5jb250ZW50VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBOb25CYXNpY0V4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHByZXByb2Nlc3NvciwgbGV4ZXIsIHBhcnNlcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXJEaXYucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIl19