import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {
	AccountCircle,
	EmojiEvents,
	EmojiObjects,
	EmojiPeople,
	Interests,
	Laptop,
	PsychologyAlt,
	Code,
	GitHub,
	LinkedIn,
	WhatsApp,
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";

interface AppAppBarProps {}

function getMenuItems(scrollToSection: (sectionId: string) => void, activeSection: string) {
	return (
		<>
		<MenuItem
			onClick={() => scrollToSection("cover")}
			sx={{
				py: { xs: 1, md: 1.25 },
				px: { xs: 1.5, md: 2 },
				borderRadius: "12px",
				mx: 0.5,
				transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
				position: "relative",
				overflow: "hidden",
				backgroundColor: activeSection === "cover" ? "rgba(20, 184, 166, 0.15)" : "transparent",
				"&:before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: (theme) =>
						theme.palette.mode === "light"
							? "linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(20, 184, 166, 0.12) 100%)"
							: "linear-gradient(135deg, rgba(45, 212, 191, 0.15) 0%, rgba(94, 234, 212, 0.2) 100%)",
					opacity: activeSection === "cover" ? 1 : 0,
					transition: "opacity 0.25s ease",
				},
				"&:hover": {
					transform: "translateY(-1px)",
					"&:before": {
						opacity: 1,
					},
				},
			}}
		>
			<AccountCircle sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
			<Typography
				variant="body2"
				fontWeight={600}
				sx={{
					color: (theme) =>
						theme.palette.mode === "light" ? "#64748B" : "#94A3B8",
					position: "relative",
					zIndex: 1,
					fontSize: { xs: "0.85rem", md: "0.875rem" },
					fontWeight: activeSection === "cover" ? 700 : 600,
				}}
			>
				Cover
			</Typography>
		</MenuItem>
		<MenuItem
			onClick={() => scrollToSection("aboutMe")}
			sx={{
				py: { xs: 1, md: 1.25 },
				px: { xs: 1.5, md: 2 },
				borderRadius: "12px",
				mx: 0.5,
				transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
				position: "relative",
				overflow: "hidden",
				backgroundColor: activeSection === "aboutMe" ? "rgba(168, 85, 247, 0.15)" : "transparent",
				"&:before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: (theme) =>
						theme.palette.mode === "light"
							? "linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(168, 85, 247, 0.12) 100%)"
							: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(233, 213, 255, 0.2) 100%)",
					opacity: activeSection === "aboutMe" ? 1 : 0,
					transition: "opacity 0.25s ease",
				},
				"&:hover": {
					transform: "translateY(-1px)",
					"&:before": {
						opacity: 1,
					},
				},
			}}
		>
			<EmojiPeople sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
			<Typography
				variant="body2"
				fontWeight={600}
				sx={{
					color: (theme) =>
						theme.palette.mode === "light" ? "#9F7AEA" : "#B794F4",
					position: "relative",
					zIndex: 1,
					fontSize: { xs: "0.85rem", md: "0.875rem" },
					fontWeight: activeSection === "aboutMe" ? 700 : 600,
				}}
			>
				About Me
			</Typography>
		</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("experience")}
				sx={{
					py: { xs: 1, md: 1.25 },
					px: { xs: 1.5, md: 2 },
					borderRadius: "12px",
					mx: 0.5,
					transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
					position: "relative",
					overflow: "hidden",
					backgroundColor: activeSection === "experience" ? "rgba(6, 182, 212, 0.15)" : "transparent",
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(34, 211, 238, 0.12) 100%)"
								: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 211, 238, 0.2) 100%)",
						opacity: activeSection === "experience" ? 1 : 0,
						transition: "opacity 0.25s ease",
					},
					"&:hover": {
						transform: "translateY(-1px)",
						"&:before": {
							opacity: 1,
						},
					},
				}}
			>
				<EmojiObjects sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
				<Typography
					variant="body2"
					fontWeight={600}
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "#0EA5E9" : "#7DD3FC",
						position: "relative",
						zIndex: 1,
						fontSize: { xs: "0.85rem", md: "0.875rem" },
						fontWeight: activeSection === "experience" ? 700 : 600,
					}}
				>
					Experience
				</Typography>
			</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("education")}
				sx={{
					py: { xs: 1, md: 1.25 },
					px: { xs: 1.5, md: 2 },
					borderRadius: "12px",
					mx: 0.5,
					transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
					position: "relative",
					overflow: "hidden",
					backgroundColor: activeSection === "education" ? "rgba(5, 150, 105, 0.15)" : "transparent",
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(16, 185, 129, 0.12) 100%)"
								: "linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(16, 185, 129, 0.2) 100%)",
						opacity: activeSection === "education" ? 1 : 0,
						transition: "opacity 0.25s ease",
					},
					"&:hover": {
						transform: "translateY(-1px)",
						"&:before": {
							opacity: 1,
						},
					},
				}}
			>
				<PsychologyAlt sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
				<Typography
					variant="body2"
					fontWeight={600}
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "#22C55E" : "#86EFAC",
						position: "relative",
						zIndex: 1,
						fontSize: { xs: "0.85rem", md: "0.875rem" },
						fontWeight: activeSection === "education" ? 700 : 600,
					}}
				>
					Education
				</Typography>
			</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("skills")}
				sx={{
					py: { xs: 1, md: 1.25 },
					px: { xs: 1.5, md: 2 },
					borderRadius: "12px",
					mx: 0.5,
					transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
					position: "relative",
					overflow: "hidden",
					backgroundColor: activeSection === "skills" ? "rgba(236, 72, 153, 0.15)" : "transparent",
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 114, 182, 0.12) 100%)"
								: "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(244, 114, 182, 0.2) 100%)",
						opacity: activeSection === "skills" ? 1 : 0,
						transition: "opacity 0.25s ease",
					},
					"&:hover": {
						transform: "translateY(-1px)",
						"&:before": {
							opacity: 1,
						},
					},
				}}
			>
				<Laptop sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
				<Typography
					variant="body2"
					fontWeight={600}
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "#EC4899" : "#F9A8D4",
						position: "relative",
						zIndex: 1,
						fontSize: { xs: "0.85rem", md: "0.875rem" },
						fontWeight: activeSection === "skills" ? 700 : 600,
					}}
				>
					Skills
				</Typography>
			</MenuItem>
			<MenuItem
				href="https://github.com/rafafigo/College-Projects"
				target="_blank"
				component="a"
				sx={{
					py: { xs: 1, md: 1.25 },
					px: { xs: 1.5, md: 2 },
					borderRadius: "12px",
					mx: 0.5,
					transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
					position: "relative",
					overflow: "hidden",
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(167, 139, 250, 0.12) 100%)"
								: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(167, 139, 250, 0.2) 100%)",
						opacity: 0,
						transition: "opacity 0.25s ease",
					},
					"&:hover": {
						transform: "translateY(-1px)",
						"&:before": {
							opacity: 1,
						},
					},
				}}
			>
				<EmojiObjects sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
				<Typography
					variant="body2"
					fontWeight={600}
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "#8B5CF6" : "#A78BFA",
						position: "relative",
						zIndex: 1,
						fontSize: { xs: "0.85rem", md: "0.875rem" },
					}}
				>
					Projects
				</Typography>
			</MenuItem>
			<MenuItem
				href="/rafael-figueiredo-cv.pdf"
				target="_blank"
				component="a"
				sx={{
					py: { xs: 1, md: 1.25 },
					px: { xs: 1.5, md: 2 },
					borderRadius: "12px",
					mx: 0.5,
					transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
					position: "relative",
					overflow: "hidden",
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(251, 191, 36, 0.12) 100%)"
								: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(251, 191, 36, 0.2) 100%)",
						opacity: 0,
						transition: "opacity 0.25s ease",
					},
					"&:hover": {
						transform: "translateY(-1px)",
						"&:before": {
							opacity: 1,
						},
					},
				}}
			>
				<EmojiEvents sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
				<Typography
					variant="body2"
					fontWeight={600}
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "#F59E0B" : "#FBBF24",
						position: "relative",
						zIndex: 1,
						fontSize: { xs: "0.85rem", md: "0.875rem" },
					}}
				>
					CV
				</Typography>
			</MenuItem>
			<MenuItem
				onClick={() => scrollToSection("contacts")}
				sx={{
					py: { xs: 1, md: 1.25 },
					px: { xs: 1.5, md: 2 },
					borderRadius: "12px",
					mx: 0.5,
					transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
					position: "relative",
					overflow: "hidden",
					backgroundColor: activeSection === "contacts" ? "rgba(239, 68, 68, 0.15)" : "transparent",
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.12) 100%)"
								: "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(248, 113, 113, 0.2) 100%)",
						opacity: activeSection === "contacts" ? 1 : 0,
						transition: "opacity 0.25s ease",
					},
					"&:hover": {
						transform: "translateY(-1px)",
						"&:before": {
							opacity: 1,
						},
					},
				}}
			>
				<Interests sx={{ margin: "6px", fontSize: 20, position: "relative", zIndex: 1 }} />
				<Typography
					variant="body2"
					fontWeight={600}
					sx={{
						color: (theme) =>
							theme.palette.mode === "light" ? "#EF4444" : "#FCA5A5",
						position: "relative",
						zIndex: 1,
						fontSize: { xs: "0.85rem", md: "0.875rem" },
						fontWeight: activeSection === "contacts" ? 700 : 600,
					}}
				>
					Contacts
				</Typography>
			</MenuItem>
		</>
	);
}

