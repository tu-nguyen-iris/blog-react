import React from 'react';
import Header from '../components/header';
import { Route } from "react-router-dom"
const Layout = (props:any) =>{
    return(
        <React.Fragment>
            <Header/>
            {props.children}

        </React.Fragment>
    )
}
export default function ClientTemplate({ Component , ...props }: any){
    return(
        <Route
            {...props}
            render={propsComponent => {
                return <Layout>
                    <Component  {...propsComponent} />
                </Layout>
            }
            }
        />
    )
}