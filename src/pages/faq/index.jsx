import React, { useEffect } from 'react';
import styles from './faq.module.css';
import HeaderWhite from '../../components/header/headerWhite';

// Importação dos dados do FAQ
import faqData, { menuCategories } from './faqData.jsx';

// Componente para renderizar uma seção de accordion
const AccordionSection = ({ category, id }) => {
  const categoryData = faqData[id];
  
  if (!categoryData) return null;
  
  return (
    <div className={`container ${styles.container}`}>
      <div className={`accordion-servicenow ${styles.acServiceNow}`}>
        <h2 id={id}>{categoryData.title}</h2>
      </div>
      <div className={`accordion ${styles.accordion}`}>
        <div className={`accordion accordion-flush ${styles.accordionFlush}`} id={`accordionFlush${id.charAt(0).toUpperCase() + id.slice(1)}`}>
          {categoryData.items.map((item, index) => (
            <div className={`accordion-item ${styles.accordionItem}`} key={index}>
              <h2 className={`accordion-header ${styles.accordionHeader}`}>
                <button 
                  className={`accordion-button collapsed ${styles.accordionButton}`} 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#flush-collapse${index}${id}`} 
                  aria-expanded="false" 
                  aria-controls={`flush-collapse${index}${id}`}
                >
                  {item.question}
                </button>
              </h2>
              <div 
                id={`flush-collapse${index}${id}`} 
                className={`accordion-collapse collapse ${styles.accordionCollapse}`} 
                data-bs-parent={`#accordionFlush${id.charAt(0).toUpperCase() + id.slice(1)}`}
              >
                <div className={`accordion-body ${styles.accordionBody}`}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Faq() {
  useEffect(() => {
    // Adicionar uma classe única ao body
    document.body.className = styles.bodyFaq;

    // Limpar quando o componente for desmontado
    return () => {
      document.body.className = '';
    };
  }, []);
  
  // Filtrar apenas categorias que temos dados
  const availableCategories = Object.keys(faqData);
  
  return (
    <>
      <HeaderWhite />
      <div className={`header-container ${styles.headerContainer}`}>
        <h1>Perguntas Frequentes</h1>
        <p>Damos resposta às suas perguntas.
          HorseNet, Okta Verify, Zscaler… <br />
          Encontre aqui todas as respostas que procura.</p>
      </div>
      
      <div className={`menu-accordion ${styles.menuAccordion}`}>
        {menuCategories.map((category, index) => (
          <h4 key={index} onClick={() => {
            const id = category.toLowerCase().replace(/\s/g, '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            {category}
          </h4>
        ))}
      </div>
      
      {/* Renderizar seções de acordo com os dados disponíveis */}
      {availableCategories.map((category, index) => (
        <AccordionSection 
          key={index} 
          category={faqData[category].title} 
          id={category} 
        />
      ))}
    </>
  );
}

export default Faq;