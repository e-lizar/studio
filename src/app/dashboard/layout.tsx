"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  HeartPulse,
  LayoutDashboard,
  Stethoscope,
  Users,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { href: "/dashboard/patient", label: "Patient Dashboard", icon: HeartPulse },
  { href: "/dashboard/doctor", label: "Doctor Dashboard", icon: Stethoscope },
  { href: "/dashboard/symptom-checker", label: "Symptom Checker", icon: LayoutDashboard },
  { href: "/dashboard/admin", label: "Admin Panel", icon: Users },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <HeartPulse className="size-6 text-primary" />
            <h2 className="text-lg font-semibold tracking-tighter text-foreground group-data-[collapsible=icon]:hidden">
              ShujaaCare
            </h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur-sm sm:px-8">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1 text-center text-lg font-bold md:text-left">
                {menuItems.find(item => item.href === pathname)?.label || "Dashboard"}
            </div>
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" data-ai-hint="person portrait" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/">
                        <LogOut />
                    </Link>
                </Button>
            </div>
        </header>
        <div className="p-4 sm:p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
