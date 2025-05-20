import useStores from "@/hooks/useStores";
import type { StoreType } from "@/types/types";
import { Badge, Card, Flex, Grid, Inset, Section, Text } from "@radix-ui/themes";
import { MessageCircleMore, SquareArrowOutUpRight, StoreIcon } from "lucide-react";

export const StoreSection = () => {
    const { data: stores, isLoading } = useStores();

    return (
      <Section className="p-5 lg:p-10 bg-foreground text-background section-grid-background !pb-0">
        <div className="w-40 mb-10 mx-auto place-items-center justify-center rounded-lg gap-4 text-foreground flex flex-row py-4">
          <StoreIcon className="" />
          <p>Lojas</p>
        </div>
        <Grid gap="4" columns={{ xs: "1", sm: "2", lg: "4" }}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            stores?.map((store) => <StoreCard key={store.id} {...store} />)
          )}
        </Grid>
      </Section>
    );
}

export const StoreCard = (store: StoreType) => {
    const operation = `${store.sells ? "Venda" : ""}${store.sells && store.rents ? ", " : ""}${
        store.rents ? "Aluguel" : ""
      }`;

    return (
      <Card variant="classic" className="hover:shadow-xl hover:shadow-accent">
        <Text as="div" size="8" mb={"4"} weight="bold" color="teal">
          {store.name}
        </Text>
        <Text as="div" color="gray" size="4" mb={"4"} className="min-h-40">
          {store.description}
        </Text>
        <Flex gap="3" align="center" direction={"column"} mb='5' mt='5' className="min-h-36">
          {store.officialRepresentant && (
            <Badge className="p-2" size={"3"}>Representante oficial</Badge>
          )}
          <Badge color="green" size={"3"}>{operation}</Badge>
          <Badge color="orange" size={"3"}>
            {store.state}
            {store.fullCountry && ", atuação nacional"}
          </Badge>
        </Flex>
        <Inset clip="padding-box" side="bottom" pb="current" className="rd-bg-dark text-foreground">
          <Flex gap="9" p="4" justify="between" direction={"row"}>
            <a href={store.whatsapp}>
              <MessageCircleMore className="inline" />
              Whatsapp
            </a>
            {store.website && (
              <a href={store.website}>
                <SquareArrowOutUpRight className="inline" /> Site
              </a>
            )}
          </Flex>
        </Inset>
      </Card>
    );
};