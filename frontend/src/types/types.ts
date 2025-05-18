export type LinkType = {
    id: number;
    title: string;
    url: string;
    image: string;
  };
  
  export type RepairShopType = {
    id: number;
    name: string;
    website: string;
    description: string;
    whatsapp: string;
  };
  
  export type StoreType = {
    id: number;
    name: string;
    state: string;
    fullCountry: boolean;
    website: string;
    description: string;
    rents: boolean;
    sells: boolean;
    officialRepresentant: boolean;
    whatsapp: string;
  };
  
  export type PartnershipType = {
    id: number;
    title: string;
    description: string;
    image: string;
    whatsapp?: string;
    site: string;
    mode: "w" | "c";
  };
  