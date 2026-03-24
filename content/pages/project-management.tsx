import type { JSX } from "react"

export const getProjectManagementContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "워크스페이스 관리" : "Workspace Management",
  content: (
    <div className="space-y-8">
      {/* Description */}
      <p className="text-lg text-muted-foreground leading-relaxed">
        {isKorean
          ? "워크스페이스를 생성하고 멤버를 초대해 팀 전용 작업 공간을 구성하세요."
          : "Create workspaces and invite members to set up dedicated team work areas."}
      </p>

      {/* Image */}
      <div className="w-full rounded-xl overflow-hidden border border-border">
        <img
          src="/images/workspace-management.png"
          alt={isKorean ? "워크스페이스 관리 화면" : "Workspace management screen"}
          className="w-full h-auto"
        />
      </div>

      {/* Contact Button */}
      <div className="pt-6">
        <a
          href="https://tally.so/r/A7r82D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] text-white font-medium hover:bg-[#0052CC] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          {isKorean ? "문의하기" : "Contact Us"}
        </a>
      </div>
    </div>
  ),
})
