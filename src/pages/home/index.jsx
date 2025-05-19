//import { useState } from 'react'
import React from 'react'
import styles from './home.module.css'
import Header from '../../components/header/headerBlack'
import mainImg from '../../assets/mainHome.svg'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    // Adicionar uma classe única ao body
    document.body.className = styles.bodyHome

    // Limpar quando o componente for desmontado
    return () => {
      document.body.className = ''
    };
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img src={mainImg} className={styles.mainImg} />
        <div className={styles.textContainer}>
          <h1 className={styles.h1Top}>ENCONTRE AS RESPOSTAS  </h1>
          <h1 className={styles.h1Bottom}>ÀS SUAS PERGUNTAS.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco
            laboris nisi ut aliquip ex ea commodo <br />consequat. </p>
        </div>
      </div>
    </>
  )
}

export default Home
