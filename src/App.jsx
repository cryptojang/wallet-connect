import { useSDK } from "@metamask/sdk-react"; //  리액스 버버전전은  훅훅스스가  있있다
import { useState } from "react";

const App = () => {
  const { sdk } = useSDK(); // 갖다 쓴다

  const [account, setAccount] = useState();

  const onClickMetaMask = async () => {
    try {
      const accounts = await sdk?.connect(); //옵셔녈 체이닝 걸어줌. 있는 경우에만 하도록. if(!sdk) return; 과 동일

      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    } // 비동기 요청에 트라이 캐치 달아준다
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      {account ? (
        <>
          <div>
            Hello, {account.substring(0, 7)}...
            {account.substring(account.length - 5)}
          </div>
          <button onClick={() => setAccount("")}>logout</button>
        </>
      ) : (
        <button
          onClick={onClickMetaMask}
          className="bg-blue-100 py-2 px-4 rounded-full font-semibold bg-gradient-to-r from-fuchsia-400 to-purple-900 transition hover:-translate-y-1 hover:bg-black hover:text-white hover:bg-none text-white"
        >
          🦊 MetaMask Login
        </button>
      )}
    </div>
  );
};

export default App;
