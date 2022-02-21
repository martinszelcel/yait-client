import React from "react";

export const StorageContext = React.createContext();

export default class StorageContextProvider extends React.Component {
    constructor(props) {
        super(props);

        const darkModeType = localStorage.getItem('darkModeType') || "auto";

        this.state = {
            isDarkMode: this.getDarkMode(darkModeType),
            darkModeType: darkModeType,
            setDarkMode: this.setDarkMode
        }
    }

    setDarkMode = (darkModeType) => {
        this.setState({
            isDarkMode: this.getDarkMode(darkModeType),
            darkModeType: darkModeType
        });
        localStorage.setItem('darkModeType', darkModeType);
    }

    getDarkMode = (darkModeType) => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return darkModeType == "dark" || (darkModeType == "auto" && prefersDark)
    }

    // componentDidMount() {
    //     this.setState({
    //         darkMode : localStorage.getItem('darkMode') || "auto",
    //         setDarkMode: this.setDarkMode
    //     })
    // }

    render() {
        const { children } = this.props;

        return (
            <StorageContext.Provider value={this.state}>
                {children}
            </StorageContext.Provider>
        )
    }
}