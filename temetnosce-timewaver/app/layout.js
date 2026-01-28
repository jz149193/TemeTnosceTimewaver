import './globals.css'

export const metadata = {
  title: 'TimeWaver 信息參考系統 | TEMETNOSCE 身心健康中心',
  description: '整體覺察與反思支持 - 以整體視角梳理身體、情緒、關係與生活結構',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
