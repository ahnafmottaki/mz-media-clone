export const NavbarLogo = () => {
  return (
    <a
      href="/"
      aria-label="home"
      className="relative text-zinc-800 box-border caret-transparent block float-left max-w-[150px] w-[150px]"
    >
      <img
        src="/logo.png"
        alt=""
        className="box-border caret-transparent inline-block max-w-full w-full"
      />
    </a>
  );
};
