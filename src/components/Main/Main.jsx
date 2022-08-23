import {Routes, Route} from 'react-router-dom';
import News from './/News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Dialogs from './Dialogs/Dialogs';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';



const Main = (props) => {
  
return (
  <Routes>
  <Route path='/dialogs/*' element={<Dialogs></Dialogs>}></Route>
  {/* дублирование, чтобы отображался профиль по корню */}
  <Route path='/profile/*' element={<ProfileContainer></ProfileContainer>}></Route>
  <Route path='/profile/:userId' element={<ProfileContainer></ProfileContainer>}></Route>
  <Route path='/news' element={<News></News>}></Route>
<Route path='/music' element={<Music></Music>}></Route>
<Route path='/users' element={<UsersContainer></UsersContainer>}></Route>
<Route path='/settings' element={<Settings></Settings>}></Route>
</Routes>
)}

export default Main;