const url = 'https://api.thecatapi.com/v1';
const api_key = "live_uDSEYRL0Nf32oVRR3JId0fU3i8bBwq9Q8FJUXgtq1Cr7HW7NmvkqXsiulBqkoI0a";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};