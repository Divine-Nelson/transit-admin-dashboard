import { data } from "react-router";
import { createTrips, getOperators } from "../config/API_BASE_URL";

const createTrip = async (data) => {
    try{
        const res  = await fetch(createTrips, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        if (!res.ok) throw new Error(result.message);

        return result;
        
    }catch(err){
        throw err;
    }
};

const getOperator = async () => {
    try {
        const res = await fetch(getOperators);
        const result = await res.json();
        if (!res.ok) throw new Error(result.message);
        return result;
    } catch (err) {
        throw err;
    }
};
export {createTrip, getOperator};