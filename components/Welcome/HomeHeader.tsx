import { Box, Heading, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
}

export default function HomeHeader({ title, description, ...props }: Props) {
  return (
    <Box {...props}>
      <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '2xl' }} lineHeight={'110%'} mb={2}>
        {title}
      </Heading>
      <Text fontWeight={500}>{description}</Text>
    </Box>
  );
}
