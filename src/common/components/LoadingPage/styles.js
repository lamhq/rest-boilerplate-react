const styles = {
  loadingView: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderWrap: {
    marginTop: '24px',
    position: 'relative',
  },
  loader: {
    height: '128px',
    width: '128px',
    margin: '0 auto',
    position: 'relative',
    border: '2px solid transparent',
    borderTop: '2px solid rgba(0,0,0,.2)',
    borderRadius: '100%',
    display: 'block',
    opacity: '0',
    animation: '$rotation .75s .5s infinite linear, $fadeIn 1s .5s ease-in-out forwards',
  },
  logoCircle: {
    position: 'absolute',
    left: '4px',
    top: '4px',
    width: '120px',
    height: '120px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    animation: '$bounceIn .5s ease-in-out',
  },
  logo: {
    width: '60px',
    height: '60px',
    margin: '10px 0 10px 20px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzOSIgdmlld0JveD0iMCAwIDMwIDM5Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxwb2x5Z29uIGZpbGw9IiNGMDRFOTgiIHBvaW50cz0iMCAwIDAgMzQuNTQ3IDI5LjkyMiAuMDIiLz4gICAgPHBhdGggZmlsbD0iIzM0Mzc0MSIgZD0iTTAsMTQuNCBMMCwzNC41NDY4IEwxNC4yODcyLDE4LjA2MTIgQzEwLjA0MTYsMTUuNzM4IDUuMTgwNCwxNC40IDAsMTQuNCIvPiAgICA8cGF0aCBmaWxsPSIjMDBCRkIzIiBkPSJNMTcuMzc0MiwxOS45OTY4IEwyLjcyMSwzNi45MDQ4IEwxLjQzMzQsMzguMzg5MiBMMjkuMjYzOCwzOC4zODkyIEMyNy43NjE0LDMwLjgzODggMjMuNDA0MiwyNC4zMjY0IDE3LjM3NDIsMTkuOTk2OCIvPiAgPC9nPjwvc3ZnPg==')",
  },
  loadingText: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    color: '#98a2b3',
    animation: '$fadeIn 1s ease-in-out',
    animationFillMode: 'forwards',
    animationDelay: '1.0s',
    marginTop: '15px',
  },
  '@keyframes rotation': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(359deg)',
    },
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  '@keyframes bounceIn': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.1)',
    },
    '80%': {
      opacity: '.5',
      transform: 'scale(1.2)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
};

export default styles;
