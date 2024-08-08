import { ThemeProvider } from "styled-components";

const themeLight = {
	color: '#000000',
	mainBG: '#ffffff',
	secondaryBG: '#F8F8F8',
	divShadow: '#00000005',
	greyMenu: '#5d5449',
	menuNavbarItems: '#799283',
	SBBackground: '#EBF1EF',
	btnSBColor: '#135846',
}

export const Theme = ({children}) => {
	return <ThemeProvider theme={themeLight}>{children}</ThemeProvider>
}