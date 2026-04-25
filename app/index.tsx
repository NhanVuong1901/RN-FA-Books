import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import BookItem from "../components/BookItem";
import { books } from "../data/books";

export default function LibraryScreen() {
  const router = useRouter();
  const [data, setData] = useState(books);
  const [refreshing, setRefreshing] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false); 

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData([...books]);
      setRefreshing(false);
    }, 1000);
  };

  const handleDelete = (id: string) => {
    Alert.alert("Xóa sách", "Bạn có chắc muốn xóa không?", [
      { text: "Hủy" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => {
          setData((prev) => prev.filter((item) => item.id !== id));
        },
      },
    ]);
  };

  const renderRightActions = (id: string) => {
    return (
      <Pressable onPress={() => handleDelete(id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Xóa</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thư viện sách</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>MOTSACH</Text>
            <Text style={styles.cardDesc}>
              Chào mừng bạn đến với kho sách phong phú của chúng tôi.
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeNumber}>{data.length}</Text>
            <Text style={styles.badgeText}>cuốn</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => renderRightActions(item.id)}
            overshootRight={false}
            onSwipeableWillOpen={() => setIsSwiping(true)} 
            onSwipeableClose={() => setIsSwiping(false)} 
          >
            <BookItem
              item={item}
              onPress={() => {
                if (!isSwiping) {
                
                  router.push(`/book/${item.id}`);
                }
              }}
            />
          </Swipeable>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Danh sách đang trống</Text>
            <Text style={styles.emptyDesc}>Kéo xuống để tải lại</Text>
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
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
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardText: {
    flex: 1,
    marginRight: 10,
  },

  cardTitle: {
    fontWeight: "bold",
  },

  cardDesc: {
    color: "#888",
    fontSize: 12,
  },

  badge: {
    alignItems: "center",
    backgroundColor: "#EEF0FF",
    padding: 10,
    borderRadius: 12,
  },

  badgeNumber: {
    color: "#5B5AE6",
    fontWeight: "bold",
  },

  badgeText: {
    fontSize: 10,
  },

  list: {
    paddingHorizontal: 16,
  },

  empty: {
    alignItems: "center",
    marginTop: 40,
  },

  emptyTitle: {
    fontWeight: "bold",
  },

  emptyDesc: {
    color: "#888",
    marginTop: 6,
  },

  deleteButton: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 16,
    marginBottom: 12,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
