import type { JSX } from "react"

export const getProjectManagementContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "워크스페이스 관리" : "Workspace Management",
  content: (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {isKorean
            ? "워크스페이스를 생성하고 멤버를 초대해 팀 전용 작업 공간을 구성하세요."
            : "Create workspaces and invite members to set up dedicated team work areas."}
        </p>
      </div>

      {/* Workspace Creation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
              <path d="M12 3v6"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">{isKorean ? "워크스페이스 생성" : "Create Workspace"}</h2>
        </div>
        
        <div className="p-6 rounded-2xl border border-border bg-card">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {isKorean
                ? "워크스페이스는 팀 단위로 프로젝트와 에셋을 관리할 수 있는 독립적인 작업 공간입니다. 새로운 워크스페이스를 생성하여 팀별로 작업을 분리하고 효율적으로 관리하세요."
                : "A workspace is an independent work area where you can manage projects and assets by team. Create new workspaces to separate and efficiently manage work by team."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M12 5v14"/>
                    <path d="M5 12h14"/>
                  </svg>
                </div>
                <h4 className="font-medium text-sm mb-1">{isKorean ? "새 워크스페이스" : "New Workspace"}</h4>
                <p className="text-xs text-muted-foreground">{isKorean ? "팀별 독립 공간 생성" : "Create independent team space"}</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className="font-medium text-sm mb-1">{isKorean ? "멤버 관리" : "Member Management"}</h4>
                <p className="text-xs text-muted-foreground">{isKorean ? "팀원 초대 및 권한 설정" : "Invite members & set permissions"}</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                    <path d="M20 7h-9"/>
                    <path d="M14 17H5"/>
                    <circle cx="17" cy="17" r="3"/>
                    <circle cx="7" cy="7" r="3"/>
                  </svg>
                </div>
                <h4 className="font-medium text-sm mb-1">{isKorean ? "에셋 공유" : "Asset Sharing"}</h4>
                <p className="text-xs text-muted-foreground">{isKorean ? "팀 내 리소스 공유" : "Share resources within team"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Invitation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" x2="19" y1="8" y2="14"/>
              <line x1="22" x2="16" y1="11" y2="11"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">{isKorean ? "멤버 초대" : "Invite Members"}</h2>
        </div>
        
        <div className="p-6 rounded-2xl border border-border bg-card">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {isKorean
                ? "이메일을 통해 팀원을 워크스페이스에 초대할 수 있습니다. 초대된 멤버는 워크스페이스 내의 프로젝트와 에셋에 접근하여 함께 작업할 수 있습니다."
                : "You can invite team members to your workspace via email. Invited members can access projects and assets within the workspace to collaborate."}
            </p>
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/50">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                    <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    <path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/>
                    <path d="M20 22v.01"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-emerald-800 dark:text-emerald-300 mb-1">{isKorean ? "초대 방법" : "How to Invite"}</h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-400/80">
                    {isKorean
                      ? "워크스페이스 설정 > 멤버 관리에서 이메일 주소를 입력하여 초대장을 발송할 수 있습니다."
                      : "Go to Workspace Settings > Member Management and enter email addresses to send invitations."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Workspace Benefits */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">{isKorean ? "팀 워크스페이스 장점" : "Team Workspace Benefits"}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                </svg>
              </div>
              <h4 className="font-semibold">{isKorean ? "보안 및 접근 제어" : "Security & Access Control"}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "팀별로 독립된 공간에서 작업하며, 권한에 따라 접근을 제어할 수 있습니다."
                : "Work in isolated spaces by team with access controlled by permissions."}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h4 className="font-semibold">{isKorean ? "실시간 협업" : "Real-time Collaboration"}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "팀원들과 실시간으로 프로젝트를 공유하고 피드백을 주고받을 수 있습니다."
                : "Share projects in real-time with team members and exchange feedback."}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" x2="12" y1="3" y2="15"/>
                </svg>
              </div>
              <h4 className="font-semibold">{isKorean ? "에셋 중앙 관리" : "Centralized Asset Management"}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "팀에서 사용하는 모든 에셋을 한 곳에서 관리하고 쉽게 공유할 수 있습니다."
                : "Manage all team assets in one place and share them easily."}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                </svg>
              </div>
              <h4 className="font-semibold">{isKorean ? "커스텀 에이전트 공유" : "Share Custom Agents"}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "팀에서 만든 커스텀 에이전트를 워크스페이스 내에서 공유하여 일관된 작업 품질을 유지하세요."
                : "Share custom agents created by the team within the workspace to maintain consistent work quality."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border border-border">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-1">{isKorean ? "더 궁금한 점이 있으신가요?" : "Have more questions?"}</h3>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "워크스페이스 관련 문의사항은 언제든 연락해 주세요."
                : "Feel free to contact us anytime for workspace-related inquiries."}
            </p>
          </div>
          <a
            href="https://tally.so/r/A7r82D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {isKorean ? "문의하기" : "Contact Us"}
          </a>
        </div>
      </div>
    </div>
  ),
})
