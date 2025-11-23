"use client";
import TeamFilters from "@/app/components/TeamFilters/TeamFilters";
import TeamGrid from "@/app/components/TeamGrid/TeamGrid";
import { useTranslations } from "next-intl";

export default function TeamDirectoryPage() {
  const t = useTranslations("teamDirectory");

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t("metadata.title")}</h1>
      <TeamFilters />
      <TeamGrid />
    </main>
  );
}
