import React, { Component } from 'react';
import Header from '../../Components/Header';
import Sider from '../../Components/Sider';
import Footer from '../../Components/Footer';
import './index.css'

export class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <Header />
                <Sider />
                <Footer />
            </div>
        )
    }
}

export default Dashboard
