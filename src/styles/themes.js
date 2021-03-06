
const themes = {}
// rgb(21, 177, 155); possible main theme
themes.main = 
{
    name:'light',
    homeBackground:'url("images/hallway-efe-kurnaz.jpg")',
    background: 'rgb(223,223,223)',
    transBg: 'rgba(223,223,223, 0)',
    navBackground: '#afafaf', //translucent #a0a0a0
    color1: '#00000099', //light grey
    color2: '#000000aa', //lighter grey
    color3: '#228b22b8', //slightly transparent forestgreen
    landingTextColor: 'whitesmoke',
    font1: "Futura,Trebuchet MS,Arial,sans-serif;",
    font2: "Futura,Trebuchet MS,Arial,sans-serif;"
}



themes.dark = 
{
    name:'dark',
    background: 'rgb(10, 10, 10)',
    transBg: 'rgba(10, 10, 10, 0)',
    navBackground: 'rgb(10, 10, 10)', 
    footerBackground: '#292929',
    color1: '#FFFFFF', 
    color2: '#FEFEFE',
    color3: '#eccb5c',
    landingTextColor: '#FEFEFE',
    font1:"'Inconsolata', monospace;",
    font2:"'Inconsolata', monospace;",
    h2weight: '700',
    inputBackground: 'rgba(255,255,255,0.75)',
    hover: 'grey'
}
    themes.bw = 
    {
        name:'docs',
        homeBackground: 'url("images/boot-2.jpg")',
        background: 'white',
        transBg: 'rgba(255,255,255, 0)',
        navBackground: 'rgb(255,255,255)', //translucent #a0a0a0
        color1: '#212121', //
        color2: '#616161',
        color3: '#6b38FB',
        landingTextColor: '#212121',
        font1:"'Roboto', sans-serif",
        font2:"'Roboto', sans-serif",
        footerBackground: '#e6e5e5'
    }


export default themes