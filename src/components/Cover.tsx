import * as React from "react";
import { alpha, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
	AnimatedFadeInDivider,
	AnimatedFadeInImage,
	AnimatedFadeInNode,
} from "./common/Animation";

const imageStyle = {
	marginLeft: "20px",
	width: "160px",
	height: "auto",
	cursor: "pointer",
	borderRadius: "100%",
};

export default function Cover() {
	return (
		<Box
			id="cover"
			sx={(theme) => ({
				width: "100%",
				position: "relative",
				overflow: "hidden",
				backgroundColor: theme.palette.mode === "light" ? "#FAFAFA" : "#18181B",
				paddingTop: { xs: "60px", sm: "72px", md: "80px" },
			})}
		>
			<AnimatedFadeInNode>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						pt: { xs: 4, sm: 6, md: 8 },
						pb: { xs: 8, sm: 10, md: 12 },
						px: { xs: 2, sm: 3, md: 4 },
						position: "relative",
						zIndex: 1,
					}}
				>
					<Stack
						spacing={{ xs: 2, sm: 3, md: 4 }}
						useFlexGap
						sx={{ width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" } }}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								alignSelf: "center",
								textAlign: "center",
							}}
						>
							<AnimatedFadeInImage>
						<Avatar
							alt="Rafael Figueiredo"
							src="/rafa.jpeg"
							sx={{
								width: { xs: 140, sm: 180, md: 200, lg: 220 },
								height: { xs: 140, sm: 180, md: 200, lg: 220 },
								border: (theme) =>
									theme.palette.mode === "light"
										? "4px solid rgba(13, 148, 136, 0.12)"
										: "4px solid rgba(45, 212, 191, 0.25)",
								boxShadow: (theme) =>
									theme.palette.mode === "light"
										? "0 20px 60px rgba(13, 148, 136, 0.08), 0 8px 24px rgba(13, 148, 136, 0.06)"
										: "0 20px 60px rgba(45, 212, 191, 0.3), 0 8px 24px rgba(0, 0, 0, 0.4)",
								transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
								"&:hover": {
									transform: "scale(1.05) rotate(2deg)",
									boxShadow: (theme) =>
										theme.palette.mode === "light"
											? "0 24px 72px rgba(13, 148, 136, 0.12), 0 12px 32px rgba(13, 148, 136, 0.08)"
											: "0 24px 72px rgba(45, 212, 191, 0.35), 0 12px 32px rgba(0, 0, 0, 0.5)",
								},
							}}
						/>
							</AnimatedFadeInImage>
						</Box>
						<AnimatedFadeInDivider />
					<Typography
						variant="h1"
						sx={{
							alignSelf: "center",
							textAlign: "center",
							fontSize: {
								xs: "clamp(2rem, 8vw, 2.5rem)",
								sm: "clamp(2.5rem, 8vw, 3rem)",
								md: "clamp(3rem, 8vw, 3.5rem)",
								lg: "clamp(3.5rem, 8vw, 4rem)",
							},
							fontWeight: 800,
							letterSpacing: "-0.02em",
							background: (theme) =>
								theme.palette.mode === "light"
									? "linear-gradient(135deg, #64748B 0%, #94A3B8 100%)"
									: "linear-gradient(135deg, #94A3B8 0%, #CBD5E1 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}
					>
						Rafael Figueiredo
					</Typography>

						<Box sx={{ textAlign: "center", alignSelf: "center", width: "100%" }}>
							<Typography
								variant="h4"
								sx={{
									fontSize: {
										xs: "clamp(0.9rem, 4vw, 1.1rem)",
										sm: "clamp(1.1rem, 4vw, 1.3rem)",
										md: "clamp(1.3rem, 3vw, 1.6rem)",
										lg: "clamp(1.6rem, 2.5vw, 2rem)",
									},
									fontWeight: 600,
									color: "text.primary",
									mb: 1,
								}}
							>
								Senior Software Engineer @
							</Typography>
						<Link
							href="https://www.motorolasolutions.com"
							target="_blank"
							sx={{ 
								textDecoration: "none",
								display: "inline-block",
							}}
						>
							<Typography
								variant="h3"
								sx={{
									fontSize: {
										xs: "clamp(1rem, 4.5vw, 1.3rem)",
										sm: "clamp(1.3rem, 4.5vw, 1.6rem)",
										md: "clamp(1.6rem, 3.5vw, 2rem)",
										lg: "clamp(2rem, 3vw, 2.4rem)",
									},
									fontWeight: 700,
									background: (theme) =>
										theme.palette.mode === "light"
											? "linear-gradient(135deg, #64748B 0%, #94A3B8 100%)"
											: "linear-gradient(135deg, #94A3B8 0%, #CBD5E1 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									transition: "all 0.3s ease",
									"&:hover": {
										filter: "brightness(1.2)",
										textDecoration: "underline",
										textDecorationColor: (theme) =>
											theme.palette.mode === "light" ? "#94A3B8" : "#CBD5E1",
										textDecorationThickness: "2px",
										textUnderlineOffset: "5px",
									},
								}}
							>
								Motorola Solutions
							</Typography>
							</Link>
						</Box>

						<Box sx={{ textAlign: "center", alignSelf: "center", width: "100%" }}>
					<Typography
						variant="h5"
						sx={{
							fontSize: {
								xs: "clamp(0.75rem, 3.5vw, 0.9rem)",
								sm: "clamp(0.9rem, 3.5vw, 1.1rem)",
								md: "clamp(1.1rem, 2.5vw, 1.3rem)",
								lg: "clamp(1.3rem, 2.2vw, 1.5rem)",
							},
							fontWeight: 500,
							color: (theme) =>
								theme.palette.mode === "light"
									? "rgba(0, 0, 0, 0.7)"
									: "rgba(255, 255, 255, 0.8)",
							mb: 0.5,
						}}
					>
						Master's Degree in Computer Science and Engineering @
					</Typography>
						<Link
							target="_blank"
							href="https://tecnico.ulisboa.pt/"
							sx={{ 
								textDecoration: "none",
								display: "inline-block",
							}}
						>
								<Typography
									variant="h4"
									sx={{
										fontSize: {
											xs: "clamp(0.85rem, 4vw, 1.05rem)",
											sm: "clamp(1.05rem, 4vw, 1.3rem)",
											md: "clamp(1.3rem, 3vw, 1.6rem)",
											lg: "clamp(1.6rem, 2.7vw, 1.9rem)",
										},
										fontWeight: 700,
										background: (theme) =>
											theme.palette.mode === "light"
												? "linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)"
												: "linear-gradient(135deg, #86EFAC 0%, #BBF7D0 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text",
										transition: "all 0.3s ease",
										"&:hover": {
											filter: "brightness(1.2)",
											textDecoration: "underline",
											textDecorationColor: (theme) =>
												theme.palette.mode === "light" ? "#4ADE80" : "#BBF7D0",
											textDecorationThickness: "2px",
											textUnderlineOffset: "5px",
										},
									}}
								>
									IST
								</Typography>
							</Link>
						</Box>
					</Stack>
				</Container>
			</AnimatedFadeInNode>
		</Box>
	);
}
