"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeartPulse } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import React, { useState } from "react";
import { useAuth, initiateEmailSignIn, useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { useFirestore } from "@/firebase";
import { User } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const router = useRouter();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();

  React.useEffect(() => {
    const checkRoleAndRedirect = async (user: User) => {
        if (user) {
            let docRef = doc(firestore, "roles_admin", user.uid);
            let docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                router.push("/dashboard/admin");
                return;
            }
    
            docRef = doc(firestore, "doctors", user.uid);
            docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                router.push("/dashboard/doctor");
                return;
            }
    
            router.push("/dashboard/patient");
        }
    };
    if (user && !isUserLoading) {
        checkRoleAndRedirect(user);
    }
  }, [user, isUserLoading, firestore, router]);


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
        initiateEmailSignIn(auth, email, password);
    } catch (error: any) {
        if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
            setError("Invalid email or password. Please try again.");
        } else {
            setError(error.message);
        }
        console.error("Login Error:", error);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm mx-auto shadow-xl">
          <CardHeader className="text-center">
            <HeartPulse className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-2xl mt-4 font-headline">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-destructive text-sm">{error}</p>}
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
