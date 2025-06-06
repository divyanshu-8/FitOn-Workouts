export const exerciseOptions = {
 
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'ddd539505fmsh0bbf3da6afc4670p1a7aaajsn65ca41cebbe3',
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'ddd539505fmsh0bbf3da6afc4670p1a7aaajsn65ca41cebbe3',
    },
  };


export const fetchData = async (url, options) => {
  const response = await fetch(url,options);
  const data = await response.json();
  return data;
}