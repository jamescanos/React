// La única condición para trabajar con await es estar dentro de un async
const getImagen = async() => {
    
    try{

        const apiKey = 'Lmf7q2827lorwEjjr2MbDJK2FSJxeFsX';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        console.log( data );
        const { url } = data.images.original;
        
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    }catch ( error ){
        console.log(error);
    }

    

}

getImagen();