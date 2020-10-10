import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: "en" };
        this.setLanguage = this.setLanguage.bind(this);
    }

    setLanguage(language) {
        this.setState({ language: language });
    }

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, setLanguage: this.setLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export const withLanguageContext = MyWrappedComponent => props => {
    return (
        <LanguageContext.Consumer>
            { value => <MyWrappedComponent languageContext={value} {...props}/> }
        </LanguageContext.Consumer>
    );
}
