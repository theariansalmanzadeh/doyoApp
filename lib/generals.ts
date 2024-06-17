import { TOrderSection, TRequestTitle } from "@/types";

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

export const sectionHandler = (section: string) => {
  switch (section) {
    case "Addresses":
      return { title: "where", number: 3 };
    case "Wallet":
      return { title: "wallet", number: 6 };
    case "Requests":
      return { title: "My Request", number: 1 };
  }
};
export const isRequestSection = (section: string) => {
  switch (section) {
    case "Addresses":
      return false;
    case "Wallet":
      return true;
    case "Requests":
      return true;
  }
};

export const hasLink = (section: string) => {
  switch (section) {
    case "Addresses":
      return true;
    case "Wallet":
      return true;
    case "Requests":
      return true;
  }
};

export const requestBackwardSection = (section: {
  title: TRequestTitle;
  pageNumber: number;
}) => {
  switch (section.pageNumber) {
    case 1:
      return "home";
    case 2:
      return {
        title: "My Requests",
        pageNumber: 1,
      };
    case 3:
      return {
        title: "provider list",
        pageNumber: 2,
      };
    case 4:
      return {
        title: "Provider chat",
        pageNumber: 3,
      };
    case 5:
      return {
        title: "My Requests",
        pageNumber: 1,
      };
    case 6:
      return {
        title: "invoice",
        pageNumber: 5,
      };
    case 7:
      return {
        title: "invoice",
        pageNumber: 5,
      };
  }
};
