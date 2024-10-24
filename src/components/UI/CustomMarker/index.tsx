import { Text, TouchableOpacity, View } from "react-native"
import { FC, ReactNode } from "react"
import styles from "./styles"

interface ICustomMarkerProps { 
    city: string | null
    temperature: number
}

const CustomMarker: FC<ICustomMarkerProps> = ({ city, temperature }) => {
    return (
        <>
            <TouchableOpacity style={styles.markerContainer}>
                <Text>{ city || 'City not defined' }</Text>
                <Text>{ temperature?.toFixed(1) || ' ' } ℃</Text>
            </TouchableOpacity>
        </>
    )
}

export default CustomMarker

  