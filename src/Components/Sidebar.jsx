
import React, { useEffect, useState } from 'react'

const Sidebar = () => {
    const [news, setnews] = useState([]);
    let fetchHeadlines = async()=>{
        let res = await fetch(' https://newsapi.org/v2/top-headlines?country=us&apiKey=f49e05fbd4c64d83b851323e2eb7031a')

        let data = await res.json()
        console.log(data)
        setnews(data.articles)

    }

    useEffect(()=>{
fetchHeadlines()
    },[])
  return (
    <div>
       {news.map((ele)=>{
        return <div className='Animate'>
            <p style={{color:'white'}}><li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo minus cupiditate est, impedit labore accusantium quo nam quis ad fugit ipsam officia ut harum asperiores, qui dignissimos. Modi, obcaecati corrupti?</li></p>
        </div>
             
      })}
    </div>
  )
}

export default Sidebar
