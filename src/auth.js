
function isAuthenticated() {
    if (localStorage.getItem('Authorization')) {
        alert("has a token")
        return true
    }
    return false;
}

export default isAuthenticated;