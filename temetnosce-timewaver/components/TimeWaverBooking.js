import React, { useMemo, useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Info, Heart, Building, Shield, Brain, Users, Sparkles } from 'lucide-react';

export default function TimeWaverBooking() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    agree: false
  });

  const minDate = useMemo(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split('T')[0];
  }, []);

  const copy = useMemo(
    () => ({
      short: '本服務屬資訊性與探索性參考,非醫療診斷或治療,亦不取代專業醫療/心理服務。',
      mid: '所有分析與建議僅作為參考;如有醫療或心理需求,請諮詢合格專業人士。',
      longTitle: '透明與限制聲明',
      long: `本服務提供之內容屬於資訊性與探索性參考,用於支持自我理解、整體覺察與系統性反思。
不構成醫療診斷、治療建議,亦不取代任何專業醫療或心理服務。
分析與相關結果可能受到使用者設定、環境條件與時間狀態影響,不具確定性,亦可能於不同時間產生不同結果。
相關模型與應用基於理論模型與實務經驗,目前尚未經獨立科學研究全面驗證。
使用者應自行判斷其適用性,並於需要時諮詢合格專業人士。`
    }),
    []
  );

  const services = [
    {
      name: '身體平衡 - 器官相干性分析',
      category: '整體健康',
      duration: '60 分鐘',
      price: 'AUD $150',
      description: '以整體視角檢視身體與生活狀態的關聯,提供結構化的反思與優先順序參考'
    },
    {
      name: '虛擬針灸 - 經絡平衡',
      category: '整體能量',
      duration: '60 分鐘',
      price: 'AUD $160',
      description: '以中性方式探索經絡/壓力與生活節奏等因素的關聯,提供調整方向的參考'
    },
    {
      name: '脈輪平衡與優化',
      category: '能量中心',
      duration: '60 分鐘',
      price: 'AUD $150',
      description: '以覺察與反思為目的,探索七大能量中心的狀態,支持內在對齊的自我整理'
    },
    {
      name: '心理與能量平衡',
      category: '身心整合',
      duration: '75 分鐘',
      price: 'AUD $180',
      description: '協助整理情緒與壓力脈絡,支持更清晰的自我理解與身心整合'
    },
    {
      name: '意識驅動轉化療程',
      category: '意識提升',
      duration: '90 分鐘',
      price: 'AUD $280',
      description: '以反思與覺察為核心,探索潛意識模式,支持個人目標與行動的內在對齊'
    },
    {
      name: '系統排列整合療程',
      category: '系統整合',
      duration: '120 分鐘',
      price: 'AUD $350',
      description: '以系統觀點探索家族/組織關係脈絡,協助看見隱性結構與行動選項'
    },
    {
      name: '遠程支持(4週計劃)',
      category: '遠程支持',
      duration: '初次60分鐘 + 4週支持',
      price: 'AUD $380',
      description: '初次整理後,提供 4 週的規律化支持流程,幫助維持覺察與調整節奏'
    },
    {
      name: '商業與經濟分析',
      category: '商業',
      duration: '90 分鐘',
      price: 'AUD $250',
      description: '以資訊參考方式梳理商業目標、結構與風險,支持決策反思與路徑選擇'
    },
    {
      name: '關係和諧化',
      category: '關係',
      duration: '60 分鐘',
      price: 'AUD $160',
      description: '協助梳理個人或商業關係的互動結構,提供溝通與界線調整的參考'
    },
    {
      name: '房產與空間整理',
      category: '環境',
      duration: '90 分鐘',
      price: 'AUD $220',
      description: '以環境/空間的感受與使用方式為切入,提供整理與優化方向的參考'
    },
    {
      name: '初次諮詢',
      category: '諮詢',
      duration: '45 分鐘',
      price: 'AUD $120',
      description: '第一次了解需求與目標,協助選擇合適的服務方向與後續安排'
    }
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const features = [
    { icon: Heart, text: '支持整體理解與反思' },
    { icon: Brain, text: '以意識與資訊參考框架工作' },
    { icon: Shield, text: '協助梳理壓力與干擾因素' },
    { icon: Building, text: '支援商業/決策結構整理' },
    { icon: Users, text: '探索系統性與跨世代脈絡' },
    { icon: Sparkles, text: '促進內在對齊與轉化行動' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setStep(5);
  };

  const canProceed = () => {
    if (step === 1) return Boolean(formData.service);
    if (step === 2) return Boolean(formData.date && formData.time);
    if (step === 3) return Boolean(formData.name && formData.email && formData.phone && formData.agree);
    return false;
  };

  const selectedService = useMemo(
    () => services.find(s => s.name === formData.service),
    [formData.service]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            TimeWaver 信息參考系統
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            TEMETNOSCE 身心健康中心｜整體覺察與反思支持
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-lg text-sm">
            <Info className="w-4 h-4" />
            <span>{copy.short}</span>
          </div>
        </div>

        {step === 0 && (
          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                把狀態「看清楚」,把選擇「排順序」
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                以整體視角梳理身體、情緒、關係與生活結構,提供可操作的反思框架與方向參考,協助你回到更清晰的內在對齊。
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
                <p className="text-sm text-blue-800">{copy.mid}</p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setStep(1)}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors border-2 border-indigo-600"
                >
                  開啟預約
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">什麼是 TimeWaver?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TimeWaver 是一套以理論模型與實務經驗為基礎的資訊分析系統,常被用於整體理解與反思:協助整理當下狀態、找出優先順序、探索不同方向的可能性。
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <strong>提醒:</strong> 本服務不構成醫療建議;若你有明確的醫療或心理需求,請同步諮詢合格專業人士。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
                  <feature.icon className="w-10 h-10 text-indigo-600 mb-3" />
                  <p className="text-gray-700 font-medium">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">準備開始一個更清晰的整理?</h3>
              <p className="text-lg mb-8 opacity-90">
                無論你想釐清身心狀態、關係結構或下一步選擇,我們會用中性、透明的方式提供反思框架與方向參考。
              </p>
              <button
                onClick={() => setStep(1)}
                className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                立即預約
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                {copy.longTitle}
              </h3>
              <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {copy.long}
              </div>
            </div>
          </div>
        )}

        {step > 0 && step < 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              {['選擇療程', '日期時間', '個人資料'].map((label, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                        step > idx + 1
                          ? 'bg-indigo-600 text-white'
                          : step === idx + 1
                          ? 'bg-indigo-700 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {step > idx + 1 ? '✓' : idx + 1}
                    </div>
                    <span className="text-sm mt-2 text-gray-600">{label}</span>
                  </div>
                  {idx < 2 && (
                    <div
                      className={`w-16 h-1 transition-colors ${
                        step > idx + 1 ? 'bg-indigo-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">選擇您的服務</h2>
            <div className="grid gap-6 mb-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  onClick={() => handleInputChange('service', service.name)}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.service === service.name
                      ? 'border-indigo-600 bg-indigo-50 shadow-md'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-sm text-indigo-600 font-semibold mb-1">
                        {service.category} · {service.duration}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                    </div>
                    <div className="text-xl font-bold text-indigo-600">{service.price}</div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(0)}
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                返回介紹
              </button>
              <button
                onClick={() => setStep(2)}
                disabled={!canProceed()}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                繼續選擇日期
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">選擇日期和時間</h2>
            {selectedService && (
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8">
                <p className="text-sm text-indigo-800">
                  <strong>已選服務:</strong> {selectedService.name} · {selectedService.price}
                </p>
              </div>
            )}
            <div className="space-y-6 mb-8">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  選擇日期
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => handleInputChange('date', e.target.value)}
                  min={minDate}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  選擇時間
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => handleInputChange('time', time)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        formData.time === time
                          ? 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-gray-200 hover:border-indigo-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                上一步
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!canProceed()}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                繼續填寫資料
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">您的個人資料</h2>
            <p className="text-sm text-gray-600 mb-8">{copy.mid}</p>
            <div className="space-y-6 mb-8">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <User className="w-5 h-5 text-indigo-600" />
                  姓名 *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => handleInputChange('name', e.target.value)}
                  placeholder="請輸入您的全名"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  電子郵件 *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <Phone className="w-5 h-5 text-indigo-600" />
                  聯絡電話 *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  placeholder="+61 xxx xxx xxx"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                  其他備註(選填)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={e => handleInputChange('notes', e.target.value)}
                  placeholder="任何特殊需求或想法..."
                  rows="4"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none resize-none"
                />
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={e => handleInputChange('agree', e.target.checked)}
                    className="mt-1 h-4 w-4 accent-indigo-600"
                  />
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <div className="font-semibold text-gray-800">我已閱讀並理解本服務之定位與限制</div>
                    <div className="mt-1">{copy.short}</div>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                上一步
              </button>
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                確認預約
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">預約成功!</h2>
            <p className="text-gray-600 mb-8">感謝您預約 TEMETNOSCE 身心健康中心</p>
            <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
              <h3 className="font-bold text-gray-800 mb-4">預約摘要</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">服務:</span>
                  <span className="text-right">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">日期:</span>
                  <span>
                    {new Date(formData.date).toLocaleDateString('zh-TW', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">時間:</span>
                  <span>{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">姓名:</span>
                  <span>{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">郵件:</span>
                  <span className="text-sm">{formData.email}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setStep(0);
                setFormData({
                  service: '',
                  date: '',
                  time: '',
                  name: '',
                  email: '',
                  phone: '',
                  notes: '',
                  agree: false
                });
              }}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              預約其他服務
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
