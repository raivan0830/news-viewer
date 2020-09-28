import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  //data 라는 값을 설정하였으며, data값을 변화실킬 setData를 만듭니다. 상태는 useState라는 hook함수를 사용하였으며, 초깃갑은 비어있습니다
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=82d5f2a3d1c14302b66e2ac79378524f',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }

    //onClick 이라는 함수를 생성합니다.
    // axios
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => {
    //     setData(response.data);
    //이 함수는 axios함수의 get이라는 메서드를 사용하여 https://jsonplaceholder.typicode.com 에서 제공하는 가짜 API를 호출합니다.
    //then그리고 나서 응답합니다. setData함수를 통해 data에 response.data를 넣습니다.
    // });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {/* 불러오기 버튼을 만든다음에 , 이버튼을 클릭하면 onClick함수가 실행됩니다.  */}
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
