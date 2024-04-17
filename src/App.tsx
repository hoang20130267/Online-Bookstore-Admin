import {Admin, Resource, houseLightTheme} from "react-admin";
import {dataProvider} from "./provider/dataProvider";
import {authProvider} from "./provider/authProvider";
import Login from "./layout/Login";
import {BlogList} from "./components/Blogs/BlogList";
import {CreateBlog} from "./components/Blogs/CreateBlog";
import {UserList} from "./components/Users/UserList";
import {AddUser} from "./components/Users/AddUser";
import {EditUser} from "./components/Users/EditUser";
import CategoryList from "./components/categories/CategoryList";
import CategoryIcon from "@mui/icons-material/Category";
import {CategoryCreate} from "./components/categories/CategoryCreate";
import {CategoryEdit} from "./components/categories/CategoryEdit";
import {ProductList} from "./components/products/ProductList";
import InventoryIcon from '@mui/icons-material/Inventory';

function App() {
    return (
        <Admin
            title="Admin"
            dataProvider={dataProvider}
            authProvider={authProvider}
            loginPage={Login}
            theme={houseLightTheme}
            disableTelemetry
        >
            <Resource name={'user'} list={UserList} options={{label: "Người dùng"}} create={AddUser} edit={EditUser}/>
            <Resource name={'blog'} list={BlogList} options={{label: "Bài viết"}} create={CreateBlog}/>
            <Resource name="categories" options={{label: 'Danh mục'}} list={CategoryList} create={CategoryCreate}
                      edit={CategoryEdit}
                      icon={CategoryIcon}/>
            <Resource name="products" options={{label: 'Sản phẩm'}} list={ProductList} icon={InventoryIcon}/>
        </Admin>
    );
}

export default App;
