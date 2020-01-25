
const themes = {}

themes.main = {
    name:'main',
    homeBackground:'url("images/hallway-efe-kurnaz.jpg")',
    background: '#a0a0a0',
    navBackground: 'rgba(160,160,160,0.6)', //translucent #a0a0a0
    color1: 'cornsilk', //cornsilk but darker
    color2: 'white',
    color3: '#f9c669',
    landingTextColor: 'whitesmoke',
    font1: "'Open Sans', sans-serif",
    font2: "'Oswald', sans-serif"
}

themes.bw = {
    name:'bootstrappish',
    homeBackground: 'url("images/boot-2.jpg")',
    background: 'white',
    navBackground: 'rgba(255,255,255,0.6)', //translucent #a0a0a0
    color1: '#212121', //
    color2: '#616161',
    color3: '#6b38FB',
    landingTextColor: '#212121',
    font1:"'Roboto', sans-serif",
    font2:"'Roboto', sans-serif"
}

themes.blue = {
    name:'blue',
    background: 'rgb(25, 33, 77)',
    navBackground: 'rgb(25, 33, 77)', //dark blue
    color1: 'rgb(222, 239, 245)', //ligth blue
    color2: '#C4BBB8',
    color3: 'white',
    landingTextColor: 'whitesmoke',
    font1:"Futura,Trebuchet MS,Arial,sans-serif;",
    font2:"'Times New Roman'",
    h2weight: '700'

}
themes.dark = {
    name:'dark',
    background: 'rgb(41, 35, 35)',
    navBackground: 'rgb(41, 35, 35)', //dark blue
    color1: 'rgb(165, 125, 123)', 
    color2: 'rgb(165, 125, 123)',
    color3: 'rgba(255,255,255,0.75)',
    landingTextColor: 'whitesmoke',
    font1:"Futura,Trebuchet MS,Arial,sans-serif;",
    font2:"Futura,Trebuchet MS,Arial,sans-serif;",
    h2weight: '700',
    inputBackground: 'rgba(255,255,255,0.75)'

}

export default themes