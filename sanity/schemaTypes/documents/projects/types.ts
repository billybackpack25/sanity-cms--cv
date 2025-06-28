import { SanityImage } from "../../../types/image";

export interface Project {
  title: string;
  description: string;
  technologiesUsed?: string[];
  image?: SanityImage; // Sanity image type
  github?: string;
  liveDemo?: string;
  favourite?: boolean;
}

export enum ProjectField {
  Title = 'title',
  Description = 'description',
  TechnologiesUsed = 'technologiesUsed',
  Image = 'image',
  Github = 'github',
  LiveDemo = 'liveDemo',
  Favourite = 'favourite',
}
