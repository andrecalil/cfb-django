import { type RepairShopType } from "@/types/types";
import { MessageCircleMore, SquareArrowOutUpRight, WrenchIcon } from "lucide-react";
import { Card, Flex, Grid, Inset, Section, Skeleton, Text } from "@radix-ui/themes";
import { Suspense } from "react";

export const RepairShopsSection = async () => {
    const stores : RepairShopType[] = [];
    
    return (
      <Section className="p-5 lg:p-10 bg-foreground text-background section-grid-background !pb-0">
        <div className="w-80 mb-10 mx-auto place-items-center justify-center rounded-lg gap-4 text-foreground flex flex-row py-4">
          <WrenchIcon />
          <p>Assistências Técnicas</p>
        </div>
        <Suspense fallback={<Skeleton></Skeleton>}>
          <Grid gap="4" columns={{ xs: "1", sm: "2", lg: "4" }}>
            {stores?.map((shop) => <RepairShopCard key={shop.id} {...shop} />)}
          </Grid>
        </Suspense>
      </Section>
    );
}

export const RepairShopCard = async (shop: RepairShopType) => {
    return (
        <Card variant="classic" className="hover:shadow-xl hover:shadow-accent">
        <Text as="div" size="8" mb={"4"} weight="bold">
          {shop.name}
        </Text>
        <Text as="div" color="gray" size="4" mb={"4"} className="min-h-40">
          {shop.description}
        </Text>
        <Inset clip="padding-box" side="bottom" pb="current" className="rd-bg-dark ">
          <Flex gap="9" p="4" justify="between" direction={"row"}>
            <a href={shop.whatsapp}>
              <MessageCircleMore className="inline" />
              Whatsapp
            </a>
            {shop.website && (
              <a href={shop.website}>
                <SquareArrowOutUpRight className="inline" /> Site
              </a>
            )}
          </Flex>
        </Inset>
      </Card>
    );
};