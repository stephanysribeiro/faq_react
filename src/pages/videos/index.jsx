import React, { useEffect } from 'react'
import image from '../../assets/mainHome.svg'
import HeaderBlack from "./../../components/header/headerBlack"
import styles from './videos.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules';

const data = [
    { id: 1, image: image, title: 'Login' },
    { id: 2, image: image, title: 'Backup/Restore' },
    { id: 3, image: image, title:'Reset' },
    { id: 4, image: image, title:'Add and Install' },
    { id: 5, image: image, title:'Setup Windowns Hello' },
    { id: 6, image: image, title:'Novas Funcionalidades'  },
    { id: 7, image: image, title:'Acesso a aplicações'  },
    { id: 8, image: image, title:'Custumização do seu PC' },
    { id: 9, image: image, title:'Configurações'  },
    { id: 10, image: image, title:'Problemas com o Login'  },
]

function Videos() {
    useEffect(() => {
        document.body.className = styles.bodyVideos

        return () => {
            document.body.className = ''
        }
    }, [])

    return (
        <>
            <HeaderBlack />
            <div className={`container ${styles.container}`}>
                <div className={`container-header ${styles.containerHeader}`}>
                    <h1>OS NOSSOS VÍDEOS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
            </div>
           
            <div className={`container-swiper-um ${styles.swiperContainer}`}>
                <h1>Horse.Net</h1>
                <p>Torne-se um especialista em HorseNet com os nossos vídeos tutoriais</p>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation]}
                    className={`my-swiper ${styles.mySwiper}`}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                                <img src={image} alt="" className={`card-img-top slide-item ${styles.cardImgTop}`} />
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>{item.title}</h5>
                                    <p className={`card-text ${styles.cardText}`}>some quick example</p>
                                    <a href="#" className={`btn btn-primary ${styles.btn}`}>Ver mais</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}

export default Videos