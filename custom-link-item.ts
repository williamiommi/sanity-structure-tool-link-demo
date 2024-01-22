import { AiOutlineLink } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { StructureBuilder } from "sanity/structure";

const allLinksItem = (S: StructureBuilder) => {
  return S.listItem()
    .icon(AiOutlineLink)
    .title("All Links")
    .child(
      S.documentTypeList("link")
        .title("All Links")
        .initialValueTemplates([
          S.initialValueTemplateItem("tpl-externalLink"),
          S.initialValueTemplateItem("tpl-productLink"),
          S.initialValueTemplateItem("tpl-categoryLink"),
          S.initialValueTemplateItem("tpl-pageLink"),
        ])
    );
};

const filteredLinksItem = (
  S: StructureBuilder,
  itemTitle: string,
  listTitle: string,
  linkType: string,
  icon: React.ComponentType | React.ReactNode
) => {
  return S.listItem()
    .title(itemTitle)
    .icon(icon)
    .child(
      S.documentTypeList("link")
        .title(listTitle)
        .filter("linkType == $linkType")
        .params({ linkType })
        .initialValueTemplates([
          S.initialValueTemplateItem(`tpl-${linkType}Link`),
        ])
    );
};

const CustomLinkItem = (S: StructureBuilder) => {
  return S.listItem()
    .icon(AiOutlineLink)
    .title("Links")
    .child(
      S.list()
        .title("Filtered Links")
        .items([
          allLinksItem(S),
          S.divider(),
          filteredLinksItem(
            S,
            "External Links",
            "All External Links",
            "external",
            HiOutlineExternalLink
          ),
          filteredLinksItem(
            S,
            "Product Links",
            "All Product Links",
            "product",
            BsCart
          ),
          filteredLinksItem(
            S,
            "Category Links",
            "All Category Links",
            "category",
            BiCategory
          ),
          filteredLinksItem(
            S,
            "Page Links",
            "All Page Links",
            "page",
            RiPagesLine
          ),
        ])
    );
};

export default CustomLinkItem;
