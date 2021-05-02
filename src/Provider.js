import React from 'react';
export const UserContext = React.createContext();

class UserProvider extends React.Component {
    state = {
        data: {
            username: '',
            firstName: 'Abin Thaha Azeez'
        }
    };
    setUserData = (data) => {
        this.setState({
            data
        })
    }
    render() {
        return (
            <UserContext.Provider
                value={{
                    userData: this.state.data,
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;