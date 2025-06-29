import { MyDetails } from "./my-details";
import { Project } from "./projects";
import { Volunteer } from "./volunteering";
import { Experience } from "./experience";


export enum CVTheme {
  DEVELOPER = "developer"
}
// Only fields you want pulled into frontend

export enum CVField {
  Title = 'title',
  MyDetails = 'myDetails',
  Experiences = 'experiences',
  Projects = 'projects',
  Volunteering = 'volunteering',
  IsWebsiteCv = 'isWebsiteCv',
  Theme = 'theme'
}

export interface CV {
  title: string;
  myDetails: MyDetails;
  experiences: Experience[];
  projects: Project[];
  volunteering: Volunteer[];
  isWebsiteCv: boolean;
  theme: `${CVTheme}`;
}
