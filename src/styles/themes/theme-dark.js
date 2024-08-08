import { ThemeProvider } from "styled-components";

const themeDark = {
    color: '#ffffff',
    mainBG: '#202020',
    secondaryBG: '#171717',
    divShadow: '#0000006E',
    greyMenu: '#686868',
    menuNavbarItems: '#686868',
    SBBackground: '#135846',
    btnSBColor: '#ffffff',
}

export const Theme = ({children}) => {
	return <ThemeProvider theme={themeDark}>{children}</ThemeProvider>
}