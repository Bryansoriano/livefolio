import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
          	strArray.map((char,i) => (
            <span key={char + i} className={`${letterClass} _${i + idx}`}>
                {char}
            </span>
            }

        </span>
        )
}
