"use client";
import SidebarNav from "./SidebarNav";
import { usePathname } from "next/navigation";
 
export default function SidebarNavWithColor() {
  const pathname = usePathname();
  const isJournal = pathname.startsWith("/journal");
  const isWork = pathname.startsWith("/work");

  let color = "blueprint";
  if (isJournal) color = "sunny";
  if (isWork) color = "marker";

  return <SidebarNav color={color} />;
} 