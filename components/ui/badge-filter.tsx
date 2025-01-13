"use client";
import React, {useContext, useState} from 'react';
import { Badge } from './badge';
import { RecipeContext } from '@/app/context/recipe-context';

export default function BadgeFilter() {
  const { dispatch } = useContext(RecipeContext);
  const cuisines:Array<string> = [
    "Chinese", "Japanese", "Korean", "Thai", "Vietnamese",
    "Indian", "Malaysian", "Indonesian", "Filipino", "Sri Lankan"
  ];
  
  const handleOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cuisine: string
  ) => {
    e.preventDefault();
    dispatch({
      type: 'SELECTED_CUISINE',
      payload: {
        selectedCuisine: cuisine,
      }
    })
  };

  return (
    <div>
      {cuisines.map((cuisine, idx) => (
        <Badge 
          key={`${cuisine}-${idx}`}
          variant={"outline"}
          className="border-orange-100 text-blue-950 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200"
          onClick={(e) => handleOnClick(e, cuisine)}
        >
          {cuisine}
        </Badge>
      ))}
    </div>
  );
}