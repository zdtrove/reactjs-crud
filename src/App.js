import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

    onToggleForm = () => {
        var { itemEditing } = this.props;
        if (itemEditing && itemEditing !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id : '',
            name : '',
            status : false
        });
    }

    render() {

        var { isDisplayForm } = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr />
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        <TaskForm />
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary" onClick={ this.onToggleForm }>
                                        Thêm Công Việc
                                    </button>&nbsp;
                                </div>
                            </div>
                        </div>
                        <TaskControl />
                        <div className="form-group">
                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm())
        },
        onClearTask : (task) => {
            dispatch(actions.editTask(task));
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
