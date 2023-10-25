import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamecardContainer>
              <GameCardSkeleton key={skeleton} />
            </GamecardContainer>
          ))}
        {data?.map((data) => (
          <GamecardContainer>
            <GameCard key={data.id} game={data} />
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
