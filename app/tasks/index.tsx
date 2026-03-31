import { useTasks } from "@/src/hooks/useTasks";
import { router } from "expo-router";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";

export default function Task(){
    const {tasks, removeTask} = useTasks()
    
    return(
        <View style={{ flex: 1 }}>
            <FlatList
                data={tasks}
                keyExtractor={(item)=>String(item.id)}
                contentContainerStyle={styles.container}
                renderItem={({ item }) => (
                    <Pressable style={styles.card}
                    onPress={() => router.push({
                        pathname: "/tasks/[id]",
                        params: { id: item.id.toString() }
                    })}>

                        <View style={styles.textArea}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                        </View>

                        <Pressable
                            onPress={() => removeTask(item.id)}
                            style={({ pressed }) => [
                                styles.button,
                                pressed && { opacity: 0.6 }
                            ]}
                        >
                            <Text style={styles.buttonText}>🗑</Text>
                        </Pressable>

                    </Pressable>
                )}
            />

            {/* BOTÃO GLOBAL */}
            <Pressable 
                style={styles.fab}
                onPress={() => router.push("/tasks/create")}
            >
                <Text style={styles.fabText}>＋</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 40,
        backgroundColor: "#020617",
        flexGrow: 1,
        paddingBottom: 100, // espaço pro botão
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "#0f172a",
        padding: 18,
        borderRadius: 16,
        marginBottom: 14,

        borderWidth: 1,
        borderColor: "#1e293b",
    },

    textArea: {
        flex: 1,
        marginRight: 10,
    },

    title: {
        fontSize: 17,
        fontWeight: "600",
        color: "#f1f5f9",
    },

    content: {
        fontSize: 14,
        color: "#94a3b8",
        marginTop: 6,
    },

    button: {
        backgroundColor: "#7f1d1d",
        width: 42,
        height: 42,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
    },

    // 🔥 BOTÃO FLUTUANTE
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#38bdf8",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",

        elevation: 5,
    },

    fabText: {
        color: "#020617",
        fontSize: 28,
        fontWeight: "bold",
    }
});