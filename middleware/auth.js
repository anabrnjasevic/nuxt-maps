export default defineNuxtRouteMiddleware((to, from) => {
    const loggedIn=false;
    if (loggedIn==false) {
        useModal().value=!useModal().value
        return abortNavigation()
    }
   
  })
  