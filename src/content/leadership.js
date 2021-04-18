import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/leadership");

const teamMembers = [
  {
    imgSrc: `${CDN_URL}/dana_rabon.jpg`,
    name: "Dana Rabon",
    title: "RPh Executive Director"
  },
  {
    imgSrc: `${CDN_URL}/suzie_nixon.jpg`,
    name: "Suzie Nixon",
    title: "Human Resource Director"
  },
  {
    imgSrc: `${CDN_URL}/adela_pena.jpg`,
    name: "Adela Pena",
    title: "Quality Assurance Director"
  }
];

export default teamMembers;
