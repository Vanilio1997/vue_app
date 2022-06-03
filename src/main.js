import { createApp } from 'vue'
import App from './App'
import '@/UI/Scss/global.scss';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import  {faTrashCan} from '@fortawesome/free-solid-svg-icons'
library.add(faTrashCan)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
