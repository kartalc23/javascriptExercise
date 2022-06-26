const modeControl = document.getElementById('mode-control')

modeControl.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', document.body.classList)
})

if ( localStorage.getItem('mode') != '') {
    document.body.classList.add(localStorage.getItem('mode'))
    modeControl.checked = true
}