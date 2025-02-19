import { type SchemaTypeDefinition } from "sanity";
import general from "./general";
import show from "./show";
import about from "./about";
import member from "./member";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [general, show, member],
};
