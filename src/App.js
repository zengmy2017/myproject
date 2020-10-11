import React,{Component,Fragment} from 'react';
import Header from "./common/header";
import {Globalstyle} from "./style";
import {Globalfont} from "./static/iconfont/iconfont";
import store from "./store";
import {Provider } from 'react-redux';
import{BrowserRouter,Route,Link} from "react-router-dom";
import Detail from "./pages/Detail/loadable";
import Home from "./pages/Home";
import Login from "./pages/login";
import Writer from './pages/write';



class App extends Component {

render(){
  return (
<Fragment>
    <Provider store={store}>
      <div>
      <Globalstyle/>

        <BrowserRouter>
      <Header/>

        <div>

          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/'exact component={Home}></Route>
          <Route path='/login'exact component={Login}></Route>
          <Route path='/write'exact component={Writer}></Route>


        </div>

      <Globalfont/>
        </BrowserRouter>
      </div>
    </Provider>
</Fragment>
  );
}

}

export default App;
