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
    Image,
    Link
} from "@chakra-ui/react";
import {ChevronRightIcon, SunIcon, MoonIcon, ArrowDownIcon, ArrowUpIcon, EmailIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import {useEffect, useState} from "react";
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
                      <p>Experienced Software Engineer</p>
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
                        <Image alt={'simon profile image'} src='/simon-profile.jpg'/>
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
                      <Text mb={4}>
                          {/* Fullstack Software Engineer. I primarily work with early stage SaaS startups.
                          I love building amazing products from the ground up.
                          I also love star wars, bad puns and cold beer 🙂 */}
{/* Hey there, I&apos;m Simon, a freelance software engineer who loves building apps, systems, and websites. I&apos;ve been doing this for 7 years now and have developed a keen eye for detail to ensure that my work is top-notch.
                        </Text>
                        <Text mb={4}>
Aside from my love of programming, I also have a soft spot for bad puns and anything Star Wars-related. I&apos;m a huge fan and love nothing more than immersing myself in that world.
                        </Text>
                        <Text mb={4}>
So, if you&apos;re looking for a freelance software engineer who is passionate, experienced, and loves bad puns and Star Wars, then I&apos;m your guy. Let&apos;s chat and see how we can work together to bring your vision to life!
                      </Text> */}

                      Hi there! My name is Simon, and I&apos;m a freelance software engineer with 7 years of experience building apps, systems, and websites. I&apos;m well-versed in a variety of programming languages, frameworks, and technologies, and I love nothing more than solving complex technical challenges.
                      </Text>
                      <Text mb={4}>
Whether you&apos;re looking for a full-stack web app, a custom mobile app, or a system that integrates with your existing software, I have the technical expertise to bring your vision to life. I&apos;m also a firm believer in continuous learning, so I&apos;m always staying up-to-date with the latest technologies and trends in the software engineering world.
</Text>
                      <Text mb={4}>
If you&apos;re looking for a dedicated and knowledgeable software engineer to help your business thrive, then I&apos;m your guy. Let&apos;s work together and create something amazing.
                      </Text>
                  </Box>
              </Box>
          </ScaleFade>

          <ScaleFade initialScale={0.9} delay={0.2} in={true}>
              <Box mb={6}>
                  <Heading as="h3" variant="section-title">
                      Freelance work
                  </Heading>
                  <ExpandableBox title={<Text as='b'> TV4 - <Tag size={'md'} variant='subtle' colorScheme={useColorModeValue('purple', 'teal')}>In progress</Tag></Text>}>
                      <Text fontWeight='bold' textAlign='left' mt={4} mb={2}>
                          Product Lead & Fullstack Engineer
                      </Text>
                      <Text textAlign='left'>
                          TV4 is a swedish news site. I&apos;m primarily helping with infrastructure stability and code quality work for their Graphql, Web app and react native app. <Link textAlign='right' href={'https://www.tv4.se/'} isExternal>tv4.se</Link>
                      </Text>
                  </ExpandableBox>
              </Box>
          </ScaleFade>

          <ScaleFade initialScale={0.9} delay={0.2} in={true}>
              <Box mb={6}>
                  <Heading as="h3" variant="section-title">
                      Startup work
                  </Heading>
                  <ExpandableBox title={<Text as='b'> Adfenix - <Tag size={'md'} variant='subtle' colorScheme={'green'}>Finished</Tag></Text>}>
                      <Text fontWeight='bold' textAlign='left' mt={4} mb={2}>
                          Team Lead & Frontend Engineer
                      </Text>
                      <Text textAlign='left'>
                          Marketing professionals for residential real estate brands use the Adfenix platform to create, manage and scale recurring marketing activities for brand and agents. <Link textAlign='right' href={'https://www.adfenix.com/'} isExternal>Adfenix.com</Link>
                      </Text>
                  </ExpandableBox>
                  <ExpandableBox title={<Text as='b'> Quedro - <Tag size={'md'} variant='subtle' colorScheme='green'>Finished</Tag></Text>}>
                      <Text fontWeight='bold' textAlign='left' mt={4} mb={2}>
                          Tech lead & Frontend Engineer
                      </Text>
                      <Text textAlign='left'>
                          Worked on developing the Quedro platform, a CRM made for the real estate industry. Primarily worked on the web app written in Angular 2+(keeping up to date with latest Angular version), and also their React Native mobile app.
                      </Text>
                      <Text>Quedro later got acquired by Adfenix. <Link href={'https://www.quedro.com/'} isExternal>Quedro.com</Link></Text>
                  </ExpandableBox>
                  <ExpandableBox title={<Text as='b'> Whalebone - <Tag size={'md'} variant='subtle' colorScheme='green'>Finished</Tag></Text>}>
                      <Text fontWeight='bold' textAlign='left' mt={4} mb={2}>
                          Fullstack Engineer
                      </Text>
                      <Text textAlign='left'>
                          Whalebone makes tools to amplify and humanize virtual events. Founded in 2017, based in Sweden.
                      </Text>
                      <Text>
                          Whalebone got acquired by Bizzabo.
                      </Text>
                  </ExpandableBox>
                  {/*<ExpandableBox title={<Text as='b'> NetRelations - <Tag size={'md'} variant='subtle' colorScheme='green'>Finished</Tag></Text>}>*/}
                  {/*    <Text fontWeight='bold' textAlign='left' mt={4} mb={2}>*/}
                  {/*        Fullstack Engineer.*/}
                  {/*    </Text>*/}
                  {/*    <Text textAlign='left'>*/}
                  {/*        Primary focus on Frontend. Worked with Microsoft's SharePoint platform.*/}
                  {/*        Did everything from new feature development to customer presentations/demos. NetRelations later got acquired by TietoEvry.*/}
                  {/*    </Text>*/}
                  {/*</ExpandableBox>*/}
              </Box>
          </ScaleFade>

            <ScaleFade initialScale={0.9} delay={0.4} in={true}>
                <Box mb={6}>
                    <Heading as="h3" variant="section-title">
                        Projects
                    </Heading>
                    <ExpandableBox title={<Text as='b'>Reactuly - <Tag size={'md'} variant='subtle' colorScheme={useColorModeValue('purple', 'teal')}>In progress</Tag></Text>}>
                        <Text fontWeight='bold' textAlign='left' mt={4} mb={2}>
                            Solo project
                        </Text>
                        <Text textAlign='left'>
                            A react native app where users can answer polls and get unique distictions and insights. <br></br>
                            <Link href="https://reactuly.com" target="_blank">www.reactuly.com</Link>
                        </Text>
                    </ExpandableBox>
                    <ExpandableBox title={<Text as='b'>Dashboard Generator - <Tag size={'md'} variant='subtle' colorScheme={'gray'}>Paused</Tag></Text>}>
                        <Text fontWeight='bold' textAlign='left' mt={4} mb={2}>
                            Solo project
                        </Text>
                        <Text textAlign='left'>
                            A react library that simplifies the creation of customisable dashboards.
                        </Text>
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

              <Link href='mailto:simon.inges@outlook.com' target="_blank">
                  <Button
                      width='100%'
                      variant="ghost"
                      mb={18}
                      colorScheme={useColorModeValue('purple', 'teal')}
                      leftIcon={<EmailIcon/>}
                  >
                      Reach out and let&apos;s build something together!
                  </Button>
              </Link>
          </ScaleFade>
      </Container>

  )
}
