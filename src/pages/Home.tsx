import { ScrollSection } from "@/components/scroll-section";
import { categories, products } from "./data";
import { CategoryCard } from "@/components/category-card";
import { OfferSection } from "@/components/offer-section";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <main className="mb-2 md:mb-14">
      <div className="container mx-auto px-3">
        <ScrollSection title="دسته بندی محصولات" className="mt-2">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              href={`/${item.slug}`}
              imgSrc={item.image}
            />
          ))}
        </ScrollSection>
        <OfferSection title="محصولات پیشنهادی" className="mt-6">
          {products.map((item, index) => (
            <ProductCard
              key={item.id}
              className={index >= 4 ? "hidden md:block" : "block"}
              id={item.id.toString()}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))}
        </OfferSection>
        <OfferSection title="طرح های پرطرفدار" className="mt-6">
          {products.map((item, index) => (
            <ProductCard
              key={item.id}
              className={index >= 4 ? "hidden md:block" : "block"}
              id={item.id.toString()}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))}
        </OfferSection>
      </div>
    </main>
  );
}
