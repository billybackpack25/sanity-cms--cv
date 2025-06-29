import { TechnologyChoice } from "./technologies-used";
import { TimePeriod } from "./time-period";
import { SanityImage } from "./image";


export interface Reference {
  name?: string;
  email?: string;
  phone?: string;
}

export enum EmploymentType {
  FullTime = 'full-time',
  PartTime = 'part-time',
  Contract = 'contract',
  Internship = 'internship',
  Freelance = 'freelance'
}

export interface Experience {
  title: string;
  company: string;
  companyLink?: string;
  logo?: SanityImage;
  location: string;
  employmentType: `${EmploymentType}`;
  employmentPeriod: TimePeriod;
  description: string;
  highlights?: string[];
  technologiesUsed?: TechnologyChoice[];
  references?: Reference[];
}

export enum ExperienceField {
  Title = 'title',
  EmploymentType = 'employmentType',
  Company = 'company',
  CompanyLink = 'companyLink',
  Logo = 'logo',
  Location = 'location',
  EmploymentPeriod = 'employmentPeriod',
  Description = 'description',
  Highlights = 'highlights',
  TechnologiesUsed = 'technologiesUsed',
  References = 'references'
}
