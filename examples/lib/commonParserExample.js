'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    parsers = require('../../index'),
    Element = easyui.Element,
    TextArea = easyui.TextArea,
    BNFParser = parsers.BNFParser,
    CommonParser = parsers.CommonParser;

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

var grammarTextAreaValue = grammarTextArea.getValue(),
    grammar = grammarTextAreaValue,
    ///
specialSymbols = '\\.|\\(|\\)',
    Parts = [],
    mappings = {},
    productions = BNFParser.parse(grammar, specialSymbols, Parts, mappings);

var CommonParserExample = function () {
    function CommonParserExample() {
        _classCallCheck(this, CommonParserExample);
    }

    _createClass(CommonParserExample, null, [{
        key: 'run',
        value: function run() {
            var commonParser = new CommonParser();

            inputTextArea.onChange(function (value) {
                var input = value,
                    ///
                parsedInput = commonParser.parse(input, productions),
                    paragraphElementHTML = parsedInput; ///

                paragraphElement.html(paragraphElementHTML);
            });
        }
    }]);

    return CommonParserExample;
}();

module.exports = CommonParserExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb21tb25QYXJzZXJFeGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJwYXJzZXJzIiwiRWxlbWVudCIsIlRleHRBcmVhIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiaW5wdXRUZXh0QXJlYVNlbGVjdG9yIiwiZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IiLCJwYXJhZ3JhcGhFbGVtZW50U2VsZWN0b3IiLCJpbnB1dFRleHRBcmVhIiwiZ3JhbW1hclRleHRBcmVhIiwicGFyYWdyYXBoRWxlbWVudCIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJncmFtbWFyIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsIkNvbW1vblBhcnNlckV4YW1wbGUiLCJjb21tb25QYXJzZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwiaW5wdXQiLCJwYXJzZWRJbnB1dCIsInBhcmFncmFwaEVsZW1lbnRIVE1MIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFVBQVVELFFBQVEsYUFBUixDQURkO0FBQUEsSUFFSUUsVUFBVUgsT0FBT0csT0FGckI7QUFBQSxJQUdJQyxXQUFXSixPQUFPSSxRQUh0QjtBQUFBLElBSUlDLFlBQVlILFFBQVFHLFNBSnhCO0FBQUEsSUFLSUMsZUFBZUosUUFBUUksWUFMM0I7O0FBT0EsSUFBSUMsd0JBQXdCLGdCQUE1QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywyQkFBMkIsR0FGL0I7QUFBQSxJQUdJQyxnQkFBZ0IsSUFBSU4sUUFBSixDQUFhRyxxQkFBYixDQUhwQjtBQUFBLElBSUlJLGtCQUFrQixJQUFJUCxRQUFKLENBQWFJLHVCQUFiLENBSnRCO0FBQUEsSUFLSUksbUJBQW1CLElBQUlULE9BQUosQ0FBWU0sd0JBQVosQ0FMdkI7O0FBT0EsSUFBSUksdUJBQXVCRixnQkFBZ0JHLFFBQWhCLEVBQTNCO0FBQUEsSUFDSUMsVUFBVUYsb0JBRGQ7QUFBQSxJQUNvQztBQUNoQ0csaUJBQWlCLGFBRnJCO0FBQUEsSUFHSUMsUUFBUSxFQUhaO0FBQUEsSUFJSUMsV0FBVyxFQUpmO0FBQUEsSUFLSUMsY0FBY2QsVUFBVWUsS0FBVixDQUFnQkwsT0FBaEIsRUFBeUJDLGNBQXpCLEVBQXlDQyxLQUF6QyxFQUFnREMsUUFBaEQsQ0FMbEI7O0lBT01HLG1COzs7Ozs7OzhCQUNTO0FBQ1gsZ0JBQUlDLGVBQWUsSUFBSWhCLFlBQUosRUFBbkI7O0FBRUFJLDBCQUFjYSxRQUFkLENBQXVCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckMsb0JBQUlDLFFBQVFELEtBQVo7QUFBQSxvQkFBb0I7QUFDaEJFLDhCQUFjSixhQUFhRixLQUFiLENBQW1CSyxLQUFuQixFQUEwQk4sV0FBMUIsQ0FEbEI7QUFBQSxvQkFFSVEsdUJBQXVCRCxXQUYzQixDQURxQyxDQUdHOztBQUV4Q2QsaUNBQWlCZ0IsSUFBakIsQ0FBc0JELG9CQUF0QjtBQUNELGFBTkQ7QUFPRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJULG1CQUFqQiIsImZpbGUiOiJjb21tb25QYXJzZXJFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgcGFyc2VycyA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50LFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIEJORlBhcnNlciA9IHBhcnNlcnMuQk5GUGFyc2VyLFxuICAgIENvbW1vblBhcnNlciA9IHBhcnNlcnMuQ29tbW9uUGFyc2VyO1xuXG52YXIgaW5wdXRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2lucHV0JyxcbiAgICBncmFtbWFyVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNncmFtbWFyJyxcbiAgICBwYXJhZ3JhcGhFbGVtZW50U2VsZWN0b3IgPSAncCcsXG4gICAgaW5wdXRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShpbnB1dFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIGdyYW1tYXJUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShncmFtbWFyVGV4dEFyZWFTZWxlY3RvciksXG4gICAgcGFyYWdyYXBoRWxlbWVudCA9IG5ldyBFbGVtZW50KHBhcmFncmFwaEVsZW1lbnRTZWxlY3Rvcik7XG5cbnZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dEFyZWFWYWx1ZSwgLy8vXG4gICAgc3BlY2lhbFN5bWJvbHMgPSAnXFxcXC58XFxcXCh8XFxcXCknLFxuICAgIFBhcnRzID0gW10sXG4gICAgbWFwcGluZ3MgPSB7fSxcbiAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShncmFtbWFyLCBzcGVjaWFsU3ltYm9scywgUGFydHMsIG1hcHBpbmdzKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGNvbW1vblBhcnNlciA9IG5ldyBDb21tb25QYXJzZXIoKTtcblxuICAgIGlucHV0VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBpbnB1dCA9IHZhbHVlLCAgLy8vXG4gICAgICAgICAgcGFyc2VkSW5wdXQgPSBjb21tb25QYXJzZXIucGFyc2UoaW5wdXQsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50SFRNTCA9IHBhcnNlZElucHV0OyAvLy9cblxuICAgICAgcGFyYWdyYXBoRWxlbWVudC5odG1sKHBhcmFncmFwaEVsZW1lbnRIVE1MKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlckV4YW1wbGU7XG4iXX0=