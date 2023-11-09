const Logo = () => {
  const txt = process.env.NEXT_PUBLIC_LOGO;

  if (typeof window !== 'undefined') {
    // Code that depends on `window` object goes here
    console.log('Window exists, hey from logo.');
  }

  return (
    <p id="logo">
      {txt}
    </p>
  )
}

export default Logo;
