"use strict";

import PartContext from "../../context/part";

export default class SequenceOfPartsPartContext extends PartContext {
  compose(frame, partsFrame = null) {
    if (partsFrame !== null) {
      frame = frame.merge(partsFrame);
    }

    return frame;
  }

  static fromSequenceOfPartsPart(sequenceOfPartsPart, context) {
    const part = sequenceOfPartsPart,  ///
          sequenceOfPartsPartContext = PartContext.fromPart(SequenceOfPartsPartContext, part, context);

    return sequenceOfPartsPartContext;
  }
}
