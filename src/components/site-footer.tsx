import { HeartPulse } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <HeartPulse className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Your Friends at Firebase.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/awareness" className="hover:text-primary">Awareness</Link>
            <Link href="/login" className="hover:text-primary">Patient Portal</Link>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} ShujaaCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
