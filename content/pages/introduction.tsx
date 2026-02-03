import type { JSX } from "react"
import Image from "next/image"

export const getIntroductionContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "젠프레소 소개" : "About GenPresso",
  content: (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-lg font-medium text-foreground leading-relaxed">
          {isKorean
            ? "✨ 젠프레소 문서에 오신 것을 환영합니다."
            : "✨ Welcome to the GenPresso documentation."}
        </p>
        
        <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
          {isKorean
            ? "젠프레소는 AI 에이전트와 함께 텍스트·이미지·비디오·3D 작업을 하나의 캔버스에서 연결하는 All-In-One Agentic AI 플랫폼입니다."
            : "GenPresso is an All-In-One Agentic AI platform that connects text, image, video, and 3D work on a single canvas with AI agents."}
        </p>
      </div>

      <div className="w-full rounded-lg border border-border overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5-CitZfuqCtOuDYXJROcb0dRdCeM26E8.png"
          alt={isKorean ? "젠프레소 소개" : "GenPresso Introduction"}
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>

      <div className="space-y-6 pt-6 border-t border-border">
        <h2 className="text-2xl font-semibold">{isKorean ? "가이드 문서 활용" : "Using the Guide Documentation"}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
          {isKorean
            ? "이 문서는 젠프레소를 처음 사용하는 분이 작업 흐름과 사용 방식을 자연스럽게 익힐 수 있도록 구성된 공식 가이드입니다."
            : "This documentation is an official guide designed to help first-time users naturally learn the workflow and usage of GenPresso."}
        </p>
      </div>
    </div>
  ),
})
