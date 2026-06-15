"use strict";

import PartContext from "../../context/part";

export default class SequenceOfPartsContext extends PartContext {
  static fromSequenceOfPartsPart(sequenceOfPartsPart, context) {
    const part = sequenceOfPartsPart,  ///
          sequenceOfPartsContext = PartContext.fromPart(SequenceOfPartsContext, part, context);

    return sequenceOfPartsContext;
  }
}
