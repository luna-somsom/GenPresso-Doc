import type { JSX } from "react"

export const getAgentTipsContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "커스텀 에이전트 Tip" : "Custom Agent Tips",
  content: (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {isKorean
            ? "커스텀 에이전트를 효과적으로 설계하고 활용하기 위한 핵심 노하우를 공유합니다."
            : "We share key know-how for effectively designing and using custom agents."}
        </p>
      </div>

      {/* Agent Structure Overview */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-slate-900">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">{isKorean ? "커스텀 에이전트 구조" : "Custom Agent Structure"}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Name</span>
                <p className="text-sm font-medium">{isKorean ? "에이전트 이름" : "Agent Name"}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{isKorean ? "에이전트를 식별하는 고유한 이름을 지정합니다." : "Assign a unique name to identify the agent."}</p>
          </div>
          
          <div className="group p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Goal</span>
                <p className="text-sm font-medium">{isKorean ? "에이전트 목표" : "Agent Goal"}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{isKorean ? "에이전트가 달성해야 할 핵심 목표를 정의합니다." : "Define the key goal the agent should achieve."}</p>
          </div>
          
          <div className="group p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6"/>
                  <path d="M12 17v6"/>
                  <path d="m4.22 4.22 4.24 4.24"/>
                  <path d="m15.54 15.54 4.24 4.24"/>
                  <path d="M1 12h6"/>
                  <path d="M17 12h6"/>
                  <path d="m4.22 19.78 4.24-4.24"/>
                  <path d="m15.54 8.46 4.24-4.24"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Focus</span>
                <p className="text-sm font-medium">{isKorean ? "집중 영역" : "Focus Area"}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{isKorean ? "에이전트가 특히 신경 써야 할 부분을 명시합니다." : "Specify what the agent should pay special attention to."}</p>
          </div>
          
          <div className="group p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m4.9 4.9 14.2 14.2"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Constraint</span>
                <p className="text-sm font-medium">{isKorean ? "제약 조건" : "Constraints"}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{isKorean ? "에이전트가 하지 말아야 할 행동을 지정합니다." : "Specify actions the agent should not take."}</p>
          </div>
        </div>
      </section>

      {/* Tip 1: Multi-Agent System */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold text-lg shadow-lg shadow-rose-500/25">1</div>
          <div>
            <h2 className="text-xl font-semibold">{isKorean ? "멀티 에이전트 시스템으로 설계하라" : "Design with Multi-Agent System"}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {isKorean 
                ? "하나의 에이전트로 모든 것을 해결하려 하지 마세요." 
                : "Don't try to solve everything with a single agent."}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bad Example */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-rose-200 dark:border-rose-900/50">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-red-500" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-rose-600 dark:text-rose-400">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </div>
                <span className="font-semibold text-rose-700 dark:text-rose-300">{isKorean ? "비권장" : "Not Recommended"}</span>
              </div>
              <div className="space-y-3">
                {[
                  isKorean ? "뮤직비디오 에이전트" : "Music Video Agent",
                  isKorean ? "광고 영상 에이전트" : "Ad Video Agent",
                  isKorean ? "브랜드 캠페인 에이전트" : "Brand Campaign Agent"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-rose-100/50 dark:bg-rose-900/20">
                <p className="text-xs text-rose-700 dark:text-rose-300 font-medium">
                  {isKorean ? "범위가 너무 넓어 통제가 어려움" : "Scope too broad, difficult to control"}
                </p>
              </div>
            </div>
          </div>

          {/* Good Example */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/50">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <span className="font-semibold text-emerald-700 dark:text-emerald-300">{isKorean ? "권장" : "Recommended"}</span>
              </div>
              <div className="space-y-3">
                {[
                  isKorean ? "화면 구도 에이전트" : "Composition Agent",
                  isKorean ? "조명 연출 에이전트" : "Lighting Agent",
                  isKorean ? "인물 포즈 제어 에이전트" : "Pose Control Agent"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/20">
                <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                  {isKorean ? "세부 과업 단위로 다루는 게 효과적" : "More effective to handle by specific tasks"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tip 2: Clear Work Logic */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold text-lg shadow-lg shadow-violet-500/25">2</div>
          <div>
            <h2 className="text-xl font-semibold">{isKorean ? "명확한 작업 로직을 설계하라" : "Design Clear Work Logic"}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {isKorean 
                ? "에이전트를 작업 프로세스를 담는 구조체라고 생각하세요." 
                : "Think of the agent as a structure that contains the work process."}
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20">
          <h4 className="font-semibold mb-5 text-violet-700 dark:text-violet-300">{isKorean ? "작업 흐름 예시" : "Workflow Example"}</h4>
          <div className="relative">
            <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-400 via-purple-400 to-indigo-400 dark:from-violet-600 dark:via-purple-600 dark:to-indigo-600" />
            <div className="space-y-4">
              {[
                { step: "01", text: isKorean ? "기획을 먼저 진행" : "Plan first", color: "violet" },
                { step: "02", text: isKorean ? "기획이 완료되면 텍스트 프롬프트로 만들기" : "Convert to text prompt when planning is complete", color: "purple" },
                { step: "03", text: isKorean ? "이미지로 만들기" : "Create as image", color: "fuchsia" },
                { step: "04", text: isKorean ? "이미지를 비디오로 만들기" : "Convert image to video", color: "indigo" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 relative">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border-2 border-violet-300 dark:border-violet-700 flex items-center justify-center z-10 shadow-sm">
                    <span className="text-xs font-bold text-violet-600 dark:text-violet-400">{item.step}</span>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-violet-200 dark:border-violet-800/50 shadow-sm">
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tip */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-[1px]">
        <div className="rounded-[15px] bg-background p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2v8"/>
                <path d="m4.93 10.93 1.41 1.41"/>
                <path d="M2 18h2"/>
                <path d="M20 18h2"/>
                <path d="m19.07 10.93-1.41 1.41"/>
                <path d="M22 22H2"/>
                <path d="m8 22 4-10 4 10"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-lg bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">{isKorean ? "Tip, 에이전트를 활용하세요" : "Tip, Use the Agent"}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isKorean 
                  ? "젠프레소에서 에이전트에게 작업을 시키면서 작업 흐름을 파악한 후, \"방금 전에 한 작업을 로직으로 설명해줘\"라고 요청하세요. 에이전트의 답변을 참고해서 새 에이전트를 설정할 수 있습니다." 
                  : "After having the agent perform tasks in GenPresso, ask \"Explain the work I just did as logic.\" You can use the agent's response as a reference to set up a new agent."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})
