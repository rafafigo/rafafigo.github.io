import {alpha} from "@mui/material";
import * as React from "react";
import {motion} from "framer-motion";
import Divider from "@mui/material/Divider";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

type BoxProps = {
    children: React.ReactElement;
}

type AnimatedImageProps = {
    children: React.ReactNode;
}

type AnimatedSlideNodeProps = {
    children: React.ReactElement;
}

export function AnimatedFadeInNode({children}: AnimatedSlideNodeProps) {
    return (
        <ScrollAnimation animateIn='fadeIn'>
            {children}
        </ScrollAnimation>
    );
}

export function AnimatedFadeInDivider() {
    return (
        <ScrollAnimation animateIn='fadeIn'>
            <Divider
                sx={(theme) => ({
                    alignSelf: 'center',
                    width: '100%',
                    margin: "20px",
                    height: '0px',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    outline: '1px solid',
                    borderColor: `primary.${theme.palette.mode}`,
                    outlineColor:
                        theme.palette.mode === 'light'
                            ? alpha('#BFCCD9', 0.5)
                            : alpha('#9CCCFC', 0.1),
                    boxShadow:
                        theme.palette.mode === 'light'
                            ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                            : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                })}
            />
        </ScrollAnimation>
    );
}

export function AnimateHover({children}: AnimatedImageProps) {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedFadeInImage({children}: AnimatedImageProps) {
    return (
        <ScrollAnimation animateIn='fadeIn'>
            <motion.div
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                {children}
            </motion.div>
        </ScrollAnimation>
    );
}