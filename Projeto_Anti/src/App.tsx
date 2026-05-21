import { Fragment, useEffect, useState } from 'react';
import './index.css';

const sections = [
  { id: 1, src: '/1_hero.png', alt: 'Seção principal da landing page' },
  { id: 2, src: '/2_bigpromise.png', alt: 'Seção com a grande promessa' },
  { id: 3, src: '/3_quebra.png', alt: 'Seção de quebra de padrão' },
  { id: 4, src: '/4_causaoculta.png', alt: 'Seção sobre a causa oculta' },
  { id: 5, src: '/5_inimigo.png', alt: 'Seção sobre o inimigo invisível' },
  { id: 6, src: '/6_doremocional.png', alt: 'Seção sobre dor emocional' },
  { id: 7, src: '/7_storytelling.png', alt: 'Seção de storytelling' },
  { id: 8, src: '/8_mecanismo.png', alt: 'Seção do mecanismo' },
  { id: 9, src: '/9_como.png', alt: 'Seção explicando como funciona' },
  { id: 10, src: '/10_provas.png', alt: 'Seção com provas' },
  { id: 11, src: '/10_1_provas.png', alt: 'Seção complementar com provas' },
  { id: 12, src: '/11_offerstack.png', alt: 'Seção da oferta principal' },
];

const routeContent = {
  '/privacidade': {
    title: 'Política de Privacidade',
    paragraphs: [
      'A Caverna de Alexandria coleta apenas as informações necessárias para processar pagamentos, liberar o acesso ao produto e prestar suporte ao cliente.',
      'Os dados informados não são vendidos a terceiros. Eles podem ser compartilhados apenas com plataformas operacionais essenciais, como meios de pagamento, hospedagem e ferramentas de atendimento.',
      'Ao continuar navegando nesta página ou adquirir o produto, você concorda com o uso dessas informações para comunicação, entrega de conteúdo e melhoria da experiência.',
      'Se desejar solicitar atualização, correção ou exclusão de dados, entre em contato pelos canais oficiais de suporte.',
    ],
  },
  '/termos': {
    title: 'Termos de Serviço',
    paragraphs: [
      'O conteúdo da Caverna de Alexandria é destinado exclusivamente a fins informativos e educacionais, sendo proibidas a reprodução, a distribuição ou a revenda sem autorização expressa.',
      'O acesso ao material é individual. O compartilhamento indevido de login, arquivos ou áreas protegidas pode resultar em bloqueio do acesso sem reembolso.',
      'Os resultados variam de pessoa para pessoa e dependem da aplicação prática do conteúdo. Nenhuma promessa deve ser interpretada como garantia absoluta de resultado.',
      'Ao adquirir e utilizar o produto, você declara estar de acordo com estes termos e com a política de privacidade vigente.',
    ],
  },
  '/suporte': {
    title: 'Suporte',
    paragraphs: [
      'Se você precisar de ajuda com acesso, pagamento ou dúvidas sobre o produto, entre em contato pelos canais abaixo.',
      'E-mail: cavernadealexandria@gmail.com',
      'WhatsApp: (11) 98695-5476',
      'Nosso atendimento responde por ordem de chegada, em horário comercial.',
    ],
  },
} as const;

const maleNames = [
  'Carlos',
  'Rafael',
  'Bruno',
  'Felipe',
  'Lucas',
  'Mateus',
  'Thiago',
  'Gabriel',
  'André',
  'Renato',
  'Vinícius',
  'Gustavo',
];

function SocialProofPopup() {
  const [buyerName, setBuyerName] = useState(() => maleNames[Math.floor(Math.random() * maleNames.length)]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storytellingSection = document.getElementById('storytelling');

    if (!storytellingSection) {
      return undefined;
    }

    const updateVisibility = () => {
      const sectionTop = storytellingSection.getBoundingClientRect().top;
      const headerOffset = 80;

      setIsVisible(sectionTop <= headerOffset);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setMessageIndex((currentIndex) => {
        let nextIndex = currentIndex;

        while (nextIndex === currentIndex) {
          nextIndex = Math.floor(Math.random() * 3);
        }

        if (nextIndex === 2) {
          setBuyerName((currentName) => {
            let nextName = currentName;

            while (nextName === currentName && maleNames.length > 1) {
              nextName = maleNames[Math.floor(Math.random() * maleNames.length)];
            }

            return nextName;
          });
        }

        return nextIndex;
      });
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [isVisible]);

  const messages = [
    '23 pessoas adquiriram este método nas últimas horas.',
    '10 pessoas estão comprando agora.',
    `${buyerName} comprou o Código Anti-Rejeição agora!`,
  ];

  return (
    <aside
      className={`social-proof-popup${isVisible ? ' is-visible' : ''}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="social-proof-dot" aria-hidden="true" />
      <p key={messages[messageIndex]} className="social-proof-message">
        {messages[messageIndex]}
      </p>
    </aside>
  );
}

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
        Os resultados variam individualmente. O sistema não garante resultados específicos em relacionamentos.
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
          <p className="legal-kicker">Informações Legais</p>
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
                  aria-label="Ver o sistema completo e ir para a seção de storytelling"
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
                  aria-label="Aplicar o sistema completo e ir para a seção da oferta"
                >
                  <div className="offer-jump-icon" aria-hidden="true">
                    <img src="/Insta.png" alt="" className="offer-jump-icon-img" />
                  </div>

                  <div className="offer-jump-copy">
                    <p className="offer-jump-eyebrow">PERCEPÇÃO GERA ATRAÇÃO.</p>
                    <p className="offer-jump-title">ESTRATÉGIA GERA RESULTADOS.</p>
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
              <p className="alert-title">O JOGO MUDA QUANDO VOCÊ COMEÇA A SER PERCEBIDO DE FORMA DIFERENTE.</p>
              <p className="alert-sub">Você está a um passo de parar de aceitar qualquer match só por carência e começar a se envolver com mulheres que hoje parecem inalcançáveis.</p>
            </div>
          </div>

          <div className="cta-btn-wrapper">
            <a
              className="cta-btn"
              href="https://pay.kiwify.com.br/kTyieX6"
              aria-label="Acessar o Código Anti-Rejeição agora"
              target="_blank"
              rel="noreferrer"
            >
              <div className="offer-cta-sheen" />
              <div className="btn-content">
                <p className="btn-text">QUERO ACESSAR O CÓDIGO ANTI-REJEIÇÃO AGORA</p>
                <p className="btn-sub">ACESSO IMEDIATO | 100% ONLINE | GARANTIA DE 7 DIAS</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <SocialProofPopup />
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
