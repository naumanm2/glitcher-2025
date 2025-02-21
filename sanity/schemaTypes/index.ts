import { type SchemaTypeDefinition } from "sanity";
import general from "./general";
import show from "./show";
import member from "./member";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [general, show, member],
};
