"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class ContentTextarea extends Textarea {
  getContent() {
    const value = this.getValue(),
          content = value; ///

    return content;
  }

  setContent(content) {
    const value = content;  ///

    this.setValue(value);
  }

  parentContext() {
    const getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this);

    return ({
      getContent,
      setContent
    });
  }

  static defaultProperties = {
    className: "content",
    spellCheck: "false"
  };
}

export default withStyle(ContentTextarea)`

  height: 6rem;
  
`;
