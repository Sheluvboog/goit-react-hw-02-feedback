import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (
            <div className={css.wrap}>
            {options.map((option, i) => {
                return (
                    <button
                        key={i + 1}
                        className={css.btn}
                        onClick={() => {
                            onLeaveFeedback(option);
                        }}
                    >
                        {option}
                    </button>
                );
               })} 
            </div>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.oneOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
};