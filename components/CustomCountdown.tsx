import Countdown, {
    CountdownRenderProps,
    CountdownRendererFn,
} from 'react-countdown';
import { Flex, Heading, Text } from '@chakra-ui/core';

const WrapperCard: React.FC = ({ children }) => (
    <Flex
        position="relative"
        flexDir="column"
        rounded="lg"
        bg="white"
        shadow="xl"
        w={['182px', null, '380px']}
        color="textPrimary"
        align="center"
        justify="center"
        py={[4, null, 6]}
        bottom={[16, 24, null, 32]}
    >
        {children}
    </Flex>
);

const CompletedCountdown = () => (
    <WrapperCard>
        <Heading as="h4" fontWeight="600" fontSize="2xl">
            Launched 🚀
        </Heading>
    </WrapperCard>
);

type DateUnitProps = {
    label: string;
    unit: number;
};

const DateUnit = ({ label, unit }: DateUnitProps) => (
    <Flex flexDir="column" align="center">
        <Flex justify="center" align="center" mb={1} w={[8, null, 14]}>
            <Text fontSize={['xl', null, '5xl']} fontWeight={600}>
                {unit}
            </Text>
        </Flex>
        <Text
            color="textTertiary"
            letterSpacing="widest"
            textTransform="uppercase"
            display={["none", null, 'block']}
        >
            {label}
        </Text>
    </Flex>
);

const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
}: CountdownRenderProps): React.ReactNode => {
    if (completed) {
        return <CompletedCountdown />;
    } else {
        return (
            <WrapperCard>
                <Text
                    as="h4"
                    fontWeight={600}
                    color="textSecondary"
                    letterSpacing="widest"
                    fontSize={['xs', null, 'md']}
                    mb={4}
                >
                    LAUNCHING SOON
                </Text>
                <Flex flexDirection="row">
                    <DateUnit label="days" unit={days} />
                    <Text fontSize={['xl', null, '5xl']} mx={[0, null, 3]}>
                        :
                    </Text>
                    <DateUnit label="hrs" unit={hours} />
                    <Text fontSize={['xl', null, '5xl']} mx={[0, null, 3]}>
                        :
                    </Text>
                    <DateUnit label="min" unit={minutes} />
                    <Text fontSize={['xl', null, '5xl']} mx={[0, null, 3]}>
                        :
                    </Text>
                    <DateUnit label="sec" unit={seconds} />
                </Flex>
            </WrapperCard>
        );
    }
};

const CustomCountdown = () => (
    <Countdown date="2020-11-30T12:00:00" renderer={renderer} />
);

export default CustomCountdown;
