import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { technologiesUsedGroq } from '../../objects/technologies-used/utils';
import { ProjectField } from "@shared/types/projects";


export function projectGroqProjection() {
  return groqProjectionFromEnum(ProjectField, {
    [ProjectField.TechnologiesUsed]: technologiesUsedGroq(ProjectField.TechnologiesUsed),
  });
}

