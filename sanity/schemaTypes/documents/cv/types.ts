import { Experience } from "../experience/types";
import { MyDetails } from "../my-details/types";
import { Project } from "../projects/types";
import { Volunteer } from "../volunteering/types";

export enum CVTheme {
  DEVELOPER = "developer",
}

// Only fields you want pulled into frontend
export enum CVField {
  Title = 'title',
  MyDetails = 'myDetails',
  Experiences = 'experiences',
  Projects = 'projects',
  Volunteering = 'volunteering',
  IsWebsiteCv = 'isWebsiteCv',
  Theme = 'theme',
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

