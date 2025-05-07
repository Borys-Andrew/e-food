import { getLinksFromPaths } from "@/utils";

/**
 * Relative application URL paths
 */
export const Paths = {
  index: "/",
  recipies: {
    index: "recipies",
    id: {
      index: "recipe/id",
    },
  },

  blog: {
    index: "blog",
  },
  contacts: {
    index: "contacts",
  },
  about: {
    index: "about",
  },

  notFound: "404",
} as const;

/**
 * Absolute application URL paths
 */
export const Links = getLinksFromPaths(Paths);
