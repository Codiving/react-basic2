import { useState } from "react";
import "./App.css";

const App = () => {
  const [rows, setRows] = useState([]);

  return (
    <div>
      <h1>동적 테이블 구현하기</h1>
      <div className={"container"}>
        <h3>To Do List - 오늘의 할일</h3>
        {!!rows.length && (
          <span>
            수행률 :
            {(() => {
              let done = 0;

              for (let i = 0; i < rows.length; i++) {
                if (rows[i].done) done += 1;
              }
              return Math.round((done / rows.length) * 100);
            })()}
            %
          </span>
        )}
      </div>
      <div className={"btn_group"}>
        <button
          className={"btn"}
          onClick={() => {
            setRows(prev => prev.concat({ todo: "", done: false }));
          }}
        >
          추가
        </button>
      </div>
      {!rows.length && <p>오늘 할일은 없습니다.</p>}

      {!!rows.length && (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>할 일</th>
              <th>수행 여부</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((el, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className={"todo"}>
                  <input
                    type="text"
                    onChange={e =>
                      setRows(prev =>
                        prev.map((item, idx) => {
                          if (index === idx) {
                            return {
                              ...item,
                              todo: e.target.value
                            };
                          }
                          return item;
                        })
                      )
                    }
                    value={el.todo}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      setRows(prev =>
                        prev.map((item, idx) => {
                          if (idx === index) {
                            return {
                              ...item,
                              done: !item.done
                            };
                          }
                          return item;
                        })
                      );
                    }}
                  >
                    {el.done ? "Y" : "N"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setRows(prev => prev.filter((_, idx) => idx !== index));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
