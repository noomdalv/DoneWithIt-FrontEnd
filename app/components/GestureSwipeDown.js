import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler"
import { useNavigation } from '@react-navigation/native';


const GestureSwipeDownBack = ({children}) => {
  const navigation = useNavigation()

  const swipeDown = Gesture.Fling().direction(Directions.DOWN).onEnd(navigation.goBack)

  return (
    <GestureDetector gesture={swipeDown}>
      {children}
    </GestureDetector>
  )
}

export default GestureSwipeDownBack
