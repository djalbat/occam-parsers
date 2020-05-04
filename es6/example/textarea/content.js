"use strict";

import Textarea from "../textarea";

export default class ContentTextarea extends Textarea {
  getContent() {
    const value = this.getValue(),
          content = value; ///

    return content;
  }

  setContent(content) {
    const value = content;

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
