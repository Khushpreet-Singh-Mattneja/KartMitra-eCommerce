import React, { useMemo } from 'react'
import FilterIcon from '../../components/icons/FilterIcon'
import Content from '../../data/content.json'
import Category from '../../components/Filters/Categories'
import PriceFilter from '../../components/Filters/PriceFilter'
import ColorFilter from '../../components/Filters/ColorFilter'
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';

const categories = Content.categories;

const ProductListPage = ({categoryType}) => {

  const filteredCategories = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);
  
  
  return (
    <div>
      <div className="flex p-4">
        <div className='w-1/6 p-4 m-10 border rounded-lg'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold text-slate-600'>Filters</p>
            <FilterIcon />
          </div>
          <div className='mt-4 border-t-2 border-dashed-slate-gray pt-2'>
            <p className='text-xl font-semibold text-black '>Category</p>
            <Category types ={filteredCategories?.types} />
            <br />
            <hr></hr>
          </div>
          {/* Prices */}
          <PriceFilter />
          <br />
          <hr></hr>
          {/* Colors */}
          <ColorFilter colors={filteredCategories?.meta_data?.colors} />
          <br />
          <hr></hr>
          {/* Sizes */}
          <SizeFilter sizes={filteredCategories?.meta_data?.sizes}/>

        </div>
        <div className='p-[15px]'>
          <p className='text-black text-lg'>{Content?.products?.description}</p>
            {/* Products */}
            <div className='pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2'>
              {Content?.products?.map((item,index)=>(
                <ProductCard key={item?.id+"_"+index} {...item} title={item?.name}/>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListPage