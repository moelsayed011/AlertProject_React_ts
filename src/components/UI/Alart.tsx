import {  X } from 'lucide-react'
import'./index.scss'
import { ReactNode } from 'react';
import { typeDefulat } from '../type';


interface IProps {
    type: typeDefulat;
    icon: ReactNode;
    title: string;
    description : ReactNode;
}


export const Alart = ({type = "alert-danger" , icon , title ,description}:IProps) => {
    return<>
        <div className={type}>
            <div className="alert-header">
                <div className="title">
                    <span>
                        {icon}
                    </span>
                    <h4>{title}</h4>
                </div>
                <X className='close' size={25}/>
            </div>
            
            <p>{description}</p>
            
        </div>
    </>
}