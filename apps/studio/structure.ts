import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {
  BookMarked,
  CogIcon,
  File,
  FileText,
  HomeIcon,
  type LucideIcon,
  MessageCircleQuestion,
  PanelBottomIcon,
  PanelTopDashedIcon,
  Settings2,
  User,
} from "lucide-react";
import type {
  StructureBuilder,
  StructureResolverContext,
} from "sanity/structure";

import type { SchemaType, SingletonType } from "./schemaTypes";
import { getTitleCase } from "./utils/helper";

// List of schema types already handled
const hiddenDocTypes = [
  "homePage",
  "page",
  "blogIndex",
  "blog",
  "faq",
  "author",
  "navbar",
  "footer",
  "settings",
  "techStackItemIcon",
  "assist.instruction.context",
  "media.tag",
  // add any other custom types you handle explicitly
];

const OtherDocuments = (S: StructureBuilder) => {
  const listItems = S.documentTypeListItems().filter(
    (listItem) => !hiddenDocTypes.includes(listItem.getId() as string)
  )
  return (
  S.listItem()
    .title("Other")
    .icon(File)
    .child(
      S.list()
        .title("Other Documents")
        .items(listItems)
    )
  )
}

type Base<T = SchemaType> = {
  id?: string;
  type: T;
  preview?: boolean;
  title?: string;
  icon?: LucideIcon;
};

type CreateSingleTon = {
  S: StructureBuilder;
} & Base<SingletonType>;

const createSingleTon = ({ S, type, title, icon }: CreateSingleTon) => {
  const newTitle = title ?? getTitleCase(type);
  return S.listItem()
    .title(newTitle)
    .icon(icon ?? File)
    .child(S.document().schemaType(type).documentId(type));
};

type CreateList = {
  S: StructureBuilder;
} & Base;

// This function creates a list item for a type. It takes a StructureBuilder instance (S),
// a type, an icon, and a title as parameters. It generates a title for the type if not provided,
// and uses a default icon if not provided. It then returns a list item with the generated or
// provided title and icon.

const createList = ({ S, type, icon, title, id }: CreateList) => {
  const newTitle = title ?? getTitleCase(type);
  return S.documentTypeListItem(type)
    .id(id ?? type)
    .title(newTitle)
    .icon(icon ?? File);
};

type CreateIndexList = {
  S: StructureBuilder;
  list: Base;
  index: Base<SingletonType>;
  context: StructureResolverContext;
};

const createIndexListWithOrderableItems = ({
  S,
  index,
  list,
  context,
}: CreateIndexList) => {
  const indexTitle = index.title ?? getTitleCase(index.type);
  const listTitle = list.title ?? getTitleCase(list.type);
  return S.listItem()
    .title(listTitle)
    .icon(index.icon ?? File)
    .child(
      S.list()
        .title(indexTitle)
        .items([
          S.listItem()
            .title(indexTitle)
            .icon(index.icon ?? File)
            .child(
              S.document()
                .views([S.view.form()])
                .schemaType(index.type)
                .documentId(index.type),
            ),
          orderableDocumentListDeskItem({
            type: list.type,
            S,
            context,
            icon: list.icon ?? File,
            title: `${listTitle}`,
          }),
        ]),
    );
};

const assets = (S: StructureBuilder) => S.listItem()
.title("Assets")
.icon(File)
.child(
  S.list()
    .title("Tech Stack")
    .items([
      S.listItem()
        .title("Tech Stack Icons")
        .child(
          S.documentTypeList("techStackItemIcon")
            .title("Tech Stack Icons")
            .child((docId) =>
              S.document().documentId(docId).schemaType("techStackItemIcon"),
            ),
        ),
    ]),
);

export const structure = (
  S: StructureBuilder,
  context: StructureResolverContext,
) => {
  return S.list()
    .title("Content")
    .items([
      createSingleTon({ S, type: "homePage", icon: HomeIcon }),
      S.divider(),
      createList({ S, type: "page", title: "Pages" }),
      createIndexListWithOrderableItems({
        S,
        index: { type: "blogIndex", icon: BookMarked },
        list: { type: "blog", title: "Blogs", icon: FileText },
        context,
      }),
      createList({
        S,
        type: "faq",
        title: "FAQs",
        icon: MessageCircleQuestion,
      }),
      createList({ S, type: "author", title: "Authors", icon: User }),
      S.divider(),
      assets(S),
      S.divider(),
      S.listItem()
        .title("Site Configuration")
        .icon(Settings2)
        .child(
          S.list()
            .title("Site Configuration")
            .items([
              createSingleTon({
                S,
                type: "navbar",
                title: "Navigation",
                icon: PanelTopDashedIcon,
              }),
              createSingleTon({
                S,
                type: "footer",
                title: "Footer",
                icon: PanelBottomIcon,
              }),
              createSingleTon({
                S,
                type: "settings",
                title: "Global Settings",
                icon: CogIcon,
              }),
            ]),
          ),
          OtherDocuments(S),
        ]);
};
