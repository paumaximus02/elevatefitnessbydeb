import { site } from "./site";

export const googleReviewsUrl = site.social.googleBusiness;

export type ClientReview = {
  name: string;
  text: string;
};

/** A selection of public Google reviews, quoted as written. */
export const reviews: ClientReview[] = [
  {
    name: "Jenn B",
    text: "Training with Deb has been one of the best decisions I've made. I came to her severely out of shape and a desire to live a healthier life. During our time together, she crafted workouts based on my physical abilities, and over time made them more challenging. She made me feel so comfortable, never judged, and truly cared about my wellbeing. Thanks to her training and guidance, I'm down 50 pounds, no longer pre diabetic, and am a gym regular! Working out has become something I genuinely enjoy, and she gave me that foundation. Deb is the best!",
  },
  {
    name: "Maria Gray",
    text: "I came to Debora looking for help with balance and strength so I could continue to lead a full and healthy life as a wife, mom and grandma. However, I have gained so much more while working with Debora. She has taught me so much about fitness, weight training and how to achieve my goals. Debora plans challenging workouts for each session to help me reach those goals. She also checks in with me before we begin a workout to see if I'm sore from the last workout, if I need to move more slowly or stay on the course and adjusts accordingly. She encourages me to try new things and to push myself beyond what I thought I was capable. Debora's professional, reliable, knowledgeable and an absolute joy to work with. I am stronger because of her! I highly recommend her as a personal trainer.",
  },
  {
    name: "Nichole Uber",
    text: "I was a beginner and had gotten to a point of needing direction and help navigating how to reach my goals. I took a leap outside of my comfort zone and started working with Deb in October 2025. She is amazing! The perfect balance of pushing me beyond my self doubts and celebrating my victories with me. I thoroughly enjoy working with her and for the long term!!!",
  },
  {
    name: "Redge Campbell",
    text: "Incredibly knowledgeable and motivated to push me. As a 69 year old I'm at risk for nagging injuries. Deb is always aware of this and knows how to progress me without injury.",
  },
];
