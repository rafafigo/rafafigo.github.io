import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import MotorolaSolutionsIcon from "./common/svg/MotorolaSolutionsIcon";
import VoiceInteractionIcon from "./common/svg/VoiceInteractionIcon";
import SureThingIcon from "./common/svg/SureThingIcon";
import ISTIcon from "./common/svg/ISTIcon";
import LinkConsultingIcon from "./common/svg/LinkConsultingIcon";
import { AnimatedFadeInNode } from "./common/Animation";
import { Work, School } from "@mui/icons-material";

interface TimelineItemData {
	icon: React.ReactElement;
	title: string;
	company?: string;
	institution?: string;
	dateStart: string;
	dateEnd: string;
	type: string;
	description: string;
	gradient: string;
	color: string;
}

const professionalExperience: TimelineItemData[] = [
	{
		icon: <MotorolaSolutionsIcon />,
		title: "Senior Software Engineer",
		company: "Motorola Solutions",
		dateStart: "Oct 2025",
		dateEnd: "Present",
		type: "Current Role",
		description:
			"Build mission-critical cloud software for public safety and commercial customers across backend services, " +
			"frontend applications, infrastructure, and delivery pipelines. The work focuses on reliability, maintainability, " +
			"and production readiness.",
		gradient: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)",
		color: "#0EA5E9",
	},
	{
		icon: <MotorolaSolutionsIcon />,
		title: "Software Engineer",
		company: "Motorola Solutions",
		dateStart: "Apr 2024",
		dateEnd: "Sep 2025",
		type: "Full-time",
		description:
			"Worked in a Scrum team delivering safety and security product features across microservices, " +
			"frontend applications, data flows, infrastructure, and CI/CD. The role involved turning product requirements " +
			"into maintainable features and supporting them through delivery.",
		gradient: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
		color: "#06B6D4",
	},
	{
		icon: <VoiceInteractionIcon />,
		title: "Software Engineer",
		company: "VoiceInteraction",
		dateStart: "Oct 2022",
		dateEnd: "Mar 2024",
		type: "Full-time",
		description:
			"Designed and implemented software for speech recognition products, mainly Audimus.Media, Audimus.Server, " +
			"and internal tools. The work focused on backend features, integrations, performance, and reliable service interaction.",
		gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
		color: "#8B5CF6",
	},
	{
		icon: <ISTIcon />,
		title: "Teaching Assistant - Artificial Intelligence",
		company: "Instituto Superior Técnico · Temporário",
		dateStart: "Mar 2022",
		dateEnd: "Aug 2022",
		type: "Teaching",
		description:
			"Taught laboratory classes for the Artificial Intelligence course and supported students with practical assignments.",
		gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
		color: "#F59E0B",
	},
	{
		icon: <SureThingIcon />,
		title: "Researcher",
		company: "SureThing Project",
		dateStart: "Sep 2021",
		dateEnd: "Nov 2022",
		type: "Research",
		description:
			'Researched reputation mechanisms for location-proof witnesses through the thesis "SureRepute: Reputation System for Location Proof Witnesses".',
		gradient: "linear-gradient(135deg, #D946EF 0%, #E879F9 100%)",
		color: "#D946EF",
	},
	{
		icon: <LinkConsultingIcon />,
		title: "Trainee",
		company: "Link Consulting",
		dateStart: "Jul 2019",
		dateEnd: "Sep 2019",
		type: "Internship",
		description:
			"Completed a summer internship focused on service virtualization.",
		gradient: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
		color: "#FF6B35",
	},
];

const academicJourney: TimelineItemData[] = [
	{
		icon: <ISTIcon />,
		title: "Master's Degree in Computer Science & Engineering",
		institution: "Instituto Superior Técnico",
		dateStart: "Sep 2020",
		dateEnd: "Nov 2022",
		type: "Master's",
		description:
			"Specialized in Distributed Systems and Cyber Security. " +
			"Graduated with a final grade of 18/20 and completed the thesis 'SureRepute: Reputation System for Location Proof Witnesses'.",
		gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
		color: "#059669",
	},
	{
		icon: <ISTIcon />,
		title: "Bachelor's Degree in Computer Science & Engineering",
		institution: "Instituto Superior Técnico",
		dateStart: "Sep 2017",
		dateEnd: "Jul 2020",
		type: "Bachelor's",
		description:
			"Built a strong foundation in algorithms, data structures, databases, computer networks, operating systems, and software engineering. " +
			"Graduated with a final grade of 17/20.",
		gradient: "linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)",
		color: "#0D9488",
	},
];

