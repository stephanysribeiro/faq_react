import styles from './faqData.module.css';
import React from 'react';

// Iniciar sessão no Zscaler (zscaler)
import barraIcones from "../../assets/barraIcones.png";
import barraPesquisa from "../../assets/barraPesquisa.png";
import ZscalerIPN from "../../assets/ZscalerIPN.png";
import IPNOkta from "../../assets/IPNOkta.png";

// Imagens para configuração do Okta (okta verify)
import image1 from "../../assets/oktaConfig/image1.svg";
import image2 from "../../assets/oktaConfig/image2.svg";
import image3 from "../../assets/oktaConfig/image3.svg";
import image4 from "../../assets/oktaConfig/image4.svg";
import image5 from "../../assets/oktaConfig/image5.svg";
import image6 from "../../assets/oktaConfig/image6.svg";
import image7 from "../../assets/oktaConfig/image7.svg";
import image8 from "../../assets/oktaConfig/image8.svg";
import image9 from "../../assets/oktaConfig/image9.svg";
import image10 from "../../assets/oktaConfig/image10.svg";


//Imagens para se conectar a unidade de rede (geral)
import img1 from "../../assets/unidRedeGeral/img1.svg";
import img2 from "../../assets/unidRedeGeral/img2.svg";
import img3 from "../../assets/unidRedeGeral/img3.svg";
import img4 from "../../assets/unidRedeGeral/img4.svg";
import img5 from "../../assets/unidRedeGeral/img5.svg";
import img6 from "../../assets/unidRedeGeral/img6.svg";
import img7 from "../../assets/unidRedeGeral/img7.svg";
import img8 from "../../assets/unidRedeGeral/img8.svg";
import img9 from "../../assets/unidRedeGeral/img9.svg";


// Componente para conteúdo do Zscaler
export const ZscalerLoginContent = () => (
    <>
        <h5>Passo 1</h5> <br />

        <p>Para nos conectarmos ao Zscaler precisamos de abrir a aplicação, sendo que a mesma pode ser aberta de duas formas: <br /> <br />
            Na barra de ícones junto ao relógio do Windows podemos encontrar o ícone Zscaler.</p> <br />
        <img src={barraIcones} alt="Barra de ícones do Windows com o Zscaler" />
        <br /> <br />
        Ou pesquise Zscaler na barra de pesquisa. <br /> <br />
        <img src={barraPesquisa} alt="Barra de pesquisa do Windows" /> <br /><br />
        <h5>Passo 2</h5> <br />
        <p>Para iniciar sessão, é necessário utilizarmos o nosso IPN Renault e a respetiva palavra-passe.</p> <br /><br />

        <img src={ZscalerIPN} alt="Tela de login do Zscaler" /> <br /><br />
        <h5>Passo 3</h5><br />
        <p>Depois de introduzir o IPN e a palavra-passe, irá pedir-nos para entrar no Okta Verify que teremos de ter configurado previamente. Para configurar o OKTA clique neste link.</p>
        <br />
        <img src={IPNOkta} alt="Tela de verificação Okta" />
    </>
);

// Componente para conteúdo do Okta
export const OktaConfigContent = () => (
    <>
        <h5>Pré-requisitos</h5>
        <p> Tenha o Okta Verify instalado no seu telemóvel.</p>
        <br />
        <h5>Passo 1</h5>
        <p>Após a autenticação, uma segunda autenticação será solicitada. Escolha a opção "Okta Verify.</p>
        <br />
        <img src={image1} alt="Tela de seleção do Okta Verify" />
        <br /> <br />
        <p>Um QR Code será disponibilizado.</p>
        <br />
        <img src={image2} alt="QR Code do Okta" />
        <br /> <br />
        <h5>Passo 2</h5>
        <p>No seu telemóvel, entre na aplicação Okta Verify. Clique no botão "+" no canto superior direito da tela.</p>
        <br />
        <img src={image3} alt="Botão de adicionar conta no Okta" />
        <br /><br />
        <p>Selecione a opção "Organização".</p>
        <br />
        <img src={image4} alt="Opção de organização" />
        <br /> <br />
        <h5> Passo 3</h5>
        <p>Caso seja pedido para "Adicionar conta de outro dispositivo", clique em "Ignorar".</p>
        <br />
        <img src={image5} alt="Tela de adicionar conta de outro dispositivo" />
        <br /> <br />
        <p>Clique em "Sim, pronto para ler o código".</p>
        <br />
        <img src={image6} alt="Opção de ler código" />
        <br /> <br />
        <h5>Passo 4</h5>
        <p>Escaneie o QR Code que aparece na tela do seu computador.</p>
        <br />
        <img src={image7} alt="Escaneando o QR Code" />
        <br /><br />
        <p>Habilite um método de autenticação no seu telemóvel (biométrica, Face ID), caso não possua.</p>
        <img src={image8} alt="Escaneando o QR Code" />
        <br /> <br />
        <p>Caso seja pedido para "Definir como conta Okta FastPass padrão", clique em "Ignorar".</p>
        <br />
        <img src={image9} alt="Escaneando o QR Code" />
        <br /><br />
        <p>Clique em "Feito".</p>
        <br />
        <img src={image10} alt="Escaneando o QR Code" />
        <br />
    </>
);

