import { getMessageDataType } from './../../redux/chat/interface';
import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";

export const getChatList = () => {
    return wrapper("get", URLS.LIST)
}

export const getMessages = (params: getMessageDataType) => {
    return wrapper("get", URLS.MESSAGES + `?chat_id=${params.id}&offset=0&limit=20`)
}