import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { technologiesUsedGroq } from '../../objects/technologies-used/utils';
import { ExperienceField } from './types';

export function experienceGroqProjection() {
  return groqProjectionFromEnum(ExperienceField, {
    [ExperienceField.TechnologiesUsed]: technologiesUsedGroq(ExperienceField.TechnologiesUsed),
  });
}
