import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { technologiesUsedGroq } from '../../objects/technologies-used/utils';
import { ProjectField } from './types';


export function projectGroqProjection() {
  return groqProjectionFromEnum(ProjectField, {
    [ProjectField.TechnologiesUsed]: technologiesUsedGroq(ProjectField.TechnologiesUsed),
  });
}

