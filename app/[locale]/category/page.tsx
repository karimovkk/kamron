"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import Background from "./_components/Background";
import CategoryHeader from "./_components/CategoryHeader";
import TiltCard from "./_components/TiltCard";
import BuildingCard from "./_components/BuildingCard";
import NoteCard from "./_components/NoteCard";
import { groupsData } from "./_components/groups";
import Reveal from "../_components/Reveal";

export default function CategoryPage() {
  const t = useTranslations();

  const groups = useMemo(
    () =>
      groupsData.map((g) => ({
        title: t(`categories.groups.${g.key}.title`),
        desc: t(`categories.groups.${g.key}.desc`),
        items: [...g.items]
      })),
    [t]
  );

  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-24">
      <Background />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <CategoryHeader
            badge={t("categories.title")}
            title={t("categories.subtitle")}
          />
        </Reveal>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <TiltCard title={g.title} desc={g.desc} items={g.items} />
            </Reveal>
          ))}
        </section>

        <Reveal delay={0.1}>
          <BuildingCard
            title={t("categories.building.title")}
            desc={t("categories.building.desc")}
          />
        </Reveal>

        <Reveal delay={0.12}>
          <NoteCard text={t("categories.note")} />
        </Reveal>
      </div>
    </main>
  );
}