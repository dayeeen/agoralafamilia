"use client";
import { FloatingNav } from "../ui/floating-navbar";
import { IconCalendarEvent, IconHome, IconMessage, IconPhoto, IconUser } from "@tabler/icons-react";
export function FloatingNavbar() {
  const navItems = [
    {
      name: "Beranda",
      link: "#beranda",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Acara",
      link: "#acara",
      icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Galeri",
      link: "#galeri",
      icon: (
        <IconPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Pesan",
      link: "#pesan",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
