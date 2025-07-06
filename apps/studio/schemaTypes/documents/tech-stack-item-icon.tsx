import { MessageSquareShare } from "lucide-react";
import { defineField, defineType } from "sanity";
import { techList } from "../definitions/techStack/tech-stack-item";
import { PathnameFieldComponent } from "../../components/slug-field-component";
import { createSlug, isUnique } from "../../utils/slug";
import { slugFieldUseTitle } from "../common";

export const techStackItemIcon = defineType({
  name: "techStackItemIcon",
  type: "document",
  title: "Tech Stack Item Icon",
  description: "An icon representing a technology stack item.",
  icon: MessageSquareShare,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      options: { list: techList },
      description:
        "The name of the technology or tool represented by this icon.",
      validation: (Rule) => Rule.required().error("A title is required"),
    }),
    slugFieldUseTitle,
    defineField({
      name: "image",
      type: "image",
      title: "Icon Image",
      description: "Upload an image that represents this technology or tool.",
    }),
    defineField({
      name: "authorAttribution",
      type: "string",
      description:
        "Attribution for the icon, if applicable, shown as a tooltip when hovering over the icon.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare: ({ title, image }) => {
      return {
        title,
        media: image,
      };
    },
  },
});
