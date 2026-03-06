import logo from "@/assets/logo-acelera-metas.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-10 gradient-blue relative overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center bg-white/95 px-4 py-2 rounded-xl">
            <img src={logo} alt="Acelera Metas" className="h-10 w-auto" />
          </div>

          <p className="text-sm text-white/50 text-center font-mono-brand">
            © {currentYear} Acelera Metas. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
