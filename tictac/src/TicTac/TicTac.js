import React, { useState } from 'react';

function TicTac() {
    const [tick, setTick] = useState(Array(9).fill(null));
    const [click, setClick] = useState('X')
    const clickBox = (n) => {
      let square = [...tick];
      if(square[n] !== null){
        alert('Already Clicked');
        return
      }
      square[n] = click;
      setTick(square)
      click === 'X' ? setClick('O') : setClick('X');
      if(winner(square)){
        alert(`Winner is ${square[n]}`)
        square.fill(null);
        setTick(square)

      }
      if(draw(square)){
        alert(`It's Draw`)
        square.fill(null);
        setTick(square)
      }
    }

    const draw = (box) => {
        let count = 0;
        box.forEach(ele => {
            if(ele !== null){
                count++
            }
        })
        if(count >= 9){
            return true
        } else {
            return false
        }
    }

    const winner = (box) => {
        const matrix = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        let check = false;
        matrix.forEach(ele =>{
            if(box[ele[0]] !== null && box[ele[1]] !== null && box[ele[2]] !== null){
                if(box[ele[0]] === box[ele[1]] && box[ele[1]] === box[ele[2]]){
                    check = true;
                }
            }
        } );
        return check;
    }
  return (
    <div>
    <h2>TIC TAC TOE</h2>
        <table className='table'>
        {
          tick.map((item, i)=> {
            return (
              <tr className='box'>
                <td key={i} onClick={() => {clickBox(i)}}>{item}</td>
              </tr>
            )
          })
        }
        </table>
    </div>
  )
}

export default TicTac;