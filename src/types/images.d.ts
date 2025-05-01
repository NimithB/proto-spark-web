declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

// Import placeholder images until real ones are added
const placeholderImage = "https://placehold.co/400x400?text=Team+Member";

const teamMembers = [
  {
    name: "Sai Vivek",
    role: "Founder",
    bio: "Passionate entrepreneur with expertise in robotics and innovation.",
    image: saiVivekImage || placeholderImage
  },
  // ... rest of the team members
];