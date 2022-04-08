
function PhotoComponent({item}){
    return(
        <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/>
                <image href={item.url} height="225" width="100%" preserveAspectRatio="none"/>
                </svg>

                <div class="card-body cardAreaText">
                    <p class="card-text">{item.title}</p>
                </div>
            </div>
        </div>
    )
}

export default PhotoComponent