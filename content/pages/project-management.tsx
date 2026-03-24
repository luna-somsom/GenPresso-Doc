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

      {/* Description */}
      <div className="space-y-2 text-muted-foreground leading-relaxed">
        <p>
          {isKorean
            ? "워크스페이스를 생성한 뒤 멤버를 초대하면, 팀 또는 회사 단위로 전용 작업 공간을 구성할 수 있습니다."
            : "After creating a workspace and inviting members, you can set up dedicated work areas for your team or company."}
        </p>
        <p>
          {isKorean
            ? "권한 관리, 협업, 크레딧 분배 등 조직 단위 운영이 가능합니다."
            : "You can manage permissions, collaborate, and distribute credits at the organizational level."}
        </p>
      </div>

      {/* Contact Section */}
      <div className="w-full p-5 rounded-xl bg-muted/50 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base font-medium text-foreground">
          {isKorean
            ? "팀 또는 회사를 위한 워크스페이스가 필요하신가요?"
            : "Need a workspace for your team or company?"}
        </p>
        <a
          href="https://tally.so/r/A7r82D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066FF] text-white text-sm font-medium hover:bg-[#0052CC] transition-colors whitespace-nowrap"
        >
          {isKorean ? "문의하기" : "Contact Us"}
        </a>
      </div>
    </div>
  ),
})
