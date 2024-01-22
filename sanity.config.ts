import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import CustomStructure from "./custom-structure";
import customSchema from "./schema";
import customTemplates from "./templates";

export default defineConfig({
  name: "demo",
  title: "Demo",
  projectId: "<projectId>",
  dataset: "production",
  plugins: [structureTool({ structure: CustomStructure })],
  schema: {
    types: customSchema,
    templates: customTemplates,
  },
});
