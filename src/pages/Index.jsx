import React from "react";
import { Box, Heading, Text, Stack, Container, Image, Flex, VStack, Button, SimpleGrid, StackDivider, useColorModeValue, List, ListItem } from "@chakra-ui/react";
import { FaSun, FaRegLightbulb, FaEye } from "react-icons/fa";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
        <Flex>
          <Image rounded={"md"} alt={"product image"} src={"https://images.unsplash.com/photo-1573655349936-de6bed86f839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YWtlJTIwdXAlMjBsaWdodCUyMGhhbmdpbmclMjBmcm9tJTIwY2VpbGluZ3xlbnwwfHx8fDE3MTE4NDAyNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"} fit={"cover"} align={"center"} w={"100%"} h={{ base: "100%", sm: "400px", lg: "500px" }} />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              Wake Up Light
            </Heading>
            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"2xl"}>
              Gently wake up to a brighter day
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={"column"} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>Our Wake Up Light is designed to help you wake up naturally and gently. It simulates the sunrise, gradually increasing in brightness to ease you into your day.</Text>
              <Text fontSize={"lg"}>Conveniently hanging from your ceiling, it's the first thing you see when you open your eyes, helping to regulate your sleep-wake cycle for improved energy and mood throughout the day.</Text>
            </VStack>
            <Box>
              <Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("yellow.500", "yellow.300")} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Feature icon={<FaSun color={"yellow.500"} w={5} h={5} />} iconBg={useColorModeValue("yellow.100", "yellow.900")} text={"Simulates natural sunrise"} />
                <Feature icon={<FaRegLightbulb color={"green.500"} w={5} h={5} />} iconBg={useColorModeValue("green.100", "green.900")} text={"Energy-efficient LED"} />
                <Feature icon={<FaEye color={"purple.500"} w={5} h={5} />} iconBg={useColorModeValue("purple.100", "purple.900")} text={"Helps regulate sleep cycle"} />
              </SimpleGrid>
            </Box>
            <Box>
              <Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("yellow.500", "yellow.300")} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
                How It's Made
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    High-quality LEDs:
                  </Text>{" "}
                  Carefully selected for their brightness and color temperature to mimic natural sunlight.
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Durable materials:
                  </Text>{" "}
                  Constructed with long-lasting, lightweight materials for easy ceiling installation.
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Smart technology:
                  </Text>{" "}
                  Built-in timer and dimmer settings to customize your wake-up experience.
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Buy Now
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Text>Our Vision:</Text>
            <Text fontWeight={600}>Brighter mornings for everyone</Text>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Text>Our Mission:</Text>
            <Text fontWeight={600}>Improving well-being through innovative lighting solutions</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
