import { RecoilRoot, useRecoilValue } from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms";

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

  // use useMemo
  const totalNotificationCount = networkNotificationCount + jobAtomCount + notificationAtomCount + messagingAtomCount;

  console.log(networkNotificationCount);
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
      <button>Me {totalNotificationCount}</button>

    </>
  );
}

export default App;
