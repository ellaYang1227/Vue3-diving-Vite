import AuthStore from "@/stores/AuthStore.js";
const { getStorageUser } = AuthStore();

/**
 * 賓客守衛
 *
 * @param to - 即將要進入的目標
 * @param from - 當前導航正要離開的路由
 * @param next - 下一步
 */
export function guestGuard(to, from, next) {
  const user = getStorageUser();

  if (!user) {
    next();
  } else {
    const { identityId } = user;
    next(identityId === "0" ? "/admin/index" : "/member/editMyinfo");
  }
}

/**
 * 授權守衛
 *
 * @param to - 即將要進入的目標
 * @param from - 當前導航正要離開的路由
 * @param next - 下一步
 */
export function authGuard(to, from, next) {
  const user = getStorageUser();

  if (user) {
    next();
  } else {
    next({ path: "/login", query: { returnUrl: to.path } });
  }
}

/**
 * 管理員守衛
 *
 * @param to - 即將要進入的目標
 * @param from - 當前導航正要離開的路由
 * @param next - 下一步
 */
export function adminGuard(to, from, next) {
  const user = getStorageUser();
  if (user && user.identityId === "0") {
    next();
  } else {
    let toUrl = {
      path: "/index"
    };

    if (!user) {
      toUrl = {
        path: "/login",
        query: { returnUrl: to.path }
      };
    }

    next(toUrl);
  }
}
