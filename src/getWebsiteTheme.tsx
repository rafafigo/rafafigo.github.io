import { alpha, type ThemeOptions } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import type { PaletteMode } from "@mui/material";

export const brand = {
	50: "#F0F9FF",
	100: "#E0F2FE",
	200: "#BAE6FD",
	300: "#7DD3FC",
	400: "#38BDF8",
	500: "#0EA5E9",
	600: "#0284C7",
	700: "#0369A1",
	800: "#075985",
	900: "#0C4A6E",
};

export const secondary = {
	50: "#FDF4FF",
	100: "#FAE8FF",
	200: "#F5D0FE",
	300: "#F0ABFC",
	400: "#E879F9",
	500: "#D946EF",
	600: "#C026D3",
	700: "#A21CAF",
	800: "#86198F",
	900: "#701A75",
};

export const accent = {
	50: "#FFF7ED",
	100: "#FFEDD5",
	200: "#FED7AA",
	300: "#FDBA74",
	400: "#FB923C",
	500: "#F97316",
	600: "#EA580C",
	700: "#C2410C",
	800: "#9A3412",
	900: "#7C2D12",
};

export const gray = {
	50: "#FAFAFA",
	100: "#F4F4F5",
	200: "#E4E4E7",
	300: "#D4D4D8",
	400: "#A1A1AA",
	500: "#71717A",
	600: "#52525B",
	700: "#3F3F46",
	800: "#27272A",
	900: "#18181B",
};

export const green = {
	50: "#F6FEF6",
	100: "#E3FBE3",
	200: "#C7F7C7",
	300: "#A1E8A1",
	400: "#51BC51",
	500: "#1F7A1F",
	600: "#136C13",
	700: "#0A470A",
	800: "#042F04",
	900: "#021D02",
};

export const gradient = {
	50: "#91f8f8",
	100: "#1bddd8",
	200: "#3eb6ad",
	300: "#369688",
};

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			light: brand[300],
			main: mode === "light" ? brand[600] : brand[500],
			dark: brand[700],
			contrastText: brand[50],
			...(mode === "dark" && {
				contrastText: brand[50],
				light: brand[400],
				main: brand[500],
				dark: brand[600],
			}),
		},
		secondary: {
			light: secondary[300],
			main: mode === "light" ? secondary[600] : secondary[500],
			dark: secondary[800],
			...(mode === "dark" && {
				light: secondary[400],
				main: secondary[500],
				dark: secondary[700],
			}),
		},
		warning: {
			main: "#D97706",
			dark: "#B45309",
			...(mode === "dark" && { main: "#FBBF24", dark: "#F59E0B" }),
		},
		error: {
			light: red[50],
			main: red[500],
			dark: red[700],
			...(mode === "dark" && {
				light: "#EF4444",
				main: "#DC2626",
				dark: "#B91C1C",
			}),
		},
		success: {
			light: green[300],
			main: green[400],
			dark: green[800],
			...(mode === "dark" && {
				light: green[400],
				main: green[500],
				dark: green[700],
			}),
		},
		grey: {
			50: gray[50],
			100: gray[100],
			200: gray[200],
			300: gray[300],
			400: gray[400],
			500: gray[500],
			600: gray[600],
			700: gray[700],
			800: gray[800],
			900: gray[900],
		},
		divider: mode === "dark" ? alpha(gray[600], 0.3) : alpha(gray[300], 0.5),
		background: {
			default: mode === "light" ? "#FAFAFA" : gray[900],
			paper: mode === "light" ? "#FFFFFF" : gray[800],
		},
		text: {
			primary: mode === "light" ? gray[800] : gray[50],
			secondary: mode === "light" ? gray[600] : gray[400],
		},
		tabs: {
			primary: gradient[300],
			...(mode === "dark" && { primary: gradient[200] }),
		},
		action: {
			selected: `${alpha(brand[200], 0.2)}`,
			...(mode === "dark" && {
				selected: alpha(brand[800], 0.2),
			}),
		},
	},
	typography: {
		fontFamily: ['"Inter", "sans-serif"'].join(","),
		h1: {
			fontSize: 60,
			fontWeight: 600,
			lineHeight: 78 / 70,
			letterSpacing: -0.2,
		},
		h2: {
			fontSize: 48,
			fontWeight: 600,
			lineHeight: 1.2,
		},
		h3: {
			fontSize: 42,
			lineHeight: 1.2,
		},
		h4: {
			fontSize: 36,
			fontWeight: 500,
			lineHeight: 1.5,
		},
		h5: {
			fontSize: 20,
			fontWeight: 600,
		},
		h6: {
			fontSize: 18,
		},
		subtitle1: {
			fontSize: 18,
		},
		subtitle2: {
			fontSize: 16,
		},
		body1: {
			fontWeight: 400,
			fontSize: 15,
		},
		body2: {
			fontWeight: 400,
			fontSize: 14,
		},
		caption: {
			fontWeight: 400,
			fontSize: 12,
		},
	},
});

