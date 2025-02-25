import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div>
      <Link href="/">
        <Button className="mb-6 ml-3 mt-3" variant="outline">
          <ChevronLeftIcon />
        </Button>
      </Link>

      <div className="flex flex-col items-center justify-center">
        {/* LOGO E TITULO */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={82}
            height={82}
          />
          <h2 className="font-semibold">{restaurant.name}</h2>
        </div>
        {/* BEM VINDO */}
        <div className="space-y-2 pt-24 text-center">
          <h3 className="text-2xl font-semibold">Seja Bem-vindo!</h3>
          <p className="opacity-55">
            Escolha como prefere aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe!
          </p>
        </div>
        <div className="grid grid-cols-2 pt-14">
          <ConsumptionMethodOption
            opiton="DINE_IN"
            slug={slug}
            buttonText="Para comer aqui"
            imageAlt="Para comer aqui"
            imageUrl="/dine_in.png"
          />
          <ConsumptionMethodOption
            opiton="TAKEAWAY"
            slug={slug}
            buttonText="Para levar"
            imageAlt="Para levar!"
            imageUrl="/takeaway.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
