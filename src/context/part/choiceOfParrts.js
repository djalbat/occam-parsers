"use strict";

import PartContext from "../../context/part";

export default class ChoiceOfPartsPartContext extends PartContext {
  static fromChoiceOfPartsPart(choiceOfPartsPart, context) {
    const part = choiceOfPartsPart,  ///
          choiceOfPartsPartContext = PartContext.fromPart(ChoiceOfPartsPartContext, part, context);

    return choiceOfPartsPartContext;
  }
}
