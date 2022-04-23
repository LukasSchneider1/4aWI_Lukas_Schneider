localStorage.setItem("name", "Bob")
localStorage.removeItem("name")

sessionStorage.setItem("key", "car")
console.log(sessionStorage.getItem("key"));
document.cookie = 'name=bob; expires=' + new Date(2023, 0, 1).toUTCString()