function TimelineSection({
	items,
	sectionGradient,
}: {
	items: TimelineItemData[];
	sectionGradient: string;
}) {
	return (
		<Box sx={{ position: "relative" }}>
			{/* Vertical line */}
			<Box
				sx={{
					position: "absolute",
					left: { xs: 0, sm: 40 },
					top: 0,
					bottom: 0,
					width: "4px",
					background: sectionGradient,
					display: { xs: "none", sm: "block" },
				}}
			/>
			
			<Stack spacing={4}>
				{items.map((item, index) => (
					<AnimatedFadeInNode key={index}>
						<Box
							sx={{
								display: "flex",
								gap: { sm: 4 },
								position: "relative",
								pl: { xs: 0, sm: "100px" },
							}}
						>
							{/* Simple dot on the line */}
							<Box
								sx={{
									position: "absolute",
									left: 28,
									top: 24,
									display: { xs: "none", sm: "block" },
								}}
							>
								<Box
									sx={{
										width: 24,
										height: 24,
										borderRadius: "50%",
										background: item.gradient,
										boxShadow: `0 0 20px ${item.color}60, 0 0 30px ${item.color}40`,
										border: "4px solid",
										borderColor: (theme) =>
											theme.palette.mode === "light" ? "background.paper" : "background.default",
									}}
								/>
							</Box>

							{/* Card with icon inside */}
							<Card
								variant="outlined"
								sx={{
									flex: 1,
									p: { xs: 2.5, sm: 3, md: 4 },
									borderWidth: 2,
									borderColor: (theme) =>
										theme.palette.mode === "light" ? "grey.200" : "grey.700",
									transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
									position: "relative",
									overflow: "hidden",
									"&:before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										background: item.gradient,
										opacity: 0,
										transition: "opacity 0.4s ease",
									},
									"&:hover": {
										borderColor: item.color,
										boxShadow: (theme) =>
											theme.palette.mode === "light"
												? `0 12px 32px ${item.color}20, 0 4px 12px ${item.color}15`
												: `0 12px 32px ${item.color}30, 0 4px 12px ${item.color}20`,
										transform: "translateY(-4px)",
										"&:before": {
											opacity: 0.04,
										},
									},
								}}
							>
								<Box sx={{ position: "relative", zIndex: 1 }}>
									{/* Icon and Title Row */}
									<Box
										sx={{
											display: "flex",
											alignItems: "flex-start",
											gap: 2,
											mb: 2,
										}}
									>
										{/* Icon Box */}
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: { xs: 48, sm: 56 },
												height: { xs: 48, sm: 56 },
												borderRadius: 2,
												background: item.gradient,
												boxShadow: `0 4px 12px ${item.color}30`,
												flexShrink: 0,
												"& svg": {
													width: "28px",
													height: "28px",
													filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
												},
											}}
										>
											{item.icon}
										</Box>

										{/* Title and Company */}
										<Box sx={{ flex: 1, minWidth: 0 }}>
											<Typography
												color="text.primary"
												variant="h6"
												fontWeight="bold"
												sx={{
													fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.35rem" },
													mb: 0.5,
												}}
											>
												{item.title}
											</Typography>
											<Typography
												variant="subtitle1"
												sx={{
													fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
													fontWeight: 600,
													background: item.gradient,
													WebkitBackgroundClip: "text",
													WebkitTextFillColor: "transparent",
													backgroundClip: "text",
													mb: 1,
												}}
											>
												{item.company || item.institution}
											</Typography>
										</Box>

										{/* Type Badge */}
										<Chip
											label={item.type}
											size="small"
											sx={{
												background: item.gradient,
												color: "#FFFFFF",
												fontWeight: 600,
												fontSize: { xs: "0.7rem", sm: "0.75rem" },
												height: { xs: 24, sm: 28 },
											}}
										/>
									</Box>

									{/* Date */}
									<Typography
										color="text.secondary"
										variant="body2"
										sx={{
											fontSize: { xs: "0.85rem", sm: "0.9rem" },
											mb: 1.5,
											fontWeight: 500,
										}}
									>
										{item.dateStart} - {item.dateEnd}
									</Typography>

									{/* Description */}
									<Typography
										color="text.secondary"
										variant="body1"
										sx={{
											fontSize: { xs: "0.95rem", sm: "1rem" },
											lineHeight: 1.8,
										}}
									>
										{item.description}
									</Typography>
								</Box>
							</Card>
						</Box>
					</AnimatedFadeInNode>
				))}
			</Stack>
		</Box>
	);
}

