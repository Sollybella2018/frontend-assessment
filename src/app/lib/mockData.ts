export interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  team: string;
  status: string;
} 
export const teamMembers: TeamMember[] = [
  { id: 1, name: "Assel", role: "Admin", email: "Assel@gamil.com", avatar: "/avatar1.png", team: "engineering", status: "active" },
  { id: 2, name: "Sara Omar", role: "Agent", email: "sara@example.com", avatar: "/avatar2.png", team: "design", status: "inactive" },
  { id: 3, name: "Khaled Ahmed", role: "Creator", email: "khaled@example.com", avatar: "/avatar3.png", team: "engineering", status: "active" },
  { id: 4, name: "Bella ", role: "Agent", email: "bella@example.com", avatar: "/avatar4.png", team: "marketing", status: "active" },
  { id: 5, name: "Bassam Nader", role: "Creator", email: "bassam@example.com", avatar: "/avatar3.png", team: "engineering", status: "inactive" },
  { id: 6, name: "Lina Mahmoud", role: "Admin", email: "lina@example.com", avatar: "/avatar3.png", team: "design", status: "active" },
  { id: 7, name: "Omar Saleh", role: "Agent", email: "omar@example.com", avatar: "/avatar3.png", team: "engineering", status: "active" },
  { id: 8, name: "Rana Khalil", role: "Creator", email: "rana@example.com", avatar: "/avatar3.png", team: "marketing", status: "inactive" },
  { id: 9, name: "Tamer Hadi", role: "Agent", email: "tamer@example.com", avatar: "/avatar3.png", team: "design", status: "active" },
  { id: 10, name: "Mona Fadi", role: "Admin", email: "mona@example.com", avatar: "/avatar3.png", team: "engineering", status: "inactive" },
  { id: 11, name: "Yousef Karim", role: "Creator", email: "yousef@example.com", avatar: "/avatar3.png", team: "marketing", status: "active" },
  { id: 12, name: "Nadia Samir", role: "Agent", email: "nadia@example.com", avatar: "/avatar3.png", team: "design", status: "active" },
  { id: 13, name: "Hani Raad", role: "Admin", email: "hani@example.com", avatar: "/avatar3.png", team: "engineering", status: "inactive" },
  { id: 14, name: "Dina Zaki", role: "Creator", email: "dina@example.com", avatar: "/avatar3.png", team: "marketing", status: "active" },
  { id: 15, name: "Fadi Rami", role: "Agent", email: "fadi@example.com", avatar: "/avatar3.png", team: "design", status: "active" },
  { id: 16, name: "Rami Hossam", role: "Creator", email: "rami@example.com", avatar: "/avatar3.png", team: "engineering", status: "inactive" },
  { id: 17, name: "Sara Nabil", role: "Agent", email: "sara.n@example.com", avatar: "/avatar3.png", team: "marketing", status: "active" },
  { id: 18, name: "Zain Kamel", role: "Admin", email: "zain@example.com", avatar: "/avatar3.png", team: "design", status: "active" },
  { id: 19, name: "Laila Omar", role: "Creator", email: "laila@example.com", avatar: "/avatar3.png", team: "engineering", status: "inactive" },
  { id: 20, name: "Bashir Fawzi", role: "Agent", email: "bashir@example.com", avatar: "/avatar3.png", team: "marketing", status: "active" },
];
