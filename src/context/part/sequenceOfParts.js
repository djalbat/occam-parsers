"use strict";

import PartContext from "../../context/part";
import {isValid} from "../../utilities/frame";

export default class SequenceOfPartsPartContext extends PartContext {
  compose(frame, partsFrame = null) {
    const partsFrameValid = isValid(partsFrame);

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
