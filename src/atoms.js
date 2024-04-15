import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 103
})
export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 100
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 12
})

// Selector is dervied from other atoms
export const totalNotificationCount = selector({
    key: "totalNotificationSelector",
    value: ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const jobAtomCount = get(jobAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobAtomCount + notificationAtomCount + messagingAtomCount;
    }
})