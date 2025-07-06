import { defineArrayMember } from "sanity";
import { Technology } from "./types";
import { slugFieldUseTitle } from "../../common";

export const techList = Object.values(Technology).sort(
  (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })
).map(value => ({
  title: value.charAt(0).toUpperCase() + value.slice(1),
  value
}));

const techStackMember = [
  defineArrayMember({
    type: "object",
    name: "techStackItem",
    fields: [
      {
        name: "title",
        type: "string",
        options: { list: techList },
        validation: (Rule) => Rule.required().error("Tech item is required"),
      },
      slugFieldUseTitle,
    ],
  }),
];

export { techStackMember }