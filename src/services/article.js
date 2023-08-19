import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': '8088c4dd66msh6c415d853cc17e4p1ba816jsn0065ee20f5db',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  

export const articleApi=createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','Key');
            headers.set('X-RapidAPI-Host','Key');
        }
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=>`test`,
        })
    })
});
