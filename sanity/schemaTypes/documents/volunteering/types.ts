import { TimePeriod } from "../../objects/time-period/types";

export interface Volunteer {
  role: string;
  organization: string;
  organizationLink?: string;
  location?: string;
  volunteeringPeriod?: TimePeriod; // Should match the type for timePeriod object
  description: string;
  highlights?: string[];
}

export enum VolunteeringField {
  Role = 'role',
  Organization = 'organization',
  OrganizationLink = 'organizationLink',
  Location = 'location',
  VolunteeringPeriod = 'volunteeringPeriod',
  Description = 'description',
  Highlights = 'highlights',
}
