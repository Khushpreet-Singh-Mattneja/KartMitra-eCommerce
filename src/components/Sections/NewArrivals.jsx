import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Cards from './Cards/Cards'
import Carousel from 'react-multi-carousel'
import './NewArrivals.css';
import { responsive } from '../../utils/Section.constants';

import TShirt from '../../assets/images/new_arrivals/tshirts.jpeg';
import Shirts from '../../assets/images/new_arrivals/shirts.png';
import Jeans from '../../assets/images/new_arrivals/jeans.jpg';
import Hoodies from '../../assets/images/new_arrivals/hoodies.jpeg';
import Jackets from '../../assets/images/new_arrivals/blazers.jpeg';
import Trousers from '../../assets/images/new_arrivals/joggers.jpeg';
import CoordSets from '../../assets/images/new_arrivals/coordsets.jpeg';
import Cargo from '../../assets/images/new_arrivals/cargos.jpg';
// Import other images as needed

const products = [
  { image: TShirt, title: 'T-Shirts' },
  { image: Shirts, title: 'Shirts' },
  { image: Jeans, title: 'Jeans' },
  { image: Hoodies, title: 'Hoodies'},
  { image: Jackets, title: 'Blazers' },
  { image: Trousers, title: 'Trousers & Joggers' },
  { image: CoordSets, title: 'Co-ord Sets' },
  { image: Cargo, title: 'Cargo' },
  // Add more products as needed
  // { image: 'path/to/image3.jpg', title: 'Product 3' },
];


const NewArrivals = () => {
  return (
    <div className='ml-20 mr-12 mt-12 mb-12 rounded-lg'>
        <SectionHeading title={'|  New Arrivals'}/>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1800}
          infinite={true} 
          swipeable={true}
          draggable={true}
          showDots={false}
          pauseOnHover={true}
          keyBoardControl={true}
          partialVisbile={false}
          itemClass={'react-slider-custom-item'}
          customTransition="transform 800ms ease-in-out"
          transitionDuration={800}
          removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
          className='px-8 py-4'
           
        >
          {products && products?.map((item, index) => <Cards key = {item?.title + index} title={item.title} image={item.image}  />)}
        </Carousel>

             
    </div>
  )
}

export default NewArrivals