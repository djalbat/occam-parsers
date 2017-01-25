'use strict';

var lexers = require('occam-lexers'),
    Token = lexers.Token,
    SignificantToken = lexers.SignificantToken;

class LinkToken extends SignificantToken {
  constructor(content, line) {
    var type = LinkToken.type;

    super(content, line, type);
  }

  getHTML() {
    var type = this.getType(),
        content = this.getContent(),
        innerHTML = content, ///
        className = type,  ///
        sanitisedInnerHTML = Token.sanitiseHTML(innerHTML),
        html = `<a class="${className}" onClick="alert('click!'); ">${sanitisedInnerHTML}</a>`;

    return html;
  }

  static fromStringToken(stringToken, clickHandler) {
    var content = stringToken.getContent(),
        line = stringToken.getLine(),
        lineToken = new LinkToken(content, line, clickHandler);

    return lineToken;
  }
}

module.exports = LinkToken;

LinkToken.type = 'link';
