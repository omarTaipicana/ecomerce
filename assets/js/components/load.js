export function load () {
    const loader = document.getElementById( "loader" )
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}