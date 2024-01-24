import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageCarrossel, ContainerImagemCarrossel } from './style'

const CarrosselVenda = () => {
  return (
    <Swiper slidesPerView={3} navigation loop>
      <SwiperSlide>
        <ContainerImagemCarrossel>
          <ImageCarrossel
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240109/ford-ecosport-2.0-freestyle-plus-16v-flex-4p-powershift-wmimagem12310039852.jpg?s=fill&w=552&h=414&q=60"
            alt=""
          />
        </ContainerImagemCarrossel>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerImagemCarrossel>
          <ImageCarrossel
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240109/ford-ecosport-2.0-freestyle-plus-16v-flex-4p-powershift-wmimagem12311113673.jpg?s=fill&w=552&h=414&q=60"
            alt=""
          />
        </ContainerImagemCarrossel>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerImagemCarrossel>
          <ImageCarrossel
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240109/ford-ecosport-2.0-freestyle-plus-16v-flex-4p-powershift-wmimagem12331361510.jpg?s=fill&w=552&h=414&q=60"
            alt=""
          />
        </ContainerImagemCarrossel>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerImagemCarrossel>
          <ImageCarrossel
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240109/ford-ecosport-2.0-freestyle-plus-16v-flex-4p-powershift-wmimagem12313350956.jpg?s=fill&w=552&h=414&q=60"
            alt=""
          />
        </ContainerImagemCarrossel>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerImagemCarrossel>
          <ImageCarrossel
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240109/ford-ecosport-2.0-freestyle-plus-16v-flex-4p-powershift-wmimagem12320095278.jpg?s=fill&w=552&h=414&q=60"
            alt=""
          />
        </ContainerImagemCarrossel>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerImagemCarrossel>
          <ImageCarrossel
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240109/ford-ecosport-2.0-freestyle-plus-16v-flex-4p-powershift-wmimagem12314813748.jpg?s=fill&w=552&h=414&q=60"
            alt=""
          />
        </ContainerImagemCarrossel>
      </SwiperSlide>
    </Swiper>
  )
}

export default CarrosselVenda