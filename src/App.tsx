import "./App.css";


export default function App() {
  
  return (
    <div>
      {/* ヘッダー */}
      <div className='header'>
        <div className='header-logo'>
          マイページ
        </div>
      </div>
      {/* メイン */}
      <div  className="body">   
        <div className="form">
          <p className="label">ユーザー名</p>
          <p  className="content">×○△</p>
        </div>
        <div className="form">
          <p className="label">性別</p>
          <p className="content">○</p>
        </div>
        <div className="form">
        <p className="label">生年月日</p>
        <p className="content">yyyy年mm月dd日</p>
        </div>
        <div className="form">
        <p className="label">身長</p>
        <p className="content">●●cm</p>
        </div>
        <div className="form">
        <p className="label">体重</p>
        <p className="content">××kg</p>
        </div>
        <div className="form">
        <p className="label">普段の運動量</p>
        <p className="content">●●●●</p>
        </div>
        <button className="btn-psw">パスワード変更</button>
      </div>
      {/* フッター */}
      <div className='footer'>
        <img src="/chat.svg" className='svg'></img>
        <img src="/calender.svg" className='svg'></img>
        <img src="/future.svg" className='svg'></img>
      </div>
    </div>
  );
}