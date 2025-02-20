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
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="retative h-[80px] w-[80px]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={78}
            height={80}
            className="object-contain"
          />
        </div>
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethod=${opiton}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;