export default function getWebsiteTheme(mode: PaletteMode): ThemeOptions {
	return {
		...getDesignTokens(mode),
		components: {
			MuiSvgIcon: {
				variants: [
					{
						props: { fontSize: "large" },
						style: {
							fontSize: "4rem",
						},
					},
				],
			},
			MuiAccordion: {
				defaultProps: {
					elevation: 0,
					disableGutters: true,
				},
				styleOverrides: {
					root: ({ theme }) => ({
						padding: 8,
						overflow: "clip",
						backgroundColor: "#fff",
						border: "1px solid",
						borderColor: gray[100],
						":before": {
							backgroundColor: "transparent",
						},
						"&:first-of-type": {
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
						},
						"&:last-of-type": {
							borderBottomLeftRadius: 10,
							borderBottomRightRadius: 10,
						},
						...(theme.palette.mode === "dark" && {
							backgroundColor: gray[900],
							borderColor: gray[800],
						}),
					}),
				},
			},
			MuiAccordionSummary: {
				styleOverrides: {
					root: ({ theme }) => ({
						border: "none",
						borderRadius: 8,
						"&:hover": { backgroundColor: gray[100] },
						...(theme.palette.mode === "dark" && {
							"&:hover": { backgroundColor: gray[800] },
						}),
					}),
				},
			},
			MuiAccordionDetails: {
				styleOverrides: {
					root: { mb: 20, border: "none" },
				},
			},
			MuiToggleButtonGroup: {
				styleOverrides: {
					root: ({ theme }) => ({
						borderRadius: "10px",
						boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
						"& .Mui-selected": {
							color: brand[500],
						},
						...(theme.palette.mode === "dark" && {
							"& .Mui-selected": {
								color: "#fff",
							},
							boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
						}),
					}),
				},
			},
			MuiToggleButton: {
				styleOverrides: {
					root: ({ theme }) => ({
						padding: "12px 16px",
						textTransform: "none",
						borderRadius: "10px",
						fontWeight: 500,
						...(theme.palette.mode === "dark" && {
							color: gray[400],
							boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
							"&.Mui-selected": { color: brand[300] },
						}),
					}),
				},
			},
			MuiButtonBase: {
				defaultProps: {
					disableTouchRipple: true,
					disableRipple: true,
				},
				styleOverrides: {
					root: {
						boxSizing: "border-box",
						transition: "all 100ms ease-in",
						"&:focus-visible": {
							outline: `3px solid ${alpha(brand[500], 0.5)}`,
							outlineOffset: "2px",
						},
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: ({ theme, ownerState }) => ({
						boxSizing: "border-box",
						boxShadow: "none",
						borderRadius: "10px",
						textTransform: "none",
						"&:active": {
							transform: "scale(0.98)",
						},
						...(ownerState.size === "small" && {
							maxHeight: "32px",
						}),
						...(ownerState.size === "medium" && {
							height: "40px",
						}),
						...(ownerState.variant === "contained" &&
							ownerState.color === "primary" && {
								color: brand[50],
								background: brand[500],
								backgroundImage: `linear-gradient(to bottom, ${brand[400]}, ${brand[600]})`,
								boxShadow: `inset 0 1px ${alpha(brand[300], 0.4)}`,
								outline: `1px solid ${brand[700]}`,
								"&:hover": {
									background: brand[400],
									backgroundImage: "none",
									boxShadow: `0 0 0 1px  ${alpha(brand[300], 0.5)}`,
								},
							}),
						...(ownerState.variant === "outlined" && {
							backgroundColor: alpha(brand[300], 0.1),
							borderColor: brand[300],
							color: brand[500],
							"&:hover": {
								backgroundColor: alpha(brand[300], 0.3),
								borderColor: brand[200],
							},
						}),
						...(ownerState.variant === "text" && {
							color: brand[500],
							"&:hover": {
								backgroundColor: alpha(brand[300], 0.3),
								borderColor: brand[200],
							},
						}),
						...(theme.palette.mode === "dark" && {
							...(ownerState.variant === "outlined" && {
								backgroundColor: alpha(brand[600], 0.1),
								borderColor: brand[700],
								color: brand[300],
								"&:hover": {
									backgroundColor: alpha(brand[600], 0.3),
									borderColor: brand[700],
								},
							}),
							...(ownerState.variant === "text" && {
								color: brand[300],
								"&:hover": {
									backgroundColor: alpha(brand[600], 0.3),
									borderColor: brand[700],
								},
							}),
						}),
					}),
				},
			},
			MuiCard: {
				styleOverrides: {
					root: ({ theme, ownerState }) => ({
						backgroundColor: gray[50],
						borderRadius: 16,
						border: `1px solid ${alpha(gray[200], 0.8)}`,
						boxShadow: "none",
						transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
						...(ownerState.variant === "outlined" && {
							background: `linear-gradient(to bottom, #FFFFFF, ${gray[50]})`,
							"&:hover": {
								borderColor: brand[400],
								boxShadow: `0 8px 24px ${alpha(brand[500], 0.12)}`,
								transform: "translateY(-2px)",
							},
						}),
						...(theme.palette.mode === "dark" && {
							backgroundColor: alpha(gray[800], 0.6),
							border: `1px solid ${alpha(gray[700], 0.3)}`,
							...(ownerState.variant === "outlined" && {
								background: `linear-gradient(to bottom, ${gray[900]}, ${alpha(
									gray[800],
									0.5,
								)})`,
								"&:hover": {
									borderColor: brand[600],
									boxShadow: `0 8px 24px ${alpha(brand[400], 0.15)}`,
									transform: "translateY(-2px)",
								},
							}),
						}),
					}),
				},
			},
			MuiChip: {
				styleOverrides: {
					root: ({ theme }) => ({
						alignSelf: "center",
						py: 1.5,
						px: 0.5,
						borderRadius: "8px",
						background: `linear-gradient(135deg, ${brand[50]}, ${brand[100]})`,
						border: "1px solid",
						borderColor: `${alpha(brand[500], 0.3)}`,
						fontWeight: "600",
						transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
						"&:hover": {
							backgroundColor: brand[500],
							transform: "scale(1.05)",
						},
						"&:focus-visible": {
							borderColor: brand[800],
							backgroundColor: brand[200],
						},
						"& .MuiChip-label": {
							color: brand[500],
						},
						"& .MuiChip-icon": {
							color: brand[500],
						},
						...(theme.palette.mode === "dark" && {
							background: `linear-gradient(135deg, ${gray[800]}, ${gray[700]})`,
							borderColor: `${alpha(brand[500], 0.5)}`,
							"&:hover": {
								backgroundColor: brand[700],
								transform: "scale(1.05)",
							},
							"&:focus-visible": {
								borderColor: brand[200],
								backgroundColor: brand[600],
							},
							"& .MuiChip-label": {
								color: gray[200],
							},
							"& .MuiChip-icon": {
								color: brand[200],
							},
						}),
					}),
				},
			},
			MuiDivider: {
				styleOverrides: {
					root: ({ theme }) => ({
						borderColor: `${alpha(gray[200], 0.8)}`,
						...(theme.palette.mode === "dark" && {
							borderColor: `${alpha(gray[700], 0.4)}`,
						}),
					}),
				},
			},
			MuiLink: {
				defaultProps: {
					underline: "none",
				},
				styleOverrides: {
					root: ({ theme }) => ({
						color: brand[600],
						fontWeight: 500,
						position: "relative",
						textDecoration: "none",
						"&::before": {
							content: '""',
							position: "absolute",
							width: 0,
							height: "1px",
							bottom: 0,
							left: 0,
							backgroundColor: brand[200],
							opacity: 0.7,
							transition: "width 0.3s ease, opacity 0.3s ease",
						},
						"&:hover::before": {
							width: "100%",
							opacity: 1,
						},
						...(theme.palette.mode === "dark" && {
							color: brand[200],
						}),
					}),
				},
			},
			MuiMenuItem: {
				styleOverrides: {
					root: ({ theme }) => ({
						borderRadius: "99px",
						color: gray[500],
						fontWeight: 500,
						...(theme.palette.mode === "dark" && {
							color: gray[300],
						}),
					}),
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: ({ theme }) => ({
						backgroundImage: "none",
						backgroundColor: gray[100],
						...(theme.palette.mode === "dark" && {
							backgroundColor: alpha(gray[900], 0.6),
						}),
					}),
				},
			},
			MuiSwitch: {
				styleOverrides: {
					root: ({ theme }) => ({
						boxSizing: "border-box",
						width: 36,
						height: 24,
						padding: 0,
						transition: "background-color 100ms ease-in",
						"&:hover": {
							"& .MuiSwitch-track": {
								backgroundColor: brand[600],
							},
						},
						"& .MuiSwitch-switchBase": {
							"&.Mui-checked": {
								transform: "translateX(13px)",
							},
						},
						"& .MuiSwitch-track": {
							borderRadius: 50,
						},
						"& .MuiSwitch-thumb": {
							boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)",
							backgroundColor: "#FFF",
							width: 16,
							height: 16,
							margin: 2,
						},
						...(theme.palette.mode === "dark" && {
							width: 36,
							height: 24,
							padding: 0,
							transition: "background-color 100ms ease-in",
							"&:hover": {
								"& .MuiSwitch-track": {
									backgroundColor: brand[600],
								},
							},
							"& .MuiSwitch-switchBase": {
								"&.Mui-checked": {
									transform: "translateX(13px)",
								},
							},
							"& .MuiSwitch-thumb": {
								boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)",
								backgroundColor: "#FFF",
								width: 16,
								height: 16,
								margin: 2,
							},
						}),
					}),
					switchBase: {
						height: 24,
						width: 24,
						padding: 0,
						color: "#fff",
						"&.Mui-checked + .MuiSwitch-track": {
							opacity: 1,
						},
					},
				},
			},
			MuiTextField: {
				styleOverrides: {
					root: ({ theme }) => ({
						"& label .Mui-focused": {
							color: "white",
						},
						"& .MuiInputBase-input": {
							boxSizing: "border-box",
							"&::placeholder": {
								opacity: 0.7,
							},
						},
						"& .MuiOutlinedInput-root": {
							boxSizing: "border-box",
							minWidth: 280,
							minHeight: 40,
							height: "100%",
							borderRadius: "10px",
							border: "1px solid",
							borderColor: gray[200],
							transition: "border-color 120ms ease-in",
							"& fieldset": {
								border: "none",
								boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
								background: `${alpha("#FFF", 0.3)}`,
							},
							"&:hover": {
								borderColor: brand[300],
							},
							"&.Mui-focused": {
								borderColor: brand[400],
								outline: "4px solid",
								outlineColor: brand[200],
							},
						},
						...(theme.palette.mode === "dark" && {
							"& .MuiOutlinedInput-root": {
								boxSizing: "border-box",
								minWidth: 280,
								minHeight: 40,
								height: "100%",
								borderRadius: "10px",
								border: "1px solid",
								borderColor: gray[600],
								transition: "border-color 120ms ease-in",
								"& fieldset": {
									border: "none",
									boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.4)",
									background: `${alpha(gray[800], 0.4)}`,
								},
								"&:hover": {
									borderColor: brand[300],
								},
								"&.Mui-focused": {
									borderColor: brand[400],
									outline: "4px solid",
									outlineColor: alpha(brand[500], 0.5),
								},
							},
						}),
					}),
				},
			},
		},
	};
}
