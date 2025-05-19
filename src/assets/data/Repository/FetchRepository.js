import { config, databaseSource, pageLimit, pageNumber } from "../config/database.js";
import { IRepository } from "./IRepository.js";

export class FetchRepository extends IRepository{
    PAGE = pageNumber;
    LIMIT = pageLimit;

    fetchUsers(page, name) {
        page = page ? page : this.PAGE;
        const url = config[databaseSource].location;
        const paginationParams = page ? `?_page=${page}&_limit=${this.LIMIT}${name ? `&name=${name}` : ''}` : '';
        return fetch(url + paginationParams)
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error('Error fetching users:', error));
    }

    fetchTotal(name) {
        const url = config[databaseSource].location;
        const paginationParams = name ? `?name=${name}` : '';
        return fetch(url + paginationParams)
            .then(response => response.json())
            .then(function(result) {
                return result.length;
            })
            .catch(error => console.error('Error fetching total pages:', error));
    }

    formatResult(data, total, page, limit) {
        return {
            data: data,
            total: total,
            totalPages: Math.ceil(total / this.LIMIT),
            page: page ? page : this.PAGE,
            limit: limit ? limit : this.LIMIT
        }
    }
}

