import groq  from 'groq';

import { groqProjectionFromEnum } from '../../../utils/groq-generator';
import { experienceGroqProjection } from '../experience/groq';
import { myDetailsGroqProjection } from '../my-details/groq';
import { projectGroqProjection } from '../projects/groq';
import { volunteeringGroqProjection } from '../volunteering/groq';
import { CVField } from "@shared/types/cv";

export function cvGroqProjection() {
  return groqProjectionFromEnum(CVField, {
    [CVField.Experiences]: `${CVField.Experiences}[]->{${experienceGroqProjection()}}`,
    [CVField.Projects]: `${CVField.Projects}[]->{${projectGroqProjection()}}`,
    [CVField.Volunteering]: `${CVField.Volunteering}[]->{${volunteeringGroqProjection()}}`,
    [CVField.MyDetails]: `${CVField.MyDetails}->{${myDetailsGroqProjection()}}`,
  });
}

export const FETCH_CV_GROQ = groq`*[_type == "cv" && isWebsiteCv == true][0]{${cvGroqProjection()}}`;