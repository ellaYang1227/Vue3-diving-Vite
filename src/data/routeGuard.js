import AuthStore from "../stores/AuthStore.js";
const { getStorageUser } = AuthStore();

export function guestGuard(to, from, next) {
    const user = getStorageUser();

    if(!user){
        next();
    }else{
        const { identityId } = user;
        next(identityId === "0" ? "/admin/index" : "/index");
    }
};

export function authGuard(to, from, next) {
    const user = getStorageUser();

    if(user){
        next();
    }else{
        next({ path: '/login', query: { returnUrl: to.path }});
    }
};

export function adminGuard(to, from, next) {
    const user = getStorageUser();
    if(user && user.identityId === "0"){
        next();
    }else{
        let toUrl = { 
            path: "/index",
        };

        if(!user){
            toUrl = {
                path: "/login",
                query:{ returnUrl: to.path }
            }
        }

        next(toUrl);
    }
};


