import { createStore } from 'vuex'
import event from './module/event.js'

export default createStore({
    modules: {
        event
    }
})
