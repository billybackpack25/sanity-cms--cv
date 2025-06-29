import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { MyDetailsField } from "@shared/types/my-details";

export function myDetailsGroqProjection() {
  return groqProjectionFromEnum(MyDetailsField);
}
