import groq from 'groq' 
import { TechnologiesFields } from "@shared/types/technologies-used";


export function technologiesUsedGroq(fieldName = 'technologiesUsed') {
  return groq`
    "${fieldName}": ${fieldName}[]{
      "t": coalesce(${TechnologiesFields.TechnologyChoice}, ${TechnologiesFields.FreeText})
    }[].t
  `;
}