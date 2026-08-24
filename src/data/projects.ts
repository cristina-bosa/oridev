export type ProjectId =
  "nrg-consulting" | "seroil-gas-ahorro" | "caes" | "triggers" | "libri";

export type TagId = "develop" | "ux-ui" | "design-system";

export type ProjectData = {
  id: ProjectId;
  title: string;
  tags: TagId[];
  link?: string;
  title_link?: string;
  personal: boolean;
  url_playstore?: string;
  url_applestore?: string;
};

export const projects: ProjectData[] = [
  {
    id: "nrg-consulting",
    title: "NRG Consulting",
    tags: ["develop", "ux-ui", "design-system"],
    link: "https://www.nrgconsulting.com/",
    title_link: "NRG Consulting",
    personal: false,
  },
  {
    id: "seroil-gas-ahorro",
    title: "Seroil Gas Ahorro",
    tags: ["ux-ui", "design-system"],
    link: "https://seroilgasahorro.com/en",
    title_link: "Seroil Gas Ahorro",
    personal: false,
  },
  {
    id: "caes",
    title: "CAES",
    tags: ["develop", "ux-ui"],
    link: "https://caes.digital/es",
    title_link: "CAES",
    personal: false,
  },
  {
    id: "triggers",
    title: "Triggers",
    tags: ["develop", "ux-ui"],
    personal: false,
    url_playstore:
      "https://play.google.com/store/apps/details?id=com.nrg.triggers",
    url_applestore: "https://apps.apple.com/es/app/5g-triggers/id6476554909",
  },
  {
    id: "libri",
    title: "Libri",
    tags: ["develop", "ux-ui", "design-system"],
    personal: true,
  },
];
