import { TOrderSection } from "@/types";

export const displayPageNumber = (title: TOrderSection) => {
  return title === "address" || title === "summary" || title === "success";
};

export const nextTitle = (title: TOrderSection): TOrderSection => {
  switch (title) {
    case "address":
      return "where";
    case "what":
      return "what";
    case "when":
      return "what";
    case "where":
      return "when";
    case "summary":
      return "where";
    case "success":
      return "summary";
  }
};
