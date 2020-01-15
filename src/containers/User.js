import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getUserListAction } from "../redux/actions/demoActions";
import UserList from "../components/UserList";

const User = (props) => {
  const {getUserListAction} = props;
  const {isLoading, data, error} = props.demoProps;

  useEffect(() => {
    getUserListAction();
  }, [getUserListAction]);

  const onUserClick = (el) => {
    console.log(el);
  };

  return (
    <Fragment>
      {
        isLoading &&
        <div>
          Loading...
        </div>
      }
      {
        data && !error &&
        <UserList
          data={data}
          onUserClick={onUserClick}
        />
      }
      {
        error &&
          <div>
            Something went wrong:
            <br/>
            {error.toString()}
          </div>
      }
    </Fragment>
  )

};

const mapStateToProps = (state) => {
  return {
    demoProps: state.demoReducer,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserListAction: () => dispatch(getUserListAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(User)
