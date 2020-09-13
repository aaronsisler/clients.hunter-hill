import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/amenities");

const amenities = [
  {
    content:
      "Our front porch is a great place to sit in a rocking chair and enjoy the fresh air. Our back porch offers a privacy courtyard.",
    title: "Outdoor porches",
    image: {
      altText: "Outdoor porch on sunny day",
      src: `${CDN_URL}/amenities-container__porch.jpg`
    }
  },
  {
    content:
      "We offer two rooms equipped with large, flat-screen TVs for our residents' enjoyment.",
    title: "Family Rooms",
    image: {
      altText: "Family room with large screen tv",
      src: `${CDN_URL}/amenities-container__family-room.jpg`
    }
  },
  {
    content:
      "We utilize a handicap accessible vehicle for transportation to and from local medical appointments and for outings.",
    title: "Transportation",
    image: {
      altText: "Small concierge bus",
      src: `${CDN_URL}/amenities-container__bus.jpg`
    }
  },
  {
    content:
      "We pride ourselves on the cleanliness and care our dietary staff takes to ensure dining rooms are ready for a variety of uses, from preparing and serving meals to meetings and private parties.",
    title: "Dining Rooms",
    image: {
      altText: "Dining room with chairs and tables",
      src: `${CDN_URL}/amenities-container__dining.jpg`
    }
  },
  {
    content:
      "Our beauty/barber shop is open weekly for haircuts, styling, manicures, and pedicures.",
    title: "Beauty/Barber Shop",
    image: {
      altText: "Stylist at her station",
      src: `${CDN_URL}/amenities-container__salon.jpg`
    }
  },
  {
    content:
      "Hunter Hill is easily navigated and accessible for individuals using wheelchairs and other assistive devices.",
    title: "Handicap Accessibility"
  }
];

export default amenities;
