import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";

const HomePage = async () => {
  const restaurants = await db.restaurant.findMany();
  if (!restaurants) {
    return notFound();
  }
  console.log(restaurants);
  return (
    <div className="overflow-hidden">
      <h1 className="mb-6 mt-6 text-center font-semibold">
        Selecione o restaurante
      </h1>
      <Input placeholder="Busque o restaurante..." />
      <div className="flex items-center justify-center gap-5 overflow-y-auto p-5">
        {restaurants.map((restaurant) => (
          <Link
            href={`/${restaurant.slug}`}
            key={restaurant.id}
            className="flex h-[125px] flex-col items-center justify-between"
          >
            <div className="flex h-[100px] flex-col justify-center">
              <Image
                src={restaurant.avatarImageUrl}
                alt={restaurant.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <p>{restaurant.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
