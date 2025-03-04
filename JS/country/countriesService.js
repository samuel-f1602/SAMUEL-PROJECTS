const getCountries = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch countries', error);
        return [];
    }
};

const countriesFull = await getCountries();
let countries = [...countriesFull];

const reset = () => {
    countries = [...countriesFull];
}

const search = (word) => {
    const formattedWord = word.toLowerCase();
    countries = countriesFull.filter((country) =>
        country.name.common.toLowerCase().includes(formattedWord)
    );
}

export { countries, reset, search };
