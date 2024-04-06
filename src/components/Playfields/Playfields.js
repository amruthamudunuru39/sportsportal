import React from 'react';
import './Playfields.css'; // Import Playfields.css for styling

const Playfields = () => {
  return (
    <div className="playfields-container">
      <h1>Playfields</h1>
      <table className="playfields-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Playfields</th>
            <th>Numbers</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace the numbers in the first column with your own */}
          <tr>
            <td>1</td>
            <td>ATHLETICS TRACK (200 Mts)</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>BASKET-BALL(CONCRETE)</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>BADMINTON(OUTDOOR)</td>
            <td>9</td>
          </tr>
          <tr>
            <td>4</td>
            <td>BALL BADMINTON</td>
            <td>1</td>
          </tr>
          <tr>
            <td>5</td>
            <td>CRICKET PRACTICE PITCH</td>
            <td>2</td>
          </tr>
          <tr>
            <td>6</td>
            <td>CRICKET GROUND</td>
            <td>1</td>
          </tr>
          <tr>
            <td>7</td>
            <td>FOOT BALL</td>
            <td>1</td>
          </tr>
          <tr>
            <td>8</td>
            <td>HAND BALL</td>
            <td>1</td>
          </tr>
          <tr>
            <td>9</td>
            <td>HOCKEY FIELD</td>
            <td>1</td>
          </tr>
          <tr>
            <td>10</td>
            <td>KABADDI</td>
            <td>2</td>
          </tr>
          <tr>
            <td>11</td>
            <td>KHO-KHO</td>
            <td>2</td>
          </tr>
          <tr>
            <td>12</td>
            <td>TENNIS COURT</td>
            <td>1</td>
          </tr>
          <tr>
            <td>13</td>
            <td>BASKET BALL(SYNTHETIC)</td>
            <td>1</td>
          </tr>
          <tr>
            <td>14</td>
            <td>VOLLEY BALL</td>
            <td>2</td>
          </tr>
          {/* Add more rows for other playfields */}
        </tbody>
      </table>
    </div>
  );
};

export default Playfields;
