import { GlobalStyles } from '@mui/joy';

export const ResetCss = () => {
  return (
    <GlobalStyles
      styles={{
        button: {
          border: 'none',
          margin: 0,
          padding: 0,
          width: 'auto',
          overflow: 'visible',
          background: 'transparent',
          color: 'inherit',
          font: 'inherit',
          lineHeight: 'normal',
          appearance: 'none',
          cursor: 'pointer',
          _webkitAppearance: 'none',
        },
      }}
    />
  );
};
