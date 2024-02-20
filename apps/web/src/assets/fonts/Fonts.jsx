import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
    body {
      font-family: "system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
      `}
  />
);
