import AuthStore from "../stores/AuthStore.js";
const { getStorageUser } = AuthStore();

export function guestGuard(to, from, next) {
    const user = getStorageUser();
    if(user){
        const { identityId } = user;
        next(-identityId ? "/index" : "/admin/index");
    }else{
        next();
    }
};

