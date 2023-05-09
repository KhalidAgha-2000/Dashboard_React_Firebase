import './Main.css'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import Header from '../Header/Header';
import Content from '../Content/Content';
 
const Main = () => {

    

    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`main  ${darkTheme && "dark"}`}>
            <Header />
            <Content />
        </div>
    )
}

export default Main