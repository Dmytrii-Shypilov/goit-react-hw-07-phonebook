import axios from "axios";

const instance = axios.create({
    baseURL: "https://62b6d7496999cce2e808d5e9.mockapi.io/api/v1/contacts"
})

export const fetchContacts = async () => {
    const {data} = await instance.get("/")
    return data
}

export const addContact = async (data) => {
    const {data: result} = await instance.post("/", data)
    return result
}

export const removeContact = async (id) => {
    const {data} = await instance.delete(`/${id}`)
    return data
}

const API = {
    removeContact,
    fetchContacts: fetchContacts,
    addContact
}

export default API