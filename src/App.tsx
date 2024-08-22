import "./App.css";
import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda'
import { fetchAuthSession } from 'aws-amplify/auth'
import outputs from "../amplify_outputs.json"
import { useState } from 'react'
import { Button } from '@aws-amplify/ui-react';

export default function App() {
  const [text, setText] = useState("")
  async function getUserInfoLambda() {
    const awsRegion = outputs.auth.aws_region
    const functionName = outputs.custom.getUserInfoLambdaFunctionName
    const { credentials } = await fetchAuthSession()
    const labmda = new LambdaClient({ credentials: credentials, region: awsRegion })
    const command = new InvokeCommand({
      FunctionName: functionName,
    });
    const apiResponse = await labmda.send(command);
  
    if (apiResponse.Payload) {
      const payload = JSON.parse(new TextDecoder().decode(apiResponse.Payload))
      setText(payload.message)
    }
  }
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
        <Button className="btn-psw" onClick={getUserInfoLambda}>パスワード変更</Button>
        <p>{text}</p>
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