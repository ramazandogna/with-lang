import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import React, { useState } from 'react';

function SSSquestions() {
   const [activeIndex, setActiveIndex] = useState(null);

   const handleClick = (index) => {
      if (index === activeIndex) {
         setActiveIndex(null);
      } else {
         setActiveIndex(index);
      }
   };

   const questions = [
      {
         id: 1,
         question: 'Neden bu uygulamayı kullanalım?',
         answer:
            'Çünkü sektördeki birçok uygulama sizleri uygulamada uzunca süre tutmayı hedefler, bunun içinse size birçok şeyi ezberletir. Ardından gerçekten de faydalı olmaya başlayacağı o anda premium üyelik almanızı ister ancak withLang tamamen ücretsiz.',
      },
      {
         id: 2,
         question: 'Neden ücretsiz?',
         answer:
            'Uygulama henüz geliştirme aşamasındadır. Amacımız uygulamanın tanınırlığını arttırmak. Sonrasında ise öğrenci ve başka planlar yapmayı düşünmekteyiz.',
      },
      {
         id: 3,
         question: 'Nasıl katkı verebilirim?',
         answer:
            'Arkana yaslan ve çalışmana bak, eğer çok kritik tavsiyelerin varsa mail yoluyla bilgilendirebilirsin.',
      },
      {
         id: 4,
         question: 'Yeni oyunlar eklenecek mi?',
         answer:
            'Uygulamamız geliştirme aşamasındadır, her geçen gün gelişmeye devam edecek.',
      },
      {
         id: 5,
         question: 'Bahsettiğiniz maruz kalma tekniği nedir?',
         answer:
            'Dilleri birer kilit olarak düşünebiliriz, beynimizin en sevdiği şey ise kilitleri ve algoritmaları çözmektir. O dile ne kadar maruz kalırsanız, beyniniz o dilin karmaşık yapısını çözmeye başlar. Unutmayın dil öğrenmek özel bir şey değildir. En basidinden, ana dili İngilizce olan bir ülkede en başarısız insanlar bile ana dili seviyesinde İngilizce biliyorlar, çünkü gördüler, duydular ve tekrar ettiler.',
      },
      {
         id: 6,
         question: 'Her yaşa uygun mu?',
         answer:
            'Evet, uygulamamız Türkçe okuma yazma yetkinliği olan her insan için uygundur.',
      },
   ];

   return (
      <div className="accordion-wrapper">
         {questions.map((q) => (
            <div
               key={q.id}
               className={`accordion-item ${
                  activeIndex === q.id ? 'active' : ''
               }`}
               onClick={() => handleClick(q.id)}
            >
               <div className="accordion-question-wrapper">
                  <div className="accordion-question">{q.question}</div>
                  {activeIndex === q.id ? (
                     <AiOutlineMinus className="accordion-question-icon" />
                  ) : (
                     <AiOutlinePlus className="accordion-question-icon" />
                  )}
               </div>
               {activeIndex === q.id && (
                  <div className="accordion-answer">{q.answer}</div>
               )}
            </div>
         ))}
      </div>
   );
}

export default SSSquestions;
