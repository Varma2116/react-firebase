import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { addBook } from "../Redux/Actions/BookAction";
import { bindActionCreators } from "redux";
import { decrementCount, incrementCount } from "../Redux/Actions/CountAction";
import UserAuth from "../FireBaseConnection/UserAuth";
import Home from "./Home";
class BookList extends Component {
  render() {
    // console.log('hi',this.props.userData);
    return (
      <>
        {/* {this.props.userData ? ( */}
          <div>
            <button onClick={() => this.props.addBook("alien")}>
              decrement
            </button>
          </div>
        {/* ) : ( 
          <UserAuth/> 
        )} */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    books: state.books,
    userData: state.userData
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addBook: addBook,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
