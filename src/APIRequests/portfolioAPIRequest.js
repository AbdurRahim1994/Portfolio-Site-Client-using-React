import axios from "axios";
import { BaseURL } from '../../src/helpers/Config'
import store from '../redux/store/store'
import { SetContactList, SetEducationList, SetExperienceList, SetIntroductionList, SetProjectList, SetReferenceList, SetTechnologyList, SetTrainingList } from "../redux/state-slice/portfolio-slice";

export const ReferenceListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllReference')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetReferenceList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetReferenceList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}
export const ContactListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllContact')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetContactList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetContactList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}
export const TrainingListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllCourse')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetTrainingList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetTrainingList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}
export const EducationListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllEducation')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetEducationList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetEducationList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}
export const TechnologyListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllAbout')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetTechnologyList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetTechnologyList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}
export const ExperienceListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllExperience')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetExperienceList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetExperienceList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}
export const ProjectListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllProject')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetProjectList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetProjectList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}
export const IntroductionListRequest = async () => {
    try {
        const res = await axios.get(BaseURL + '/getAllIntroduction')
        if (res.status === 200) {
            if (res.data.message === 'Successful') {
                store.dispatch(SetIntroductionList(res.data.result));
                return true
            }
            else {
                store.dispatch(SetIntroductionList([]))
                return new Error(res.data.message)
            }
        }
        else {
            return new Error("Something went wrong")
        }
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}