import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from './Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <table>
      <tbody>
        <tr>
          <td>Good:</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral:</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad:</td>
          <td>{bad}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Positive feedback:</td>
          <td>{positivePercentage}%</td>
        </tr>
      </tfoot>
    </table>
  ) : (
    <table>
      <tfoot>
        <tr>
          <td>
            <Notification message="There is no feedback" />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
