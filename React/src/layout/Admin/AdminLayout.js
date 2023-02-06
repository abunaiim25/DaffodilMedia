
/** 3 */
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminRouteList from "../../routes/AdminRouteList"; //Router -> MasterLayout -> App



const AdminLayout = () => {

  return (
    <>
      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Navbar />


          <main class="content mobile_size">
            <Switch>
              {AdminRouteList.map((route, index) => {
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
              <Redirect from="/admin" to="/admin/dashboard" />{/** when search /admin, go to  /admin/dashboard*/}
            </Switch>
          </main>

          <Footer />
        </div>
      </div>
      


    </>
  )
}

export default AdminLayout


