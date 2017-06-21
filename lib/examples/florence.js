'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../florence/grammar'),
    mappings = require('../florence/mappings'),
    FlorenceParser = require('../florence/parser');

var Checkbox = easy.Checkbox,
    Textarea = easy.Textarea,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    productionNameTextareaSelector = '#productionName';

var florenceLexer = FlorenceLexer.fromNothing();

var productionName = void 0,
    mappingsCheckbox = void 0,
    productionNameTextarea = void 0;

var defaultMappings = mappings; ///

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
                  productionNameTextarea = new Textarea(productionNameTextareaSelector);

                  var bnfGrammarTextareaValue = grammar; ///

                  Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

                  mappingsCheckbox.onChange(update);

                  productionNameTextarea.onKeyUp(update);

                  Example.onExtendedBNFGrammarTextareaKeyUp(update);

                  Example.onContentTextareaKeyUp(update);

                  update();
            }
      }]);

      return FlorenceExample;
}();

module.exports = FlorenceExample;

function update() {
      var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
          mappings = mappingsCheckboxChecked ? defaultMappings : {},
          florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings),
          productionNameTextareaValue = productionNameTextarea.getValue(),
          productionName = productionNameTextareaValue,
          ///
      production = florenceParser.findProduction(productionName);

      Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJncmFtbWFyIiwibWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsIkNoZWNrYm94IiwiVGV4dGFyZWEiLCJGbG9yZW5jZUxleGVyIiwibWFwcGluZ3NDaGVja2JveFNlbGVjdG9yIiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwicHJvZHVjdGlvbk5hbWUiLCJtYXBwaW5nc0NoZWNrYm94IiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYSIsImRlZmF1bHRNYXBwaW5ncyIsIkZsb3JlbmNlRXhhbXBsZSIsImJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwic2V0RXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsIm9uQ2hhbmdlIiwidXBkYXRlIiwib25LZXlVcCIsIm9uRXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFLZXlVcCIsIm9uQ29udGVudFRleHRhcmVhS2V5VXAiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwcGluZ3NDaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJmbG9yZW5jZVBhcnNlciIsImZyb21HcmFtbWFyQW5kTWFwcGluZ3MiLCJwcm9kdWN0aW9uTmFtZVRleHRhcmVhVmFsdWUiLCJnZXRWYWx1ZSIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsInVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxVQUFVSCxRQUFRLHFCQUFSLENBRGhCO0FBQUEsSUFFTUksV0FBV0osUUFBUSxzQkFBUixDQUZqQjtBQUFBLElBR01LLGlCQUFpQkwsUUFBUSxvQkFBUixDQUh2Qjs7SUFLUU0sUSxHQUF1QlAsSSxDQUF2Qk8sUTtJQUFVQyxRLEdBQWFSLEksQ0FBYlEsUTtJQUNWQyxhLEdBQWtCUCxNLENBQWxCTyxhOzs7QUFFUixJQUFNQywyQkFBMkIsV0FBakM7QUFBQSxJQUNNQyxpQ0FBaUMsaUJBRHZDOztBQUdBLElBQU1DLGdCQUFnQkgsY0FBY0ksV0FBZCxFQUF0Qjs7QUFFQSxJQUFJQyx1QkFBSjtBQUFBLElBQ0lDLHlCQURKO0FBQUEsSUFFSUMsK0JBRko7O0FBSUEsSUFBTUMsa0JBQWtCWixRQUF4QixDLENBQWtDOztJQUU1QmEsZTs7Ozs7OztrQ0FDUztBQUNYSCxxQ0FBbUIsSUFBSVIsUUFBSixDQUFhRyx3QkFBYixDQUFuQjtBQUNBTSwyQ0FBeUIsSUFBSVIsUUFBSixDQUFhRyw4QkFBYixDQUF6Qjs7QUFFQSxzQkFBTVEsMEJBQTBCZixPQUFoQyxDQUpXLENBSStCOztBQUUxQ0QsMEJBQVFpQixrQ0FBUixDQUEyQ0QsdUJBQTNDOztBQUVBSixtQ0FBaUJNLFFBQWpCLENBQTBCQyxNQUExQjs7QUFFQU4seUNBQXVCTyxPQUF2QixDQUErQkQsTUFBL0I7O0FBRUFuQiwwQkFBUXFCLGlDQUFSLENBQTBDRixNQUExQzs7QUFFQW5CLDBCQUFRc0Isc0JBQVIsQ0FBK0JILE1BQS9COztBQUVBQTtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQlQsZUFBakI7O0FBRUEsU0FBU0ksTUFBVCxHQUFrQjtBQUNoQixVQUFNTSwwQkFBMEJiLGlCQUFpQmMsU0FBakIsRUFBaEM7QUFBQSxVQUNNeEIsV0FBV3VCLDBCQUNUWCxlQURTLEdBRVAsRUFIVjtBQUFBLFVBSU1hLGlCQUFpQnhCLGVBQWV5QixzQkFBZixDQUFzQzNCLE9BQXRDLEVBQStDQyxRQUEvQyxDQUp2QjtBQUFBLFVBS00yQiw4QkFBOEJoQix1QkFBdUJpQixRQUF2QixFQUxwQztBQUFBLFVBTU1uQixpQkFBaUJrQiwyQkFOdkI7QUFBQSxVQU1vRDtBQUM5Q0UsbUJBQWFKLGVBQWVLLGNBQWYsQ0FBOEJyQixjQUE5QixDQVBuQjs7QUFTQVgsY0FBUWlDLHVCQUFSLENBQWdDeEIsYUFBaEMsRUFBK0NrQixjQUEvQyxFQUErREksVUFBL0Q7QUFDRCIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvbWFwcGluZ3MnKSxcbiAgICAgIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQ2hlY2tib3gsIFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IG1hcHBpbmdzQ2hlY2tib3hTZWxlY3RvciA9ICcjbWFwcGluZ3MnLFxuICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yID0gJyNwcm9kdWN0aW9uTmFtZSc7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmxldCBwcm9kdWN0aW9uTmFtZSxcbiAgICBtYXBwaW5nc0NoZWNrYm94LFxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWE7XG5cbmNvbnN0IGRlZmF1bHRNYXBwaW5ncyA9IG1hcHBpbmdzOyAvLy9cblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBtYXBwaW5nc0NoZWNrYm94ID0gbmV3IENoZWNrYm94KG1hcHBpbmdzQ2hlY2tib3hTZWxlY3Rvcik7XG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwcm9kdWN0aW9uTmFtZVRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgYm5mR3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyOyAgLy8vXG5cbiAgICBFeGFtcGxlLnNldEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgbWFwcGluZ3NDaGVja2JveC5vbkNoYW5nZSh1cGRhdGUpO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5vbktleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uRXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICB1cGRhdGUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb25zdCBtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCA9IG1hcHBpbmdzQ2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgIG1hcHBpbmdzID0gbWFwcGluZ3NDaGVja2JveENoZWNrZWQgP1xuICAgICAgICAgIGRlZmF1bHRNYXBwaW5ncyA6XG4gICAgICAgICAgICB7fSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVZhbHVlID0gcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmbG9yZW5jZVBhcnNlci5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcHJvZHVjdGlvbik7XG59XG4iXX0=