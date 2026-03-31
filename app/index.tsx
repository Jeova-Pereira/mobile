import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home(){
    return(
        <View>
            <Text>Home</Text>

            <Link href="/tasks">
                Ir para Tasks
            </Link>
        </View>
    )
}
