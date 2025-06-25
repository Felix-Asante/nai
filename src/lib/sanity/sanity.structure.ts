import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Noble Alms International - Admin")
    .items([
      S.documentTypeListItem("category").title("Categories"),
      S.divider(),
      S.listItem()
        .title("Gallery Collection")
        .child(S.document().schemaType("gallery").documentId("gallery")),
      S.listItem()
        .title("Partners")
        .child(S.document().schemaType("partners").documentId("partners")),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["category", "gallery", "partners"].includes(item.getId()!)
      ),
    ]);
