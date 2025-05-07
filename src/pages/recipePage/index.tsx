import { Params } from "react-router-dom";

export const RecipePage = ({ id }: Params) => {
  return (
    <div>
      RecipePage with <span className="text-5xl">{id}</span>
    </div>
  );
};