function MenuBar() {
	const [open, setOpen] = React.useState(false);
	const [activeSection, setActiveSection] = React.useState("cover");

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	// Scroll spy effect
	React.useEffect(() => {
		const handleScroll = () => {
			const sections = ["cover", "aboutMe", "experience", "education", "skills", "contacts"];
			const scrollPosition = window.scrollY + 200;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call once on mount

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
					mt: { xs: 1, sm: 1.5, md: 2 },
					px: { xs: 1, sm: 2, md: 3 },
				}}
			>
				<Container 
					maxWidth="lg"
					sx={{
						display: { xs: "flex", lg: "block" },
						justifyContent: { xs: "flex-end", lg: "center" },
					}}
				>
					<Toolbar
						variant="regular"
						sx={(theme) => ({
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexShrink: 0,
							borderRadius: "20px",
							minHeight: { xs: 48, sm: 56, md: 68 },
							px: { xs: 1, sm: 2.5, md: 3 },
							width: { xs: "auto", lg: "100%" },
							background:
								theme.palette.mode === "light"
									? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)"
									: "linear-gradient(135deg, rgba(24, 24, 27, 0.95) 0%, rgba(39, 39, 42, 0.9) 100%)",
							backdropFilter: "blur(24px) saturate(200%)",
							WebkitBackdropFilter: "blur(24px) saturate(200%)",
							border: "1.5px solid",
							borderColor:
								theme.palette.mode === "light"
									? "rgba(228, 228, 231, 0.8)"
									: "rgba(63, 63, 70, 0.6)",
							boxShadow:
								theme.palette.mode === "light"
									? `0 8px 32px rgba(14, 165, 233, 0.08), 
									   0 4px 16px rgba(14, 165, 233, 0.04),
									   inset 0 1px 0 rgba(255, 255, 255, 0.8)`
									: `0 8px 32px rgba(0, 0, 0, 0.4), 
									   0 4px 16px rgba(0, 0, 0, 0.2),
									   inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
							transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
							"&:hover": {
								borderColor:
									theme.palette.mode === "light"
										? "rgba(14, 165, 233, 0.3)"
										: "rgba(56, 189, 248, 0.3)",
								boxShadow:
									theme.palette.mode === "light"
										? `0 12px 40px rgba(14, 165, 233, 0.12), 
										   0 6px 20px rgba(14, 165, 233, 0.06),
										   inset 0 1px 0 rgba(255, 255, 255, 0.9)`
										: `0 12px 40px rgba(0, 0, 0, 0.5), 
										   0 6px 20px rgba(56, 189, 248, 0.1),
										   inset 0 1px 0 rgba(255, 255, 255, 0.08)`,
							},
						})}
					>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", sm: "none", md: "none", lg: "flex" },
								alignItems: "center",
								px: 0,
								justifyContent: "center",
							}}
						>
							{getMenuItems(scrollToSection, activeSection)}
						</Box>
						<Box
							sx={{
								display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
								alignItems: "center",
								gap: { xs: 0.5, sm: 1 },
							}}
						>
							<Button
								variant="text"
								color="primary"
								aria-label="menu"
								onClick={toggleDrawer(true)}
								sx={{ 
									minWidth: "30px", 
									p: { xs: "2px", sm: "4px" },
									alignItems: "center",
								}}
							>
								<MenuIcon />
							</Button>
							<Drawer
								anchor="right"
								open={open}
								onClose={toggleDrawer(false)}
								PaperProps={{
									sx: { width: "80%", maxWidth: "320px" },
								}}
							>
								<Box
									sx={{
										minWidth: "60dvw",
										p: 2,
										bgcolor: "background.default",
										flexGrow: 1,
										display: "flex",
										flexDirection: "column",
										height: "100%",
									}}
								>
									<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
										<Typography
											variant="h5"
											sx={{
												fontWeight: 700,
												background: (theme) =>
													theme.palette.mode === "light"
														? "linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)"
														: "linear-gradient(135deg, #38BDF8 0%, #7DD3FC 100%)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent",
												backgroundClip: "text",
											}}
										>
											Menu
										</Typography>
									</Box>
									<Divider sx={{ mb: 2 }} />
									<Box sx={{ flex: 1, overflow: "auto" }}>
										{getMenuItems(scrollToSection, activeSection)}
									</Box>
									<Divider sx={{ my: 2 }} />
									<Box sx={{ textAlign: "center" }}>
										<Typography
											variant="subtitle1"
											sx={{
												color: "text.primary",
												mb: 1.5,
												fontSize: "0.95rem",
												fontWeight: 600,
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
										<Box
											sx={{
												display: "flex",
												justifyContent: "center",
												gap: 1.5,
												flexWrap: "wrap",
											}}
										>
											<IconButton
												color="warning"
												href="https://github.com/rafafigo/rafafigo.github.io"
												aria-label="source"
												target="_blank"
												rel="noopener noreferrer"
												size="small"
											>
												<Code />
											</IconButton>
											<IconButton
												color="secondary"
												href="https://github.com/rafafigo"
												aria-label="GitHub"
												target="_blank"
												rel="noopener noreferrer"
												size="small"
											>
												<GitHub />
											</IconButton>
											<IconButton
												color="success"
												href="https://wa.me/351925204278"
												aria-label="WhatsApp"
												target="_blank"
												rel="noopener noreferrer"
												size="small"
											>
												<WhatsApp />
											</IconButton>
											<IconButton
												color="primary"
												href="https://www.linkedin.com/in/rafafigo/"
												aria-label="LinkedIn"
												target="_blank"
												rel="noopener noreferrer"
												size="small"
											>
												<LinkedIn />
											</IconButton>
										</Box>
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
