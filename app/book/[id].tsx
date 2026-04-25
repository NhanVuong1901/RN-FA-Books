import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { books } from "../../data/books";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const book = books.find((b) => b.id === id);

  if (!book) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chi tiết sách</Text>
      </View>

      <View style={styles.content}>
        <Image source={book.image} style={styles.image} />

        <Text style={styles.title}>{book.title}</Text>

        <Text style={styles.author}>Tác giả: {book.author}</Text>

        <Text style={styles.sectionTitle}>Nội dung</Text>

        <Text style={styles.description}>{book.description}</Text>

        <Pressable onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Quay lại</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#5B5AE6",
    padding: 16,
  },
  headerText: {
    color: "#fff",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  author: {
    color: "#888",
  },
  sectionTitle: {
    marginTop: 16,
  },
  description: {
    color: "#555",
    marginTop: 6,
  },
  button: {
    backgroundColor: "#5B5AE6",
    padding: 12,
    borderRadius: 12,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
