function dibujar (url, id){$(`#${id}`).html(`<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
}
// dibujar("https://www.youtube.com/embed/6Hhckwi_w5g?start=15","peliculas");
// dibujar("https://www.youtube.com/embed/6Hhckwi_w5g?start=15","musica");
// dibujar("https://www.youtube.com/embed/QqtHBNLWfew?start=15","series");

class Multimedia{
    constructor(url){
        this._url = url
    }
    get url (){
        return this._url;
    }
    setInicio (){
        return "" ;

    }
}
class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this._id = id;
    }
    playMultimedia() {
        dibujar(this._url, this._id);
    }

    setInicio (tiempo){
        this._url  += `?start=${tiempo}`;
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/tSY3CWbH7mk" , 'musica')
const series = new Reproductor("https://www.youtube.com/embed/6Hhckwi_w5g" , 'series')
const peliculas = new Reproductor("https://www.youtube.com/embed/QqtHBNLWfew" , 'peliculas')

musica.setInicio ('20');
musica.playMultimedia();
series.setInicio ('200');
series.playMultimedia();
peliculas.setInicio('2500');
peliculas.playMultimedia();



/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/tSY3CWbH7mk?start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Hhckwi_w5g?start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/QqtHBNLWfew?start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/