import { Cast } from "@/infrastructure/interfaces/cast";
import { View, Text, FlatList } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}
const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5">
      <Text className="font-bold text-2xl px-5 mb-2">Actores</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
