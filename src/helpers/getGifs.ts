export const getGifs = async (category: any) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=xi2m2CCryUJnncBlZaT4bBQBxDbJ4gDe`
    const {data} = await (await fetch(url)).json();

    const gifs = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}
