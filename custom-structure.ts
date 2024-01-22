import { StructureBuilder } from "sanity/structure";
import CustomLinkItem from "./custom-link-item";

const CustomStructure = (S: StructureBuilder) => {
  return S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().map((item) => {
        if (item.getId() === "link") return CustomLinkItem(S);
        return item;
      }),
    ]);
};

export default CustomStructure;
