import { Hero } from "./components/sections/Hero";
import { ProductShowcase } from "./components/sections/ProductShowcase";
import { Highlights } from "./components/sections/Highlights";
import { DesireBanner } from "./components/sections/DesireBanner";
import { Testimonials } from "./components/sections/Testimonials";
import { InstagramGallery } from "./components/sections/InstagramGallery";
import { HowToOrder } from "./components/sections/HowToOrder";
import { DeliveryInfo } from "./components/sections/DeliveryInfo";
import { FinalCTA } from "./components/sections/FinalCTA";
import { CartFloatingButton } from "./components/CartFloatingButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 md:pb-0 relative overflow-x-hidden">
      <Hero />
      <ProductShowcase />
      <Highlights />
      <DesireBanner />
      <Testimonials />
      <InstagramGallery />
      <HowToOrder />
      <DeliveryInfo />
      <FinalCTA />
      
      <CartFloatingButton />
    </main>
  );
}
