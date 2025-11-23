import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  department: string;
  avatar: string;
}

export default function TeamMemberCard({
  name,
  role,
  department,
  avatar,
}: TeamMemberCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm flex items-center gap-4 bg-white">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border"
      />

      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-xs text-gray-500">{department}</p>
      </div>
    </div>
  );
}