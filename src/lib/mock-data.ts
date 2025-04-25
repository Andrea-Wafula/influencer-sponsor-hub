
export const overviewStats = [
  { label: "Followers", value: 152800, growth: 5.4 },
  { label: "Engagement Rate", value: 4.6, growth: 1.2, isPercentage: true },
  { label: "Avg. Likes", value: 8940, growth: 3.8 },
  { label: "Avg. Comments", value: 342, growth: -2.1 },
];

export const earningsData = [
  { month: "Jan", amount: 4200 },
  { month: "Feb", amount: 3800 },
  { month: "Mar", amount: 6500 },
  { month: "Apr", amount: 5200 },
  { month: "May", amount: 7800 },
  { month: "Jun", amount: 9100 },
  { month: "Jul", amount: 8400 },
  { month: "Aug", amount: 11200 },
  { month: "Sep", amount: 12500 },
];

export const sponsorshipOffers = [
  {
    id: "1",
    brand: "FashionNova",
    offer: 2500,
    requirements: "2 feed posts, 3 stories",
    status: "pending",
    category: "Fashion",
    deadline: "2025-05-15",
    logoColor: "#e91e63",
  },
  {
    id: "2",
    brand: "FitLife Supplements",
    offer: 1800,
    requirements: "1 reel, 2 stories",
    status: "accepted",
    category: "Health & Fitness",
    deadline: "2025-05-10",
    logoColor: "#4caf50",
  },
  {
    id: "3",
    brand: "Luxury Cosmetics",
    offer: 3200,
    requirements: "1 tutorial video, 2 posts",
    status: "pending",
    category: "Beauty",
    deadline: "2025-05-20",
    logoColor: "#9c27b0",
  },
  {
    id: "4",
    brand: "Travel Adventures",
    offer: 4500,
    requirements: "3 posts during trip, 5 stories",
    status: "pending",
    category: "Travel",
    deadline: "2025-06-01",
    logoColor: "#2196f3",
  },
];

export const recentContent = [
  {
    id: "1",
    type: "image",
    thumbnail: "/placeholder.svg",
    caption: "Beach day with @fashionbrand #sponsored",
    likes: 12540,
    comments: 378,
    engagement: 5.2,
    date: "2025-04-22",
    sponsored: true,
  },
  {
    id: "2",
    type: "video",
    thumbnail: "/placeholder.svg",
    caption: "Morning routine with my favorite products! ✨",
    likes: 15230,
    comments: 423,
    engagement: 6.8,
    date: "2025-04-19",
    sponsored: false,
  },
  {
    id: "3",
    type: "image",
    thumbnail: "/placeholder.svg",
    caption: "New fitness collection drop! @athleticwear #ad",
    likes: 9870,
    comments: 245,
    engagement: 3.7,
    date: "2025-04-15",
    sponsored: true,
  },
];

export const audienceData = {
  demographics: {
    age: [
      { group: "13-17", value: 12 },
      { group: "18-24", value: 42 },
      { group: "25-34", value: 27 },
      { group: "35-44", value: 15 },
      { group: "45+", value: 4 },
    ],
    gender: [
      { group: "Women", value: 68 },
      { group: "Men", value: 30 },
      { group: "Other", value: 2 },
    ],
    locations: [
      { name: "United States", value: 45 },
      { name: "United Kingdom", value: 15 },
      { name: "Canada", value: 10 },
      { name: "Australia", value: 8 },
      { name: "Germany", value: 5 },
      { name: "Other", value: 17 },
    ],
  },
  interests: [
    { name: "Fashion", value: 85 },
    { name: "Beauty", value: 72 },
    { name: "Travel", value: 65 },
    { name: "Fitness", value: 58 },
    { name: "Lifestyle", value: 52 },
    { name: "Food", value: 47 },
  ],
  activityHours: [
    { hour: "12am", value: 15 },
    { hour: "3am", value: 5 },
    { hour: "6am", value: 10 },
    { hour: "9am", value: 40 },
    { hour: "12pm", value: 55 },
    { hour: "3pm", value: 75 },
    { hour: "6pm", value: 90 },
    { hour: "9pm", value: 65 },
  ],
};

export const profileData = {
  name: "Alex Morgan",
  username: "@alexmorganstyle",
  bio: "Fashion | Lifestyle | Travel ✨\nCollaborations: alexmorgan@agent.com",
  posts: 632,
  followers: 152800,
  following: 845,
  tags: ["Fashion", "Beauty", "Travel", "Lifestyle"],
  sponsorships: [
    { brand: "FashionBrand", count: 12 },
    { brand: "BeautyLine", count: 8 },
    { brand: "TravelAgency", count: 6 },
    { brand: "FitnessApp", count: 5 },
  ],
  metrics: {
    engagementRate: 4.6,
    reachPerPost: 35000,
    impressionsPerPost: 55000,
    saveRate: 2.8,
    shareRate: 1.2,
  },
  rates: {
    post: 1200,
    story: 800,
    reel: 2500,
    video: 3000,
  },
};
