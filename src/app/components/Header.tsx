import NavBar from "./navbar";

async function Header({imageUrl, alternativeText}) {

  return (
    <header className="py-3 px-1 md:px-3 sticky top-0 bg-white z-50">
      <NavBar imageUrl={imageUrl} alternativeText={alternativeText} />
    </header>
  );
}

export default Header;
