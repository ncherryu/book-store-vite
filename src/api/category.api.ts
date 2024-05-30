import { Category } from "../models/category.model";
import { httpClient } from "./http";

export const fetchCategory = async () => {
    const response = await httpClient.get<Category[]>('/category?limit=4&current_page=1');
    return response.data;
}