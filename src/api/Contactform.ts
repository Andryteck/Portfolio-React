import axios from 'axios'

export const contactFormAPI = {
    postInfo(name: any, contacts: any, message: any) {
debugger
        return axios.post('https://smtr-nodejs-server.herokuapp.com/sendMessage', {
            name: name,
            contacts: contacts,
            message: message
        })
    }
}