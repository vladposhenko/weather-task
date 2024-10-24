import { Text, View } from "react-native"
import styles from "./styles"
import { FC, ReactNode } from "react"

interface IContainerProps { 
    children: ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Container

  