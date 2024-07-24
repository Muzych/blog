import { 
  Button
} from "~/components/ui/button";
import { SiteFooter } from "~/components/Footer";

import { Link } from "@remix-run/react";
import { Command } from "lucide-react";

export default function HomePage(){
  return (
    <div className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">Muzych's blog</h1>
        </Link>
        <Button>BliBlical</Button>
      </nav>
      <main className="flex-grow flex items-center justify-center">
        <h2>Welcome to our site!</h2>
      </main>
      <SiteFooter />
    </div>
  )
}