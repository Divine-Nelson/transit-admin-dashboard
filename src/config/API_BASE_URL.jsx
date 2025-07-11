const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createTrips = `${BASE_URL}/api/trips/createTrips`; 
const getOperators  = `${BASE_URL}/api/trips/operators`; 


export {createTrips, getOperators};