import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {Timeline, TimelineConnector, TimelineItem, timelineItemClasses, TimelineSeparator,} from "@mui/lab";
import MotorolaSolutionsIcon from "./common/svg/MotorolaSolutionsIcon";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import VoiceInteractionIcon from "./common/svg/VoiceInteractionIcon";
import SureThingIcon from "./common/svg/SureThingIcon";
import ISTIcon from "./common/svg/ISTIcon";
import {AnimatedFadeInImage, AnimatedFadeInNode} from "./common/Animation";

const items = [
    {
        icon: <MotorolaSolutionsIcon/>
        ,
        title: 'Software Engineer @ Motorola Solutions',
        year: "Apr 2024 - Present",
        dateStart: "Apr 2024",
        dateEnd: "Present",
        type: "Work",
        description:
            'Motorola Solutions leads the industry in providing mission-critical communication solutions for public ' +
            'safety and commercial customers. As a Software Engineer, I work in a Scrum team where I contribute to ' +
            'the development of innovative solutions aimed at enhancing safety and security. Leveraging cross-functional ' +
            'collaboration, I play a role in implementing software that aligns with our mission of \'Solving for Safer\'.'
    },
    {
        icon: <VoiceInteractionIcon/>,
        title: 'Software Engineer @ VoiceInteraction',
        dateStart: "Oct 2022",
        dateEnd: "Mar 2024",
        type: "Work",
        description:
            'VoiceInteraction specialises in cutting-edge speech recognition technology, striving to enhance human ' +
            'communication through innovative solutions. As a Software Engineer at VoiceInteraction, I am responsible ' +
            'for helping design and implement software solutions to support the company\'s products and services, mainly ' +
            'contributing to both Audimus.Media and Audimus.Server, as well as various internal products.'
    },
    {
        icon: <SureThingIcon/>,
        title: 'Researcher @ SureThing Project',
        dateStart: "Sep 2021",
        dateEnd: "Nov 2022",
        type: "Research",
        description:
            'Research and development related to a thesis on "SureRepute: Reputation System for Location Proof Witnesses'
    },
    {
        icon: <ISTIcon/>,
        title: 'Teaching Assistant @ IST',
        dateStart: "Mar 2022",
        dateEnd: "Aug 2022",
        type: "Teacher",
        description:
            'Teach laboratory classes of Artificial Intelligence course'
    },
    {
        icon: <ISTIcon/>,
        title: 'Computer Science & Engineering Master\'s Degree @ IST',
        dateStart: "Sep 2020",
        dateEnd: "Nov 2022",
        type: "College",
        description:
            'I\'ve specialized in Distributed Systems & Cyber-Security and graduated with a 18/20 GPA.'
    },
    {
        icon: <ISTIcon/>,
        title: 'Computer Science & Engineering Bachelor\'s Degree @ IST',
        dateStart: "Sep 2017",
        dateEnd: "Jul 2020",
        type: "College",
        description:
            'Started my specialized education as a student in the Computer Science & Engineering Master\'s Bachelor at IST' +
            ' and graduated with a 17/20 GPA'
    }
];

export default function Experience() {
    return (
        <Container id="experience" sx={{px: 5}}>
            <AnimatedFadeInNode>
                <Typography variant="h1" color="text.primary"
                            sx={{alignSelf: "center", textAlign: "center", width: "100%", my: '30px'}}>
                    Experience
                </Typography>
            </AnimatedFadeInNode>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                useFlexGap
                sx={{width: '100%', display: {sm: 'flex'}}}
            >
                <Timeline color="primary"
                          sx={{
                              [`& .${timelineItemClasses.root}:before`]: {
                                  flex: 0,
                                  padding: 0,
                              },
                              px: 0, mx: 0
                          }}>
                    {
                        items.map((item, index) => (
                            <AnimatedFadeInNode>

                                <TimelineItem sx={{
                                    px: 0, mx: 0
                                }}>
                                    <TimelineSeparator
                                        sx={{
                                            mx: 0,
                                            px: 0
                                        }}
                                    >
                                        <TimelineConnector sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'
                                        }}/>
                                        <AnimatedFadeInImage>
                                            {item.icon}
                                        </AnimatedFadeInImage>
                                        <TimelineConnector sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'
                                        }}/>
                                    </TimelineSeparator>
                                    <Stack
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="flex-start"
                                        spacing={2}
                                        useFlexGap
                                        sx={{width: '100%', display: {sm: 'flex'}}}
                                    >
                                        <Card
                                            key={index}
                                            variant="outlined"
                                            component={Button}
                                            sx={{
                                                p: {xs: 2, md: 4, xl: 5},
                                                mx: 0,
                                                my: '15px',
                                                ml: '15px',
                                                width: '100%',
                                                height: 'fit-content',
                                                borderColor: (theme) => theme.palette.mode === 'light'
                                                    ? 'grey.200' : 'grey.800',
                                            }}
                                        > <Box sx={{
                                            width: '100%',
                                            textAlign: 'left',
                                            flexDirection: {xs: 'row', md: 'row'},
                                            gap: 4,
                                        }}>
                                            <Typography
                                                color="text.primary"
                                                variant="h5"
                                                fontWeight="bold"
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight="bold"
                                                sx={{
                                                    color: (theme) =>
                                                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'
                                                }}
                                            >
                                                {item.dateStart} - {item.dateEnd} ({item.type})
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="subtitle1"
                                                sx={{my: 0.5}}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                        </Card>
                                    </Stack>
                                </TimelineItem>
                            </AnimatedFadeInNode>
                        ))
                    }
                </Timeline>
            </Stack>
        </Container>
    );
}
