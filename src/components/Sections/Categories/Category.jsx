import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Cards/Cards'

const Category = ({title, data}) => {
  return (
      <div className='ml-12 mr-12 mt-12 mb-12 rounded-lg'>
      <SectionHeading title={title}/>
      <div className='flex flex-wrap gap-x-8 gap-y-8 px-4 justify-start'>
        {data && data?.map((item,index)=>{
            return (
                <Card key={index} title={item?.title} description={item?.description} image={item?.image}
                actionArrow={true} height={'280px'} width={'240px'}/>
            )
      })}
      </div>
      </div>
    )
}

export default Category;