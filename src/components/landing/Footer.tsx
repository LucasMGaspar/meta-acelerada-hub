import logo from "@/assets/logo-acelera-metas.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and brand */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Acelera Metas" 
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/70 text-center">
            © {currentYear} Acelera Metas. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;