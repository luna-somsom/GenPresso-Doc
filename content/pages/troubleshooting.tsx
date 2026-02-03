import type { JSX } from "react"

export const getTroubleshootingContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "버그 리포트 / 피드백 제출 방법" : "Bug Report / Feedback Submission",
  content: (
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
        {isKorean 
          ? "캔버스 내 ? 버튼 → 문의 / 의견 보내기 를 통해 언제든지 전달할 수 있습니다." 
          : "You can submit feedback anytime through the (?) button → Contact / Send Feedback in the canvas."}
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-6 space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
              {isKorean
                ? "간단한 의견부터 버그 제보까지 모두 환영하며, 보내주신 내용은 서비스 개선을 위해 적극 반영됩니다."
                : "We welcome everything from simple opinions to bug reports, and your feedback will be actively reflected for service improvement."}
            </p>
            <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
              {isKorean
                ? "가능하다면 발생 상황을 함께 작성해 주시면 더 빠르게 확인할 수 있습니다."
                : "If possible, please include the circumstances of the issue so we can review it more quickly."}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{isKorean ? "피드백 제출 방법" : "How to Submit Feedback"}</h3>
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-border bg-muted">
          <video key="bug-report-video" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%87%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3-5m5klHELx16amLF9o9jbnIP8IqA6ii.webm"} type="video/webm" />
            {isKorean ? "브라우저가 비디오를 지원하지 않습니다." : "Your browser does not support the video tag."}
          </video>
        </div>
      </div>
    </div>
  ),
})
