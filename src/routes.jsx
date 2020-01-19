
import React from 'react'
import {Home, About, Examples, Work} from './pages'


const routes = 
[
    {
        path:'/',
        exact:true,
        label: '/',
        main: () => <Home/>

    },
    {
        path:'/about',
        sidebar: () => <div>About</div>,
        label: '/about',
        main: () => <About/>
    },
    {
        path:'/examples',
        label: '/eg',
        main: ({setTheme, setThemeUserSelected}) => <Examples setTheme={setTheme} setThemeUserSelected={setThemeUserSelected}/>
    },
    {
        path:'/work',
        label: '/work',
        main: () => <Work />
    },
    // {
    //     path:'/*',
    //     sidebar: false,
    //     main: () => <NoMatch/>
    // }
]

export default routes
