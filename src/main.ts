import './assets/main.css'

import {
    Col,
    Divider,
    Row,
} from 'ant-design-vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(Divider);
app.use(Row);
app.use(Col);

app.mount('#app')
