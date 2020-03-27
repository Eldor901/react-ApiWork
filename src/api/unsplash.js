import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID e_WnLh1ETYR3HZdGGCitrJb3TB3gSWyJrfGxzxeKFhg'
    }
});
