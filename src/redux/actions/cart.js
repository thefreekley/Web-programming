
export const addItem = (object,amountOfPaint,boxType) => ({
    type: 'ADD_ITEM',
    payload:{object:object, amountOfPaint:amountOfPaint,boxType:boxType},
});

export const removeItem = (value) => ({
    type: 'REMOVE_ITEM',
    payload:value,
});

