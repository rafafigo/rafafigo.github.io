import * as React from "react";
import type { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import {
	AccountCircle,
	EmojiEvents,
	EmojiObjects,
	EmojiPeople,
	Interests,
	Laptop,
	PsychologyAlt,
} from "@mui/icons-material";
import { AnimateHover } from "./common/Animation";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Footer from "./Footer";

const logoStyle = {
	marginLeft: "20px",
	marginTop: "8px",
	width: "140px",
	height: "auto",
	cursor: "pointer",
};

interface AppAppBarProps {
	mode: PaletteMode;
	toggleColorMode: () => void;
}

function getAnimatedLogo(mode: "light" | "dark") {
	return (
		<AnimateHover>
			<img
				src={mode === "dark" ? "/iconDarkMode.png" : "/iconLightMode.png"}
				style={logoStyle}
				alt="logo of sitemark"
			/>
		</AnimateHover>
	);
}

function getMenuItems(scrollToSection: (sectionId: string) => void) {
	return (
		<>
			<MenuItem
				onClick={() => scrollToSection("cover")}
				sx={{ py: "6px", px: "12px" }}
			>
				<AccountCircle sx={{ margin: "8px" }} />
				<Typography
					variant="h6"
					color="primary"
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "primary.main" : "primary.light",
					}}
				>
					Cover
				</Typography>
			</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("aboutMe")}
				sx={{ py: "6px", px: "12px" }}
			>
				<EmojiPeople sx={{ margin: "8px" }} />
				<Typography
					variant="h6"
					color="primary"
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "primary.main" : "primary.light",
					}}
				>
					About Me
				</Typography>
			</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("experience")}
				sx={{ py: "6px", px: "12px" }}
			>
				<EmojiObjects sx={{ margin: "8px" }} />
				<Typography
					variant="h6"
					color="primary"
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "primary.main" : "primary.light",
					}}
				>
					Experience
				</Typography>
			</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("skills")}
				sx={{ py: "6px", px: "12px" }}
			>
				<PsychologyAlt sx={{ margin: "8px" }} />
				<Typography
					variant="h6"
					color="primary"
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "primary.main" : "primary.light",
					}}
				>
					Skills
				</Typography>
			</MenuItem>
			<MenuItem
				href="https://github.com/rafafigo/College-Projects"
				target="_blank"
				component="a"
				sx={{ py: "6px", px: "12px" }}
			>
				<Laptop sx={{ margin: "8px" }} />
				<Typography
					variant="h6"
					color="primary"
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "primary.main" : "primary.light",
					}}
				>
					Projects
				</Typography>
			</MenuItem>
			<MenuItem
				href="https://drive.google.com/file/d/1AsPhr-yy1MvDSaZIGJfP4CyIeaICDdcM/view?usp=sharing"
				target="_blank"
				component="a"
				onClick={() => scrollToSection("pricing")}
				sx={{ py: "6px", px: "12px" }}
			>
				<EmojiEvents sx={{ margin: "8px" }} />
				<Typography
					variant="h6"
					color="primary"
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "primary.main" : "primary.light",
					}}
				>
					Curriculum
				</Typography>
			</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("contacts")}
				sx={{ py: "6px", px: "12px" }}
			>
				<Interests sx={{ margin: "8px" }} />
				<Typography
					variant="h6"
					color="primary"
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "primary.main" : "primary.light",
					}}
				>
					Contacts
				</Typography>
			</MenuItem>
		</>
	);
}

function MenuBar({ mode, toggleColorMode }: AppAppBarProps) {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const scrollToSection = (sectionId: string) => {
		const sectionElement = document.getElementById(sectionId);
		const offset = 128;
		if (sectionElement) {
			const targetScroll = sectionElement.offsetTop - offset;
			sectionElement.scrollIntoView({ behavior: "smooth" });
			window.scrollTo({
				top: targetScroll,
				behavior: "smooth",
			});
			setOpen(false);
		}
	};

	return (
		<div>
			<AppBar
				position="fixed"
				sx={{
					boxShadow: 0,
					bgcolor: "transparent",
					backgroundImage: "none",
					mt: 2,
				}}
			>
				<Container maxWidth="lg">
					<Toolbar
						variant="regular"
						sx={(theme) => ({
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexShrink: 0,
							borderRadius: "999px",
							bgcolor:
								theme.palette.mode === "light"
									? "rgba(255, 255, 255, 0.4)"
									: "rgba(0, 0, 0, 0.4)",
							backdropFilter: "blur(24px)",
							maxHeight: 40,
							border: "1px solid",
							borderColor: "divider",
							boxShadow:
								theme.palette.mode === "light"
									? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
									: "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
						})}
					>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", sm: "none", md: "none", lg: "flex" },
								alignItems: "center",
								ml: "-18px",
								px: 0,
							}}
						>
							{getAnimatedLogo(mode)}
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									flexGrow: 1,
									justifyContent: "center",
								}}
							>
								{getMenuItems(scrollToSection)}
							</Box>
						</Box>
						<Box
							sx={{
								display: { xs: "none", sm: "none", md: "none", lg: "flex" },
								gap: 0.5,
								alignItems: "center",
							}}
						>
							<ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
						</Box>
						<Box
							sx={{
								display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
							}}
						>
							{getAnimatedLogo(mode)}
						</Box>
						<Box
							sx={{
								display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
							}}
						>
							<Button
								variant="text"
								color="primary"
								aria-label="menu"
								onClick={toggleDrawer(true)}
								sx={{ minWidth: "30px", p: "4px", alignItems: "center" }}
							>
								<MenuIcon />
							</Button>
							<Drawer
								anchor="right"
								open={open}
								onClose={toggleDrawer(false)}
								PaperProps={{
									sx: { width: "80%" },
								}}
							>
								<Box
									sx={{
										minWidth: "60dvw",
										p: 2,
										bgcolor: "background.default",
										flexGrow: 1,
									}}
								>
									<Grid container alignItems={"center"} sx={{ mb: "5px" }}>
										<Grid item style={{ alignItems: "start" }}>
											{getAnimatedLogo(mode)}
										</Grid>
										<Grid item xs>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													alignItems: "end",
													flexGrow: 1,
												}}
											>
												<ToggleColorMode
													mode={mode}
													toggleColorMode={toggleColorMode}
												/>
											</Box>
										</Grid>
									</Grid>
									<Divider />
									{getMenuItems(scrollToSection)}
									<Box
										sx={{
											bottom: 10,
											position: "absolute",
											display: "flex",
											width: 1
										}}
									>
										<Footer />
									</Box>
								</Box>
							</Drawer>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}

export default MenuBar;
