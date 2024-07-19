import axios from "axios"


export default axios.create({
    baseURL: ' https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1V5sTOji2n3PiK7WgfcEhFbTiIso7y_UJjKV8PE54Il9wACAGGopEqaJ9n-YbY9pmh_pW6W3WwTQAEyEXCzCkwj1-4aAXiNa7EA74XRan736rreyrEGKpXWziYaTZnYx' 
    }
})