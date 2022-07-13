import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle` 
	${reset}

	html {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: ${({ theme }) => theme.color.useless};
		width: 100vw;
		height: 100vh;
		font-family: "Noto Sans KR", sans-serif;
	}

	
	div {
		box-sizing: border-box;
	}


	img {
		width: 100%;
		height: 100%;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration:none;
		color: inherit;		
        cursor: pointer;
	}

	span {
		display:block;
	}
`;
