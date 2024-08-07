import {
  IDoingRequest,
  IRequestState,
  ISavedAddresses,
  IServiceRequest,
  TOrderSection,
  TRequestTitle,
} from "@/types";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { StaticImageData } from "next/image";

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

const requestSection = atom<{ title: TRequestTitle; pageNumber: number }>({
  title: "My Requests",
  pageNumber: 1,
});

export const useRequestSection = () => useAtom(requestSection);

const requests = atom<IRequestState[]>([
  {
    title: "cleaning",
    orderTime: 3,
    number: 423553,
    state: "Accepted",
    serviceProvider: null,
    isPaid: false,
  },
  {
    title: "cleaning",
    orderTime: 5,
    number: 421563,
    state: "Pending",
    serviceProvider: null,
    isPaid: false,
  },
]);

export const useRequests = () => useAtom(requests);

const requestInfos = atom<{
  service: string;
  orderNumber: number;
  timeOrder: number;
  isPaid: boolean;
  paymentHash: string;
}>({
  service: "",
  orderNumber: 0,
  timeOrder: 0,
  isPaid: false,
  paymentHash: "",
});

export const useRequestInfos = () => useAtom(requestInfos);

const isDetailOpen = atom<boolean>(false);

export const useIsDetailOpen = () => useAtom(isDetailOpen);

const providerSelected = atom<{
  name: string;
  votes: number;
  wage: number;
  imgUrl: StaticImageData | null;
}>({
  name: "",
  votes: -1,
  wage: -1,
  imgUrl: null,
});

export const useProviderSelected = () => useAtom(providerSelected);

const profileInfo = atom<{
  name: string;
  votes: number;
  wage: number;
  imgUrl: StaticImageData | null;
}>({
  name: "",
  votes: -1,
  wage: -1,
  imgUrl: null,
});

export const useProfileInfo = () => useAtom(profileInfo);

const doingRequest = atom<IDoingRequest>({
  serviceProvider: "",
  imgUrl: null,
  orderNumber: -1,
  data: "",
  serviceType: "",
  isPaid: "",
});

export const useDoingRequest = () => useAtom(doingRequest);

const elementTasker = atom<any>(null);
export const useElementTasker = () => useAtom(elementTasker);

const isScroll = atom<boolean>(false);
export const useIsScroll = () => useAtom(isScroll);
