import Actions from '../Actions';

const fetchMovie = async(URL) => {
    const response = await fetch(`http://localhost:4000/search?URL=${URL}`);
    const json = await response.json();
    return json;
}

const getMovieInfo = (URL) => 
    async(dispatch) => {
        dispatch(Actions.Request());

        try{
            const MovieInfo = await fetchMovie(URL);
            const DataSRC = MovieInfo.player_response.microformat.playerMicroformatRenderer;
            let Mp4 = MovieInfo.formats.filter(item =>  item.container === "mp4" && item.qualityLabel !== null && item.audioBitrate !== null )
            let Webm = MovieInfo.formats.filter(item => item.container === "webm" && item.qualityLabel !== null )

            function Comp (a,b){
               const  qa = parseInt(a.qualityLabel.substr(0,a.qualityLabel.indexOf("p")));
                const qb = parseInt(b.qualityLabel.substr(0,b.qualityLabel.indexOf("p")));
                
                if(qa > qb) return -1;
                if(qb > qa) return 1;

                return 0;
                
            }

            function remove_duplicates(array){
                let ret_array = [];
                for(let i=0;i<array.length-2;i++){
                    if(array[i].qualityLabel !== array[i+1].qualityLabel)
                       ret_array.push(array[i])

                }
                ret_array.push(array[array.length-1])
                return ret_array;

            }

            
            Mp4.sort(Comp);
            Webm.sort(Comp);

            // Mp4 = remove_duplicates(Mp4);
            Webm = remove_duplicates(Webm);
            console.log(Mp4)
            // console.log(MovieInfo);

            const Data = {
                Title: DataSRC.title.simpleText,
                Thumbinail: DataSRC.thumbnail.thumbnails[0].url,
                Mp4,
                Webm,
                URL: MovieInfo.video_url
            }

            dispatch(Actions.Success(Data));
        }catch (error){
            console.log(error)
            dispatch(Actions.Failure(error));
        }
    }


export default getMovieInfo;

