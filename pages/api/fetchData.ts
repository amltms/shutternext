const getData = async (url: string, urlVars?: string) => {
	const results = await fetch(`https://api.themoviedb.org/3/${url}?api_key=${process.env.API_KEY}&language=en-UK${urlVars}`);
	return await results.json();
};

export default getData;
