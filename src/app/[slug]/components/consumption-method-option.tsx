import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  opiton: ConsumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageUrl,
  imageAlt,
  buttonText,
  opiton,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-4">
        <Link
          href={`/${slug}/menu?consumptionMethod=${opiton}`}
          className="flex flex-col items-center gap-2"
        >
          <div className="retative h-[70px] w-[70px]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={70}
              height={70}
              className="object-contain"
            />
          </div>
          <Button variant="secondary" className="rounded-full">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;
