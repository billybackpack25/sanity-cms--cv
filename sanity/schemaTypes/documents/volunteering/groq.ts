import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { VolunteeringField } from './types';

export function volunteeringGroqProjection() {
  return groqProjectionFromEnum(VolunteeringField);
}
