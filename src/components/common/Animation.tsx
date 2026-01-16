import { alpha } from "@mui/material";
import * as React from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

type AnimatedImageProps = {
	children: React.ReactNode;
};

type AnimatedSlideNodeProps = {
	children: React.ReactElement;
};

export function AnimatedFadeInNode({ children }: AnimatedSlideNodeProps) {
	return <ScrollAnimation animateIn="fadeIn">{children}</ScrollAnimation>;
}

export function AnimatedFadeInDivider() {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<Divider
				sx={(theme) => ({
					alignSelf: "center",
					margin: "20px",
					height: "2px",
					backgroundColor: theme.palette.mode === "light" ? "#000000" : "#FFFFFF",
					border: "none",
					borderRadius: "0px",
				})}
			/>
		</ScrollAnimation>
	);
}

export function AnimateHover({ children }: AnimatedImageProps) {
	return (
		<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
			{children}
		</motion.div>
	);
}

export function AnimatedFadeInImage({ children }: AnimatedImageProps) {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				{children}
			</motion.div>
		</ScrollAnimation>
	);
}
