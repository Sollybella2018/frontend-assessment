"use client";
import React, { useEffect, useState } from "react";
import { useTeamStore } from "@/stores/teamStore";
import { teamMembers, TeamMember } from "@/app/lib/mockData";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import { useTranslations } from "next-intl";

const TeamGrid = () => {
  const { search, team, status, page, pageSize, setPage } = useTeamStore();
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<TeamMember[]>([]);
  const t = useTranslations("teamDirectory");

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      let data: TeamMember[] = [...teamMembers];
      debugger;
      if (search) data = data.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));
      if (team) data = data.filter(m => m.team.toLowerCase() === team.toLowerCase());
      if (status) data = data.filter(m => m.status.toLowerCase() === status.toLowerCase());

      setFilteredData(data);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [search, team, status]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  if (loading) {
    return (  

 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: pageSize }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-40 rounded"></div>
        ))}
      </div>
    );
  }

  if (!paginatedData.length) {
    return <div className="text-center text-gray-500 py-10">{t("emptyState")}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedData.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
          className="border px-3 py-1 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1 border rounded">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
          className="border px-3 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TeamGrid;
