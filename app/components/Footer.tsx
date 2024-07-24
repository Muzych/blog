import { Link } from "@remix-run/react";

export function SiteFooter() {
    return (
      <footer className="w-full py-6 md:px-8 md:py-0">
        <div className="container flex items-center justify-center h-24">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            &copy; {new Date().getFullYear()} - Present 木子言成
            <br />
            Proudly Powered by{" "}
            
            <Link
              to="https://ui.aceternity.com"
              className="hover:text-blue-500"
            >
              Remix.Run
            </Link> 
          </p>
        </div>
      </footer>
    )
  }