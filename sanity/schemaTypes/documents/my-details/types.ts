import { SanityImage } from "../../../types/image";

export type OtherLink = {
  label: string;
  url: string;
}

export interface MyDetails {
  fullName: string;
  title: string;
  profileImage?: SanityImage; // Sanity image type
  email: string;
  phone?: string;
  location: string;
  professionalSummary: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  otherLinks?: OtherLink[];
}

export enum MyDetailsField {
  FullName = 'fullName',
  Title = 'title',
  ProfileImage = 'profileImage',
  Email = 'email',
  Phone = 'phone',
  Location = 'location',
  ProfessionalSummary = 'professionalSummary',
  Linkedin = 'linkedin',
  Github = 'github',
  Twitter = 'twitter',
  OtherLinks = 'otherLinks',
}
