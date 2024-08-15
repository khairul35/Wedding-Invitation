import './assets/main.css'

import {
    Card,
    Col,
    Divider,
    Drawer,
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
app.use(Card);
app.use(Drawer);

app.mount('#app')
