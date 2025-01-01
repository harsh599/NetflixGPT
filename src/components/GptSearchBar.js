import React , {useRef} from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import client from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
    const currentLang = useSelector(store => store?.config?.langName);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    
    const serachMovieInTMDB = async(movieName) => {
        const movieDetail = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        const json = await movieDetail.json();    
        return json.results;
    }
   
   
    const handleGPTSearchClick = async()=>{
       console.log(searchText.current.value);
       const gptPrompt = "Act as a movie recommendation system and suggest some movies for the query "
        + searchText?.current?.value + 
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Don, Besharam, Gadar, Kabir Singh, Golmal";
       const gptResults =  await client.chat.completions.create({
            messages: [{ role: 'user', content: gptPrompt  }],
            model: 'gpt-3.5-turbo',
        });

        if(!gptResults.choices){
            //Do error handelling /error page
            return;
        }
        console.log(gptResults.choices[0]?.message?.content);
        const gptMovies = gptResults.choices[0]?.message?.content.split(",");

        const promiseArray = gptMovies.map(movie => serachMovieInTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResults({movieNames: gptMovies,movieResults: tmdbResults}))
        console.log(tmdbResults);

    }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center z-20">
       
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit = {(e) => e.preventDefault()}>
            <input type = "text" ref={searchText} className="p-4 m-4 col-span-9" placeholder={lang[currentLang].gptSearchPlaceholder} />
            <button className = "col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGPTSearchClick}>{lang[currentLang].search}</button>
        </form>

    </div>
  )
}

export default GptSearchBar