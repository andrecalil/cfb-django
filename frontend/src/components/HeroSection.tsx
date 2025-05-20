import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Button,
  Callout,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

export const HeroSection = ({enabled} : { enabled: boolean }) => {
  return (
    <Section
      style={{
        backgroundImage: "url(/assets/img/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex direction="column" align={"center"} gap={"4"} p="5">
        <Heading weight={"bold"} size={"9"} align={"center"}>
          Comunidade Fuji Brasil
        </Heading>
        <Heading mb={"9"} weight={"medium"} size="7" as="h2">
          De fotógrafo para fotógrafo
        </Heading>
        <Text weight={"light"} size="5" as="p">
          A Comunidade Fuji Brasil é um grupo de fotógrafos, profissionais e
          entusiastas, que utilizam câmeras e demais equipamentos fotográficos
          Fujifilm.
        </Text>
        <Text weight={"light"} size="5" as="p" mb={"9"}>
          Na nossa comunidade, nós nos apoiamos e fortalecemos a presença da
          marca no Brasil.
        </Text>
        <Button
          size={"4"}
          type="button"
          variant="solid"
          mb={"9"}
          className="text-lg"
          disabled={!enabled}
        >
          <a
            href={enabled ? 'REPLACE ME' : "#"}
            target="_blank"
            className="p-20 text-lg"
          >
            Faça parte!
          </a>
        </Button>
        <Callout.Root
          color="gray"
          variant="surface"
          className="rd-bg-dark opacity-80"
        >
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            Nosso advogado mandou dizer: não temos qualquer filiação com a
            Fujifilm ou uma de suas subsidiárias. Não representamos a marca ou
            seus produtos.
          </Callout.Text>
        </Callout.Root>
      </Flex>
    </Section>
  );
};