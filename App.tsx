
import React, { useState, useEffect } from 'react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const BenefitIcon: React.FC<{ path: string }> = ({ path }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845L19.335 24 12 19.563 4.665 24 6 15.268 0 9.423l7.332-1.268L12 .587z" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);


const App: React.FC = () => {
  const ctaLink = 'https://chat.whatsapp.com/Ey8YDUZXrI7AWaY9EU7gi0';
  const [countdown, setCountdown] = useState(3);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    setIsRedirecting(true);

    const redirectTimer = setTimeout(() => {
      window.location.href = ctaLink;
    }, 3000);

    const countdownTimer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const benefitCards = [
    {
      iconPath: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10.5 11.25h3M12 3.75a3 3 0 00-3 3v.75h6v-.75a3 3 0 00-3-3z",
      title: 'Sem Dietas Restritivas',
      description: 'Conquiste o corpo dos seus sonhos com a liberdade de comer o que você mais gosta, sem culpa.'
    },
    {
      iconPath: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
      title: 'Sem Exercícios Exaustivos',
      description: 'Nossa fórmula potente atua na queima de gordura até mesmo enquanto você descansa.'
    },
    {
      iconPath: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-2.08 5.84m-3.76 0a6 6 0 01-5.84-7.38m5.84 7.38v-4.82m-3.76 0a6 6 0 015.84-7.38m-5.84 2.56a6 6 0 017.38 5.84m0 0a6 6 0 01-7.38-5.84m0 0a6 6 0 01-5.84-7.38m0 0a6 6 0 017.38 5.84",
      title: 'Resultados Rápidos e Visíveis',
      description: 'Sinta a diferença na balança e no espelho já na primeira semana de uso contínuo.'
    },
    {
      iconPath: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: '100% Natural e Seguro',
      description: 'Fórmula exclusiva com ingredientes naturais, sem efeitos colaterais e aprovada por especialistas da área.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria S.',
      age: 42,
      result: 'Perdeu 12kg!',
      quote: 'Nunca imaginei que seria tão fácil! Me sinto mais jovem e cheia de energia. Recomendo para todas as minhas amigas.'
    },
    {
      name: 'Juliana P.',
      age: 35,
      result: 'Perdeu 15kg!',
      quote: 'Depois de anos tentando de tudo, finalmente encontrei algo que funciona. Minha autoestima mudou completamente.'
    },
    {
      name: 'Carla M.',
      age: 29,
      result: 'Perdeu 8kg!',
      quote: 'Perdi peso sem abrir mão das comidas que amo. É incrível! O resultado veio muito mais rápido do que eu esperava.'
    }
  ];

  const provenEffects = [
    'Diminui o peso e a obesidade',
    'Controla o ressecamento',
    'Previne e trata hemorróidas',
    'Tem ação diurética e laxante',
    'Não deixa flacidez no corpo',
    'Elimina gordura visceral',
    'Acelera o metabolismo',
    'Combate a celulite',
    'Reduz o apetite',
    'Reduz a ansiedade',
    'Reduz inchaço',
    'Regula o intestino'
  ];


  return (
    <div className="bg-gray-100 text-black antialiased overflow-x-hidden">
       {isRedirecting && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 text-black p-4 rounded-lg shadow-2xl z-50 animate-fade-in-up">
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
            `}</style>
            <p className="text-sm text-gray-600">Você será redirecionado em...</p>
            <p className="text-center text-3xl font-bold text-emerald-500 mt-1">{countdown}</p>
        </div>
      )}

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center px-4 w-full max-w-4xl mx-auto min-h-screen flex flex-col justify-center items-center pt-8">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            O Segredo para Emagrecer Rápido, <span className="text-emerald-500">Sem Passar Fome.</span>
          </h1>
          <p className="text-gray-500 mb-6 text-base uppercase tracking-widest">suplemento natural</p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Descubra o 'grão milagroso' que está revolucionando a perda de peso. Mais potente que capsulas e injeçoes famosas, porém 100% natural e seguro.
          </p>

          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-emerald-600/30 transform hover:scale-105 transition-all duration-300 ease-in-out text-xl uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-7 h-7 mr-3" />
            ENTRE NO GRUPO VIP
          </a>
          <p className="mt-4 text-gray-600 font-semibold">Vagas limitadas. Garanta a sua agora!</p>
          <img 
            src="https://i.imgur.com/qAGvh3A.jpeg" 
            alt="Imagem do Produto Emagrecedor" 
            className="mt-10 max-w-xs mx-auto rounded-lg shadow-2xl shadow-emerald-900/10" 
          />
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 w-full bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por Que Nosso Método é Infálível?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefitCards.map((card, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center border border-gray-200">
                  <BenefitIcon path={card.iconPath} />
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proven Effects Section */}
        <section className="py-20 px-4 w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transforme Seu Corpo Com Efeitos Reais e Comprovados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-700">
              {provenEffects.map((effect, index) => (
                <div key={index} className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{effect}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Veja Quem Já Transformou o Corpo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                  <p className="font-bold text-black">{testimonial.name}, {testimonial.age} anos</p>
                  <p className="text-emerald-400 font-semibold">{testimonial.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 w-full bg-emerald-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Sua Vaga no Grupo VIP Está Expirando!</h2>
            <p className="text-lg md:text-xl mb-6">
              Clique no botão abaixo e garanta seu acesso ao grupo exclusivo. Lá você receberá o link de compra com desconto especial e frete grátis.
            </p>
            <p className="text-2xl font-bold text-yellow-300 animate-pulse mb-8">
              Restam Apenas 17 Vagas Com o Valor Promocional!
            </p>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-200 text-emerald-600 font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-xl uppercase tracking-wider"
            >
              SIM, QUERO GARANTIR MINHA VAGA!
            </a>
            <p className="mt-6 text-lg font-semibold">A partir de R$197 com frete grátis!</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 text-center py-8 px-6 text-xs">
        <p className="mb-4">&copy; {new Date().getFullYear()} Corpo Ideal. Todos os direitos reservados.</p>
        <p className="max-w-2xl mx-auto">Disclaimer: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa. Para obter mais informações, consulte nossos termos de serviço.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar no grupo VIP do WhatsApp"
        className="fixed bottom-5 right-5 z-40 bg-green-500 text-white rounded-full p-4 shadow-xl hover:bg-green-600 transition-colors duration-300 animate-pulse-whatsapp"
      >
          <style>{`
              @keyframes pulse-whatsapp {
                  0% {
                      transform: scale(0.95);
                      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
                  }
                  70% {
                      transform: scale(1);
                      box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
                  }
                  100% {
                      transform: scale(0.95);
                      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
                  }
              }
              .animate-pulse-whatsapp {
                  animation: pulse-whatsapp 2s infinite;
              }
          `}</style>
          <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;
