import { ISavedAddresses, IServiceRequest, TOrderSection } from "@/types";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const isMenuOpen = atom<boolean>(false);
export const useIsMenuOpen = () => useAtom(isMenuOpen);

const orderSection = atom<{ title: TOrderSection; page: number }>({
  title: "what",
  page: 1,
});
export const useOrderSection = () => useAtom(orderSection);

const openCalendar = atom<boolean>(false);
export const useOpenCalendar = () => useAtom(openCalendar);

const serviceRequest = atom<IServiceRequest>({
  services: new Set([]),
  when: "As soon as Possible (Real-Time)",
  where: "Home (9655 Yonge St)",
});
export const useServiceRequest = () => useAtom(serviceRequest);

const savedAddresses = atomWithStorage<ISavedAddresses[]>("addresses", []);

export const useSavedAddresses = () => useAtom(savedAddresses);
