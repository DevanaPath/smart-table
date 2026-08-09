export function initSearching(searchField) {
    return (query, state, action) => {
        // Если в поле поиска что-то введено, добавляем в запрос
        return state[searchField] ? Object.assign({}, query, { 
            search: state[searchField] 
        }) : query; 
    }
}