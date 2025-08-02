import React, { useMemo } from 'react'
import FilterIcon from '../../components/icons/FilterIcon'
import Content from '../../data/content.json'

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
            
          </div>
        </div>
        <div className='w-2/3 p-4 m-10 border rounded-lg'>
          <p className='text-2xl text-black font-bold'>{filteredCategories?.description}</p>   
        </div>
      </div>
    </div>
  )
}

export default ProductListPage