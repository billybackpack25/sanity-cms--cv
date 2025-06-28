import { myDetailsSchema } from './my-details/my-details'
import { experienceSchema  } from './experience/experience'
import { projectSchema } from './projects/projects'
import { cvSchema } from './cv/cv'
import { volunteeringSchema } from './volunteering/volunteering'

export const documents = [
  myDetailsSchema,
  experienceSchema,
  projectSchema,
  cvSchema,
  volunteeringSchema
];

export default documents;