

export const setTheme = (mode) =>{
    if(mode === 'light'){
        document.getElementById('theme-style').href ='default.css';
    }
    if(mode === 'blue'){
        document.getElementById('theme-style').href ='blue.css';
    }
    if(mode ==='green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode ==='purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
}



