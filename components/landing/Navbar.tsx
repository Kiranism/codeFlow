import { GithubIcon } from "lucide-react";

import Link from "next/link";
import ThemeToggle from "../ThemeToggle/theme-toggle";

const Navbar = () => {
  return (
    <div className="px-0 md:px-5 py-2">
      <nav className="mx-auto flex container items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <img src={saasstellar} alt='' width={28} height={26} /> */}

          <span className="hidden text-lg font-semibold md:block">
            CodeFLow
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/Kiranism/codeFlow"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background/30 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10"
            aria-label="my github"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
