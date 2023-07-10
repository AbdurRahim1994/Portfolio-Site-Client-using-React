import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        ReferenceList: [],
        ContactList: [],
        TrainingList: [],
        EducationList: [],
        TechnologyList: [],
        ExperienceList: [],
        ProjectList: [],
        IntroductionList: []
    },
    reducers: {
        SetReferenceList: (state, action) => {
            state.ReferenceList = action.payload
        },
        SetContactList: (state, action) => {
            state.ContactList = action.payload
        },
        SetTrainingList: (state, action) => {
            state.TrainingList = action.payload
        },
        SetEducationList: (state, action) => {
            state.EducationList = action.payload
        },
        SetTechnologyList: (state, action) => {
            state.TechnologyList = action.payload
        },
        SetExperienceList: (state, action) => {
            state.ExperienceList = action.payload
        },
        SetProjectList: (state, action) => {
            state.ProjectList = action.payload
        },
        SetIntroductionList: (state, action) => {
            state.IntroductionList = action.payload
        }
    }
})

export const { SetReferenceList, SetContactList, SetTrainingList, SetEducationList, SetTechnologyList, SetExperienceList, SetProjectList, SetIntroductionList } = portfolioSlice.actions
export default portfolioSlice.reducer;