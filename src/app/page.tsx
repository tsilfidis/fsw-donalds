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
    <div>
      <h1 className="mt-6 text-center font-semibold">
        Selecione o restaurante
      </h1>
      <Input placeholder="Busque o restaurante..." />
      <div className="ali flex items-center justify-center gap-5 p-5">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.id} href={`/${restaurant.slug}`}>
            <Image
              src={restaurant.avatarImageUrl}
              alt={restaurant.name}
              width={100}
              height={100}
              className="object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
