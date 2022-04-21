export const logout = () => {
     localStorage.removeItem("uid")
     localStorage.removeItem("accessToken")
     localStorage.removeItem("refreshToken")
     window.location.replace('/')
}