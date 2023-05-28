
const sampleSeries = { "title": "Psycho-Pass 3 Movie: First Inspector", "synopsis": "Compilation movie of Psycho-Pass 3 .", "episodes": "1", "members": "6050", "popularity": "16333", "ranked": null, "score": null, "img_url": "https://cdn.myanimelist.net/images/anime/1813/104961.jpg", "link": "https://myanimelist.net/anime/40858/Psycho-Pass_3_Movie__First_Inspector", "uid": "40858", "aired_start": "2019-12-31T18:30:00.000Z", "genre": ["Action", "Sci-Fi", "Police", "Psychological"], "aired_end": null }
const Series = ({ title, synopsis, episodes, members, popularity, ranked, score, img_url, link, uid, aired_start, genre, aired_end }) => {
    return (<div>
        <h3>{title}</h3>
        <img src={img_url} />
        Rank {ranked}
        <a href={link} >MAL</a>
    </div>);
}

export { Series }