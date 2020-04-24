import React, { Component } from 'react';

import LogoBanner from '../img/logo_grande.svg';

class Banner extends React.Component {
    render() {
        return (
                <div class="banner">
                    <img src={LogoBanner}/>
                </div>
        )
    }
}
export default Banner