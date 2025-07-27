import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Cards from './Cards/Cards'
import Carousel from 'react-multi-carousel'
import './NewArrivals.css';
import { responsive } from '../../utils/Section.constants';

import Jeans from '../../assets/images/jeans.jpg'
import TShirt from '../../assets/images/tshirts.jpeg' 
import Shirts from '../../assets/images/shirts.jpg'
import Dresses from '../../assets/images/dresses.jpg'

const products = [
  { image: Jeans, title: 'Jeans' },
  { image: TShirt, title: 'T-Shirt' },
  { image: Shirts, title: 'Shirts' },
  { image: Dresses, title: 'Dresses' },
  { image: Jeans, title: 'Jeans' },
  { image: TShirt, title: 'T-Shirt' },
  { image: Shirts, title: 'Shirts' },
  { image: Dresses, title: 'Dresses' },
  { image: Jeans, title: 'Jeans' },
  { image: TShirt, title: 'T-Shirt' },
  { image: Shirts, title: 'Shirts' },
  { image: Dresses, title: 'Dresses' },
  
];

const NewArrivals = () => {
  return (
    <div>
        <SectionHeading title={'|  New Arrivals'}/>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true} 
          swipeable={true}
          draggable={true}
          showDots={false}
          pauseOnHover={true}
          keyBoardControl={true}
          partialVisbile={false}
          itemClass={'react-slider-custom-item'}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className='px-8'  
        >
          {products && products?.map((item, index) => <Cards key = {item?.title + index} title={item.title} image={item.image} />)}
        </Carousel>

             
    </div>
  )
}

export default NewArrivals