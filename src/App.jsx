import { RecoilRoot, useRecoilValue } from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  // using useMemo
  const totalNotificationCount = useMemo(() => {
    return  networkNotificationCount + jobAtomCount + notificationAtomCount + messagingAtomCount;
  }, [ networkNotificationCount, jobAtomCount, notificationAtomCount, messagingAtomCount])

  const totalNotificationCountSelector = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs({jobAtomCount})</button>
      <button>Messaging({notificationAtomCount})</button>
      <button>Notification({messagingAtomCount})</button>
      <button>Me {totalNotificationCountSelector}</button>

    </>
  );
}

export default App;
