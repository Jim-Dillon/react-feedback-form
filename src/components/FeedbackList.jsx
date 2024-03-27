import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

const FeedbackList = () => {

  const { feedback, isLoading } = useContext(FeedbackContext)

  // conditional loading state
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem 
              key={item.id} 
              item={item}              
            />
        ))}
    </div>
  )
}

export default FeedbackList