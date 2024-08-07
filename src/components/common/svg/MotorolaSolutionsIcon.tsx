import { SvgIcon, type SvgIconProps } from "@mui/material";
import React from "react";

export interface IconProps extends SvgIconProps {}

export default function MotorolaSolutionsIcon(props: IconProps) {
	return (
		<SvgIcon
			{...props}
			viewBox="0 0 1568 1571"
			sx={{ my: "6px", fontSize: { xs: "2.5rem", sm: "3.5rem" } }}
		>
			<g>
				<g>
					<path
						fillRule="evenodd"
						fill="#00a3e0"
						d="M1083.3 59.8c95 39.4 181.3 97.2 254 170.1 72.8 72.8 130.5 159.3 169.9 254.5 39.4 95.2 59.8 197.2 59.9 300.2.3 317.8-190.5 604.3-483.2 726.1-292.8 121.8-629.9 54.7-854.1-169.9C5.6 1116.3-61.5 778.4 59.7 484.9 181 191.3 466.8-.1 783.7 0c102.8 0 204.6 20.4 299.6 59.8zm204.3 1094.1l-283.5-932.6-218.8 728-1.8 1.7-1.4-1.7-219.4-728L279.4 1154h52.9q7.5-33.8 17.2-67.1 9.6-33.2 21.3-65.8 11.8-32.6 25.5-64.4 13.8-31.8 29.5-62.6c7-13.5 15.7-26.1 25.9-37.3 10.3-11.2 22-21.1 34.8-29.2 12.8-8.1 26.6-14.6 41.1-19.1 14.5-4.5 29.6-7 44.7-7.5 45.7.6 85.4 25 135.3 94.8q10.9 17.9 21.1 36.1 10.2 18.2 19.7 36.8 9.6 18.6 18.4 37.5 8.8 19 16.9 38.2 8.1-19.2 17-38.2 8.8-18.9 18.3-37.5t19.8-36.8q10.2-18.2 21.1-36.1c49-69.8 88.9-94.2 135.4-94.8 15.1.5 30.1 3 44.5 7.5 14.5 4.5 28.3 10.9 41 19.1 12.8 8.2 24.4 18 34.5 29.2 10.2 11.2 18.8 23.8 25.7 37.3q15.8 30.8 29.7 62.6 13.8 31.8 25.6 64.3 11.9 32.6 21.6 65.9 9.7 33.3 17.4 67.1z"
						className="s0"
					></path>
				</g>
			</g>
		</SvgIcon>
	);
}
