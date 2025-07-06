import { author } from "./author";
import { blog } from "./blog";
import { blogIndex } from "./blog-index";
import { faq } from "./faq";
import { footer } from "./footer";
import { homePage } from "./home-page";
import { lastReads } from "../blocks/last-reads";
import { navbar } from "./navbar";
import { page } from "./page";
import { settings } from "./settings";
import { techStackItemIcon } from "./tech-stack-item-icon";

export const singletons = [
  homePage, 
  blogIndex, 
  settings, 
  footer, 
  navbar,
];

export const documents = [blog, page, faq, author, techStackItemIcon, ...singletons];
