import React from "react";
import { TeamMember } from "@/app/lib/mockData";

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-medium">{member.name}</div>
          <div className="text-sm text-gray-500">{member.role} • {member.email}</div>
          <div className="text-sm">{member.team} — <span className="capitalize">{member.status}</span></div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
