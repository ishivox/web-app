export const pdfStudio = {
  name: "PDF Studio",
  slug: "pdf-studio",
  href: "/projects/pdf-studio",
  status: "In development",
  description:
    "Reusable templates. Dynamic data. Beautiful PDFs. A document-generation platform built around a shared rendering engine and a typed developer API.",
  repository: "https://github.com/ishivox/pdf-studio",
  features: [
    {
      title: "Define once. Generate again.",
      description:
        "Save a document template and generate PDFs with a different dataset each time, keeping layout separate from runtime data.",
    },
    {
      title: "One rendering foundation.",
      description:
        "PDF and canvas backends consume a shared display list, keeping the rendering architecture consistent across output formats.",
    },
    {
      title: "Documents that can grow.",
      description:
        "Multi-page generation supports pagination, repeating headers and footers, and page numbers.",
    },
    {
      title: "Built for developers.",
      description:
        "A typed API client connects template storage and PDF generation. A visual editor is part of the product direction and is still being built.",
    },
  ],
} as const;
export const projects = [pdfStudio] as const;
