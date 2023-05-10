import PropTypes from "prop-types";
import css from "./Statistics.module.css"

export const Statistics = ({ recall, total, positive, statics }) => {
    return (
         <div className={css.statistics}>
                <h3>Statistics</h3>
                {recall.map((name, i) => {
                    return (
                        <p key={i} className={css[name]}>
                            {name}:
                            <span className={css.numbers}>{statics[name]}</span>
                        </p>
                    );
                })}
                <p>
                    <span>Total: {total}</span>
                </p>

                <p>
                    <span>Positive Feedback: {positive}%</span>
                </p>
            </div>
    )
}


Statistics.propTypes = {
    recaal: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    statics: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired
}