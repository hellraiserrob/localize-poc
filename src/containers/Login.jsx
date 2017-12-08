import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getTranslate, setActiveLanguage, getActiveLanguage } from 'react-localize-redux';


class Login extends Component {


    render() {

        const { translate, user, handleSetActiveLanguage, currentLanguage } = this.props
        const { forename, surname } = user

        return (
            <div>

                <p>Active language: {currentLanguage}</p>

                <ul>
                    <li><a onClick={(e) => handleSetActiveLanguage(e, 'en')}>EN</a></li>
                    <li><a onClick={(e) => handleSetActiveLanguage(e, 'fr')}>FR</a></li>
                </ul>



                <h1>Login</h1>

                <p>{translate('forename')}: {forename}</p>
                <p>{translate('surname')}: {surname}</p>

            </div>
        );
    }
}



function mapStateToProps(state) {

    return {
        user: state.userReducer,
        translate: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    }

}

function mapDispatchToProps(dispatch) {
    return {
        
        handleSetActiveLanguage(e, code) {
            e.preventDefault()
            dispatch(setActiveLanguage(code))

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)