import logo from "@/assets/logo-acelera-metas.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center h-20 md:h-24">
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Acelera Metas" 
              className="h-14 md:h-16 w-auto"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;