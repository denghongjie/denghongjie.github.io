
Object.assign(window, Vue);
function mountApp(params) {
    const app = Vue.createApp(params);
    //中文
    app.use(ElementPlus, {
        locale: ElementPlusLocaleZhCn,
    })
    app.use(ElementPlus);
    //引入图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.mount("#app");
}