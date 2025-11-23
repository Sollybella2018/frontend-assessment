"use client";
import React from "react";
import { useTeamStore } from "@/stores/teamStore";
import { useTranslations } from "next-intl";

const TeamFilters = () => {
  const { search, setSearch, team, setTeam, status, setStatus, clearFilters } = useTeamStore();
  const t = useTranslations("teamDirectory.filters");

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      <input placeholder={t("searchPlaceholder")} value={search}  onChange={(e) => setSearch(e.target.value)}
        className="border p-1"
      />
      <select value={team} onChange={(e) => setTeam(e.target.value)} className="border p-1">
        <option value="">{t("roleFilter")}</option>
        <option value="engineering">{t("roles.engineering")}</option>
        <option value="design">{t("roles.design")}</option>
      </select>
      
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-1">
        <option value="">{t("statuses.all")}</option>
        <option value="active">{t("statuses.active")}</option>
        <option value="inactive">{t("statuses.inactive")}</option>
      </select>
      <button onClick={clearFilters} className="bg-blue-500 text-white px-2 rounded">
        {t("clearFilters")}
      </button>
    </div>
  );
};

export default TeamFilters;
