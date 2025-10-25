import { useSelector } from "react-redux";
import { BoxInitialLook } from "./constant";
import { useEffect, useState } from "react";

const Box = () => {
  const { boxId } = useSelector((state) => state.global);

  console.log(boxId);

  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const initialData = BoxInitialLook[boxId].map((item, i) => ({
      id: i + 1,
      opacity: item,
    }));
    setBoxes(initialData);
  }, [boxId]);

  const handleChangeBox = (boxId) => {
    const updatedBox = boxes?.map((box) => ({
      ...box,
      opacity: box?.id === boxId ? (box?.opacity === 1 ? 0 : 1) : box?.opacity,
    }));
    setBoxes(updatedBox);
  };
  return (
    <div className="field_CRT30NofhT">
      <div className="wrapper_hjjs3E9M6H">
        <div className="inner_rKLY5yma54">
          <div
            className="note_Db4Vx0x2Ki"
            style={{ transition: "opacity 300ms ease-in-out" }}
          />
        </div>
      </div>
      <div className="wrapper_XSzG6KETYA">
        <div className="couple_R60N8m21VG">
          <span>Possible payout</span>
          <span>
            <div className="wrapper_PYNnzpEcD1">
              <span className style={{ color: "rgb(255, 156, 56)" }}>
                1.50
              </span>
            </div>
          </span>
        </div>
        <div className="couple_R60N8m21VG">
          <span>Multiplier</span>
          <span style={{ color: "rgb(255, 156, 56)" }}>1.5</span>
        </div>
      </div>
      <div className="grid_WTOj9ljoIW">
        <div className="wrapper_Gu1FXfFOjW">
          {boxes?.map((box, i) => {
            return (
              <span
                onClick={() => handleChangeBox(box?.id)}
                key={i}
                data-selected="false"
                data-cell={0}
                className="cell_xC_K0w9AAO"
                style={{ animationDelay: "10ms" }}
              >
                <div style={{ opacity: 0 }}>
                  <div className="wrapper_Ee1CUV3Blf wrapperDarkened_fVOCTps3n2">
                    <span
                      className="bg_Mqutln28HR"
                      style={{
                        backgroundImage:
                          'url("https://static.t-t-t.games/ttt/mines_blast/assets/images/game/bomb.webp")',
                      }}
                    />
                  </div>
                </div>
                <div style={{ opacity: 0 }}>
                  <div
                    className="wrapper_whONIrHaRQ"
                    style={{ backgroundColor: "rgba(255, 172, 89, 0.1)" }}
                  >
                    <span
                      className="icon_HKFXh5r0tl"
                      style={{ backgroundImage: 'url("data:image/svg+xml' }}
                    />
                    <div
                      className="border_pYKo547xyf"
                      style={{
                        background: `linear-gradient(
                              0deg,
                              rgba(0, 0, 0, 0) 0%,
                              rgba(255, 159, 62, 0.7) 100%
                            )`,
                      }}
                    />
                    <div
                      className="blur_IrQIJwZQdb"
                      style={{ background: "rgba(255, 159, 62, 0.7)" }}
                    />
                    <div className="svg_AICoj2rTCw">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={63}
                        height={41}
                        viewBox="0 0 63 41"
                        fill="none"
                      >
                        <g filter="url(#filter0_f_551_10051)">
                          <ellipse
                            cx="32.6992"
                            cy="24.5"
                            rx="11.5"
                            ry="3.5"
                            fill="rgba(255, 159, 62, 0.70)"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_551_10051"
                            x="0.89922"
                            y="0.700001"
                            width="63.6"
                            height="47.6"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.15"
                              result="effect1_foregroundBlur_551_10051"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div style={{ opacity: box?.opacity }}>
                  <div className="wrapper_iEPW7TIsX_">
                    <div
                      className="inner_n6QRGHvPSF"
                      style={{ backgroundColor: "rgba(255, 147, 39, 0.55)" }}
                    >
                      <div
                        className="inner_n6QRGHvPSF"
                        style={{
                          background: `linear-gradient(
                                0deg,
                                rgba(255, 195, 39, 0) 0%,
                                rgba(255, 147, 39, 0.1) 100%
                              )`,
                        }}
                      >
                        <div
                          className="inner_n6QRGHvPSF"
                          style={{
                            background: `radial-gradient(
                                  50% 40.62%,
                                  rgba(255, 147, 39, 0.3) 0%,
                                  rgba(255, 147, 39, 0) 100%
                                )`,
                          }}
                        >
                          <div
                            className="border_qnE6501xnf"
                            style={{
                              background: `linear-gradient(
                                    0deg,
                                    rgba(0, 0, 0, 0) 0%,
                                    rgba(255, 172, 89, 0.5) 100%
                                  )`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Box;
