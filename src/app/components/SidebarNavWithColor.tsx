"use client";
import SidebarNav from "./SidebarNav";
import { usePathname } from "next/navigation";
 
export default function SidebarNavWithColor() {
  const pathname = usePathname();
  const isJournal = pathname.startsWith("/journal");
  return <SidebarNav color={isJournal ? "sunny" : "blueprint"} />;
} 