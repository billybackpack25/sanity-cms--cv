import { StackCompactIcon } from "@sanity/icons";
import { defineField } from "sanity";
import { techStackMember } from "../definitions/techStack/tech-stack-item";

const techStack = defineField({
  name: "techStack",
  type: "object",
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: "tech",
      type: "array",
      of: techStackMember,
    }),
  ],
  preview: {
    select: {
      tech: "tech",
    },
    prepare: ({ tech }) => ({
      title: "Tech Stack",
      subtitle: `Tech Stack Block - ${tech.length} items`,
    }),
  },
});

export {
  techStack,
}