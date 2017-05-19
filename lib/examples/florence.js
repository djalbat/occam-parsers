'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    FlorenceParser = require('../florence/parser'),
    grammar = require('../florence/grammar'),
    mappings = require('../florence/mappings');

var Checkbox = easy.Checkbox,
    Textarea = easy.Textarea,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    productionNameTextareaSelector = '#productionName';

var florenceLexer = FlorenceLexer.fromNothing();

var productionName = void 0,
    mappingsCheckbox = void 0,
    productionNameTextarea = void 0;

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
                  productionNameTextarea = new Textarea(productionNameTextareaSelector);

                  var grammarTextareaValue = grammar; ///

                  Example.setGrammarTextareaValue(grammarTextareaValue);

                  mappingsCheckbox.onChange(update);

                  productionNameTextarea.onKeyUp(update);

                  Example.onGrammarTextareaKeyUp(update);

                  Example.onContentTextareaKeyUp(update);

                  update();
            }
      }]);

      return FlorenceExample;
}();

function update() {
      var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
          grammarTextareaValue = Example.getGrammarTextareaValue(),
          productionNameTextareaValue = productionNameTextarea.getValue(),
          adjustedMappings = mappingsCheckboxChecked ? mappings : {},
          adjustedGrammar = grammarTextareaValue,
          ///
      productionName = productionNameTextareaValue,
          ///
      florenceParser = FlorenceParser.fromGrammarAndMappings(adjustedGrammar, adjustedMappings),
          production = florenceParser.findProduction(productionName);

      Example.updateParseTree(florenceLexer, florenceParser, production);
}

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJGbG9yZW5jZVBhcnNlciIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkNoZWNrYm94IiwiVGV4dGFyZWEiLCJGbG9yZW5jZUxleGVyIiwibWFwcGluZ3NDaGVja2JveFNlbGVjdG9yIiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwicHJvZHVjdGlvbk5hbWUiLCJtYXBwaW5nc0NoZWNrYm94IiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYSIsIkZsb3JlbmNlRXhhbXBsZSIsImdyYW1tYXJUZXh0YXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJvbkNoYW5nZSIsInVwZGF0ZSIsIm9uS2V5VXAiLCJvbkdyYW1tYXJUZXh0YXJlYUtleVVwIiwib25Db250ZW50VGV4dGFyZWFLZXlVcCIsIm1hcHBpbmdzQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJwcm9kdWN0aW9uTmFtZVRleHRhcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImFkanVzdGVkTWFwcGluZ3MiLCJhZGp1c3RlZEdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlciIsImZyb21HcmFtbWFyQW5kTWFwcGluZ3MiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNSSxVQUFVSixRQUFRLHFCQUFSLENBRmhCO0FBQUEsSUFHTUssV0FBV0wsUUFBUSxzQkFBUixDQUhqQjs7SUFLUU0sUSxHQUF1QlAsSSxDQUF2Qk8sUTtJQUFVQyxRLEdBQWFSLEksQ0FBYlEsUTtJQUNWQyxhLEdBQWtCUCxNLENBQWxCTyxhOzs7QUFFUixJQUFNQywyQkFBMkIsV0FBakM7QUFBQSxJQUNNQyxpQ0FBaUMsaUJBRHZDOztBQUdBLElBQU1DLGdCQUFnQkgsY0FBY0ksV0FBZCxFQUF0Qjs7QUFFQSxJQUFJQyx1QkFBSjtBQUFBLElBQ0lDLHlCQURKO0FBQUEsSUFFSUMsK0JBRko7O0lBSU1DLGU7Ozs7Ozs7a0NBQ1M7QUFDWEYscUNBQW1CLElBQUlSLFFBQUosQ0FBYUcsd0JBQWIsQ0FBbkI7QUFDQU0sMkNBQXlCLElBQUlSLFFBQUosQ0FBYUcsOEJBQWIsQ0FBekI7O0FBRUEsc0JBQU1PLHVCQUF1QmIsT0FBN0IsQ0FKVyxDQUkyQjs7QUFFdENGLDBCQUFRZ0IsdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQUgsbUNBQWlCSyxRQUFqQixDQUEwQkMsTUFBMUI7O0FBRUFMLHlDQUF1Qk0sT0FBdkIsQ0FBK0JELE1BQS9COztBQUVBbEIsMEJBQVFvQixzQkFBUixDQUErQkYsTUFBL0I7O0FBRUFsQiwwQkFBUXFCLHNCQUFSLENBQStCSCxNQUEvQjs7QUFFQUE7QUFDRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixVQUFNSSwwQkFBMEJWLGlCQUFpQlcsU0FBakIsRUFBaEM7QUFBQSxVQUNNUix1QkFBdUJmLFFBQVF3Qix1QkFBUixFQUQ3QjtBQUFBLFVBRU1DLDhCQUE4QlosdUJBQXVCYSxRQUF2QixFQUZwQztBQUFBLFVBR01DLG1CQUFtQkwsMEJBQTBCbkIsUUFBMUIsR0FBcUMsRUFIOUQ7QUFBQSxVQUlNeUIsa0JBQWtCYixvQkFKeEI7QUFBQSxVQUk4QztBQUN4Q0osdUJBQWlCYywyQkFMdkI7QUFBQSxVQUtvRDtBQUM5Q0ksdUJBQWlCNUIsZUFBZTZCLHNCQUFmLENBQXNDRixlQUF0QyxFQUF1REQsZ0JBQXZELENBTnZCO0FBQUEsVUFPTUksYUFBYUYsZUFBZUcsY0FBZixDQUE4QnJCLGNBQTlCLENBUG5COztBQVNBWCxjQUFRaUMsZUFBUixDQUF3QnhCLGFBQXhCLEVBQXVDb0IsY0FBdkMsRUFBdURFLFVBQXZEO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJyQixlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9wYXJzZXInKSxcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9ncmFtbWFyJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL21hcHBpbmdzJyk7XG5cbmNvbnN0IHsgQ2hlY2tib3gsIFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IG1hcHBpbmdzQ2hlY2tib3hTZWxlY3RvciA9ICcjbWFwcGluZ3MnLFxuICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yID0gJyNwcm9kdWN0aW9uTmFtZSc7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmxldCBwcm9kdWN0aW9uTmFtZSxcbiAgICBtYXBwaW5nc0NoZWNrYm94LFxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWE7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbWFwcGluZ3NDaGVja2JveCA9IG5ldyBDaGVja2JveChtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IpO1xuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0YXJlYVZhbHVlKGdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIG1hcHBpbmdzQ2hlY2tib3gub25DaGFuZ2UodXBkYXRlKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPSBtYXBwaW5nc0NoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVZhbHVlID0gcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBhZGp1c3RlZE1hcHBpbmdzID0gbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPyBtYXBwaW5ncyA6IHt9LFxuICAgICAgICBhZGp1c3RlZEdyYW1tYXIgPSBncmFtbWFyVGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGFkanVzdGVkR3JhbW1hciwgYWRqdXN0ZWRNYXBwaW5ncyksXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmbG9yZW5jZVBhcnNlci5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHByb2R1Y3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==