export interface FoodListModel {
  _id?: string;
  name?: string;
  shortDescription?: string;
  longDescription?: string;
  photoUrl?: string;
  available?: boolean;
  ingredients?: string;
  dishTag?: string;
  qualities?: string;
  nutritionalFacts?: {
    calories?: string;
    protein?: string;
    fat?: string;
    carbs?: string;
    sodium?: string;
    dietaryFiber?: string;
  };
  allergens?: string;
  extraNutritionalFacts?: {
    calories?: string;
    protein?: string;
    fat?: string;
    carbs?: string;
    sodium?: string;
    dietaryFiber?: string;
  };
}
