import React, { Component } from 'react'
import './index.css'

export class Footer extends Component {

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
            <div className="footer">
                <h1>Footer</h1>
                { this.state.isMobile ? 'Mobile' : 'Web' }
            </div>
        )
    }
}

export default Footer
