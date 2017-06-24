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
    Input = easy.Input,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    ruleNameInputSelector = '#ruleName';

var ruleName = void 0,
    mappingsCheckbox = void 0,
    ruleNameInput = void 0;

var defaultMappings = mappings; ///

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);

                  ruleNameInput = new Input(ruleNameInputSelector);

                  mappingsCheckbox.onChange(updateHandler);

                  ruleNameInput.onKeyUp(updateHandler);

                  var content = '',
                      lexicalGrammar = FlorenceLexer.grammar,
                      extendedBNFGrammar = grammar; ///

                  Example.run(content, lexicalGrammar, extendedBNFGrammar, updateHandler);

                  updateHandler();
            }
      }]);

      return FlorenceExample;
}();

module.exports = FlorenceExample;

function updateHandler() {
      var ruleNameInputValue = ruleNameInput.getValue(),
          ruleName = ruleNameInputValue;

      Example.updateLexer(FlorenceLexer);

      Example.updateParser(function (grammar) {
            var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
                mappings = mappingsCheckboxChecked ? defaultMappings : {},
                florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings),
                parser = florenceParser; ///

            return parser;
      });

      Example.updateParseTree(ruleName);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJncmFtbWFyIiwibWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsIkNoZWNrYm94IiwiSW5wdXQiLCJGbG9yZW5jZUxleGVyIiwibWFwcGluZ3NDaGVja2JveFNlbGVjdG9yIiwicnVsZU5hbWVJbnB1dFNlbGVjdG9yIiwicnVsZU5hbWUiLCJtYXBwaW5nc0NoZWNrYm94IiwicnVsZU5hbWVJbnB1dCIsImRlZmF1bHRNYXBwaW5ncyIsIkZsb3JlbmNlRXhhbXBsZSIsIm9uQ2hhbmdlIiwidXBkYXRlSGFuZGxlciIsIm9uS2V5VXAiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJydW4iLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZU5hbWVJbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm1hcHBpbmdzQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tR3JhbW1hckFuZE1hcHBpbmdzIiwicGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxVQUFVSCxRQUFRLHFCQUFSLENBRGhCO0FBQUEsSUFFTUksV0FBV0osUUFBUSxzQkFBUixDQUZqQjtBQUFBLElBR01LLGlCQUFpQkwsUUFBUSxvQkFBUixDQUh2Qjs7SUFLUU0sUSxHQUFvQlAsSSxDQUFwQk8sUTtJQUFVQyxLLEdBQVVSLEksQ0FBVlEsSztJQUNWQyxhLEdBQWtCUCxNLENBQWxCTyxhOzs7QUFFUixJQUFNQywyQkFBMkIsV0FBakM7QUFBQSxJQUNNQyx3QkFBd0IsV0FEOUI7O0FBR0EsSUFBSUMsaUJBQUo7QUFBQSxJQUNJQyx5QkFESjtBQUFBLElBRUlDLHNCQUZKOztBQUlBLElBQU1DLGtCQUFrQlYsUUFBeEIsQyxDQUFrQzs7SUFFNUJXLGU7Ozs7Ozs7a0NBQ1M7QUFDWEgscUNBQW1CLElBQUlOLFFBQUosQ0FBYUcsd0JBQWIsQ0FBbkI7O0FBRUFJLGtDQUFnQixJQUFJTixLQUFKLENBQVVHLHFCQUFWLENBQWhCOztBQUVBRSxtQ0FBaUJJLFFBQWpCLENBQTBCQyxhQUExQjs7QUFFQUosZ0NBQWNLLE9BQWQsQ0FBc0JELGFBQXRCOztBQUVBLHNCQUFNRSxVQUFVLEVBQWhCO0FBQUEsc0JBQ01DLGlCQUFpQlosY0FBY0wsT0FEckM7QUFBQSxzQkFFTWtCLHFCQUFxQmxCLE9BRjNCLENBVFcsQ0FXeUI7O0FBRXBDRCwwQkFBUW9CLEdBQVIsQ0FBWUgsT0FBWixFQUFxQkMsY0FBckIsRUFBcUNDLGtCQUFyQyxFQUF5REosYUFBekQ7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCVCxlQUFqQjs7QUFFQSxTQUFTRSxhQUFULEdBQXlCO0FBQ3ZCLFVBQU1RLHFCQUFxQlosY0FBY2EsUUFBZCxFQUEzQjtBQUFBLFVBQ01mLFdBQVdjLGtCQURqQjs7QUFHQXZCLGNBQVF5QixXQUFSLENBQW9CbkIsYUFBcEI7O0FBRUFOLGNBQVEwQixZQUFSLENBQXFCLFVBQVN6QixPQUFULEVBQWtCO0FBQ3JDLGdCQUFNMEIsMEJBQTBCakIsaUJBQWlCa0IsU0FBakIsRUFBaEM7QUFBQSxnQkFDTTFCLFdBQVd5QiwwQkFDQ2YsZUFERCxHQUVHLEVBSHBCO0FBQUEsZ0JBSU1pQixpQkFBaUIxQixlQUFlMkIsc0JBQWYsQ0FBc0M3QixPQUF0QyxFQUErQ0MsUUFBL0MsQ0FKdkI7QUFBQSxnQkFLTTZCLFNBQVNGLGNBTGYsQ0FEcUMsQ0FNTDs7QUFFaEMsbUJBQU9FLE1BQVA7QUFDRCxPQVREOztBQVdBL0IsY0FBUWdDLGVBQVIsQ0FBd0J2QixRQUF4QjtBQUNEIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9tYXBwaW5ncycpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9wYXJzZXInKTtcblxuY29uc3QgeyBDaGVja2JveCwgSW5wdXQgfSA9IGVhc3ksXG4gICAgICB7IEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgbWFwcGluZ3NDaGVja2JveFNlbGVjdG9yID0gJyNtYXBwaW5ncycsXG4gICAgICBydWxlTmFtZUlucHV0U2VsZWN0b3IgPSAnI3J1bGVOYW1lJztcblxubGV0IHJ1bGVOYW1lLFxuICAgIG1hcHBpbmdzQ2hlY2tib3gsXG4gICAgcnVsZU5hbWVJbnB1dDtcblxuY29uc3QgZGVmYXVsdE1hcHBpbmdzID0gbWFwcGluZ3M7IC8vL1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIG1hcHBpbmdzQ2hlY2tib3ggPSBuZXcgQ2hlY2tib3gobWFwcGluZ3NDaGVja2JveFNlbGVjdG9yKTtcblxuICAgIHJ1bGVOYW1lSW5wdXQgPSBuZXcgSW5wdXQocnVsZU5hbWVJbnB1dFNlbGVjdG9yKTtcblxuICAgIG1hcHBpbmdzQ2hlY2tib3gub25DaGFuZ2UodXBkYXRlSGFuZGxlcik7XG5cbiAgICBydWxlTmFtZUlucHV0Lm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBjb25zdCBjb250ZW50ID0gJycsXG4gICAgICAgICAgbGV4aWNhbEdyYW1tYXIgPSBGbG9yZW5jZUxleGVyLmdyYW1tYXIsXG4gICAgICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnJ1bihjb250ZW50LCBsZXhpY2FsR3JhbW1hciwgZXh0ZW5kZWRCTkZHcmFtbWFyLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWVJbnB1dFZhbHVlID0gcnVsZU5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lSW5wdXRWYWx1ZTtcblxuICBFeGFtcGxlLnVwZGF0ZUxleGVyKEZsb3JlbmNlTGV4ZXIpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGZ1bmN0aW9uKGdyYW1tYXIpIHtcbiAgICBjb25zdCBtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCA9IG1hcHBpbmdzQ2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgICAgbWFwcGluZ3MgPSBtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1hcHBpbmdzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncyksICAgIFxuICAgICAgICAgIHBhcnNlciA9IGZsb3JlbmNlUGFyc2VyOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfSk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpO1xufVxuIl19