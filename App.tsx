
import React from 'react';
import WhatsAppButton from './components/WhatsAppButton';

declare global {
  interface Window {
    kwaiq: any;
  }
}

const BenefitItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex flex-col items-center p-2 bg-slate-700/50 rounded-lg">
    <div className="text-green-400 mb-2">{icon}</div>
    <span className="text-xs md:text-sm text-center text-gray-300">{text}</span>
  </div>
);

const App: React.FC = () => {
  const ctaLink = 'https://bit.ly/emagreca-777';

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.kwaiq) {
      try {
        window.kwaiq.track('addToCart');
      } catch (error) {
        console.error("Kwai pixel tracking failed:", error);
      }
    }
    setTimeout(() => {
      window.location.href = ctaLink;
    }, 300);
  };

  const benefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
      text: "Acelera o Metabolismo"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
      text: "Fórmula 100% Natural"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      text: "Mais Energia e Disposição"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      text: "Resultados Comprovados"
    }
  ];

  const faqs = [
    {
      question: "Como devo tomar o GraoKiseca?",
      answer: "Recomendamos a ingestão de duas cápsulas ao dia, uma antes do almoço e outra antes do jantar, para melhores resultados."
    },
    {
      question: "O produto possui contraindicações?",
      answer: "Por ser um composto 100% natural, GraoKiseca não possui efeitos colaterais ou contraindicações. No entanto, gestantes devem consultar um médico antes de iniciar o uso."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega varia de 3 a 10 dias úteis, dependendo da sua região. Você receberá o código de rastreio por e-mail para acompanhar seu pedido."
    }
  ];

  return (
    <div className="bg-slate-900 text-white flex flex-col items-center p-4 font-sans antialiased overflow-x-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <main className="relative z-10 max-w-2xl w-full bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-green-900/20 text-center flex flex-col items-center my-24">
        
        <div className="p-6 md:p-10 w-full flex flex-col items-center">
          <a
            href={ctaLink}
            onClick={handleCTAClick}
            rel="noopener noreferrer"
            aria-label="Acessar a promoção exclusiva - Últimas vagas"
          >
            <img
              src="https://i.imgur.com/pl5aofn.png"
              alt="Últimas vagas com valor promocional"
              className="rounded-full border-4 border-green-400 shadow-lg w-32 h-32 md:w-40 md:h-40 -mt-20 md:-mt-24 mb-4 transition-transform duration-300 hover:scale-105 object-cover"
            />
          </a>

          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 mb-2 drop-shadow-lg">
            GraoKiseca
          </h1>

          <p className="text-lg md:text-2xl font-semibold text-gray-200 mb-6 max-w-lg">
            O suplemento natural que <span className="text-green-400">elimina peso</span> sem dietas restritivas e exercícios cansativos.
          </p>

          <div className="w-full max-w-sm my-6 rounded-lg overflow-hidden shadow-lg border border-slate-700 mx-auto">
            <a
              href={ctaLink}
              onClick={handleCTAClick}
              rel="noopener noreferrer"
              aria-label="Acessar a promoção exclusiva"
            >
              <img
                  src="https://i.imgur.com/ZFCOE9P.jpeg"
                  alt="Apresentação do produto GraoKiseca"
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          <p className="text-gray-300 mb-6 font-medium text-lg">
            Clique abaixo para entrar no nosso <strong className="text-white">Grupo VIP do WhatsApp</strong> e garantir sua <strong className="text-green-400">promoção exclusiva!</strong>
          </p>

          <div className="w-full max-w-md">
              <WhatsAppButton text="PROMOÇÃO NO GRUPO DO WHATSAPP" href={ctaLink} onClick={handleCTAClick} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 w-full max-w-xl">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} icon={benefit.icon} text={benefit.text} />
            ))}
          </div>

          <div className="w-full max-w-xl mt-10 text-left border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-center text-green-400 mb-6">Dúvidas Frequentes</h2>
              <div className="space-y-6">
                  {faqs.map((faq, index) => (
                      <div key={index}>
                          <h3 className="font-semibold text-lg text-gray-200">{faq.question}</h3>
                          <p className="text-gray-400 text-sm mt-1">{faq.answer}</p>
                      </div>
                  ))}
              </div>
          </div>
          
          <div className="w-full max-w-md mt-10">
              <WhatsAppButton text="PROMOÇÃO NO GRUPO DO WHATSAPP" href={ctaLink} onClick={handleCTAClick} />
          </div>

          <p className="text-sm text-gray-400 mt-8">
            *Ofertas especiais no grupo. Planos a partir de <span className="font-bold text-lg text-green-300">R$197</span>. Vagas limitadas.
          </p>
        </div>
      </main>

      <footer className="relative z-10 mb-8 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} GraoKiseca. Todos os direitos reservados.</p>
      </footer>
      
      <a
        href={ctaLink}
        onClick={handleCTAClick}
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-whatsapp-float"
      >
        <style>
          {`
            @keyframes pulse-whatsapp-float {
              0%, 100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
              }
              50% {
                transform: scale(1.05);
                box-shadow: 0 0 0 12px rgba(34, 197, 94, 0);
              }
            }
            .animate-pulse-whatsapp-float {
              animation: pulse-whatsapp-float 2s infinite;
            }
          `}
        </style>
        <svg
          height="28"
          width="28"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
