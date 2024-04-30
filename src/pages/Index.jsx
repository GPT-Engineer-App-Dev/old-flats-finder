import { Box, Flex, Input, Button, Text, Heading, SimpleGrid, Image } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const propertyList = [
  {
    id: 1,
    image: "/images/property1.jpg",
    title: "Charming 1920s Bungalow",
    description: "Perfect project for renovation with great potential for incorporating modern technologies."
  },
  {
    id: 2,
    image: "/images/property2.jpg",
    title: "Victorian Fixer-Upper",
    description: "A spacious estate ready for a green makeover with ample space for solar panels and more."
  },
  {
    id: 3,
    image: "/images/property3.jpg",
    title: "Mid-Century Modern Needs Love",
    description: "Ideal for enthusiasts looking to restore its original charm and add sustainable upgrades."
  }
];

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="center" mb={5}>
        <Heading>Renovation Finder</Heading>
      </Flex>
      <Flex justifyContent="center" mb={5}>
        <Input placeholder="Search for properties..." size="lg" mr={2} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" px={8}>Search</Button>
      </Flex>
      <SimpleGrid columns={3} spacing={10}>
        {propertyList.map(property => (
          <Box key={property.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.image} alt={`Image of ${property.title}`} />
            <Box p={5}>
              <Heading size="md" mb={2}>{property.title}</Heading>
              <Text>{property.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;