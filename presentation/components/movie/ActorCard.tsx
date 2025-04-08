import { Image, Text, View } from "react-native";
import { Cast } from "@/infrastructure/interfaces/cast";

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  return (
    <View className="px-2">
      <View className="w-[100]">
        <Image
          source={{ uri: actor.avatar }}
          className="w-[100px] h-[150] rounded-2xl shadow"
          resizeMode="cover"
        />

        <View>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit
            className="font-bold text-base"
          >
            {actor.name}
          </Text>
          <Text className="text-gray-600 text-xs">{actor.character}</Text>
        </View>
      </View>
    </View>
  );
};
