import { FlatList, Text, View } from "react-native";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  classname?: string;
}

const MovieHorizontalList = ({ title, movies, classname }: Props) => {
  return (
    <View className={`${classname}`}>
      {title && <Text className="text-3xl font-bold px-4">{title}</Text>}

      <FlatList
        horizontal
        className="py-4"
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};
export default MovieHorizontalList;
