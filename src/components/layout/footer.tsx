import { Logo } from '../logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              Capacitando empresas a adotarem práticas éticas, legais e
              transparentes.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Telefone:</strong> +55 11 98949-1365
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a
                  href="https://www.eticaemacao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  www.eticaemacao.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Ética em Ação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
