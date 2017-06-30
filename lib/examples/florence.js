'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    mappings = require('../florence/mappings'),
    extendedBNF = require('../florence/extendedBNF'),
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

                  Example.run(content, lexicalEntries, extendedBNF, updateHandler);

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

      Example.updateParser(function (extendedBNF) {
            var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
                mappings = mappingsCheckboxChecked ? defaultMappings : {},
                florenceParser = FlorenceParser.fromExtendedBNFAndMappings(extendedBNF, mappings),
                parser = florenceParser; ///

            return parser;
      });

      Example.updateParseTree(ruleName);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJtYXBwaW5ncyIsImV4dGVuZGVkQk5GIiwiRmxvcmVuY2VQYXJzZXIiLCJDaGVja2JveCIsIklucHV0IiwiRmxvcmVuY2VMZXhlciIsIm1hcHBpbmdzQ2hlY2tib3hTZWxlY3RvciIsInJ1bGVOYW1lSW5wdXRTZWxlY3RvciIsInJ1bGVOYW1lIiwibWFwcGluZ3NDaGVja2JveCIsInJ1bGVOYW1lSW5wdXQiLCJkZWZhdWx0TWFwcGluZ3MiLCJGbG9yZW5jZUV4YW1wbGUiLCJvbkNoYW5nZSIsInVwZGF0ZUhhbmRsZXIiLCJvbktleVVwIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiZW50cmllcyIsInJ1biIsIm1vZHVsZSIsImV4cG9ydHMiLCJydWxlTmFtZUlucHV0VmFsdWUiLCJnZXRWYWx1ZSIsInVwZGF0ZUxleGVyIiwidXBkYXRlUGFyc2VyIiwibWFwcGluZ3NDaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJmbG9yZW5jZVBhcnNlciIsImZyb21FeHRlbmRlZEJORkFuZE1hcHBpbmdzIiwicGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxXQUFXSCxRQUFRLHNCQUFSLENBRGpCO0FBQUEsSUFFTUksY0FBY0osUUFBUSx5QkFBUixDQUZwQjtBQUFBLElBR01LLGlCQUFpQkwsUUFBUSxvQkFBUixDQUh2Qjs7SUFLUU0sUSxHQUFvQlAsSSxDQUFwQk8sUTtJQUFVQyxLLEdBQVVSLEksQ0FBVlEsSztJQUNWQyxhLEdBQWtCUCxNLENBQWxCTyxhOzs7QUFFUixJQUFNQywyQkFBMkIsV0FBakM7QUFBQSxJQUNNQyx3QkFBd0IsV0FEOUI7O0FBR0EsSUFBSUMsaUJBQUo7QUFBQSxJQUNJQyx5QkFESjtBQUFBLElBRUlDLHNCQUZKOztBQUlBLElBQU1DLGtCQUFrQlgsUUFBeEIsQyxDQUFrQzs7SUFFNUJZLGU7Ozs7Ozs7a0NBQ1M7QUFDWEgscUNBQW1CLElBQUlOLFFBQUosQ0FBYUcsd0JBQWIsQ0FBbkI7O0FBRUFJLGtDQUFnQixJQUFJTixLQUFKLENBQVVHLHFCQUFWLENBQWhCOztBQUVBRSxtQ0FBaUJJLFFBQWpCLENBQTBCQyxhQUExQjs7QUFFQUosZ0NBQWNLLE9BQWQsQ0FBc0JELGFBQXRCOztBQUVBLHNCQUFNRSxVQUFVLEVBQWhCO0FBQUEsc0JBQ01DLGlCQUFpQlosY0FBY2EsT0FEckMsQ0FUVyxDQVVtQzs7QUFFOUNuQiwwQkFBUW9CLEdBQVIsQ0FBWUgsT0FBWixFQUFxQkMsY0FBckIsRUFBcUNoQixXQUFyQyxFQUFrRGEsYUFBbEQ7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCVCxlQUFqQjs7QUFFQSxTQUFTRSxhQUFULEdBQXlCO0FBQ3ZCLFVBQU1RLHFCQUFxQlosY0FBY2EsUUFBZCxFQUEzQjtBQUFBLFVBQ01mLFdBQVdjLGtCQURqQjs7QUFHQXZCLGNBQVF5QixXQUFSLENBQW9CbkIsYUFBcEI7O0FBRUFOLGNBQVEwQixZQUFSLENBQXFCLFVBQVN4QixXQUFULEVBQXNCO0FBQ3pDLGdCQUFNeUIsMEJBQTBCakIsaUJBQWlCa0IsU0FBakIsRUFBaEM7QUFBQSxnQkFDTTNCLFdBQVcwQiwwQkFDQ2YsZUFERCxHQUVHLEVBSHBCO0FBQUEsZ0JBSU1pQixpQkFBaUIxQixlQUFlMkIsMEJBQWYsQ0FBMEM1QixXQUExQyxFQUF1REQsUUFBdkQsQ0FKdkI7QUFBQSxnQkFLTThCLFNBQVNGLGNBTGYsQ0FEeUMsQ0FNVDs7QUFFaEMsbUJBQU9FLE1BQVA7QUFDRCxPQVREOztBQVdBL0IsY0FBUWdDLGVBQVIsQ0FBd0J2QixRQUF4QjtBQUNEIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL21hcHBpbmdzJyksXG4gICAgICBleHRlbmRlZEJORiA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2V4dGVuZGVkQk5GJyksXG4gICAgICBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL3BhcnNlcicpO1xuXG5jb25zdCB7IENoZWNrYm94LCBJbnB1dCB9ID0gZWFzeSxcbiAgICAgIHsgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IgPSAnI21hcHBpbmdzJyxcbiAgICAgIHJ1bGVOYW1lSW5wdXRTZWxlY3RvciA9ICcjcnVsZU5hbWUnO1xuXG5sZXQgcnVsZU5hbWUsXG4gICAgbWFwcGluZ3NDaGVja2JveCxcbiAgICBydWxlTmFtZUlucHV0O1xuXG5jb25zdCBkZWZhdWx0TWFwcGluZ3MgPSBtYXBwaW5nczsgLy8vXG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbWFwcGluZ3NDaGVja2JveCA9IG5ldyBDaGVja2JveChtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IpO1xuXG4gICAgcnVsZU5hbWVJbnB1dCA9IG5ldyBJbnB1dChydWxlTmFtZUlucHV0U2VsZWN0b3IpO1xuXG4gICAgbWFwcGluZ3NDaGVja2JveC5vbkNoYW5nZSh1cGRhdGVIYW5kbGVyKTtcblxuICAgIHJ1bGVOYW1lSW5wdXQub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSAnJyxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IEZsb3JlbmNlTGV4ZXIuZW50cmllczsgLy8vXG5cbiAgICBFeGFtcGxlLnJ1bihjb250ZW50LCBsZXhpY2FsRW50cmllcywgZXh0ZW5kZWRCTkYsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdXBkYXRlSGFuZGxlcigpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVyKCkge1xuICBjb25zdCBydWxlTmFtZUlucHV0VmFsdWUgPSBydWxlTmFtZUlucHV0LmdldFZhbHVlKCksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVJbnB1dFZhbHVlO1xuXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoRmxvcmVuY2VMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oZXh0ZW5kZWRCTkYpIHtcbiAgICBjb25zdCBtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCA9IG1hcHBpbmdzQ2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgICAgbWFwcGluZ3MgPSBtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1hcHBpbmdzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUV4dGVuZGVkQk5GQW5kTWFwcGluZ3MoZXh0ZW5kZWRCTkYsIG1hcHBpbmdzKSwgICAgXG4gICAgICAgICAgcGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gcGFyc2VyO1xuICB9KTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSk7XG59XG4iXX0=