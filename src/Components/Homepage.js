import React, {useEffect, useState} from "react"
import PhotoComponent from "./Photo"

function Homepage(){
    const [photos, setPhotos] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(true)
    
    useEffect(() => {
        async function getData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await res.json();
            setPhotos(data)
        }
        getData()
        
        setTimeout(() => {
            setLoadingStatus(false)
        }, 2000)
    }, [])
    
    return (
    <div class="d-flex flex-column min-vh-100">
        <header>
            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="/" class="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <strong>Album</strong>
                    </a>
                </div>
            </div>
        </header>

        <main>
            <div class="album py-5">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {loadingStatus ? <div class="loader"></div> : photos.slice(0, 20).map(item => <PhotoComponent key={item.id} item={item} />)}
                    </div>
                </div>
            </div>
        </main>

        <footer class="py-4 bg-dark mt-auto">
        </footer>
    </div>
    )
}

export default Homepage;
