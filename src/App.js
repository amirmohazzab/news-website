import { useContext } from "react";
import Login from "./admin/auth/Login";
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import ViewNews from "./admin/dashboard/components/news/ViewNews";
import Main from "./admin/dashboard/components/main/Main";
import AddNews from "./admin/dashboard/components/news/AddNews";
import EditNews from "./admin/dashboard/components/news/EditNews";
import ViewCategory from "./admin/dashboard/components/category/ViewCategory";
import AddCategory from "./admin/dashboard/components/category/AddCategory";
import EditCategory from "./admin/dashboard/components/category/EditCategory";
import ViewVideo from "./admin/dashboard/components/video/ViewVideo";
import AddVideo from "./admin/dashboard/components/video/AddVideo";
import EditVideo from "./admin/dashboard/components/video/EditVideo";
import ViewUsers from "./admin/dashboard/components/users/ViewUsers";
import AddUser from "./admin/dashboard/components/users/AddUser";
import EditUser from "./admin/dashboard/components/users/EditUser";
import ViewComment from "./admin/dashboard/components/comment/ViewComment";
import { AuthContext } from "./admin/context/context";
import ProfileUpdate from "./admin/dashboard/components/users/ProfileUpdate";
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import NotFound from "./components/NotFound/NotFound";
import Admin from "./admin/authCheck/Admin";


function App() {

  const {userId} = useContext(AuthContext);

  return (
    <div>
      <>
        <Routes>

          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/administrator' element={<Login />} />

         
          {userId && (
          <>
                <Route path='/dashboard' element={<Main />} />

                <Route path='/view-news' element={<ViewNews />} />
                <Route path='/add-news' element={<AddNews />} />
                <Route path='/edit-news/:id' element={<EditNews />} />

              
              <Route element={<Admin />}>
                <Route path='/view-category' element={<ViewCategory />} />
                <Route path='/add-category' element={<AddCategory />} />
                <Route path='/edit-category/:id' element={<EditCategory />} />

                <Route path='/view-video' element={<ViewVideo />} />
                <Route path='/add-video' element={<AddVideo />} /> 
                <Route path='/edit-video/:id' element={<EditVideo />} />

                <Route path='/view-user' element={<ViewUsers />} />
                <Route path='/add-user' element={<AddUser />} /> 
                <Route path='/edit-user/:id' element={<EditUser />} />
              </Route>
             

                <Route path='/edit-profile/:id' element={<ProfileUpdate />} />
                <Route path='/comment' element={<ViewComment />} />
                </>
        )}
                <Route path='*' element={<NotFound />} />
          
        </Routes>
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
