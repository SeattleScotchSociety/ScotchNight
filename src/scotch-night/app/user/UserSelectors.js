export const isUserLoggedIn = (state) => {
    if (state.user.token) {
        return true;
    }

    return false;
};