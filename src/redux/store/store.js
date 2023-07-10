import { configureStore } from '@reduxjs/toolkit'
import settingReducer from '../state-slice/setting-slice'
import portfolioReducer from '../state-slice/portfolio-slice'

export default configureStore({
    reducer: {
        setting: settingReducer,
        portfolio: portfolioReducer
    }
})