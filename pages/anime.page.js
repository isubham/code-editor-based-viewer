import { useEffect, useState } from "react";
import { ApiService } from "../api.service";
import { Series } from "../components/anime/series/series";

const Anime = () => {

    const [seriesData, setSeriesData] = useState([]);
    const [controlApi, setControlApi] = useState({});

    useEffect(() => {
        ApiService.getAnime().then(data => {
            setSeriesData(data.data);
            setControlApi(data.controls)
        })
    }, [])

    if (seriesData.length == 0) {
        return <div>Loading...</div>
    }

    return (<div>
        <span><big>Anime</big></span>
        <SearchAnime searchEndpoint={controlApi.search} />
        {/* {JSON.stringify(seriesData)} */}
        {seriesData.map(series => <Series key={series.uid} {...series} />)}

        <AnimePagination {...{ setSeriesData, setControlApi, pagination: controlApi.pagination }} />
    </div>)
};

const AnimePagination = ({ setSeriesData, setControlApi, pagination }) => {
    const { prev, next } = pagination;

    const getPaginationData = (url) => {
        ApiService.get(url).then(data => {
            setSeriesData(data.data);
            setControlApi(data.controls);
        })
    }

    return (
        <div>
            {prev}
            <button onClick={() => getPaginationData(prev)} >Previous</button>
            {next}
            <button onClick={() => getPaginationData(next)} >Next</button>
        </div>
    )

}

const SearchAnime = ({ searchEndpoint }) => {

    const [query, setQuery] = useState([]);
    const [animeResult, setAnimeResult] = useState([]);


    const onChangeSearch = (e) => {
        const inputText = e.target.value;
        setQuery(inputText);
        console.log(query);
    };

    useEffect(() => {
        console.log(query)
        if (query.length > 2) {
            ApiService.get(searchEndpoint + query).then(result => {
                setAnimeResult(result);
            })
        }
        else {
            setAnimeResult([]);
        }
    }, [query])

    return (
        <div>
            <input type="text" onChange={onChangeSearch} />
            <ul>
                {animeResult.map((anime) => <li key={anime.uid}>{anime.title} <a href={anime.link} >MAL</a></li>)}
            </ul>
        </div>
    )
};



export { Anime }
