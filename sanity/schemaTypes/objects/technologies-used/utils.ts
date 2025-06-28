import groq from 'groq' 
import { TechnologiesFields } from "./types";


export function technologiesUsedGroq(fieldName = 'technologiesUsed') {
  return groq`
    "${fieldName}": ${fieldName}[]{
      "t": coalesce(${TechnologiesFields.TechnologyChoice}, ${TechnologiesFields.FreeText})
    }[].t
  `;
}