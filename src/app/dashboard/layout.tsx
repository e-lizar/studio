"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
import { useAuth, useUser, useFirestore } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";


const menuItems = [
  { href: "/dashboard/patient", label: "Patient Dashboard", icon: HeartPulse, roles: ['patient'] },
  { href: "/dashboard/doctor", label: "Doctor Dashboard", icon: Stethoscope, roles: ['doctor'] },
  { href: "/dashboard/symptom-checker", label: "Symptom Checker", icon: LayoutDashboard, roles: ['patient', 'doctor'] },
  { href: "/dashboard/admin", label: "Admin Panel", icon: Users, roles: ['admin'] },
];

function AuthRedirect({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();
  const [role, setRole] = React.useState<string | null>(null);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace('/login');
    } else if (user) {
      const getRole = async (user: User) => {
        let docRef = doc(firestore, "roles_admin", user.uid);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRole("admin");
          return;
        }

        docRef = doc(firestore, "doctors", user.uid);
        docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRole("doctor");
          return;
        }
        setRole("patient");
      };
      getRole(user);
    }
  }, [user, isUserLoading, router, firestore]);

  if (isUserLoading || !user || !role) {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    );
  }

  const currentPath = usePathname();
  const allowedRoutes = menuItems.filter(item => item.roles.includes(role)).map(item => item.href);
  if (!allowedRoutes.includes(currentPath)) {
      if(role === 'admin') router.replace('/dashboard/admin');
      if(role === 'doctor') router.replace('/dashboard/doctor');
      if(role === 'patient') router.replace('/dashboard/patient');
      return (
        <div className="flex h-screen w-screen items-center justify-center">
             <div className="flex flex-col items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
      );
  }

  return <>{children}</>;
}


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const [userRole, setUserRole] = React.useState<string | null>(null);
  const firestore = useFirestore();
  const router = useRouter();


  useEffect(() => {
    if (user) {
      const determineRole = async (user: User) => {
        let docRef = doc(firestore, "roles_admin", user.uid);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserRole("admin");
          return;
        }

        docRef = doc(firestore, "doctors", user.uid);
        docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserRole("doctor");
          return;
        }
        
        setUserRole("patient");
      };
      determineRole(user);
    }
  }, [user, firestore]);

  const handleLogout = () => {
    signOut(auth);
    router.push('/login');
  };

  const visibleMenuItems = userRole ? menuItems.filter(item => item.roles.includes(userRole)) : [];

  return (
    <AuthRedirect>
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
              {isUserLoading || !userRole ? (
                <div className="p-2 flex flex-col gap-2">
                  <Skeleton className="h-8 w-full"/>
                  <Skeleton className="h-8 w-full"/>
                  <Skeleton className="h-8 w-full"/>
                </div>
              ) : (
                visibleMenuItems.map((item) => (
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
                ))
              )}
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
                      <AvatarImage src={`https://picsum.photos/seed/${user?.uid}/40/40`} data-ai-hint="person portrait" />
                      <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Button variant="ghost" size="icon" onClick={handleLogout}>
                      <LogOut />
                  </Button>
              </div>
          </header>
          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </SidebarProvider>
    </AuthRedirect>
  );
}
