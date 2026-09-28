import { site } from "./site";

export const googleReviewsUrl = site.social.googleBusiness;

export type ClientReview = {
  name: string;
  text: string;
  /** Shown on the homepage as well as the reviews page. */
  highlight?: boolean;
};

/** A selection of public Google reviews, quoted as written. */
export const reviews: ClientReview[] = [
  {
    name: "Jenn B",
    highlight: true,
    text: "Training with Deb has been one of the best decisions I've made. I came to her severely out of shape and a desire to live a healthier life. During our time together, she crafted workouts based on my physical abilities, and over time made them more challenging. She made me feel so comfortable, never judged, and truly cared about my wellbeing. Thanks to her training and guidance, I'm down 50 pounds, no longer pre diabetic, and am a gym regular! Working out has become something I genuinely enjoy, and she gave me that foundation. Deb is the best!",
  },
  {
    name: "Maria Gray",
    text: "I came to Debora looking for help with balance and strength so I could continue to lead a full and healthy life as a wife, mom and grandma. However, I have gained so much more while working with Debora. She has taught me so much about fitness, weight training and how to achieve my goals. Debora plans challenging workouts for each session to help me reach those goals. She also checks in with me before we begin a workout to see if I'm sore from the last workout, if I need to move more slowly or stay on the course and adjusts accordingly. She encourages me to try new things and to push myself beyond what I thought I was capable. Debora's professional, reliable, knowledgeable and an absolute joy to work with. I am stronger because of her! I highly recommend her as a personal trainer.",
  },
  {
    name: "DougK",
    text: "I have trained with Deb three times a week for well over a year and a half. I can honestly say hiring her has been the best decision of my life. She has transformed my body and I now feel 20 years younger. I am 66 but am now in the best shape of my life. Deb is a pleasure to work with and I always look forward to each session. She is smart, fun, has a great sense of humor, and I know she really cares about me as an individual. She pushes me harder than I can push myself, but not so hard that I dread working out so a perfect balance. She plans out each workout in advance, tailoring it to my fitness level and personal needs (such as exercises targeted to my golf), offering me diet and nutrition advice to complement the workouts, demonstrates each exercise, adds in planned rest periods between sets, and mixes up the exercises each session so they are always fresh and never boring. She is very attentive to proper form to prevent injury and to efficiently isolate each muscle group. She even tries out some routines on herself first sometimes to make sure it will work for me. Knowing I had committed to at least a year with her when I first started, she developed a long-term plan customized to me, and it has worked beautifully. I highly recommend Deb to anyone committed to getting in shape. She can take you there and it will be fun along the journey!",
  },
  {
    name: "Nick Young",
    text: "Meeting with Deborah and following her weekly plan for me made losing weight and building muscle so simple. I was afraid to even walk onto the weight floor at first and she was able to give me effective routines for every level of comfort I was at. She accommodated every physical restriction I encountered (I have had bad back and wrist pain my whole life), so I was able to strength train every muscle group without pain.\n\nThere's no gimmick to her diet or workout plan, just solid, reliable and consistent information that achieves results. Whenever I had a question or worry about something I was able to shoot her a message and receive clear, timely, and supportive feedback when I needed it.\n\nFitness and weight loss can be a terrifying hurdle to overcome, especially when you are in as bad shape as I was. But I'm in the best shape of my life now and it simply wouldn't have happened without Deborah's support. Easiest 5 stars I've ever given.",
  },
  {
    name: "Andrea Gardner",
    text: "I honestly cannot say enough good things about my personal trainer! Deb is incredibly knowledgeable, motivating, and genuinely invested in my success—not just in the gym, but as a person.\n\nEvery workout is thoughtfully tailored to my needs and abilities, including working around injuries or limitations, while still challenging me to push beyond my comfort zone in the best possible way. I appreciate the perfect balance of encouragement and accountability. She knows how to push me when I need it, support me when things are challenging, and help me recognize just how much I'm capable of.\n\nWhat I appreciate most is that she truly cares. I never feel like just another client. I feel supported, encouraged, and confident in my fitness journey. Working with Deb has helped me become stronger, more consistent, and more confident in myself.\n\nIf you're looking for a trainer who combines expertise, personalized coaching, genuine compassion, and the ability to bring out your best, I cannot recommend Deb enough. I'm so grateful to have found a trainer who makes such a positive impact on my life!",
  },
  {
    name: "Kate Stevens",
    text: "I have been training with Deb for a couple months now and can not recommend her highly enough. She is great at translating goals and limitations into a practical, varied and progressive set of work outs, and knows exactly when to push and when to tell me to knock it off before I hurt myself. It is invaluable to have her input on correct form (so many tiny adjustments that make a huge difference!) and if an exercise isn't working she pivots and draws on her extensive library to find one that does. I appreciate that she writes down workouts to rotate through between sessions so I don't have to remember every option, and most of all she is a fun, positive and supportive person to be around. Working with Deb has been the difference for me between feeling like I'm flailing around uselessly on a bunch of intimidating equipment vs. having a strategy that makes sense and makes progress.",
  },
  {
    name: "Nichole Uber",
    highlight: true,
    text: "I was a beginner and had gotten to a point of needing direction and help navigating how to reach my goals. I took a leap outside of my comfort zone and started working with Deb in October 2025. She is amazing! The perfect balance of pushing me beyond my self doubts and celebrating my victories with me. I thoroughly enjoy working with her and for the long term!!!",
  },
  {
    name: "Emily Garcia",
    text: "Deb's support, encouragement, tailored plans, and mindfulness of existing injuries was crucial in helping me while I was in the early stages of my fitness journey. She always gave alternatives on how I could do exercises at home, between sessions, to help maximize progress. I'm grateful for her, and the foundation she helped me build.",
  },
  {
    name: "Redge Campbell",
    highlight: true,
    text: "Incredibly knowledgeable and motivated to push me. As a 69 year old I'm at risk for nagging injuries. Deb is always aware of this and knows how to progress me without injury.",
  },
];

export const highlightedReviews = reviews.filter((review) => review.highlight);
