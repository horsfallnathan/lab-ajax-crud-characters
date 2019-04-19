const baseUrl = 'http://localhost:1229';
class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        return axios.get(`${baseUrl}/characters`).then(response => {
            const { data } = response;
            return data;
        });
    }

    getOneRegister(id) {
        return axios.get(`${baseUrl}/characters/${id}`).then(response => {
            const { data } = response;
            return data;
        });
    }

    createOneRegister() {}

    updateOneRegister() {}

    deleteOneRegister(id) {
        return axios.delete(`${baseUrl}/characters/${id}`).then(response => {
            const { data } = response;
            return data;
        });
    }
}
