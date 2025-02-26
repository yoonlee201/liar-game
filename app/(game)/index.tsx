import { Text, View } from "react-native";
import Link from "@/components/link";
import words from "@/assets/words.json";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {/* {error ? <Text style={{ color: "red" }}>{error}</Text> : null} */}
      {words.map(({ category, link }, index) => (
        <Link key={index} style={{ color: "black" }} href={`/${link}`}>
          {category.korean}
        </Link>
      ))}
      <Link
        style={{
          backgroundColor: "gray",
          padding: 10,
          borderRadius: 5,
        }}
        href={"../"}
      >
        <Text style={{ color: "black" }}>{"Start"}</Text>
      </Link>
    </View>
  );
}
