/** 3 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Post from '../../components/frontend/Post/Post';
import FrontendRouteList from '../../routes/FrontendRouteList';
import NavBar from './NavBar';
import RightSide from './RightSide';
import Sidebar from './Sidebar';
import Theme from '../../components/frontend/Theme/Theme';



const FrontendLayout = () => {

    return (
        <>
            <div className='socialMedia'>
                <NavBar />

                <main>
                    <div className="container">

                        <div className="left">
                            <Sidebar />
                        </div>


                        <div className="middle">
                            <Switch>
                                {FrontendRouteList.map((route, index) => {
                                    return (
                                        route.component && (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={(props) => (
                                                    <route.component {...props} />
                                                )}
                                            />
                                        )
                                    )
                                })}
                            </Switch>
                        </div>

                        <div className="right">
                        <RightSide />
                        </div>
                    </div>
                </main>


                <div className="customize-theme">
                   <Theme />
                </div>

                <div className="customize-post">
                   <Post />
                </div>
            </div>
        </>
    )
}

export default FrontendLayout

