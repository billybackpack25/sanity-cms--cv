import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { VolunteeringField } from "@shared/types/volunteering";

export function volunteeringGroqProjection() {
  return groqProjectionFromEnum(VolunteeringField);
}
