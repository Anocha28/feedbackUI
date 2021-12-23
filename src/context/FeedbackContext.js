import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:uuidv4(),
            text: 'This is from context',
            rating: 9
        },
        {
            id:uuidv4(),
            text: 'This is from context 1',
            rating: 8
        },
        {
            id:uuidv4(),
            text: 'This is from context 2',
            rating: 6
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Confirm delete?')){
            setFeedback(feedback.filter((f)=>f.id !== id))
        }        
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item)=> (
            item.id === id ? {...item, ...updateItem} : item
        )))
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext