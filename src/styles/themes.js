
const themes = {}

themes.main = {
    name:'main',
    homeBackground:'url("images/hallway-efe-kurnaz.jpg")',
    background: 'whitesmoke',
    navBackground: 'whitesmoke', //translucent #a0a0a0
    color1: '#00000099', //light grey
    color2: '#000000aa', //lighter grey
    color3: '#228b22b8', //slightly transparent forestgreen
    landingTextColor: 'whitesmoke',
    font1: "'Open Sans', sans-serif",
    font2: "'Oswald', sans-serif"
}

themes.bw = {
    name:'bootstrappish',
    homeBackground: 'url("images/boot-2.jpg")',
    background: 'white',
    navBackground: 'rgb(255,255,255)', //translucent #a0a0a0
    color1: '#212121', //
    color2: '#616161',
    color3: '#6b38FB',
    landingTextColor: '#212121',
    font1:"'Roboto', sans-serif",
    font2:"'Roboto', sans-serif"
}

themes.dark = {
    name:'dark',
    background: 'rgb(41, 35, 35)',
    navBackground: 'rgb(41, 35, 35)', //dark blue
    color1: '#af8684', 
    color2: '#af8684',
    color3: 'rgba(255,255,255,0.75)',
    landingTextColor: 'whitesmoke',
    font1:"Futura,Trebuchet MS,Arial,sans-serif;",
    font2:"Futura,Trebuchet MS,Arial,sans-serif;",
    h2weight: '700',
    inputBackground: 'rgba(255,255,255,0.75)',
    hover: 'grey'

}

export default themes