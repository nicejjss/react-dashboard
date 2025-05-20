export const databaseSource = import.meta.env.VITE_DATA_TYPE ? import.meta.env.VITE_DATA_TYPE : 'local';
export const pageLimit = import.meta.env.VITE_PAGE_LIMIT;
export const pageNumber = import.meta.env.VITE_PAGE_NUMBER;

export const config = {
    'local': {
        location: './src/assets/data/customers.json',
    },

    'remote': {
        location: 'https://jsonplaceholder.typicode.com/users',
    }
}