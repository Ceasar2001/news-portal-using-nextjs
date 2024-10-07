"use client"


import { fetchNews } from '@/lib/fetchNews';
import { NewsItem } from '@/types/news';
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [category, setCategory] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const getnews = async () => {
            const data = await fetchNews(category, search);
            setNews(data);
        }
        getnews()
    }, [category, search])
  return (
    <div >
        {/* search bar */}
        <SearchBar onSearch = {setSearch}/>

        {/* category filtering */}
        <CategoryFilter  onCategoryChange={setCategory}/>
    </div>
  )
}

export default NewsList