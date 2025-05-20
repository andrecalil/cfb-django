import { Grid, Section, Skeleton, Spinner } from "@radix-ui/themes";

const Loading = ({ description }: { description: string }) => {
  return (
    <Section className="p-5 lg:p-10 bg-foreground text-background section-grid-background !pb-0">
      <div className="w-100 mb-10 mx-auto place-items-center justify-center rounded-lg gap-4 text-foreground flex flex-row py-4">
        <Spinner className="inline" /> <p>{description}</p>
      </div>
      <Grid gap="4" columns={{ xs: "1", sm: "2", lg: "3" }}>
        {[1, 2, 3].map((item) => (
          <Skeleton
            key={item}
            minHeight={"50px"}
            maxHeight={"200px"}
            width={"100%"}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default Loading;
