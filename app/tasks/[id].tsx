import { useTask } from "@/src/hooks/useTask";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function TaskDetails(){
    const { id } = useLocalSearchParams()

    const taskId = Array.isArray(id) ? Number(id[0]) : Number(id)

    const { task } = useTask(taskId)

    if (!task) {
        return (
            <View style={styles.container}>
                <Text style={styles.loading}>Carregando...</Text>
            </View>
        )
    }

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 40 }}
        >
            <Text style={styles.title}>
                {task.title}
            </Text>

            <Text style={styles.content}>
                {task.content}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: "#020617",
    },

    loading: {
        color: "#94a3b8",
        fontSize: 16,
    },

    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#f1f5f9",
        marginBottom: 14,
    },

    content: {
        fontSize: 16,
        color: "#cbd5f5",
        lineHeight: 24,
    }
})