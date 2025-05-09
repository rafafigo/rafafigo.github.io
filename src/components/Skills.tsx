import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AnimatedFadeInNode } from "./common/Animation";

const items = [
	{
		title: "Programming Languages",
		subItems: [
			"Java",
			"Python",
			"TypeScript",
			"JavaScript",
			"Android",
			"C#",
			"C",
			"Bash",
		],
	},
	{
		title: "Databases",
		subItems: ["MongoDB", "PostgreSQL", "MySQL", "ElasticSearch", "Firestore"],
	},
	{
		title: "Backend Frameworks",
		subItems: ["Spring Boot", "gRPC", "Express.js", "Flask"],
	},
	{
		title: "Frontend Frameworks",
		subItems: ["React.js", "Angular.js", "Vue.js", "React Native"],
	},
	{
		title: "Event Driven",
		subItems: ["Pulsar", "WebSockets", "Webhooks"],
	},
	{
		title: "Testing Frameworks",
		subItems: ["JUnit", "Cypress", "Mocha", "Testcontainers"],
	},
	{
		title: "CI/CD",
		subItems: [
			"Artifactory",
			"Jenkins",
			"Git",
			"Gitlab Pipelines",
			"GitHub Actions",
		],
	},
	{
		title: "Infrastructure",
		subItems: [
			"Terraform",
			"Helm Charts",
			"Kubernetes",
			"Virtual Machines",
			"Docker",
			"Docker Container",
		],
	},
	{
		title: "Build Tools",
		subItems: [
			"Maven",
			"Npm",
			"Yarn",
			"Webpack",
		],
	},
	{
		title: "AWS",
		subItems: [
			"EC2",
			"S3",
			"CloudFront",
			"EKS",
		]

	},
	{
		title: "Azure",
		subItems: [
			"AKS",
			"KeyVault",
			"APG",
			"APIM",
			"AD",
			"Blob Storage",
			"Event Hubs",
			"Service Bus",
			"Azure Artifacts"
		]

	},
	{
		title: "GCP",
		subItems: [
			"GKE",
			"Firestore",
			"Pub/Sub",
			"Artifact Registry",
			"Secret Manager",
		]

	}
];

export default function Skills() {
	const theme = useTheme();

	return (
		<Container id="skills" sx={{ px: 5 }}>
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
					Skills
				</Typography>
			</AnimatedFadeInNode>
			<Grid container spacing={3.5}>
				{items.map((item, index) => (
					<Grid item xs={12} md={6} key={index}>
						<AnimatedFadeInNode>
							<Card
								key={index}
								variant="outlined"
								sx={{
									p: { xs: 2, md: 4, xl: 5 },
									width: "100%",
									height: "fit-content",
									borderColor: (theme) =>
										theme.palette.mode === "light" ? "grey.200" : "grey.800",
								}}
							>
								<Box
									sx={{
										width: "100%",
										textAlign: "left",
										flexDirection: { xs: "row", md: "row" },
										gap: 4,
									}}
								>
									<Typography
										color="text.primary"
										variant="h5"
										fontWeight="bold"
										marginBottom="5px"
									>
										{item.title}
									</Typography>
									<Grid container spacing={3} justifyContent="center">
										{item.subItems.map((subItem, index) => (
											<Grid
												item
												xs={12}
												md={3}
												key={index}
												sx={{ alignItems: "center" }}
											>
												<Typography
													variant="h6"
													sx={{
														color: (theme) =>
															theme.palette.mode === "light"
																? "primary.main"
																: "primary.light",
													}}
												>
													{subItem}
												</Typography>
											</Grid>
										))}
									</Grid>
								</Box>
							</Card>
						</AnimatedFadeInNode>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
