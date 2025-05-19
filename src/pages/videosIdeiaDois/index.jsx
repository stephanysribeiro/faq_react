import React from 'react'
import HeaderBlack from "../../components/header/headerBlack"
import styles from './videosDois.module.css'
import windowsImg from '../../assets/windows.svg'
import { GoArrowUpRight } from "react-icons/go";
import ftTeste from '../../assets/mainHome.svg';

const dataCardsHeader = [
    { id: 1, title: 'horse.net' },
    { id: 2, title: 'servicenow' },
    { id: 3, title: 'okta verify' },
    { id: 4, title: 'authenticator' },
]


function VideosDois() {
    return (
        <>
            <HeaderBlack />
            <div className={`container ${styles.container}`}>
                <div className={`container-header ${styles.containerHeader}`}>
                    <h1>OS NOSSOS VÍDEOS</h1>
                    <p>Explore nossos vídeos explicativos e encontre respostas rápidas para suas <br /> dúvidas sobre as novas ferramentas.
                    </p>
                </div>
            </div>
            <div className={`second-title-box ${styles.secondTitle}`}>
                <h1>os nossos vídeos tutoriais</h1>
                <p>Descubra os vídeos explicativos da Renault e
                    torne-se um especialista.</p>
            </div>
            <div className={`containerBox ${styles.containerBox}`}>
                {dataCardsHeader.map((item) => (

                    <div key={item.id} className={`box ${styles.box}`}>
                        <div className={`ripple-effect ${styles.rippleEffect}`}></div>
                        <div className={`arrow-div ${styles.arrowDiv}`}>
                            <GoArrowUpRight className={`arrow-box ${styles.arrowBox}`} />
                        </div>
                        <h1 className={`title-box ${styles.titleBox}`}>{item.title}</h1>
                    </div>

                ))}
            </div>

            <div className={`container-img ${styles.containerImg}`}>
                <div className={`container-img-text ${styles.containerImgText}`}>
                    <h1>horse.net e windows 11</h1>
                </div>
                <div className={`container-img-img ${styles.containerImgImg}`}>
                    <img src={windowsImg} alt="" />
                </div>
            </div>

            <div className={`accordion-horsenet ${styles.accordionHorseNet}`}>
                <div className={`accordion ${styles.accordion}`} id="accordionExample">
                    <div className={`accordion-item ${styles.accordionItem}`}>
                        <h2 className={`accordion-header ${styles.accordionHeader}`}>
                            <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                novidades
                            </button>
                        </h2>
                        <div id="collapseOne" className={`accordion-collapse collapse show ${styles.accordionCollapse}`} data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <div className={`card mb-3 ${styles.card}`}  >
                                    <div className={`row g-0 ${styles.row}`}>
                                        <div className={`col-md-4 ${styles.col4}`}>
                                            <img src={ftTeste} className={`img-fluid rounded-start ${styles.imgFluid}`} alt="..." />
                                        </div>
                                        <div className={`col-md-8 ${styles.col8}`}>
                                            <div className={`card-body ${styles.cardBody}`}>
                                                <h5 className={`card-title ${styles.cardTitle}`}>problemas com a configuração inicial</h5>
                                                <p className={`card-text ${styles.cardText}`}>This is a wider card with supporting text below as a natural lead-in to <br />
                                                    additional content. This content is a little bit longer.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`card mb-3 ${styles.cardSec}`}>
                                    <div className={`row g-0 ${styles.row}`}>
                                        {/* Texto primeiro */}
                                        <div className={`col-md-8 ${styles.col8}`}>
                                            <div className={`card-body ${styles.cardBody}`}>
                                                <h5 className={`card-title ${styles.cardTitle}`}>
                                                    novas funcionalidades do horse.net
                                                </h5>
                                                <p className={`card-text ${styles.cardText}`}>
                                                    This is a wider card with supporting text below as a natural lead-in to <br />
                                                    additional content. This content is a little bit longer.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Imagem depois */}
                                        <div className={`col-md-4 ${styles.col4}`}>
                                            <img
                                                src={ftTeste}
                                                className={`img-fluid rounded-end ${styles.imgFluid}`}
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={`card mb-3 ${styles.card}`}  >
                                    <div className={`row g-0 ${styles.row}`}>
                                        <div className={`col-md-4 ${styles.col4}`}>
                                            <img src={ftTeste} className={`img-fluid rounded-start ${styles.imgFluid}`} alt="..." />
                                        </div>
                                        <div className={`col-md-8 ${styles.col8}`}>
                                            <div className={`card-body ${styles.cardBody}`}>
                                                <h5 className={`card-title ${styles.cardTitle}`}>problemas com a configuração inicial</h5>
                                                <p className={`card-text ${styles.cardText}`}>This is a wider card with supporting text below as a natural lead-in to <br />
                                                    additional content. This content is a little bit longer.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${styles.accordionItem}`}>
                        <h2 className={`accordion-header ${styles.accordionHeader}`}>
                            <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                problemas com autenticação
                            </button>
                        </h2>
                        <div id="collapseTwo" class={`accordion-collapse collapse ${styles.accordionCollapse}`} data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
        </>
    )
}
export default VideosDois