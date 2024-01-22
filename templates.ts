import { Template } from "sanity";

const customTemplates: Template[] = [
  {
    id: "tpl-categoryLink",
    title: "Category Link",
    schemaType: "link",
    value: {
      linkType: "category",
    },
  },
  {
    id: "tpl-productLink",
    title: "Product Link",
    schemaType: "link",
    value: {
      linkType: "product",
    },
  },
  {
    id: "tpl-externalLink",
    title: "External Link",
    schemaType: "link",
    value: {
      linkType: "external",
    },
  },
  {
    id: "tpl-pageLink",
    title: "Page Link",
    schemaType: "link",
    value: {
      linkType: "page",
    },
  },
];

export default customTemplates;
