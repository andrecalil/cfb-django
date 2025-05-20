"use client"

import { useEffect, useState } from "react";
import { Card, Grid, Section, Select as RadixSelect } from "@radix-ui/themes";
import { PackageIcon } from "lucide-react";
import { CardHeader } from "./ui/card";

type Camera = {
    name: string;
    year: number;
};

const cameras : Camera[] = [
    { name: 'X-E1', year: 2012 },
    { name: 'X-E2', year: 2013 },
    { name: 'X-E3', year: 2017 },
    { name: 'X-E4', year: 2021 },
    { name: 'X-H1', year: 2018 },
    { name: 'X-H2', year: 2022 },
    { name: 'X-H2S', year: 2022 },
    { name: 'X-Pro1', year: 2012 },
    { name: 'X-Pro2', year: 2016 },
    { name: 'X-Pro3', year: 2019 },
    { name: 'X-S10', year: 2020 },
    { name: 'X-S20', year: 2023 },
    { name: 'X-T1', year: 2014 },
    { name: 'X-T2', year: 2016 },
    { name: 'X-T3', year: 2018 },
    { name: 'X-T4', year: 2019 },
    { name: 'X-T5', year: 2022 },
    { name: 'X-T10', year: 2015 },
    { name: 'X-T20', year: 2017 },
    { name: 'X-T30', year: 2019 },
    { name: 'X-T30 II', year: 2021 },
    { name: 'X100', year: 2011 },
    { name: 'X100F', year: 2017 },
    { name: 'X100S', year: 2013 },
    { name: 'X100T', year: 2014 },
    { name: 'X100V', year: 2020 },
];

const years = [
    2011,
    2012,
    2013, 
    2014, 
    2015, 
    2016, 
    2017, 
    2018, 
    2019
];

const firstQuarter = ['1', '5', 'A', 'S', 'E', 'J', 'N'];
const secondQuarter = ['2', '6', 'B', 'T', 'F', 'K', 'P'];
const thirdQuarter = ['3', '7', 'C', 'U', 'G', 'L', 'Q'];
const fourthQuarter = ['4', '8', 'D', 'W', 'H', 'M', 'R'];

export const ManufacturingDateSection = ({enabled} : { enabled: boolean }) => {
    const [camera, setCamera] = useState<string>();
    const [firstDigit, setFirstDigit] = useState<string>('');
    const [secondDigit, setSecondDigit] = useState<string>('');
    const [manufacturing, setManufacturing] = useState<string>();

    const valid = (str : string | undefined) => str && str !== undefined && str !== null && str !== '' && str !== '-';

    useEffect(() => {
        const proceed = valid(camera) && valid(firstDigit) && valid(secondDigit);
        let year = years[parseInt(firstDigit)];

        if(!proceed || typeof year !== 'number') {
            setManufacturing(`-`);
            return;
        }
        
        const quarter = firstQuarter.includes(secondDigit) ? 1 : secondQuarter.includes(secondDigit) ? 2 : thirdQuarter.includes(secondDigit) ? 3 : fourthQuarter.includes(secondDigit) ? 4 : 0;
        const cameraYear = cameras.find(c => c.name === camera)?.year ?? 2010;

        if(cameraYear > year) {
            year += 10;
        }

        if(year > new Date().getFullYear()) {
            setManufacturing(`Informações inválidas`);
            return;
        }

        setManufacturing(`${quarter}o trimestre de ${year}`);
    }, [camera, firstDigit, secondDigit]);   

    return (
      <Section className="p-5 lg:p-10 bg-foreground text-background section-grid-background">
        {enabled && (
          <>
            <div className="w-80 mb-10 mx-auto place-items-center justify-center rounded-lg gap-4 text-foreground flex flex-row py-4">
              <PackageIcon className="" />
              <p>Data de Fabricação</p>
            </div>
            <Card>
              <Grid
                gap="9"
                columns={{ xs: "1", sm: "2" }}
                align={"center"}
                justify="center"
              >
                <Card className="!text-center !p-4 bg-secondary">
                  <CardHeader className="py-4 m-0">
                    Informações da câmera
                  </CardHeader>
                  <Grid gap={"2"} columns={{ xs: "1", sm: "3" }}>
                    <RadixSelect.Root
                      defaultValue=""
                      aria-label="Câmera"
                      onValueChange={(e) => setCamera(e)}
                      size={"3"}
                    >
                      <RadixSelect.Trigger
                        className="w-[180px]"
                        variant="surface"
                        placeholder="Câmera"
                      />
                      <RadixSelect.Content>
                        <RadixSelect.Group>
                          <RadixSelect.Label>Câmeras</RadixSelect.Label>
                          {cameras.map((c, ix) => {
                            return (
                              <RadixSelect.Item key={ix} value={c.name}>
                                {c.name}
                              </RadixSelect.Item>
                            );
                          })}
                        </RadixSelect.Group>
                      </RadixSelect.Content>
                    </RadixSelect.Root>
                    <RadixSelect.Root
                      defaultValue=""
                      aria-label="1o dígito SN"
                      onValueChange={(e) => setFirstDigit(e)}
                      size={"3"}
                    >
                      <RadixSelect.Trigger
                        className="w-[180px]"
                        variant="surface"
                        placeholder="1o dígito SN"
                      />
                      <RadixSelect.Content>
                        {years.map((_, ix) => {
                          return (
                            <RadixSelect.Item key={ix} value={ix.toString()}>
                              {ix.toString()}
                            </RadixSelect.Item>
                          );
                        })}
                      </RadixSelect.Content>
                    </RadixSelect.Root>
                    <RadixSelect.Root
                      defaultValue=""
                      aria-label="2o dígito SN"
                      onValueChange={(e) => setSecondDigit(e)}
                      size={"3"}
                    >
                      <RadixSelect.Trigger
                        className="w-[180px]"
                        variant="surface"
                        placeholder="2o dígito SN"
                      />
                      <RadixSelect.Content>
                        {[
                          ...firstQuarter,
                          ...secondQuarter,
                          ...thirdQuarter,
                          ...fourthQuarter,
                        ]
                          .sort()
                          .map((q, ix) => {
                            return (
                              <RadixSelect.Item key={ix} value={q}>
                                {q}
                              </RadixSelect.Item>
                            );
                          })}
                      </RadixSelect.Content>
                    </RadixSelect.Root>
                  </Grid>
                </Card>
                <Card className="!text-center !p-4 bg-secondary">
                  <p>Câmera</p>
                  <p>
                    <b>{camera ?? "-"}</b>
                  </p>
                  <p className="mt-4">Fabricação</p>
                  <p>
                    <b>{manufacturing ?? "-"}</b>
                  </p>
                </Card>
              </Grid>
            </Card>
          </>
        )}
      </Section>
    );
};