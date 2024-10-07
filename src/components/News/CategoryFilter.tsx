import React from 'react'
import{ Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CategoryFilterProps{
    onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({onCategoryChange}: CategoryFilterProps) => {
    const categories = ["all", 'tech', 'health', 'sports', 'business']

  return (
    <div className='flex gap-1 items-center justify-center mx-4'>
        <h3 className='font-bold text-lg flex-shrink-0'>Filter by Category: </h3>

        <Select onValueChange={(value) => onCategoryChange(value === 'all' ? '' : value)}>
            <SelectTrigger className='w-[180px] border rounded-md capitalize'>
                <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
                {
                    categories.map((category) => (
                        <SelectItem key={category} value={category} className='capitalize'>{category}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    </div>
  )
}

export default CategoryFilter