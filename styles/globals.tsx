import { css, Global } from '@emotion/react';

export const media = {
    mobile: '@media(max-width:768px)',
    tablet: '@media(min-width:768px)',
    laptop: '@media(min-width: 1024px)',
    desktop: '@media(min-width: 1400px)',
};
export const globalStyles = (
    <Global
        styles={css`
            * {
                margin: 0;
                padding: 0;
                outline: 0;
                box-sizing: border-box;
            }
            @media (max-width: 1080px) {
                html {
                    font-size: 93.75%;
                }
            }
            @media (max-width: 720px) {
                html {
                    font-size: 87.5%;
                }
            }
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                    Helvetica Neue, sans-serif;
                background-color: #01010d;
            }

            a {
                font-size: 0.7rem;
                font-weight: 400;
                color: orange;
                text-decoration: none;
            }

            * {
                box-sizing: border-box;
            }

            @media (prefers-color-scheme: dark) {
                html {
                    color-scheme: dark;
                }
                body {
                    color: white;
                    background: black;
                }
            }
        `}
    />
);