export const UnidadeRedeGeral = () => (
    <>
    <h5>Passo 1</h5>
    <br />
    <p>Verifique se possui o Zscaler ativo.</p>
    <br />
    <img src={img1}/>
    <br /><br />
    <p>Se não estiver ativo aparecerá assim:</p>
    <br />
    <img src={img2}/>
    <br /> <br />
    <p>Para resolver isso, entre na aplicação Zscaler e clique em "Login".</p>
    <br />
    <img src={img3}/>
    <br /> <br />
    <p>Para iniciar a sessão, digite no campo "Nome de usuário/utilizador" o seu IPN Renault. Exemplo: "pp01..."</p>
    <br />
    <img src={img4}/>
    <br /><br />
    <p>Uma notificação push será enviada para o dispositivo em que o Okta Verify instalado e configurado. Clique no número fornecido para prosseguir.</p>
    <br />
    <img src={img5}/> <br /><br />

    <h5>Passo 2</h5>
    <br />
    <p>Entre no "Explorador de Ficheiros" disponível no seu dispositivo. </p>
    <br />
    <img src={img6}/>
    <br /> <br />
    <p>Dentro da pasta "Este PC" procure a unidade de rede "data1".</p>
    <br />
    <img src={img7}/>  <img src={img8}/>
    <br /><br />
    <p>Clique sobre a unidade de rede "data1". Uma nova página irá aparecer. Clique em "Mais opções".</p>
    <br />
    <img src={img9}/>
    <br />
    </>
);

// Dados para cada categoria de FAQ
const faqData = {
    geral: {
        title: "geral",
        items: [
            {
                question: "COMO SE CONECTAR A UNIDADE DE REDE I: ",
                answer: <UnidadeRedeGeral />
            },
            {
                question: "COMO REMOVER A AUTENTICAÇÃO BIOMÉTRICA DO OKTA VERIFY?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
            },
            {
                question: "COMO POSSO OBTER O MANUAL DO UTILIZADOR DO MEU VEÍCULO?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
            }
        ]
    },
    servicenow: {
        title: "servicenow",
        items: [
            {
                question: "PERDI O MANUAL DO UTILIZADOR DO MEU VEÍCULO. COMO PODEREI OBTER OUTRO?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body."
            },
            {
                question: "COMO OBTER OS CERTIFICADOS NECESSÁRIOS PARA MATRICULAR O MEU VEÍCULO (IMPORT/EXPORT)?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
            },
            {
                question: "COMO POSSO OBTER O MANUAL DO UTILIZADOR DO MEU VEÍCULO?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
            }
        ]
    },
    zscaler: {
        title: "zscaler",
        items: [
            {
                question: "COMO INICIAR SESSÃO NO ZSCALER?",
                answer: <ZscalerLoginContent />
            },
            {
                question: "COMO OBTER OS CERTIFICADOS NECESSÁRIOS PARA MATRICULAR O MEU VEÍCULO (IMPORT/EXPORT)?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
            },
            {
                question: "COMO POSSO OBTER O MANUAL DO UTILIZADOR DO MEU VEÍCULO?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
            }
        ]
    },
    oktaverify: {
        title: "okta verify",
        items: [
            {
                question: "COMO CONFIGURAR O OKTA VERIFY?",
                answer: <OktaConfigContent />
            },
            {
                question: "COMO REMOVER A AUTENTICAÇÃO BIOMÉTRICA DO OKTA VERIFY?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
            },
            {
                question: "COMO POSSO OBTER O MANUAL DO UTILIZADOR DO MEU VEÍCULO?",
                answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."
            }
        ]
    }
};

// Categorias no menu
export const menuCategories = [
    'servicenow',
    'geral',
    'okta verify',
    'horse.net',
    'okta verify', // Duplicado conforme original
    'zscaler',
    'horse.net' // Duplicado conforme original
];

export default faqData;