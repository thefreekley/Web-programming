
export const setFilterType = (value) => ({
   type: 'SET_FILTER_TYPE',
   payload:value,
});

export const setFilterProducer = (value) => ({
   type: 'SET_FILTER_PRODUCER',
   payload:value,
});

export const setFilterMinPrice = (value) => ({
   type: 'SET_FILTER_MIN_PRICE',
   payload:value,
});


export const setFilterMaxPrice = (value) => ({
   type: 'SET_FILTER_MAX_PRICE',
   payload:value,
});


export const setFilterSearch = (value) => ({
   type: 'SET_FILTER_SEARCH',
   payload:value,
});