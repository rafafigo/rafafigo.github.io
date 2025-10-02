import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AnimatedFadeInImage, AnimatedFadeInNode } from "./common/Animation";
import { EmojiEmotions, EmojiObjects, Shield } from "@mui/icons-material";

const items = [
	{
		icon: <EmojiEmotions fontSize="large" />,
		title: "Me",
		description:
			"Hey there! 👋 I am Rafael Figueiredo, a dedicated Senior Software Engineer with a Master's degree in " +
			"Computer Science and Engineering from IST. Currently contributing my skills to Motorola Solutions, " +
			"where we are commited to solving for safer everywhere. I consider myself an ambitious and hard-working " +
			"individual, often recognized for my commitment and ability. I handle multiple tasks regularly and competently, " +
			"working well under pressure. When I am not coding, you'll find me reading books, hanging out with friends, or " +
			"binge-watching the latest series.",
	},
	{
		icon: <Shield fontSize="large" />,
		title: "Motorola Solutions Goals",
		description:
			"Motorola Solutions aims to create innovative communication solutions that empower public safety and " +
			"enterprises to be their best in the moments that matter. Their goals includes enhancing safety, " +
			"improving operational efficiency, and enabling better decision-making through advanced technology and " +
			"integrated solutions. By leveraging cutting-edge developments in areas like mission-critical communications, " +
			"video security, and data analytics, Motorola Solutions strives to provide reliable and effective tools that " +
			"help organizations and communities stay connected, informed, and secure.",
	},
	{
		icon: <EmojiObjects fontSize="large" />,
		title: "Daily Work",
		description:
			"In my daily work, I am positioned in a cross-functional team where I work in all forefronts: backend, frontend, " +
			"infrastructure and continuous integration and continuous delivery pipelines, working with cloud-based applications " +
			"using a microservices and micro frontends architecture. During my development I engage with a variety of tools and " +
			"frameworks, including Java, TypeScript, React, Springboot, Python, Bash, Powershell, Terraform, Docker, Kubernetes, Azure, " +
			"Github Actions, MongoDB, PostgreSQL, JUnit, Cypress and more.",
	},
];

export default function AboutMe() {
	return (
		<Container id="aboutMe" sx={{ px: 5 }}>
			<AnimatedFadeInNode>
				<Typography
					variant="h1"
					color="text.primary"
					sx={{
						alignSelf: "center",
						textAlign: "center",
						width: "100%",
						my: "30px",
					}}
				>
					About Me
				</Typography>
			</AnimatedFadeInNode>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				spacing={2}
				useFlexGap
				sx={{ width: "100%", display: { sm: "flex" } }}
			>
				{items.map((item, index) => (
					<Card
						key={index}
						variant="outlined"
						sx={{
							p: { xs: 2, md: 4, xl: 5 },
							height: "fit-content",
							background: "none",
							borderColor: (theme) =>
								theme.palette.mode === "light" ? "grey.200" : "grey.800",
						}}
					>
						<AnimatedFadeInNode>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									textAlign: "left",
									flexDirection: { xs: "column", md: "row" },
									alignItems: { md: "center" },
									gap: 4,
								}}
							>
								<Box
									sx={{
										color: "text.secondary",
									}}
								>
									<AnimatedFadeInImage>{item.icon}</AnimatedFadeInImage>
								</Box>
								<Box sx={{ textTransform: "none" }}>
									<Typography
										color="text.primary"
										variant="subtitle1"
										fontWeight="bold"
									>
										{item.title}
									</Typography>
									<Typography
										color="text.secondary"
										variant="subtitle2"
										sx={{ my: 0.5 }}
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
