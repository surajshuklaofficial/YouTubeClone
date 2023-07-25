import * as api from '../api';

export const uploadContent = async ( contentDataData ) => {
    const userInfo = JSON.parse(localStorage.getItem('userProfile')).userInfo;

    try {
        const { data } = await api.uploadContent(contentDataData, userInfo.sub, userInfo.name, userInfo.picture);

    } catch (error) {
        console.log(error);
    }
} 

export const fetchContents = async () => {
    try {
        const { data } = await api.fetchContents();
        return data;
    } catch (error) {
        console.log(error);
    }
}