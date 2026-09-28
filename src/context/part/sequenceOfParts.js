"use strict";

import PartContext from "../../context/part";

import { nullifiedFrame } from "../../frame";

export default class SequenceOfPartsPartContext extends PartContext {
  compose(frame, partsFrame = nullifiedFrame) {
    const partsFrameValid = partsFrame.isValid();

    if (partsFrameValid) {
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
