import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render(){
        if(!this.props.selectedBook)
            return(
                <div>Loading...</div>
            )
        return (
            <div>
                {this.props.selectedBook.title}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        selectedBook: state.selectedBook
    };
}

export default connect(mapStateToProps)(BookDetail)
