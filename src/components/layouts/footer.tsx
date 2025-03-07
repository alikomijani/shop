import { HomeIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="mb-16 text-white md:mb-0">
      <section className="bg-primary hidden md:block">
        <div className="container mx-auto py-4 text-center text-xs">
          <div>تماس با پشتیبانی :۰۲۱-۳۴۵۶۰۰۰</div>
          <div>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </div>
          <div>
            تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
          </div>
        </div>
      </section>
      <nav className="fixed bottom-0 left-0 flex w-full justify-around border-t border-gray-300 bg-white p-2 md:hidden">
        <a href="/" className="flex flex-col items-center text-gray-700">
          <HomeIcon className="size-6" />
          <span className="text-xs">خانه</span>
        </a>
        <a href="/cart" className="flex flex-col items-center text-gray-700">
          <ShoppingCartIcon className="size-6" />
          <span className="text-xs">سبد خرید</span>
        </a>
        <a href="/profile" className="flex flex-col items-center text-gray-700">
          <UserIcon className="size-6" />
          <span className="text-xs">پروفایل</span>
        </a>
      </nav>
    </footer>
  );
}
