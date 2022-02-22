import React, { Component } from 'react'
import './index.css'

export class Sider extends Component {

    state = { 
        isMobile: window.innerWidth < 768,
    };

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 768});
    };
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <div className='sider'>
                <h1>Sider</h1>
            </div>
        )
    }
}

export default Sider
