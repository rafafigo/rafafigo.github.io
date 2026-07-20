import { SvgIcon, type SvgIconProps } from "@mui/material";
import React from "react";

export interface IconProps extends SvgIconProps {}

export default function LinkConsultingIcon(props: IconProps) {
	return (
		<SvgIcon
			{...props}
			viewBox="0 0 100 100"
			sx={{ 
				width: "100%",
				height: "100%",
			}}
		>
			{/* White background circle for better visibility */}
			<circle cx="50" cy="50" r="48" fill="#FFFFFF" />
			
			{/* Blue "L" */}
			<text
				x="22"
				y="72"
				fontFamily="Arial, Helvetica, sans-serif"
				fontSize="52"
				fontWeight="bold"
				fill="#00A8E8"
			>
				L
			</text>
			
			{/* Orange arrow pointing up-right */}
			<g transform="translate(52, 28)">
				{/* Main arrow shaft going up and right */}
				<line
					x1="0"
					y1="22"
					x2="26"
					y2="0"
					stroke="#FF6B35"
					strokeWidth="8"
					strokeLinecap="round"
				/>
				{/* Arrow head - top horizontal part */}
				<line
					x1="14"
					y1="0"
					x2="26"
					y2="0"
					stroke="#FF6B35"
					strokeWidth="8"
					strokeLinecap="round"
				/>
				{/* Arrow head - right vertical part */}
				<line
					x1="26"
					y1="0"
					x2="26"
					y2="12"
					stroke="#FF6B35"
					strokeWidth="8"
					strokeLinecap="round"
				/>
			</g>
		</SvgIcon>
	);
}
