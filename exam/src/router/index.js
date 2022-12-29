import  MainPage from '../pages/mainPage/mainPage'
import HistoryPage from "../pages/historyPage/historyPage";

export const routes = [
    {path: './translate', element:<MainPage/>, exact:true},
    {path: './history', element:<HistoryPage/>, exact:true},

]