import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AnimatedFadeInImage, AnimatedFadeInNode } from "./common/Animation";
import { EmojiEmotions, EmojiObjects, Shield, EmojiPeople } from "@mui/icons-material";

const items = [
	{
		icon: <EmojiEmotions fontSize="large" />,
		title: "Me",
		description:
			"I am Rafael Figueiredo, a Senior Software Engineer with a Master's degree in Computer Science and Engineering " +
			"from Instituto Superior Técnico. I build reliable cloud products end to end across backend services, frontend " +
			"applications, infrastructure, and CI/CD. My work focuses on maintainable systems, clear ownership, and production-ready delivery. Outside " +
			"work, I enjoy reading, spending time with friends, and watching a good series.",
		gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
		color: "#F59E0B",
		bgColor: "rgba(245, 158, 11, 0.08)",
		bgColorDark: "rgba(251, 191, 36, 0.12)",
	},
	{
		icon: <Shield fontSize="large" />,
		title: "Motorola Solutions",
		description:
			"Motorola Solutions aims to create innovative communication solutions that empower public safety and " +
			"enterprise teams in the moments that matter. Its work spans mission-critical communications, video " +
			"security, and data analytics, helping organizations stay connected, informed, and secure.",
		gradient: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)",
		color: "#0EA5E9",
		bgColor: "rgba(14, 165, 233, 0.08)",
		bgColorDark: "rgba(56, 189, 248, 0.12)",
	},
	{
		icon: <EmojiObjects fontSize="large" />,
		title: "Daily Work",
		description:
			"I work in a cross-functional team across backend services, frontend applications, infrastructure, and " +
			"continuous delivery pipelines. The stack includes Java, TypeScript, React, Angular, Spring Boot, Python, Bash, " +
			"Terraform, Docker, Kubernetes, Azure, AWS, GitHub Actions, MongoDB, PostgreSQL, Elastic, Kibana, Prometheus, Grafana, JUnit, Cypress, and Testcontainers.",
		gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
		color: "#8B5CF6",
		bgColor: "rgba(139, 92, 246, 0.08)",
		bgColorDark: "rgba(167, 139, 250, 0.12)",
	},
];

export default function AboutMe() {
	return (
		<Container id="aboutMe" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 }, py: { xs: 3, sm: 4 } }}>
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
								? "linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(168, 85, 247, 0.12) 100%)"
								: "linear-gradient(135deg, #9333EA 0%, #A855F7 100%)",
						boxShadow: (theme) =>
							theme.palette.mode === "light"
								? "0 4px 12px rgba(147, 51, 234, 0.08)"
								: "0 8px 24px rgba(192, 132, 252, 0.25)",
						mb: 2,
					}}
				>
					<EmojiPeople sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: (theme) => theme.palette.mode === "light" ? "#9333EA" : "#FFFFFF" }} />
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
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, #9333EA 0%, #A855F7 100%)"
								: "linear-gradient(135deg, #C084FC 0%, #E9D5FF 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
					}}
				>
					About Me
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
						What I build, where I work, and how I think about software
					</Typography>
				</Box>
			</AnimatedFadeInNode>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				spacing={{ xs: 2, sm: 2.5, md: 3 }}
				useFlexGap
				sx={{ width: "100%", display: { sm: "flex" } }}
			>
				{items.map((item, index) => (
					<Card
						key={index}
						variant="outlined"
						sx={{
							p: { xs: 2, sm: 3, md: 4, lg: 5 },
							width: "100%",
							height: "fit-content",
							background: "none",
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
									opacity: 0.03,
								},
							},
						}}
					>
						<AnimatedFadeInNode>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									textAlign: "left",
									flexDirection: { xs: "column", sm: "column", md: "row" },
									alignItems: { xs: "flex-start", md: "center" },
									gap: { xs: 2, sm: 3, md: 4 },
									position: "relative",
									zIndex: 1,
								}}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: { xs: "center", md: "flex-start" },
										width: { xs: "100%", md: "auto" },
									}}
								>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: { xs: 56, sm: 64, md: 72 },
											height: { xs: 56, sm: 64, md: 72 },
											borderRadius: 2,
											background: item.gradient,
											boxShadow: `0 4px 12px ${item.color}30`,
											transition: "all 0.3s ease",
											"&:hover": {
												transform: "scale(1.05)",
												boxShadow: `0 6px 20px ${item.color}40`,
											},
										}}
									>
										<AnimatedFadeInImage>
											{React.cloneElement(item.icon, {
												sx: { 
													fontSize: { xs: 32, sm: 36, md: 40 },
													color: "#FFFFFF",
												},
											})}
										</AnimatedFadeInImage>
									</Box>
								</Box>
								<Box sx={{ textTransform: "none", flex: 1 }}>
									<Typography
										color="text.primary"
										variant="subtitle1"
										fontWeight="bold"
										sx={{
											fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
											mb: { xs: 0.5, sm: 1 },
										}}
									>
										{item.title}
									</Typography>
									<Typography
										color="text.secondary"
										variant="subtitle2"
										sx={{
											my: 0.5,
											fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
											lineHeight: 1.7,
										}}
									>
										{item.description}
									</Typography>
								</Box>
							</Box>
						</AnimatedFadeInNode>
					</Card>
				))}
			</Stack>
		</Container>
	);
}
