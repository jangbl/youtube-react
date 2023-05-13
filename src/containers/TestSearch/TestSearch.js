import React, {Component} from 'react';
import ReactPlayer from "react-player"

import {withRouter} from 'react-router-dom';

class TestSearch extends Component {
    render() {
      return (
        
            <div>
                <header>
                    This is my website!
                </header>

                <main>
                    {this.props.children}
                </main>

                <footer>
                    Your copyright message
                </footer>
            </div>
        
      );
    }
}

export default TestSearch