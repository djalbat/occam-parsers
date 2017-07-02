'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    bnf = require('../florence/bnf'),
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
                      lexicalEntries = FlorenceLexer.entries; ///

                  Example.run(content, lexicalEntries, bnf, updateHandler);

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

      Example.updateParser(function (bnf) {
            var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
                mappings = mappingsCheckboxChecked ? defaultMappings : {},
                florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings),
                parser = florenceParser; ///

            return parser;
      });

      Example.updateParseTree(ruleName);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJibmYiLCJtYXBwaW5ncyIsIkZsb3JlbmNlUGFyc2VyIiwiQ2hlY2tib3giLCJJbnB1dCIsIkZsb3JlbmNlTGV4ZXIiLCJtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IiLCJydWxlTmFtZUlucHV0U2VsZWN0b3IiLCJydWxlTmFtZSIsIm1hcHBpbmdzQ2hlY2tib3giLCJydWxlTmFtZUlucHV0IiwiZGVmYXVsdE1hcHBpbmdzIiwiRmxvcmVuY2VFeGFtcGxlIiwib25DaGFuZ2UiLCJ1cGRhdGVIYW5kbGVyIiwib25LZXlVcCIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJydW4iLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZU5hbWVJbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm1hcHBpbmdzQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GQW5kTWFwcGluZ3MiLCJwYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01HLE1BQU1ILFFBQVEsaUJBQVIsQ0FEWjtBQUFBLElBRU1JLFdBQVdKLFFBQVEsc0JBQVIsQ0FGakI7QUFBQSxJQUdNSyxpQkFBaUJMLFFBQVEsb0JBQVIsQ0FIdkI7O0lBS1FNLFEsR0FBb0JQLEksQ0FBcEJPLFE7SUFBVUMsSyxHQUFVUixJLENBQVZRLEs7SUFDVkMsYSxHQUFrQlAsTSxDQUFsQk8sYTs7O0FBRVIsSUFBTUMsMkJBQTJCLFdBQWpDO0FBQUEsSUFDTUMsd0JBQXdCLFdBRDlCOztBQUdBLElBQUlDLGlCQUFKO0FBQUEsSUFDSUMseUJBREo7QUFBQSxJQUVJQyxzQkFGSjs7QUFJQSxJQUFNQyxrQkFBa0JWLFFBQXhCLEMsQ0FBa0M7O0lBRTVCVyxlOzs7Ozs7O2tDQUNTO0FBQ1hILHFDQUFtQixJQUFJTixRQUFKLENBQWFHLHdCQUFiLENBQW5COztBQUVBSSxrQ0FBZ0IsSUFBSU4sS0FBSixDQUFVRyxxQkFBVixDQUFoQjs7QUFFQUUsbUNBQWlCSSxRQUFqQixDQUEwQkMsYUFBMUI7O0FBRUFKLGdDQUFjSyxPQUFkLENBQXNCRCxhQUF0Qjs7QUFFQSxzQkFBTUUsVUFBVSxFQUFoQjtBQUFBLHNCQUNNQyxpQkFBaUJaLGNBQWNhLE9BRHJDLENBVFcsQ0FVbUM7O0FBRTlDbkIsMEJBQVFvQixHQUFSLENBQVlILE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDakIsR0FBckMsRUFBMENjLGFBQTFDOztBQUVBQTtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQlQsZUFBakI7O0FBRUEsU0FBU0UsYUFBVCxHQUF5QjtBQUN2QixVQUFNUSxxQkFBcUJaLGNBQWNhLFFBQWQsRUFBM0I7QUFBQSxVQUNNZixXQUFXYyxrQkFEakI7O0FBR0F2QixjQUFReUIsV0FBUixDQUFvQm5CLGFBQXBCOztBQUVBTixjQUFRMEIsWUFBUixDQUFxQixVQUFTekIsR0FBVCxFQUFjO0FBQ2pDLGdCQUFNMEIsMEJBQTBCakIsaUJBQWlCa0IsU0FBakIsRUFBaEM7QUFBQSxnQkFDTTFCLFdBQVd5QiwwQkFDQ2YsZUFERCxHQUVHLEVBSHBCO0FBQUEsZ0JBSU1pQixpQkFBaUIxQixlQUFlMkIsa0JBQWYsQ0FBa0M3QixHQUFsQyxFQUF1Q0MsUUFBdkMsQ0FKdkI7QUFBQSxnQkFLTTZCLFNBQVNGLGNBTGYsQ0FEaUMsQ0FNRDs7QUFFaEMsbUJBQU9FLE1BQVA7QUFDRCxPQVREOztBQVdBL0IsY0FBUWdDLGVBQVIsQ0FBd0J2QixRQUF4QjtBQUNEIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBibmYgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9ibmYnKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvbWFwcGluZ3MnKSxcbiAgICAgIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQ2hlY2tib3gsIElucHV0IH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IG1hcHBpbmdzQ2hlY2tib3hTZWxlY3RvciA9ICcjbWFwcGluZ3MnLFxuICAgICAgcnVsZU5hbWVJbnB1dFNlbGVjdG9yID0gJyNydWxlTmFtZSc7XG5cbmxldCBydWxlTmFtZSxcbiAgICBtYXBwaW5nc0NoZWNrYm94LFxuICAgIHJ1bGVOYW1lSW5wdXQ7XG5cbmNvbnN0IGRlZmF1bHRNYXBwaW5ncyA9IG1hcHBpbmdzOyAvLy9cblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBtYXBwaW5nc0NoZWNrYm94ID0gbmV3IENoZWNrYm94KG1hcHBpbmdzQ2hlY2tib3hTZWxlY3Rvcik7XG5cbiAgICBydWxlTmFtZUlucHV0ID0gbmV3IElucHV0KHJ1bGVOYW1lSW5wdXRTZWxlY3Rvcik7XG5cbiAgICBtYXBwaW5nc0NoZWNrYm94Lm9uQ2hhbmdlKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgcnVsZU5hbWVJbnB1dC5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgY29uc3QgY29udGVudCA9ICcnLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gRmxvcmVuY2VMZXhlci5lbnRyaWVzOyAvLy9cblxuICAgIEV4YW1wbGUucnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdXBkYXRlSGFuZGxlcigpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVyKCkge1xuICBjb25zdCBydWxlTmFtZUlucHV0VmFsdWUgPSBydWxlTmFtZUlucHV0LmdldFZhbHVlKCksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVJbnB1dFZhbHVlO1xuXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoRmxvcmVuY2VMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oYm5mKSB7XG4gICAgY29uc3QgbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPSBtYXBwaW5nc0NoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICAgIG1hcHBpbmdzID0gbWFwcGluZ3NDaGVja2JveENoZWNrZWQgP1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXBwaW5ncyA6XG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzKSwgICAgXG4gICAgICAgICAgcGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gcGFyc2VyO1xuICB9KTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSk7XG59XG4iXX0=