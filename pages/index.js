import {
    Layout,
    Container,
    Box,
    Heading,
    Text,
    chakra,
    ScaleFade,
    List,
    ListItem,
    Button,
    SimpleGrid,
    GridItem,
    IconButton,
    useColorMode,
    useColorModeValue,
    Divider,
    Highlight,
    Collapse,
    Tag,
    Image
} from "@chakra-ui/react";
import {ChevronRightIcon, SunIcon, MoonIcon, ArrowDownIcon, ArrowUpIcon, EmailIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import {useEffect, useState} from "react";
import Link from "next/link";
import {IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import ExpandableBox from "../components/expandable-box";

export default function Home() {
    const [expandedBox, setExpandedBox] = useState("");
    return (
        <Container>
          <ScaleFade initialScale={0.9} delay={0} in={true}>
              <Box mt={6} display={{ md: 'flex' }} mb={6}>
                  <Box flexGrow={1}>
                      <Heading as="h2" variant="page-title">
                          Simon Inges Ilrot
                      </Heading>
                      <p>Startup Software Engineer</p>
                  </Box>
                  <Box
                      flexShrink={0}
                      mt={{ base: 4, md: 0 }}
                      ml={{ md: 6 }}
                      textAlign="center"
                  >
                      <Box
                          borderColor="whiteAlpha.800"
                          borderWidth={2}
                          borderStyle="solid"
                          w="100px"
                          h="100px"
                          display="inline-block"
                          borderRadius="full"
                          overflow="hidden"
                      >
                        <Image src='/simon-profile.jpg'></Image>
                      </Box>
                  </Box>
              </Box>
          </ScaleFade>

          <ScaleFade initialScale={0.9} delay={0.1} in={true}>
              <Box mb={6}>
                  <Heading as="h3" variant="section-title">
                      Bio
                  </Heading>
                  <Box>
                      <Text>
                          Fullstack Software Engineer. I primarily work with early stage SaaS startups.
                          I love building amazing products from the ground up.
                          I also love star wars, bad puns and cold beer 🙂
                      </Text>
                  </Box>
              </Box>
          </ScaleFade>

          <ScaleFade initialScale={0.9} delay={0.2} in={true}>
              <Box mb={6}>
                  <Heading as="h3" variant="section-title">
                      Work
                  </Heading>
                  <ExpandableBox title={<Text as='b'> Chimer - <Tag size={'md'} variant='subtle' colorScheme={useColorModeValue('purple', 'teal')}>In progress</Tag></Text>}>
                      <Text>More text about chimer here</Text>
                  </ExpandableBox>
                  <ExpandableBox title={<Text as='b'> Adfenix - <Tag size={'md'} variant='subtle' colorScheme='green'>Finished</Tag></Text>}>
                      <Text>More text about chimer here</Text>
                  </ExpandableBox>
                  <ExpandableBox title={<Text as='b'> Quedro - <Tag size={'md'} variant='subtle' colorScheme='green'>Finished</Tag></Text>}>
                      <Text>More text about chimer here</Text>
                  </ExpandableBox>
                  <ExpandableBox title={<Text as='b'> Whalebone - <Tag size={'md'} variant='subtle' colorScheme='green'>Finished</Tag></Text>}>
                      <Text>More text about chimer here</Text>
                  </ExpandableBox>
                  <ExpandableBox title={<Text as='b'> NetRelations - <Tag size={'md'} variant='subtle' colorScheme='green'>Finished</Tag></Text>}>
                      <Text>More text about chimer here</Text>
                  </ExpandableBox>
              </Box>
          </ScaleFade>

            <ScaleFade initialScale={0.9} delay={0.4} in={true}>
                <Box mb={6}>
                    <Heading as="h3" variant="section-title">
                        Projects
                    </Heading>
                    <ExpandableBox title={<Text as='b'>Dashboard Generator - <Tag size={'md'} variant='subtle' colorScheme={useColorModeValue('purple', 'teal')}>In progress</Tag></Text>}>
                        <Text>More text about chimer here</Text>
                    </ExpandableBox>
                    <ExpandableBox title={<Text as='b'>Gamify - <Tag size={'md'} variant='subtle' colorScheme='gray'>On ice</Tag></Text>}>
                        <Text>More text about chimer here</Text>
                    </ExpandableBox>
                </Box>
            </ScaleFade>

            <ScaleFade initialScale={0.9} delay={0.5} in={true}>
                <Box mb={6}>
                    <Heading as="h3" variant="section-title">
                        Expertise
                    </Heading>
                    <SimpleGrid columns={2} spacing={4}>
                        <Box
                            borderRadius="lg"
                            p={3}
                            textAlign="center"
                            bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                            css={{ backdropFilter: 'blur(10px)' }}
                        >
                            Prisma
                        </Box>
                        <Box
                            borderRadius="lg"
                              p={3}
                              textAlign="center"
                              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                              css={{ backdropFilter: 'blur(10px)' }}
                        >Next.js</Box>
                        <Box
                            borderRadius="lg"
                              p={3}
                              textAlign="center"
                              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                              css={{ backdropFilter: 'blur(10px)' }}
                        >React</Box>
                        <Box
                            borderRadius="lg"
                              p={3}
                              textAlign="center"
                              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                              css={{ backdropFilter: 'blur(10px)' }}
                        >React Native</Box>
                        <Box
                            borderRadius="lg"
                              p={3}
                              textAlign="center"
                              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                              css={{ backdropFilter: 'blur(10px)' }}
                        >Angular</Box>
                        <Box
                            borderRadius="lg"
                              p={3}
                              textAlign="center"
                              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                              css={{ backdropFilter: 'blur(10px)' }}
                        >Chakra UI</Box>
                        <Box
                            borderRadius="lg"
                              p={3}
                              textAlign="center"
                              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                              css={{ backdropFilter: 'blur(10px)' }}
                        >TailwindCSS</Box>
                        <Box
                            borderRadius="lg"
                              p={3}
                              textAlign="center"
                              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
                              css={{ backdropFilter: 'blur(10px)' }}
                        >Typescript</Box>
                    </SimpleGrid>
                </Box>
            </ScaleFade>

          <ScaleFade initialScale={0.9} delay={0.6} in={true}>
              <Box mb={6}>
                  <Heading as="h3" variant="section-title">
                      On the web
                  </Heading>

                  <SimpleGrid columns={{ sm: 1, md: 3}} gap={6}>
                      <GridItem>
                          <Link href="https://twitter.com/Simpelimpz" target="_blank">
                              <Button
                                  width='100%'
                                  variant="ghost"
                                  colorScheme={useColorModeValue('purple', 'teal')}
                                  leftIcon={<IoLogoTwitter />}
                              >
                                  @Simpelimpz
                              </Button>
                          </Link>
                      </GridItem>
                      <GridItem>
                          <Link href="https://www.instagram.com/simpelimp/" target="_blank">
                              <Button
                                  width='100%'
                                  variant="ghost"
                                  colorScheme={useColorModeValue('purple', 'teal')}
                                  leftIcon={<IoLogoInstagram />}
                              >
                                  @simpelimp
                              </Button>
                          </Link>
                      </GridItem>
                      <GridItem>
                          <Link href="https://www.linkedin.com/in/simoninges/" target="_blank">
                              <Button
                                  width='100%'
                                  variant="ghost"
                                  colorScheme={useColorModeValue('purple', 'teal')}
                                  leftIcon={<IoLogoLinkedin/>}
                              >
                                  Simon Inges
                              </Button>
                          </Link>
                      </GridItem>
                  </SimpleGrid>
              </Box>

              <Button
                  width='100%'
                  variant="ghost"
                  colorScheme={useColorModeValue('purple', 'teal')}
                  leftIcon={<EmailIcon/>}
              >
                  Reach out and let's build something together!
              </Button>
          </ScaleFade>
      </Container>

  )
}
