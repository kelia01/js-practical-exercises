const convertNullableValues = function(theObjects){
    for(let [theObject, value] of Object.entries(theObjects)){
        if ([theObject, null]){
            let result = [theObject, 0];
        }
    
    else ([theObject, undefined]){
        result = [theObject ,""];
    }
}
    return theObjects;
}
