export default function recieveCSRF(){
    if (!document) return

    return document.cookie.substring(10)


}
