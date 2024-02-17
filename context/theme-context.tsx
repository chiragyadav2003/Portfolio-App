"use client";
import React, { useEffect,createContext, useContext} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProviderProps{
    children: React.ReactNode
}

type ThemeContextType = {
    theme: Theme,
    toggleTheme: ()=>void
}

const ThemeContext = createContext<ThemeContextType|null>(null)

export default function ThemeContextProvider({children}:ThemeContextProviderProps) {
  const [theme, setTheme] = React.useState<Theme>('light')

    const toggleTheme = () =>{
        if(theme === 'light'){
            setTheme('dark')
            document.documentElement.classList.add('dark')
            window.localStorage.setItem('theme','dark')
        }else{
            setTheme('light')
            document.documentElement.classList.remove('dark')
            window.localStorage.setItem('theme','light')
        }
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem('theme') as Theme|null;
        if(localTheme){
            setTheme(localTheme)
            if(localTheme === 'dark'){
                document.documentElement.classList.add('dark')
            }
        }else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }else if(window.matchMedia('(prefers-color-scheme: light)').matches){
            setTheme('light')
        }
    }, [])


  return <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  
}

export function useThemeContext(){
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error('useThemeContext must be used within a ThemeContextProvider')
    }
    return context
}