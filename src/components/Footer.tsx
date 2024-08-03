import * as React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Code, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
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
				py: { sm: 4 },
				textAlign: { sm: "center", md: "left" },
			}}
		>
			<Stack justifyContent="center" spacing={2}>
				<Stack
					direction="row"
					justifyContent="center"
					spacing={1}
					useFlexGap
					sx={{
						color: "text.secondary",
					}}
				>
					<IconButton
						color="warning"
						href="https://github.com/rafafigo/rafafigo.github.io"
						aria-label="source"
						target="_blank"
						rel="noopener noreferrer"
						sx={{ alignSelf: "center" }}
					>
						<Code />
					</IconButton>
					<IconButton
						color="secondary"
						href="https://github.com/rafafigo"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
						sx={{ alignSelf: "center" }}
					>
						<GitHub />
					</IconButton>
					<IconButton
						color="success"
						href="https://wa.me/351925204278"
						aria-label="X"
						target="_blank"
						rel="noopener noreferrer"
						sx={{ alignSelf: "center" }}
					>
						<WhatsApp />
					</IconButton>
					<IconButton
						color="primary"
						href="https://www.linkedin.com/in/rafafigo/"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
						sx={{ alignSelf: "center" }}
					>
						<LinkedIn />
					</IconButton>
				</Stack>
				<Typography
					variant="h6"
					align="left"
					sx={{
						color: "text.primary",
					}}
				>
					{"Copyright © • " + new Date().getFullYear() + " Rafael Figueiredo"}
				</Typography>
				<Stack direction="row">
					<Typography
						variant="h6"
						align="left"
						sx={{
							color: "text.primary",
						}}
					>
						{" All Rights Reserved • "}
						<Link
							href="https://github.com/rafafigo/rafafigo.github.io/blob/main/LICENSE"
							target="_blank"
							rel="noopener noreferrer"
							underline="hover"
						>
							MIT License
						</Link>
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
}
