import { Image, Pressable, Text, View, StyleSheet } from "react-native";

export default function BookItem({ item, onPress }: any) {
  const isFeatured = item.id === "1";

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <Image source={item.image} style={styles.image} />

        {isFeatured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>Nổi bật</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>Tác giả: {item.author}</Text>
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Đọc ngay</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 80,
    borderRadius: 10,
  },

  featuredBadge: {
    position: "absolute",
    top: 4,
    left: 4,
    backgroundColor: "#FF9500",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },

  featuredText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontWeight: "600",
  },

  author: {
    color: "#888",
    fontSize: 12,
  },

  button: {
    backgroundColor: "#5B5AE6",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