export default function Experience() {
	return (
		<Box>
			{/* Professional Experience Section */}
			<Container
				id="experience"
				sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 }, py: { xs: 3, sm: 4, md: 5 } }}
			>
				<AnimatedFadeInNode>
					<Box
						sx={{
							textAlign: "center",
							mb: { xs: 3, sm: 4, md: 5 },
						}}
					>
						<Box
							sx={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								width: { xs: 56, sm: 64, md: 72 },
								height: { xs: 56, sm: 64, md: 72 },
								borderRadius: "16px",
								background: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
								boxShadow: "0 8px 24px rgba(6, 182, 212, 0.25)",
								mb: 2,
							}}
						>
							<Work sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#FFFFFF" }} />
						</Box>
						<Typography
							variant="h1"
							sx={{
								fontSize: {
									xs: "clamp(2rem, 8vw, 2.5rem)",
									sm: "clamp(2.5rem, 8vw, 3rem)",
									md: "clamp(3rem, 7vw, 3.5rem)",
									lg: "clamp(3.5rem, 6vw, 3.75rem)",
								},
								fontWeight: 800,
								mb: 1,
								background: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							Professional Experience
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{
								fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
								maxWidth: "600px",
								mx: "auto",
							}}
						>
							Roles, systems, and teams I have contributed to
						</Typography>
					</Box>
				</AnimatedFadeInNode>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="flex-start"
					spacing={2}
					useFlexGap
					sx={{ width: "100%", display: { sm: "flex" } }}
				>
					<TimelineSection
						items={professionalExperience}
						sectionGradient="linear-gradient(180deg, #06B6D4 0%, #22D3EE 100%)"
					/>
				</Stack>
			</Container>

			{/* Academic Journey Section */}
			<Container
				id="education"
				sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 }, py: { xs: 3, sm: 4, md: 5 } }}
			>
				<AnimatedFadeInNode>
					<Box
						sx={{
							textAlign: "center",
							mb: { xs: 3, sm: 4, md: 5 },
						}}
					>
						<Box
							sx={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								width: { xs: 56, sm: 64, md: 72 },
								height: { xs: 56, sm: 64, md: 72 },
								borderRadius: "16px",
								background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
								boxShadow: "0 8px 24px rgba(5, 150, 105, 0.25)",
								mb: 2,
							}}
						>
							<School sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#FFFFFF" }} />
						</Box>
						<Typography
							variant="h1"
							sx={{
								fontSize: {
									xs: "clamp(2rem, 8vw, 2.5rem)",
									sm: "clamp(2.5rem, 8vw, 3rem)",
									md: "clamp(3rem, 7vw, 3.5rem)",
									lg: "clamp(3.5rem, 6vw, 3.75rem)",
								},
								fontWeight: 800,
								mb: 1,
								background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							Academic Journey
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{
								fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
								maxWidth: "600px",
								mx: "auto",
							}}
						>
							My academic background
						</Typography>
					</Box>
				</AnimatedFadeInNode>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="flex-start"
					spacing={2}
					useFlexGap
					sx={{ width: "100%", display: { sm: "flex" } }}
				>
					<TimelineSection
						items={academicJourney}
						sectionGradient="linear-gradient(180deg, #059669 0%, #10B981 100%)"
					/>
				</Stack>
			</Container>
		</Box>
	);
}
