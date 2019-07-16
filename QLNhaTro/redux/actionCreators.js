export function toggleIsAdding(){
    return {type:'TOGGLE_ISADDING'};
}
export function addWord(en,vn){
    return {
        type:'ADD_WORD',
       en,//en:en,
       vn  // vn:vn
       
    }
}
export function toggleMemorized(id){
    return {type:'TOGGLE_MEMORIZED',id};
}
export function toggleShow(id){
    return {type:'TOGGLE_SHOWWORD',id};
}
export function showAll(){
    return {type:'FILTER_SHOW_ALL'};
}
export function showMemorized(){
    return {type:'FILTER_MEMORIZED'};
}
export function showNeedPractice(){
    return {type:'FILTER_NEED_PRACTICE'};
}