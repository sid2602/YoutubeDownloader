import Actions from '../Actions';

const fetchMovie = async(URL) => {
    const response = await fetch(`http://localhost:4001/download?URL=${URL}`);
    const json = await response.json();
    return json;
}

const getMovieInfo = (URL) => 
    async(dispatch) => {
        dispatch(Actions.Request());

        try{
            const MovieInfo = await fetchMovie(URL);
            const DataSRC = MovieInfo.player_response.microformat.playerMicroformatRenderer;
            const Wideo = MovieInfo.formats.filter(item => (item.container === "webm" || item.container === "mp4") && item.qualityLabel !== null )

            function Comp (a,b){
               const  qa = parseInt(a.qualityLabel.substr(0,a.qualityLabel.indexOf("p")));
                const qb = parseInt(b.qualityLabel.substr(0,b.qualityLabel.indexOf("p")));
                
                if(qa > qb) return -1;
                if(qb > qa) return 1;

                return 0;
                
            }
            
            Wideo.sort(Comp);
            
            const Data = {
                Title: DataSRC.title.simpleText,
                Thumbinail: DataSRC.thumbnail.thumbnails[0].url,
                Wideo,
                // other: MovieInfo.formats.filter(item => item.container !== "mp4" && item.container !== "webm"),
              
            }

            dispatch(Actions.Success(MovieInfo));
        }catch (error){
            dispatch(Actions.Failure(error));
        }
    }


export default getMovieInfo;

