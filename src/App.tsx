import "./App.css";
import Button from "./components/ui/button";
import { TextField } from "./components/ui/textfield";
import { Logo } from "./components/ui/logo";
import Search from "./components/ui/search";
import { LoginCurve, ShoppingCart } from "iconsax-react";
function App() {
  return (
    <div>
      <header>
        <section className="bg-primary p-1 text-center text-white">
          با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید
        </section>
        <section className="border-b border-gray-400 py-7">
          <div className="container mx-auto flex max-w-7xl justify-between align-middle">
            <Logo />
            <Search />
            <Button>
              <LoginCurve className="inline-block" size="32" color="white" />
              ورود | ثبت نام
            </Button>
            <Button>
              <ShoppingCart className="inline-block" size="32" color="white" />
              سبد خرید
            </Button>
          </div>
        </section>
      </header>
      <main></main>
      <footer className="text-white">
        <div className="bg-primary-shade-6 py-11">
          <div className="container mx-auto flex max-w-7xl justify-between">
            <div className="flex items-end">
              <TextField
                label="برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید"
                placeholder="ایمیل شما"
                type="email"
              />
              <Button>ثبت</Button>
            </div>
            <div>ما را در شبکه های اجتماعی دنبال کنید</div>
          </div>
        </div>

        <section className="bg-primary">
          <div className="container mx-auto py-11">
            <p>تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
