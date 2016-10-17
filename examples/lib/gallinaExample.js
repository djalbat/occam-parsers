'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('occam-lexers'),
    Div = easyui.Div,
    BNFLexer = lexers.BNFLexer,
    GallinaLexer = lexers.GallinaLexer;

var Example = require('./example'),
    Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser'),
    grammar = require('../../es6/gallina/grammar');

var lexer = undefined,
    parser = undefined,
    containerDivSelector = 'div.container',
    containerDiv = new Div(containerDivSelector);

var GallinaExample = function (_Example) {
    _inherits(GallinaExample, _Example);

    function GallinaExample() {
        _classCallCheck(this, GallinaExample);

        return _possibleConstructorReturn(this, (GallinaExample.__proto__ || Object.getPrototypeOf(GallinaExample)).apply(this, arguments));
    }

    _createClass(GallinaExample, null, [{
        key: 'run',
        value: function run() {
            lexer = GallinaLexer.fromNothing();

            var grammarTextAreaValue = grammar,
                ///
            lines = BNFLexer.linesFromGrammar(grammar),
                terminalSymbolsRegExpPattern = lexer.terminalSymbolsRegExpPattern(),
                terminalTypes = lexer.terminalTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, terminalTypes, mappings);

            parser = new Parser(productions);

            Example.grammarTextArea.setValue(grammarTextAreaValue);

            Example.contentTextArea.onChange(function () {
                Example.updateParseTree(lexer, parser);
            });

            containerDiv.removeClass('hidden');
        }
    }]);

    return GallinaExample;
}(Example);

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwibGV4ZXJzIiwiRGl2IiwiQk5GTGV4ZXIiLCJHYWxsaW5hTGV4ZXIiLCJFeGFtcGxlIiwiUGFyc2VyIiwiQk5GUGFyc2VyIiwiZ3JhbW1hciIsImxleGVyIiwidW5kZWZpbmVkIiwicGFyc2VyIiwiY29udGFpbmVyRGl2U2VsZWN0b3IiLCJjb250YWluZXJEaXYiLCJHYWxsaW5hRXhhbXBsZSIsImZyb21Ob3RoaW5nIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxUeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImdyYW1tYXJUZXh0QXJlYSIsInNldFZhbHVlIiwiY29udGVudFRleHRBcmVhIiwib25DaGFuZ2UiLCJ1cGRhdGVQYXJzZVRyZWUiLCJyZW1vdmVDbGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxTQUFTRCxRQUFRLGNBQVIsQ0FEYjtBQUFBLElBRUlFLE1BQU1ILE9BQU9HLEdBRmpCO0FBQUEsSUFHSUMsV0FBV0YsT0FBT0UsUUFIdEI7QUFBQSxJQUlJQyxlQUFlSCxPQUFPRyxZQUoxQjs7QUFNQSxJQUFJQyxVQUFVTCxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lNLFNBQVNOLFFBQVMsa0JBQVQsQ0FEYjtBQUFBLElBRUlPLFlBQVlQLFFBQVMscUJBQVQsQ0FGaEI7QUFBQSxJQUdJUSxVQUFVUixRQUFTLDJCQUFULENBSGQ7O0FBS0EsSUFBSVMsUUFBUUMsU0FBWjtBQUFBLElBQ0lDLFNBQVNELFNBRGI7QUFBQSxJQUVJRSx1QkFBdUIsZUFGM0I7QUFBQSxJQUdJQyxlQUFlLElBQUlYLEdBQUosQ0FBUVUsb0JBQVIsQ0FIbkI7O0lBS01FLGM7Ozs7Ozs7Ozs7OzhCQUNTO0FBQ1hMLG9CQUFRTCxhQUFhVyxXQUFiLEVBQVI7O0FBRUEsZ0JBQUlDLHVCQUF1QlIsT0FBM0I7QUFBQSxnQkFBb0M7QUFDaENTLG9CQUFRZCxTQUFTZSxnQkFBVCxDQUEwQlYsT0FBMUIsQ0FEWjtBQUFBLGdCQUVJVywrQkFBK0JWLE1BQU1VLDRCQUFOLEVBRm5DO0FBQUEsZ0JBR0lDLGdCQUFnQlgsTUFBTVcsYUFBTixFQUhwQjtBQUFBLGdCQUlJQyxXQUFXLEVBSmY7QUFBQSxnQkFLSUMsY0FBY2YsVUFBVWdCLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSw0QkFBdkIsRUFBcURDLGFBQXJELEVBQW9FQyxRQUFwRSxDQUxsQjs7QUFPQVYscUJBQVMsSUFBSUwsTUFBSixDQUFXZ0IsV0FBWCxDQUFUOztBQUVBakIsb0JBQVFtQixlQUFSLENBQXdCQyxRQUF4QixDQUFpQ1Qsb0JBQWpDOztBQUVBWCxvQkFBUXFCLGVBQVIsQ0FBd0JDLFFBQXhCLENBQWlDLFlBQVc7QUFDMUN0Qix3QkFBUXVCLGVBQVIsQ0FBd0JuQixLQUF4QixFQUErQkUsTUFBL0I7QUFDRCxhQUZEOztBQUlBRSx5QkFBYWdCLFdBQWIsQ0FBeUIsUUFBekI7QUFDRDs7OztFQXBCMEJ4QixPOztBQXVCN0J5QixPQUFPQyxPQUFQLEdBQWlCakIsY0FBakIiLCJmaWxlIjoiZ2FsbGluYUV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBEaXYgPSBlYXN5dWkuRGl2LFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEdhbGxpbmFMZXhlciA9IGxleGVycy5HYWxsaW5hTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyksXG4gICAgUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9wYXJzZXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2JuZlBhcnNlcicpLFxuICAgIGdyYW1tYXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2dhbGxpbmEvZ3JhbW1hcicpO1xuXG52YXIgbGV4ZXIgPSB1bmRlZmluZWQsXG4gICAgcGFyc2VyID0gdW5kZWZpbmVkLFxuICAgIGNvbnRhaW5lckRpdlNlbGVjdG9yID0gJ2Rpdi5jb250YWluZXInLFxuICAgIGNvbnRhaW5lckRpdiA9IG5ldyBEaXYoY29udGFpbmVyRGl2U2VsZWN0b3IpO1xuXG5jbGFzcyBHYWxsaW5hRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGxleGVyID0gR2FsbGluYUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gbGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICB0ZXJtaW5hbFR5cGVzID0gbGV4ZXIudGVybWluYWxUeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgdGVybWluYWxUeXBlcywgbWFwcGluZ3MpO1xuXG4gICAgcGFyc2VyID0gbmV3IFBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICBFeGFtcGxlLmdyYW1tYXJUZXh0QXJlYS5zZXRWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyRGl2LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFFeGFtcGxlO1xuIl19