const apikey = '5042d9bd250e2fbd1f65fceff13e225d';

const getData = async (url: string, urlVars?: string) => {
	const results = await fetch(`https://api.themoviedb.org/3/${url}?api_key=${process.env.API_KEY}&language=en-UK${urlVars}`);
	return await results.json();
};

export default getData;
