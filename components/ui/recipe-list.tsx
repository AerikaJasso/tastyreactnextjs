"use client";
import * as React from "react";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardFooter 
} from "./card";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { RecipeType } from "@/types";
import { RecipeContext } from "@/app/context/recipe-context";
import Link from "next/link";

export default function RecipeList({
  recipes,
}: {
  recipes: Array<RecipeType>;
}) {
  const [filterRecipes, setFilterRecipes] = useState<RecipeType[]>([]);
  const { 
    state: { selectedCuisine },
  } = useContext(RecipeContext);
  useEffect(() => {
    const getFilteredRecipes = async () => {
      const filteredRecipesByCuisine = recipes.filter(
        (recipe: RecipeType) => recipe.cuisine === selectedCuisine
      );
      setFilterRecipes(filteredRecipesByCuisine); 
    }

    if(selectedCuisine) {
      getFilteredRecipes();
    }
  },[recipes, selectedCuisine]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-20 pt-12 pb-40">
      {(filterRecipes.length > 0 ? filterRecipes 
        : recipes).map((recipe: RecipeType, idx: number) => (
        <Link href={`/recipes/${recipe.id}`} key={`${recipe.name}-${idx}`}>
          <Card
          className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient"
          >
            <CardHeader className="relative h-96">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill={true}
                className="bg-cover rounded-md shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </CardHeader>
            <CardContent className="mt-3">
              <CardTitle className="uppercase lg:text-3xl relative font-bold line-clamp-2">
                {recipe.name}
              </CardTitle>
            </CardContent>
            <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
              <div className="flex flex-col">
                <p className="text-lg">Prep Time Minutes</p>
                <p className="text-grey-800">{recipe.prepTimeMinutes}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg">Cooking Time Minutes</p>
                <p className="text-grey-800">{recipe.cookTimeMinutes}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg">Serves</p>
                <p className="text-grey-800">{recipe.servings}</p>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}