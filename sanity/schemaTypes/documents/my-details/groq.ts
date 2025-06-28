import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { MyDetailsField } from './types';

export function myDetailsGroqProjection() {
  return groqProjectionFromEnum(MyDetailsField);
}
