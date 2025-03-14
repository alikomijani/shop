import { Input } from "@/components/ui/input";
import { MobileLogoIcon } from "@/icons/mobile-logo";
import { DesktopLogoIcon } from "@/icons/desktop-logo";
import MobileMenu from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <section className="bg-primary hidden p-1 text-center text-white md:block">
        با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید
      </section>
      <section>
        <div className="p-2 md:p-5">
          <div className="container mx-auto flex items-center justify-between gap-2">
            {/* Mobile Menu */}
            <MobileMenu />
            {/* Desktop Menu */}
            <div className="hidden w-36 shrink-0 md:block">
              <DesktopLogoIcon className="h-9 w-full" />
            </div>
            <Input
              type="search"
              placeholder="جستجو"
              className="flex-grow rounded-3xl"
            />
            <MobileLogoIcon className="size-14" />
          </div>
        </div>
      </section>
    </header>
  );
}
