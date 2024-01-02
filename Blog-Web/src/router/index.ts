import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import type { App } from 'vue';
import { close, start } from "@/utils/nprogress";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "",
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "hsHome",
        component: () => import("@/views/home/home.vue"),
        meta: {
          isShow: true, // 控制当前项是否在菜单栏中渲染出来，比如你写了 login 页面的路由，但是并不希望 login在menu菜单中渲染出来，即可设为false
          title: "首页", // menu菜单项的名称，没啥好说的
          icon: "menu-home", // menu菜单项的图标，我此处是与封装好的 svg 组件结合使用的
        },
      },{
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login.vue"),
        meta: {
          isShow: true, // 控制当前项是否在菜单栏中渲染出来，比如你写了 login 页面的路由，但是并不希望 login在menu菜单中渲染出来，即可设为false
          title: "登录", // menu菜单项的名称，没啥好说的
          icon: "menu-home", // menu菜单项的图标，我此处是与封装好的 svg 组件结合使用的
        },
      },
    ],
  },
  {
    path: "/setting",
    name: "setting",
    component: null,
    redirect: "/setting",    
    children: [
      {
        path: '/message-setting',
        name: 'message-setting',
        component: () => import("@/views/settings/message-setting.vue"),
        meta: {
          isShow: true, // 控制当前项是否在菜单栏中渲染出来，比如你写了 login 页面的路由，但是并不希望 login在menu菜单中渲染出来，即可设为false
          title: "设置", // menu菜单项的名称，没啥好说的
          icon: "message-setting", // menu菜单项的图标，我此处是与封装好的 svg 组件结合使用的
        },
      }
    ],
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 路由前置后卫
router.beforeEach(() => {
  // 开启进度条
  start();
});
// 路由后置后卫
router.afterEach(() => {
  // 关闭进度条
  close();
});
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
function filterRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes.filter(route => {
    const { children, meta, ...rest } = route;
    return meta && meta.isShow ? (
      children ? (
        filterRoutes(children) // 递归过滤子路由
      ) : (
        [] // 没有子路由时返回空数组
      )
    ) : (
      // 不满足过滤条件的路由，直接返回原路由
      [route]
    );
  });
}
export default router;
export const setupRouter = (app: App<Element>) => {
	app.use(router);
};