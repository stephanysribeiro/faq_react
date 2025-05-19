import React, { useState } from 'react'
import HeaderBlack from "../../components/header/headerBlack"
import styles from './horsenet.module.css'
import fundoWindows from '../../assets/fundoWindows.svg'
import img1 from "../../assets/horseNet/img1.svg"
import img2 from "../../assets/horseNet/img2.svg"
import img3 from "../../assets/horseNet/img3.svg"
import img4 from "../../assets/horseNet/img4.svg"
import img5 from "../../assets/horseNet/img5.svg"
// Importe o vídeo do webinar (substitua pelo caminho correto do seu vídeo)
import webinarVideo from "../../assets/videos/webinar.mp4" // Ajuste para o caminho real do seu vídeo



function HorseNet() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <HeaderBlack />
            <div className={styles.imgBack}>
                <img src={fundoWindows} alt="fundo" className={styles.fullImage} />

                <div className={styles.headerContent}>
                    <div className={styles.headerBottom}>
                        <div className={`header-text-container ${styles.textHeader}`}>
                            <h1 className={styles.h1TitleHeader}>HORSE.NET</h1>
                            <p className={styles.subtitleHeader}>
                                Modernizando sistemas, preparando a HORSE para o futuro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`webinar-container ${styles.containerWebinar}`}>
                <h1 className={styles.webinarTitle}>
                    WEBINAR HORSE<span className={styles.dotNet}>.NET</span>
                </h1>
                <p className={styles.webinarSubtitle}>Assista ao webinar e conheça a nova imagem do HORSE.NET e o processo de migração
                    nos <br />computadores ACE2.</p>
                <button className={styles.webinarButton} onClick={openModal}>assista agora</button>
            </div>
            <div className={`container-about ${styles.about}`}>
                <img src={img1} alt="" className={styles.img1} />
                <div className={styles.aboutTxt}>
                    <h4 className={styles.aboutTitle}>O QUE É O HORSE.NET?</h4>
                    <p className={styles.aboutSubtitle}>O HORSE.NET é mais um marco importante da <br />
                        nossa transição para a HORSE, modernizando <br />
                        os nossos sistemas e preparando assim a <br />
                        nossa organização para o futuro.
                    </p>
                </div>
            </div>
            <div className={`container-functionalities ${styles.containerFunctionalities}`}>
                 <div className={styles.funcTxt}>
                    <h1 className={styles.funcTxtTitle}>NOVAS FUNCIONALIDADES DO WINDOWS 11</h1>
                    <p className={styles.funcTxtSubtitle}>Com esta nova estação de trabalho poderá aproveitar das novas 
                    <br />funcionalidades do windows 11.</p>
                 </div>
                 <div className={styles.funcCards}>
                    <div className={styles.card1}>
                        <img src={img2} alt="" className={styles.cardImg} />
                        <p className={styles.cardTxt}>Tecnologia de IA que o 
                        ajuda <br />com as suas 
                        tarefas de trabalho.</p>
                    </div>
                    <div className={styles.card2} >
                    <img src={img3} alt="" className={styles.cardImg}/>
                        <p className={styles.cardTxt}>Edição de vídeo 
                        integrada.</p>
                    </div>
                    <div className={styles.card3}>
                    <img src={img4} alt="" className={styles.cardImg}/>
                        <p className={styles.cardTxt}>Gravar os conteúdos 
                        apresentados<br /> no seu ecrã.</p>
                    </div>
                 </div>
            </div>
            <div className={`container-migracao ${styles.migracao}`}>
                <div className={styles.migracaoTxt}>
                    <h4 className={styles.migracaoTitle}>MIGRAÇÃO</h4>
                    <p className={styles.migracaoSubtitle}>
                        Esta transição é mais do que uma atualização <br />
                        técnica, faz parte dos nossos esforços contínuos <br />
                        para melhorar a segurança, o desempenho e <br />
                        oferecer uma experiência mais amigável para o <br />
                        utilizador.
                    </p>
                    <button className={styles.migracaoButton}>saber mais </button>
                </div>
                <img src={img5} alt="" className={styles.img5} />
            </div>

            {modalOpen && (
                <div className={styles.videoModal}>
                    <div className={styles.modalContent}>
                        <span className={styles.closeModal} onClick={closeModal}>&times;</span>
                        <video 
                            src={webinarVideo} 
                            className={styles.modalVideo} 
                            controls 
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default HorseNet