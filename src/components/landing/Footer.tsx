import logo from "@/assets/logo-acelera-metas.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-10 gradient-blue">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center bg-primary-foreground/95 px-4 py-2 rounded-xl">
            <img src={logo} alt="Acelera Metas" className="h-10 w-auto" />
          </div>

          <p className="text-sm text-primary-foreground/60 text-center">
            © {currentYear} Acelera Metas. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
