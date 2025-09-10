import { useState } from 'react'
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  // state 存储服务数据
  const [servicesData, setServicesData] = useState(services)

  // 删除服务的函数
  const removeService = (id) => {
    const newServices = servicesData.filter(service => service.id !== id)
    setServicesData(newServices)
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return (
            <Service 
              key={service.id} 
              {...service} 
              removeService={() => removeService(service.id)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Services
