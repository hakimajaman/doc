import { FC, ReactNode } from 'react';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

interface Props {
	title: string;
	children: ReactNode;
}

export default function InfoCard({ title, children }: Props) {
	return (
		<Flex>
			<Box
				rounded={'xl'}
				overflow={'hidden'}
				bg={useColorModeValue('purple.50', 'purple.600')}
				border={'1px'}
				borderColor={useColorModeValue('#6B46C1', '#B794F4')}
				boxShadow={useColorModeValue('6px 6px 0 #6B46C1', '6px 6px 0 #B794F4')}
				transitionProperty={'background-color'}
				transitionDuration={'normal'}
				p={4}
			>
				<Heading letterSpacing={5} fontSize={{ base: '2xl', md: '3xl' }} color={'orange.400'}>
					{title}
				</Heading>
				<Box p={3}>{children}</Box>
			</Box>
		</Flex>
	);
}
