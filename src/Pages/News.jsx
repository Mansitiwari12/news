import React, { useEffect, useRef, useState } from 'react'

import Sidebar from '../Components/Sidebar';

const Home = (props) => {

    console.log(props.ans)
    const [newsArray, setnewsArray] = useState([]);
const [search, setsearch] = useState("world");
    let newsRef = useRef()


    let fetchNews = async () => {
        let res = await fetch(`https://newsapi.org/v2/everything?q=
        ${props.ans?props.ans:search}&apiKey=f49e05fbd4c64d83b851323e2eb7031a`)

        let data = await res.json()
        // console.log(data.articles)
        setnewsArray(data.articles)


    }

    // fetchNews()
    useEffect(() => {
        fetchNews()
    }, [search,props.ans])
    // console.log(newsArray)


const handleNewsSearch =(e)=>{
    e.preventDefault()
    let searchValue = newsRef.current.value
    console.log(searchValue)
    setsearch(searchValue)      
}

    return (

<div>
    
<div>
        <form className="d-flex col-md-6 m-auto my-3" role="search">
            <input ref={newsRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={handleNewsSearch} className="btn btn-outline-success" type="submit">Search</button>
        </form>

    </div>
        <div className='container-fluid d-flex bg-black justify-content-center mt-3'>           
            <div className="row col-md-9  gap-4 bg-black w-75 d-flex justify-content-center mt-3">
                {newsArray?.map((ele) => {
                    return <div className="card" style={{ width: '18rem'}}>
                        <img style={{ height: "250px" }} src={ele.urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-truncate">{ele.title}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="#" className="btn btn-success">View full news</a>
                        </div>
                    </div>

                })}
            </div>

            <div className=' col-md-3 Box1'>
                <h3 className='text-center mb-4 Headlines'> <span>Top Headlines</span></h3>
                <Sidebar />
            </div>
        </div>
</div>
    )
}

export default Home
