import React, {FC} from "react";
import Chats from "../../components/Chats";
import Dialog from "../../components/Dialog";
import {IPage} from "../../interface/page";
import './index.sass'

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    return (
        <div className='page-index'>
            <Chats/>
            <Dialog/>
        </div>
    )
}