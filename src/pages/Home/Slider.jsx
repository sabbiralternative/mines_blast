import { useDispatch, useSelector } from "react-redux";
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderButtons";
import useEmblaCarousel from "embla-carousel-react";
import { setBoxId } from "../../redux/features/global/globalSlice";

const Slider = () => {
  const dispatch = useDispatch();
  const { boxId } = useSelector((state) => state.global);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const sliderData = [
    {
      id: 1,
      element: (
        <div
          className="element_cmdub9Wb2S slideOuter_pzBn8r04kG"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 1 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 1 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      element: (
        <div
          className="element_cmdub9Wb2S slideOuter_pzBn8r04kG"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 2 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 2 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      element: (
        <div
          className="element_cmdub9Wb2S slideOuter_pzBn8r04kG"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 3 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 3 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      element: (
        <div className="element_cmdub9Wb2S slideOuter_pzBn8r04kG">
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 4 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 4 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      element: (
        <div className="element_cmdub9Wb2S slideOuter_pzBn8r04kG">
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 5 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 5 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      element: (
        <div className="element_cmdub9Wb2S slideOuter_pzBn8r04kG">
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 6 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 6 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      element: (
        <div className="element_cmdub9Wb2S slideOuter_pzBn8r04kG">
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 7 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 7 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      element: (
        <div className="element_cmdub9Wb2S slideOuter_pzBn8r04kG">
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 8 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 8 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      element: (
        <div
          className="element_cmdub9Wb2S slideOuter_pzBn8r04kG"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 9 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 9 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      element: (
        <div
          className="element_cmdub9Wb2S slideOuter_pzBn8r04kG"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className={`slide_RQRVo2a1zm  ${
              boxId === 10 ? "slideActive_HlCgLf9xcf" : ""
            }`}
            style={{
              borderColor:
                boxId === 10 ? "rgba(255, 159, 62, 0.7)" : "transparent",
            }}
          >
            <div className="grid_RYOUUkNVOs">
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
              <span className="cell_ju_7E0YCBN cellSelected_cC6BPr1f_e" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="presets_Iew4PI2q4X">
      <div className="wrapper_nQcSDXkdDX">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        <div ref={emblaRef} className="wrapper_KzJFw8SFcC slider_CBGrL1GTgC">
          <div
            className="container_MaYsy7Ex60"
            // style={{
            //   transform: `translate3d(-${translate}px, 0px, 0px)`,
            // }}
          >
            {sliderData.map((item) => {
              return (
                <div onClick={() => dispatch(setBoxId(item.id))} key={item.id}>
                  {item.element}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
