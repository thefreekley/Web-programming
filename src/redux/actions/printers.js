import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
});

export const fetchPrinters = (filters) => (dispatch) => {

    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/printers?${filters}`).then(({data}) => {
        dispatch(setPrinters(data))
    });
};

export const setPrinters = (items) => ({
    type: 'SET_PRINTERS',
    payload: items,
});

