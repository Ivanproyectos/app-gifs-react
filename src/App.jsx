import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export function App () {
   const [categories, setCategories] = useState(['One Punch', 'Naruto', 'Dragon Ball'])

   const handleAddCategory = (newCategory) => {
     if (categories.includes(newCategory)) return
     setCategories([newCategory, ...categories])
   }

  return (
    <>
     <h1>Gif Expert App</h1>
     <AddCategory onSubmit={handleAddCategory}  />
   
      {categories.map(category => <GifGrid key={category} category={category} />)}
    </>
  )
}
