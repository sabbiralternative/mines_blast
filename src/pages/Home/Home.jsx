import { useState } from "react";
import { generateRoundId } from "../../utils/generateRoundId";
import { useOrderMutation } from "../../redux/features/events/events";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/auth";
import { useSound } from "../../context/ApiProvider";
import {
  playButtonSound,
  playCashOutSound,
  playWinSound,
} from "../../utils/sound";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import BetHistory from "./BetHistory";
import Box from "./Box";
import BetSlip from "./BetSlip";

const Home = () => {
  const errorMessage = sessionStorage.getItem("errorMessage");
  const { sound } = useSound();
  const { mutate: handleAuth } = useAuth();
  const [addOrder] = useOrderMutation();
  const [minesCount, setMinesCount] = useState(1);
  const [betAmount, setBetAmount] = useState(100);
  const [isStartGame, setIsStartGame] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [current_multiplier, setCurrentMultiplier] = useState(0);
  const [next_multiplier, setNextMultiplier] = useState(0);
  const [winMultiplier, setWinMultiplier] = useState(null);
  const { token } = useSelector((state) => state.auth);

  const initialBoxData = Array.from({ length: 25 }, (_, i) => ({
    name: `box${i + 1}`,
    id: i + 1,
    win: false,
    roundEnd: false,
    isOpacityFull: false,
  }));
  const [boxData, setBoxData] = useState(initialBoxData);
  const isAtLeastOneBoxWin = boxData.some((box) => box.win);
  const activeBoxCount = boxData.filter((box) => box.win).length;

  const handleChangeBetAmount = (type) => {
    if (type === "minus") {
      if (betAmount > 0 && betAmount <= 100) {
        setBetAmount((prev) => Math.max(prev - 10, 0));
      } else if (betAmount > 100 && betAmount <= 1000) {
        setBetAmount((prev) => Math.max(prev - 100, 0));
      } else if (betAmount > 1000) {
        setBetAmount((prev) => Math.max(prev - 500, 0));
      }
    }
    if (type === "plus") {
      if (betAmount >= 0 && betAmount < 100) {
        setBetAmount((prev) => prev + 10);
      } else if (betAmount >= 100 && betAmount < 1000) {
        setBetAmount((prev) => prev + 100);
      } else if (betAmount >= 1000) {
        setBetAmount((prev) => prev + 500);
      }
    }
  };

  const handleStartGame = async () => {
    if (betAmount) {
      if (sound) {
        playButtonSound();
      }
      setWinMultiplier(null);
      setBoxData(initialBoxData);
      setSelectedBoxes([]);
      const round_id = generateRoundId();
      sessionStorage.removeItem("round_id");
      sessionStorage.setItem("round_id", round_id);
      const payload = [
        {
          eventId: 20003,
          eventName: "Mines",
          isback: 0,
          stake: betAmount,
          type: "bet",
          mines_count: minesCount,
          round_id,
        },
      ];
      const res = await addOrder(payload).unwrap();
      if (res?.success) {
        const multiplier = Number(res?.current_multiplier) * betAmount;
        setCurrentMultiplier(multiplier.toFixed(2));
        setNextMultiplier(res?.next_multiplier);
        handleAuth(token);
        setIsStartGame(true);
        setTimeout(() => {
          let recentResult = [];
          const recentStoredResult = localStorage.getItem("recentResult");
          if (recentStoredResult) {
            recentResult = JSON.parse(recentStoredResult);
          }
          //push
          localStorage.setItem("recentResult", JSON.stringify(recentResult));
        }, 500);
      } else {
        setIsStartGame(false);
        toast.error(res?.Message);
      }
    } else {
      toast.error("Amount is required");
    }
  };

  const handleCashOut = async () => {
    const round_id = sessionStorage.getItem("round_id");
    const payload = [
      {
        round_id: Number(round_id),
        type: "cashout",
        box_count: activeBoxCount,
        eventId: 20003,
        selected_tiles: selectedBoxes,
        stake: betAmount,
      },
    ];

    const res = await addOrder(payload).unwrap();

    if (res?.success) {
      if (sound) {
        playCashOutSound();
      }
      setWinMultiplier(res?.win_multiplier);
      handleAuth(token);
      const findBoxAndChange = boxData?.map((boxObj, i) => ({
        ...boxObj,
        win: res?.all?.[i] === 1 ? true : false,
        mine: res?.all?.[i] === 0 ? true : false,
        roundEnd: true,
      }));
      setBoxData(findBoxAndChange);
      setIsStartGame(false);
      setShowWinModal(true);
      setTimeout(() => {
        if (sound) {
          playWinSound();
        }
      }, 500);

      setTimeout(() => {
        setShowWinModal(false);
      }, 2000);

      setTimeout(() => {
        setBoxData(initialBoxData);
      }, 2500);
    }
  };

  return token ? (
    <div className="wrapper_ENkjVclvoR">
      <div className="wrapper_eTjFy8P5w9">
        <div className="rects_eNPZ9rCNMd">
          <div>
            <div className="rect_RuFbAr7mVW" />
            <div className="rect_RuFbAr7mVW" />
          </div>
          <div>
            <div className="rect_RuFbAr7mVW" />
            <div className="rect_RuFbAr7mVW" />
          </div>
        </div>
      </div>
      <span className="wrapper_c4rK8IA8P_" />
      <Navbar />
      <div className="stopper_Lesn6M5PqX" style={{ top: "45.5px" }} />
      <div className="wrapper_rLcbKXt0xs container_kaNGwBdUsv">
        <BetHistory />
        <div className="main_K9TScPdCdw" style={{ height: "auto" }}>
          <Box />
          <BetSlip />
        </div>
      </div>
    </div>
  ) : (
    <div className="error-container">
      <div className="alert alert-danger text-center m-0 " role="alert">
        {errorMessage ||
          "URL parameters are missing or invalid. Key: token | Value"}
      </div>
    </div>
  );
};

export default Home;
