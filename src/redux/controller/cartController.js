class itemObject{
    constructor(id,object,amountOfPaint,boxType) {
        this.id=id;
        this.count = 1;
        this.object = object;
        this.amountOfPaint = amountOfPaint;
        this.boxType = boxType;
    }
    upCount(){  this.count++ }
    downCount(){ this.count-- }
}

export function addItemInArray(object,arr,amountOfPaint,boxType) {

     let item = arr.find(element => element.id === object.id);
     if(!item) arr.push(new itemObject(object.id,object,amountOfPaint,boxType));
     else item.upCount();


    return arr;
}

export function removeItemInArray(object,arr) {
    let item = arr.find(element => element.id === object.id);
    if (!item) return

    if(item.count<1) arr.splice(arr.indexOf(item),1)
    else item.downCount()


    return arr;
}

export function priceAndCountOverall(arr) {
    let overallCount = 0;
    let overallPrice = 0;
    for(var i =0; i<arr.length; i++){
        overallCount += arr[i].count;
        overallPrice += overallCount * arr[i].object.price;
    }
    return {count:overallCount,price:overallPrice}
}