import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Layers, Palette, Coffee, BookOpen } from "lucide-react";
import { ModeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full py-5 border-b bg-secondary/40 backdrop-blur supports-[backdrop-filter]:bg-secondary/20 px-12 [&_*]:no-underline flex flex-row items-center justify-between">
      {/* Left side — logo */}
      <h1 className="font-bold">hitury.dev</h1>

      {/* Center — navigation */}
      <NavigationMenu>
        <NavigationMenuList className="gap-3">
          {/* Personal Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Personal</NavigationMenuTrigger>
            <NavigationMenuContent className="p-5 flex flex-col justify-center items-start">
              <span className="text-[11px] mb-3 font-semibold text-muted-foreground uppercase tracking-widest">
                PERSONAL
              </span>
              <div className="flex flex-col items-start space-y-3">
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="flex flex-col items-start text-left font-normal w-[200px] px-4 py-4"
                  >
                    <Layers className="w-5 h-5 mb-2 text-muted-foreground" />
                    <span className="text-sm font-medium">Projects</span>
                    <span className="text-xs text-muted-foreground">
                      View my projects and experiments
                    </span>
                  </a>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="flex flex-col items-start text-left font-normal w-[200px] px-4 py-4"
                  >
                    <BookOpen className="w-5 h-5 mb-2 text-muted-foreground" />
                    <span className="text-sm font-medium">Documentation</span>
                    <span className="text-xs text-muted-foreground">
                      View my coding documentations
                    </span>
                  </a>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="flex flex-col items-start text-left font-normal w-[200px] px-4 py-4"
                  >
                    <Coffee className="w-5 h-5 mb-2 text-muted-foreground" />
                    <span className="text-sm font-medium">Buy me a coffee</span>
                    <span className="text-xs text-muted-foreground">
                      Support my work
                    </span>
                  </a>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Tools Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent className="p-5 flex flex-col justify-center items-start">
              <span className="text-[11px] mb-3 font-semibold text-muted-foreground uppercase tracking-widest">
                TOOLS
              </span>
              <div className="flex flex-col items-start space-y-3">
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="flex flex-col items-start text-left font-normal w-[200px] px-4 py-4"
                  >
                    <Palette className="w-5 h-5 mb-2 text-muted-foreground" />
                    <span className="text-sm font-medium">Color Picker</span>
                    <span className="text-xs text-muted-foreground">
                      A simple color picker tool
                    </span>
                  </a>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side — mode toggle */}
      <div className="flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;

