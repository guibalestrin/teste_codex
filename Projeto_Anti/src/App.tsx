import { Fragment } from 'react';
import './index.css';

const sections = [
  { id: 1, src: '/1_hero.png', alt: 'Secao principal da landing page' },
  { id: 2, src: '/2_bigpromise.png', alt: 'Secao com a grande promessa' },
  { id: 3, src: '/3_quebra.png', alt: 'Secao de quebra de padrao' },
  { id: 4, src: '/4_causaoculta.png', alt: 'Secao sobre a causa oculta' },
  { id: 5, src: '/5_inimigo.png', alt: 'Secao sobre o inimigo invisivel' },
  { id: 6, src: '/6_doremocional.png', alt: 'Secao sobre dor emocional' },
  { id: 7, src: '/7_storytelling.png', alt: 'Secao de storytelling' },
  { id: 8, src: '/8_mecanismo.png', alt: 'Secao do mecanismo' },
  { id: 9, src: '/9_como.png', alt: 'Secao explicando como funciona' },
  { id: 10, src: '/10_provas.png', alt: 'Secao com provas' },
  { id: 11, src: '/10_1_provas.png', alt: 'Secao complementar com provas' },
  { id: 12, src: '/11_offerstack.png', alt: 'Secao da oferta principal' },
];

const routeContent = {
  '/privacidade': {
    title: 'Politica de Privacidade',
    paragraphs: [
      'A Caverna de Alexandria não coleta as informacoes necessarias para processar pagamentos.',
      'Os dados informados nao sao vendidos a terceiros. Eles podem ser compartilhados apenas com plataformas operacionais essenciais, como meios de pagamento, hospedagem e ferramentas de atendimento.',
      'Ao continuar navegando nesta pagina ou adquirir o produto, voce concorda com o uso dessas informacoes para comunicacao, entrega de conteudo e melhoria da experiencia.',
      'Se desejar solicitar atualizacao, correcao ou exclusao de dados, entre em contato pelos canais oficiais de suporte.',
    ],
  },
  '/termos': {
    title: 'Termos de Servico',
    paragraphs: [
      'O conteudo da Caverna de Alexandria e destinado exclusivamente a fins informativos e educacionais, sendo proibida a reproducao, distribuicao ou revenda sem autorizacao expressa.',
      'O acesso ao material e individual. O compartilhamento indevido de login, arquivos ou areas protegidas pode resultar em bloqueio do acesso sem reembolso.',
      'Os resultados variam de pessoa para pessoa e dependem da aplicacao pratica do conteudo. Nenhuma promessa deve ser interpretada como garantia absoluta de resultado.',
      'Ao adquirir e utilizar o produto, voce declara estar de acordo com estes termos e com a politica de privacidade vigente.',
    ],
  },
  '/suporte': {
    title: 'Suporte',
    paragraphs: [
      'Se voce precisar de ajuda com acesso, pagamento ou duvidas sobre o produto, entre em contato pelos canais abaixo.',
      'Email: cavernadealexandria@gmail.com',
      'WhatsApp: (11)986955476',
      'Nosso atendimento responde por ordem de chegada em horario comercial.',
    ],
  },
} as const;

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="/privacidade" className="footer-link">Política de Privacidade</a>
        <span className="footer-sep">|</span>
        <a href="/termos" className="footer-link">Termos de Serviço</a>
        <span className="footer-sep">|</span>
        <a href="/suporte" className="footer-link">Suporte</a>
      </nav>
      <div className="footer-disclaimer">
        Este produto é destinado a homens adultos que desejam melhorar sua presença digital.
        Os resultados variam individualmente. O sistema não garante resultados especificos em relacionamentos.
      </div>
    </footer>
  );
}

function LegalPage({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="page-wrapper">
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="logo-container logo-link">
            <img
              src="/Insta.png"
              alt="Caverna de Alexandria"
              className="logo-img"
            />
            <span className="brand-name">Caverna de Alexandria</span>
          </a>
        </div>
      </header>

      <div className="header-spacer" />

      <main className="legal-wrapper">
        <section className="legal-card">
          <p className="legal-kicker">Informacões Legais</p>
          <h1 className="legal-title">{title}</h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="legal-paragraph">{paragraph}</p>
          ))}
          <a href="/" className="legal-back">Voltar para a página principal</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="page-wrapper">
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-container">
            <img
              src="/Insta.png"
              alt="Caverna de Alexandria"
              className="logo-img"
            />
            <span className="brand-name">Caverna de Alexandria</span>
          </div>
        </div>
      </header>

      <div className="header-spacer" />

      <main className="sections-wrapper">
        {sections.map(({ id, src, alt }) => (
          <Fragment key={id}>
            <img
              id={id === 7 ? 'storytelling' : id === 12 ? 'offerstack' : undefined}
              src={src}
              alt={alt}
              loading={id === 1 ? 'eager' : 'lazy'}
              className="section-img"
            />

            {id === 1 ? (
              <section className="jump-cta-section">
                <a
                  className="jump-cta-button"
                  href="#storytelling"
                  aria-label="Ver o sistema completo e ir para a secao de storytelling"
                >
                  <span className="jump-cta-label">VER O SISTEMA COMPLETO</span>
                  <span className="jump-cta-arrow" aria-hidden="true">{'>'}</span>
                </a>
              </section>
            ) : null}

            {id === 9 ? (
              <section className="offer-jump-section">
                <a
                  className="offer-jump-card"
                  href="#offerstack"
                  aria-label="Aplicar o sistema completo e ir para a secao da oferta"
                >
                  <div className="offer-jump-icon" aria-hidden="true">
                    <img src="/Insta.png" alt="" className="offer-jump-icon-img" />
                  </div>

                  <div className="offer-jump-copy">
                    <p className="offer-jump-eyebrow">PERCEPÇÃO GERA ATRAÇÃO.</p>
                    <p className="offer-jump-title"></p>
                  </div>

                  <span className="offer-jump-button">
                    APLICAR O SISTEMA COMPLETO
                    <span className="offer-jump-arrow" aria-hidden="true">{'->'}</span>
                  </span>
                </a>
              </section>
            ) : null}
          </Fragment>
        ))}

        <section className="cta-block">
          <div className="cta-alert">
            <span className="alert-icon">!</span>
            <div className="alert-text-block">
              <p className="alert-title">O JOGO MUDA QUANDO VOCE COMEÇA A SER PERCEBIDO DIFERENTE.</p>
              <p className="alert-sub">Voce está a um passo de parar de aceitar qualquer match só por carência e começar a se envolver com mulheres que hoje parecem inalcançáveis.</p>
            </div>
          </div>

          <div className="cta-btn-wrapper">
            <a
              className="cta-btn"
              href="https://pay.kiwify.com.br/kTyieX6"
              aria-label="Acessar o Codigo Anti-Rejeicao agora"
              target="_blank"
              rel="noreferrer"
            >
              <div className="offer-cta-sheen" />
              <span className="btn-lock">LOCK</span>
              <div className="btn-content">
                <p className="btn-text">QUERO ACESSAR O CÓDIGO ANTI-REJEIÇÃO AGORA</p>
                <p className="btn-sub">ACESSO IMEDIATO | 100% ONLINE | GARANTIA DE 7 DIAS</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.toLowerCase();
  const page = routeContent[path as keyof typeof routeContent];

  if (page) {
    return <LegalPage title={page.title} paragraphs={page.paragraphs} />;
  }

  return <LandingPage />;
}
