import { extendTheme } from "@chakra-ui/react";

const fonts = {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
};

const styles = {
    global: (props) => ({
        "html, body": {
            bg: "gray.100"
        }
    })
};

const components = {
    Button: {
        baseStyle: {
            borderRadius: "md",
        },
        defaultProps: {
            color: "whiteAlpha.900",
            bg: "purple.500",
            fontSize: "lg",
            _hover: {
                bg: "purple.700"
            },
            _active: {
                bg: "purple.600"
            }
        }
    }
};

const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px 
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
};

export const theme = extendTheme({
    fonts,
    styles,
    components,
    breakpoints
});