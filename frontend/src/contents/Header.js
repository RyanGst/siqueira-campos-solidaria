import React, { Component } from 'react';

import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Headline from '../components/Headline';
import Patrocinador from './Patrocinador';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Nav/>
                <section class="header">
                    <Headline/>
                    <Banner/>
                </section>
            </header>
        )
    }
}
export default Header