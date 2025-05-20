import { FetchRepository } from "./FetchRepository.js";
import { CustomerDTO } from "../DTO/CustomerDTO.js";

export class RemoteUserRepository extends FetchRepository {
    constructor() {
        super();
    }
    
    async getUsers(name='', page=this.PAGE) {
        try {
            const data = await super.fetchUsers(page, name);
            let total = await super.fetchTotal(name);
            let limit = this.LIMIT;

            return this.formatResult(
                data.map(item => CustomerDTO.convertRemoteToDTO(item)),
                total,
                page ?? this.PAGE,
                limit
            );
        } catch (error) {
            console.error('Error in RemoteUserRepository:', error);
            return [];
        }
    }

    async getUserByName(name) {
        try {
            const data = await super.fetchUsersByName(name);
            let total = await super.fetchTotalByName(name);

            return this.formatResult(
                data.map(item => CustomerDTO.convertRemoteToDTO(item)),
                total,
                this.PAGE,
                this.LIMIT
            );
        } catch (error) {
            console.error('Error in RemoteUserRepository:', error);
            return [];
        }
    }
}

