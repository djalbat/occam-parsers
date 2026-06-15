"use strict";

import PartContext from "../../context/part";

export default class SequenceOfPartsPartContext extends PartContext {
  static fromSequenceOfPartsPart(sequenceOfPartsPart, context) {
    const part = sequenceOfPartsPart,  ///
          sequenceOfPartsPartContext = PartContext.fromPart(SequenceOfPartsPartContext, part, context);

    return sequenceOfPartsPartContext;
  }
}
