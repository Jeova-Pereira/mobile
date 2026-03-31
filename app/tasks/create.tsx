import { useTasks } from "@/src/hooks/useTasks";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";

export default function CreateTask(){
    const router = useRouter()
    const { addTask } = useTasks()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    async function handleCreate(){
        if(!title || !content) return

        await addTask(title, content)

        router.back()
    }

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Título"
                placeholderTextColor="#64748b"
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                placeholder="Conteúdo"
                placeholderTextColor="#64748b"
                style={[styles.input, styles.textArea]}
                value={content}
                onChangeText={setContent}
                multiline
            />

            <Pressable style={styles.button} onPress={handleCreate}>
                <Text style={styles.buttonText}>Criar Task</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: "#020617",
        
    },

    input: {
        backgroundColor: "#0f172a",
        color: "#f1f5f9",
        padding: 16,
        borderRadius: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#1e293b",
    },

    textArea: {
        height: 640,
        textAlignVertical: "top",
    },

    button: {
        backgroundColor: "#38bdf8",
        padding: 16,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 8,
    },

    buttonText: {
        color: "#020617",
        fontWeight: "600",
        fontSize: 16,
    }
})