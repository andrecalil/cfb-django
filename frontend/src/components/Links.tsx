import { type LinkType, } from "@/types/types";
import { Avatar, Card, Flex, Grid, Section, Skeleton, Text } from "@radix-ui/themes";
import { LinkIcon } from "lucide-react";
import { Suspense } from "react";

export const LinksSection = async () => {
    const links : LinkType[] = [];
    
    return (<Section className="px-5 lg:px-10 bg-foreground text-background section-grid-background !py-0">
        <div className="w-80 mb-10 mx-auto place-items-center justify-center rounded-lg gap-4 text-foreground flex flex-row py-4">
        <LinkIcon />
          <p>Links</p>
        </div>
        <Suspense fallback={<Skeleton></Skeleton>}>
        <Grid gap="4" columns={{ xs: "1", sm: "2", lg: "4" }}>
          {links?.map((link) => <LinkCard key={link.id} link={link} />)}
        </Grid>
        </Suspense>
      </Section>);
}

export const LinkCard = async ({ link }: { link: LinkType }) => {
  return (
    <a href={link.url} target="_blank">
      <Card variant="classic" className="hover:shadow-lg hover:shadow-accent">
        <Flex>
          <Avatar size="9" src={link.image} fallback="L" />
          <Text as="div" size="6" m={"4"} weight="bold">
            {link.title}
          </Text>
        </Flex>
      </Card>
    </a>
  );
};