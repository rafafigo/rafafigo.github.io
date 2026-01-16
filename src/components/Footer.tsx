import * as React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Code, GitHub, LinkedIn, WhatsApp, ContactMail } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const logoStyle = {
	width: "140px",
	height: "auto",
};

export default function Footer() {
	return (
		<Container
			id="contacts"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				pb: { xs: 6, sm: 8, md: 10 },
				pt: { xs: 6, sm: 8, md: 10 },
				textAlign: { xs: "center" },
				px: { xs: 2, sm: 3 },
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					mb: { xs: 3, sm: 4 },
				}}
			>
				<Box
					sx={(theme) => ({
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						width: { xs: 56, sm: 64, md: 72 },
						height: { xs: 56, sm: 64, md: 72 },
						borderRadius: "16px",
						background:
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.12) 100%)"
								: "linear-gradient(135deg, #F87171 0%, #FCA5A5 100%)",
						boxShadow:
							theme.palette.mode === "light"
								? "0 8px 24px rgba(239, 68, 68, 0.08)"
								: "0 8px 24px rgba(248, 113, 113, 0.25)",
						mb: 2,
					})}
				>
					<ContactMail
						sx={{
							fontSize: { xs: 32, sm: 36, md: 40 },
							color: (theme) =>
								theme.palette.mode === "light" ? "#EF4444" : "#FFFFFF",
						}}
					/>
				</Box>
				<Typography
					variant="h2"
					sx={{
						fontSize: {
							xs: "clamp(2rem, 8vw, 2.5rem)",
							sm: "clamp(2.5rem, 8vw, 3rem)",
							md: "clamp(3rem, 7vw, 3.5rem)",
						},
						fontWeight: 800,
						mb: 1,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, #EF4444 0%, #F87171 100%)"
								: "linear-gradient(135deg, #F87171 0%, #FCA5A5 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
					}}
				>
					Get In Touch
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "text.secondary",
						fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
						maxWidth: "600px",
						mx: "auto",
					}}
				>
					Feel free to reach out through any of these platforms
				</Typography>
			</Box>
			<Stack justifyContent="center" spacing={{ xs: 3, sm: 4 }}>
				<Stack
					direction="row"
					justifyContent="center"
					spacing={{ xs: 2, sm: 3 }}
					useFlexGap
					sx={{
						color: "text.secondary",
						flexWrap: "wrap",
					}}
				>
					<IconButton
						color="warning"
						href="https://github.com/rafafigo/rafafigo.github.io"
						aria-label="source"
						target="_blank"
						rel="noopener noreferrer"
						sx={(theme) => ({
							alignSelf: "center",
							width: { xs: 56, sm: 64 },
							height: { xs: 56, sm: 64 },
							transition: "all 0.3s ease",
							color: theme.palette.mode === "light" ? "#D97706" : undefined,
							"&:hover": {
								transform: "translateY(-8px) scale(1.1)",
								boxShadow: "0 8px 24px rgba(247, 181, 56, 0.4)",
							},
						})}
					>
						<Code sx={{ fontSize: { xs: 32, sm: 36 } }} />
					</IconButton>
					<IconButton
						color="secondary"
						href="https://github.com/rafafigo"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
						sx={(theme) => ({
							alignSelf: "center",
							width: { xs: 56, sm: 64 },
							height: { xs: 56, sm: 64 },
							transition: "all 0.3s ease",
							color: theme.palette.mode === "light" ? "#1F2937" : undefined,
							"&:hover": {
								transform: "translateY(-8px) scale(1.1)",
								boxShadow:
									theme.palette.mode === "light"
										? "0 8px 24px rgba(0, 0, 0, 0.2)"
										: "0 8px 24px rgba(156, 39, 176, 0.4)",
							},
						})}
					>
						<GitHub sx={{ fontSize: { xs: 32, sm: 36 } }} />
					</IconButton>
					<IconButton
						color="success"
						href="https://wa.me/351925204278"
						aria-label="WhatsApp"
						target="_blank"
						rel="noopener noreferrer"
						sx={(theme) => ({
							alignSelf: "center",
							width: { xs: 56, sm: 64 },
							height: { xs: 56, sm: 64 },
							transition: "all 0.3s ease",
							color: theme.palette.mode === "light" ? "#16A34A" : undefined,
							"&:hover": {
								transform: "translateY(-8px) scale(1.1)",
								boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
							},
						})}
					>
						<WhatsApp sx={{ fontSize: { xs: 32, sm: 36 } }} />
					</IconButton>
					<IconButton
						color="primary"
						href="https://www.linkedin.com/in/rafafigo/"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
						sx={(theme) => ({
							alignSelf: "center",
							width: { xs: 56, sm: 64 },
							height: { xs: 56, sm: 64 },
							transition: "all 0.3s ease",
							color: theme.palette.mode === "light" ? "#0A66C2" : undefined,
							"&:hover": {
								transform: "translateY(-8px) scale(1.1)",
								boxShadow: "0 8px 24px rgba(59, 130, 246, 0.4)",
							},
						})}
					>
						<LinkedIn sx={{ fontSize: { xs: 32, sm: 36 } }} />
					</IconButton>
				</Stack>
				<Typography
					variant="body1"
					align="center"
					sx={{
						color: "text.primary",
						fontSize: { xs: "1rem", sm: "1.1rem" },
						fontWeight: 500,
						pt: { xs: 2, sm: 3 },
					}}
				>
					{"Copyright © • " + new Date().getFullYear() + " Rafael Figueiredo"}
				</Typography>
				<Stack direction="row" justifyContent="center" flexWrap="wrap">
					<Typography
						variant="body2"
						align="center"
						sx={{
							color: "text.secondary",
							fontSize: { xs: "0.9rem", sm: "1rem" },
						}}
					>
						{" All Rights Reserved • "}
						<Link
							href="https://github.com/rafafigo/rafafigo.github.io/blob/main/LICENSE"
							target="_blank"
							rel="noopener noreferrer"
							underline="hover"
							sx={{
								fontWeight: 600,
								transition: "all 0.2s ease",
							}}
						>
							MIT License
						</Link>
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
}
