import { type PartnershipType } from "@/types/types";
import { HandshakeIcon } from "lucide-react";
import { Card, Flex, Grid, Inset, Section, Skeleton, Text } from "@radix-ui/themes";
import { Suspense } from "react";

export const PartnershipsSection = async () => {
  const stores : PartnershipType[] = [];

  return (
    <Section className="p-5 lg:p-10 bg-foreground text-background section-box-shadow">
      <div className="w-80 mb-10 mx-auto place-items-center justify-center rounded-lg gap-4 text-foreground flex flex-row py-4">
        <HandshakeIcon />
        <p>Parcerias</p>
      </div>
      <Suspense fallback={<Skeleton></Skeleton>}>
        <Grid gap="4" columns={{ xs: "1", sm: "2", lg: "4" }}>
          {stores?.map((shop) => <PartnershipCard key={shop.id} {...shop} />)}
        </Grid>
        </Suspense>
    </Section>
  );
};

export const PartnershipCard = async (partner: PartnershipType) => {
    const renderFooter = () => {
        if (partner.mode === "w") {
            return (
                <a href={partner.whatsapp} target="_blank" rel="noreferrer">
                  Garanta seu desconto via WhatsApp
                </a>
              );
        } else if (partner.mode === "c") {
          return <a href={process.env.NEXT_PUBLIC_COMMUNITY_LINK} target="_blank">Peça o cupom nos nossos grupos</a>;
        }
      };

    return (
        <Card variant="classic" className="hover:shadow-xl hover:shadow-accent">
        <Inset clip="border-box" side="top" mb={'4'}>
            <img src={partner.image} style={{margin: '0 auto'}}></img>
        </Inset>
        <Text as="div" color="gray" size="4" mb={"4"} className="min-h-40" dangerouslySetInnerHTML={{ __html: partner.description}}>
        </Text>
        <Inset clip="padding-box" side="bottom" pb="current" className="rd-bg-dark ">
          <Flex gap="9" p="4" justify="center" direction={"row"}>
            {renderFooter()}
          </Flex>
        </Inset>
      </Card>
    );
};