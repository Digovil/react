// Fetch to GET /v1/clips/search
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=k7rBWmq9wZHHNNYylaNCHZF84XKI44KQ&q=${ encodeURI( category ) }`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(({id,title,images})=>{
      return {
        id,
        title,
        url:images?.downsized_medium.url
      }
    });

    return gifs;
}
