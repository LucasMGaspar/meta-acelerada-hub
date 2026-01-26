import logo from "@/assets/logo-acelera-metas.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Acelera Metas" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="font-bold text-lg md:text-xl text-primary">
              Acelera Metas
            </span>
          </div>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm transition-all hover:brightness-110 hover:shadow-cta"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;