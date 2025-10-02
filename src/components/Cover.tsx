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
				backgroundImage:
					theme.palette.mode === "light"
						? "linear-gradient(180deg, #CEE5FD, #FFF)"
						: `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
				backgroundSize: "100% 20%",
				backgroundRepeat: "no-repeat",
				marginBottom: "20px",
			})}
		>
			<AnimatedFadeInNode>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						pt: { xs: 12, sm: 30 },
						pb: { xs: 8, sm: 30 },
					}}
				>
					<Stack
						spacing={2}
						useFlexGap
						sx={{ width: { xs: "100%", sm: "70%" } }}
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
									src="/rafa.jpg"
									sx={{ width: 200, height: 200 }}
								/>
							</AnimatedFadeInImage>
						</Box>
						<AnimatedFadeInDivider />
						<Typography
							variant="h1"
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								alignSelf: "center",
								textAlign: "center",
								fontSize: "clamp(3.5rem, 10vw, 4rem)",
							}}
						>
							Rafael Figueiredo
						</Typography>

						<Typography
							variant="h4"
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								alignSelf: "center",
								textAlign: "center",
								fontSize: "clamp(1rem, 2.5vw, 2.1rem);",
							}}
						>
							Senior Software Engineer @&nbsp;
							<Typography
								component="span"
								variant="h3"
								sx={{
									fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
									color: (theme) =>
										theme.palette.mode === "light"
											? "primary.main"
											: "primary.light",
								}}
							>
								<Link href="https://www.motorolasolutions.com" target="_blank">
									Motorola Solutions
								</Link>
							</Typography>
						</Typography>
						<Typography
							variant="h4"
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								alignSelf: "center",
								textAlign: "center",
								fontSize: "clamp(0.7rem, 2.2vw, 1.5rem);",
							}}
						>
							Master's Degree in Computer Science and Engineering @&nbsp;
							<Typography
								component="span"
								variant="h3"
								sx={{
									fontSize: "clamp(1.1rem, 2.7vw, 1.9rem)",
									color: (theme) =>
										theme.palette.mode === "light"
											? "primary.main"
											: "primary.light",
								}}
							>
								<Link target="_blank" href="https://tecnico.ulisboa.pt/">
									IST
								</Link>
							</Typography>
						</Typography>
						<AnimatedFadeInDivider />
					</Stack>
				</Container>
			</AnimatedFadeInNode>
		</Box>
	);
}
