'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    OneOrMorePartsNode = require('../node/oneOrMoreParts'),
    OneOrMorePartsDefinition = require('../definition/oneOrMoreParts');

var OneOrMorePartsRule = function (_Rule) {
  _inherits(OneOrMorePartsRule, _Rule);

  function OneOrMorePartsRule() {
    _classCallCheck(this, OneOrMorePartsRule);

    var oneOrMorePartsDefinition = new OneOrMorePartsDefinition(),
        name = 'oneOrMoreParts',
        oneOrMoreParts = [oneOrMorePartsDefinition],
        Node = OneOrMorePartsNode;

    return _possibleConstructorReturn(this, (OneOrMorePartsRule.__proto__ || Object.getPrototypeOf(OneOrMorePartsRule)).call(this, name, oneOrMoreParts, Node));
  }

  return OneOrMorePartsRule;
}(Rule);

module.exports = OneOrMorePartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzTm9kZSIsIk9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiIsIk9uZU9yTW9yZVBhcnRzUnVsZSIsIm9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiIsIm5hbWUiLCJvbmVPck1vcmVQYXJ0cyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU1FLDJCQUEyQkYsUUFBUSw4QkFBUixDQUZqQzs7SUFJTUcsa0I7OztBQUNKLGdDQUFjO0FBQUE7O0FBQ1osUUFBTUMsMkJBQTJCLElBQUlGLHdCQUFKLEVBQWpDO0FBQUEsUUFDTUcsT0FBTyxnQkFEYjtBQUFBLFFBRU1DLGlCQUFpQixDQUNmRix3QkFEZSxDQUZ2QjtBQUFBLFFBS01HLE9BQU9OLGtCQUxiOztBQURZLG1JQVFOSSxJQVJNLEVBUUFDLGNBUkEsRUFRZ0JDLElBUmhCO0FBU2I7OztFQVY4QlIsSTs7QUFhakNTLE9BQU9DLE9BQVAsR0FBaUJOLGtCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vb25lT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IG5ldyBPbmVPck1vcmVQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ29uZU9yTW9yZVBhcnRzJyxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE9uZU9yTW9yZVBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIG9uZU9yTW9yZVBhcnRzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNSdWxlO1xuIl19