import type { JSX } from "react"

export const getModelListContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "지원 AI 모델" : "Supported AI Models",
  content: (
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
        {isKorean 
          ? "GenPresso에서 지원하는 AI 모델 목록입니다. 각 카테고리별로 최신 생성 모델을 제공합니다." 
          : "List of AI models supported by GenPresso. We provide the latest generation models for each category."}
      </p>

      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
            <h2 className="text-2xl font-semibold">{isKorean ? "이미지 생성" : "Image Generation"}</h2>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-semibold text-sm">{isKorean ? "모델" : "Model"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">NANOBANANA Pro</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">NANOBANANA</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">SEEDREAM 4.5</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">Flux2 Flex</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">Flux2 Pro</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">z-image</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">kling o1</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m22 8-6 4 6 4V8Z"/>
              <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
            </svg>
            <h2 className="text-2xl font-semibold">{isKorean ? "비디오 생성" : "Video Generation"}</h2>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-semibold text-sm">{isKorean ? "모델" : "Model"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">VEO 3.1</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">SORA 2</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">Kling o1</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">hailuo 2.3</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.18.05l9.95-6.12a2 2 0 0 0 .94-1.7V7.06a2 2 0 0 0-.88-1.66Z"/>
              <path d="m10 2 8 5-8 5"/>
              <path d="M18 12 10 7"/>
              <path d="m2 8 8 5v9"/>
            </svg>
            <h2 className="text-2xl font-semibold">3D {isKorean ? "생성" : "Generation"}</h2>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-semibold text-sm">{isKorean ? "모델" : "Model"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="font-medium">mesh 3D</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ),
})
