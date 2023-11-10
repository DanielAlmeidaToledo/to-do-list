function defineApiUrl(){
    if(window.location.origin.indexOf("localhost") === -1)
        return window.location.origin + "/api";
    return "http://localhost:8999/api"
}

export const apiURL = defineApiUrl();