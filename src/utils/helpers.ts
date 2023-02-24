export const isEqual = (param1:any,param2:any) : boolean => {
    if(param1 === param2){
        return true;
    } else {
        return false;
    }
}

export const removeSpaces = (ele:string) : string=> {
    return ele.replace(/ +/g, "");
}