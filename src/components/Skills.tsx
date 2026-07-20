import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { AnimatedFadeInNode } from "./common/Animation";
import {
	Code,
	Storage,
	CloudQueue,
	Computer,
	Build,
	BugReport,
	Speed,
	Psychology,
} from "@mui/icons-material";

const items = [
	{
		icon: <Code />,
		title: "Programming",
		color: "#0EA5E9",
		gradient: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)",
		subItems: [
			"Java",
			"Python",
			"TypeScript",
			"JavaScript",
			"C#",
			"C",
			"Bash",
		],
	},
	{
		icon: <Speed />,
		title: "Frontend & Frameworks",
		color: "#06B6D4",
		gradient: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
		subItems: ["React", "Angular", "Vue", "React Native", "Single-Spa", "Module Federation"],
	},
	{
		icon: <Computer />,
		title: "Backend & Messaging",
		color: "#8B5CF6",
		gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
		subItems: ["Spring Boot", "gRPC", "Express.js", "Flask", "REST APIs", "Microservices", "Pub/Sub", "Apache Pulsar", "Kafka", "WebSockets", "Webhooks"],
	},
	{
		icon: <CloudQueue />,
		title: "Platform & Cloud",
		color: "#EAB308",
		gradient: "linear-gradient(135deg, #EAB308 0%, #FCD34D 100%)",
		subItems: ["Azure", "AWS", "AWS Tools", "Kubernetes", "Docker", "Helm", "Terraform"],
	},
	{
		icon: <Storage />,
		title: "Data & Observability",
		color: "#10B981",
		gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
		subItems: ["PostgreSQL", "MongoDB", "Elastic", "Kibana", "Prometheus", "Grafana"],
	},
	{
		icon: <Build />,
		title: "Delivery",
		color: "#F97316",
		gradient: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
		subItems: ["GitHub Actions", "Azure Pipelines", "Jenkins", "Maven", "NPM", "Artifactory", "AI Coding Tools", "Prompt Engineering"],
	},
	{
		icon: <BugReport />,
		title: "Testing",
		color: "#EF4444",
		gradient: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)",
		subItems: ["JUnit", "Cypress", "Mocha", "Mockito", "Testcontainers"],
	},
];

export default function Skills() {
	const theme = useTheme();

	return (
		<Container id="skills" sx={{ px: 5, py: 4 }}>
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
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 114, 182, 0.12) 100%)"
								: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
						boxShadow: (theme) =>
							theme.palette.mode === "light"
								? "0 4px 12px rgba(236, 72, 153, 0.08)"
								: "0 8px 24px rgba(236, 72, 153, 0.25)",
						mb: 2,
					}}
				>
					<Psychology sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: (theme) => theme.palette.mode === "light" ? "#EC4899" : "#FFFFFF" }} />
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
							background: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}
					>
						Skills & Technologies
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
						Technologies I use to build and operate production systems
					</Typography>
				</Box>
			</AnimatedFadeInNode>
			<Grid container spacing={3}>
				{items.map((item, index) => (
					<Grid item xs={12} sm={6} lg={3} key={index}>
						<AnimatedFadeInNode>
							<Card
								variant="outlined"
								sx={{
									p: 3,
									height: "100%",
									display: "flex",
									flexDirection: "column",
									transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
									borderWidth: 2,
									borderColor: (theme) =>
										theme.palette.mode === "light" ? "grey.200" : "grey.700",
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
										transform: "translateY(-12px) scale(1.02)",
										borderColor: item.color,
										boxShadow: (theme) =>
											theme.palette.mode === "light"
												? `0 20px 40px ${item.color}25, 0 8px 16px ${item.color}15`
												: `0 20px 40px ${item.color}35, 0 8px 16px ${item.color}20`,
										"&:before": {
											opacity: 0.05,
										},
									},
								}}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2,
										mb: 2.5,
										position: "relative",
										zIndex: 1,
									}}
								>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: 48,
											height: 48,
											borderRadius: 2,
											background: item.gradient,
											color: "#FFFFFF",
											transition: "all 0.3s ease",
											boxShadow: `0 4px 12px ${item.color}30`,
										}}
									>
										{React.cloneElement(item.icon, { sx: { fontSize: 28 } })}
									</Box>
									<Typography
										variant="h6"
										fontWeight="700"
										sx={{
											color: "text.primary",
											fontSize: "1.1rem",
										}}
									>
										{item.title}
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										gap: 1,
										mt: "auto",
										position: "relative",
										zIndex: 1,
									}}
								>
									{item.subItems.map((subItem, subIndex) => (
										<Chip
											key={subIndex}
											label={subItem}
											size="small"
											sx={{
												fontWeight: 600,
												fontSize: "0.75rem",
												bgcolor: (theme) =>
													theme.palette.mode === "light"
														? "grey.100"
														: "grey.800",
												color: "text.secondary",
												borderColor: (theme) =>
													theme.palette.mode === "light"
														? "grey.300"
														: "grey.700",
												"&:hover": {
													bgcolor: (theme) =>
														theme.palette.mode === "light"
															? `${item.color}20`
															: `${item.color}30`,
													color: item.color,
													transform: "scale(1.05)",
												},
												transition: "all 0.2s ease",
											}}
										/>
									))}
								</Box>
							</Card>
						</AnimatedFadeInNode>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
