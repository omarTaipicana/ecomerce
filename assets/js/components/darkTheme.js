export function darkTheme() {
    const themeButton = document.getElementById( "theme-button" )

    themeButton.addEventListener( "click", () =>{
        document.body.classList.toggle( "dark-theme" )

        if( themeButton.classList.contains( "bx-moon" ) ){
            themeButton.classList.replace( "bx-moon", "bx-sun" )
        }else{
            themeButton.classList.replace( "bx-sun", "bx-moon" )
        }
    })
}