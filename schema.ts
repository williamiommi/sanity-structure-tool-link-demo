import { AiOutlineLink } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

const Product = defineType({
  type: "document",
  name: "product",
  title: "Product",
  icon: BsCart,
  fields: [
    defineField({
      type: "string",
      name: "id",
      title: "Id",
    }),
    defineField({
      type: "string",
      name: "name",
      title: "Name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
    }),
  ],
});

const Category = defineType({
  type: "document",
  name: "category",
  title: "Category",
  icon: BiCategory,
  fields: [
    defineField({
      type: "string",
      name: "id",
      title: "Id",
    }),
    defineField({
      type: "string",
      name: "name",
      title: "Name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
    }),
  ],
});

const Page = defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: RiPagesLine,
  fields: [
    defineField({
      type: "string",
      name: "id",
      title: "Id",
    }),
    defineField({
      type: "string",
      name: "name",
      title: "Name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
    }),
  ],
});

const Link = defineType({
  type: "document",
  name: "link",
  title: "Link",
  icon: AiOutlineLink,
  preview: { select: { title: "internalName" } },
  fields: [
    defineField({
      type: "string",
      name: "internalName",
      title: "Internal Name",
    }),
    defineField({
      type: "string",
      name: "label",
      title: "Label",
    }),
    defineField({
      type: "string",
      name: "linkType",
      title: "Type",
      options: {
        list: ["external", "product", "category", "page"],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "external",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "reference",
      name: "category",
      title: "Category",
      to: { type: "category" },
      hidden: ({ document }) => document?.linkType !== "category",
      validation: (Rule) =>
        Rule.custom((value, { document }) => {
          if (document?.linkType === "category" && !value) {
            return "Required";
          }
          return true;
        }),
    }),
    defineField({
      type: "reference",
      name: "product",
      title: "Product",
      to: { type: "product" },
      hidden: ({ document }) => document?.linkType !== "product",
      validation: (Rule) =>
        Rule.custom((value, { document }) => {
          if (document?.linkType === "product" && !value) {
            return "Required";
          }
          return true;
        }),
    }),
    defineField({
      type: "reference",
      name: "page",
      title: "Page",
      to: { type: "page" },
      hidden: ({ document }) => document?.linkType !== "page",
      validation: (Rule) =>
        Rule.custom((value, { document }) => {
          if (document?.linkType === "page" && !value) {
            return "Required";
          }
          return true;
        }),
    }),
    defineField({
      type: "string",
      name: "external",
      title: "External URL",
      hidden: ({ document }) => document?.linkType !== "external",
      validation: (Rule) =>
        Rule.custom((value, { document }) => {
          if (document?.linkType === "external" && !value) {
            return "Required";
          }
          return true;
        }),
    }),
  ],
});

const customSchema = [Link, Product, Category, Page];

export default customSchema;
