import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/activities");

const eventImages = [
  {
    alt: "Disco party for residents",
    src: `${CDN_URL}/activities-container__disco.jpg`,
  },
  {
    alt: "Tea party for residents on Mother's Day",
    src: `${CDN_URL}/activities-container__tea.jpg`,
  },
  {
    alt: "Santa visiting the residents during Christmas party",
    src: `${CDN_URL}/activities-container__santa.jpg`,
  },
];

const activities = [
  "Monthly Resident Outing (Weather Permitting)",
  "Monthly Birthday Party",
  "Bingo",
  "Exercise Activities",
  "Bible study with devotions",
  "Various church services",
  "Resident Council Meeting Monthly",
  "One to One Room Visits",
  "Memory Stimulation",
  "Front & Back Porch Activities (Weather Permitting)",
  "Cooking Class",
  "Arts & Crafts",
];

export { activities, eventImages };
