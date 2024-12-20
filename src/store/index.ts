import { createPinia } from 'pinia';
import { App } from 'vue';

// 创建pinia实例
const store = createPinia();

// 配置pinia
export function setupStore(app: App<Element>) {
	app.use(store);
}

export { store };
