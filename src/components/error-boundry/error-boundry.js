import React, {Component} from 'react';
import Error from '../error';
import { connect } from 'react-redux';

class ErrorBoundry extends Component {
    
    
    render() {
       if (this.props.error) {
        return <Error/>;
       }
       return this.props.children;
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps)(ErrorBoundry);