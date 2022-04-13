export const getGifs = async(categoria) => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=4&api_key=YBh7PaAREgcHgQhwfakTFRdvsy6LK8mW`);
    const {data} = await res.json();

    const gifs = data.map(img => {
        return { 
            id: img.id, 
            title: img.title, 
            url: img.images?.downsized_medium.url 
        }
    })

    // setImages(gifs);
    return gifs;
}