setInterval(() => {
    var todos = document.querySelectorAll('.L3NKy')
    var seguir = document.querySelector('.y3zKF')
    todos.forEach(item => {
        if (!item.classList.contains('_8A5w5')) {
            seguir.click()       
        }
    })
}, 5000)
