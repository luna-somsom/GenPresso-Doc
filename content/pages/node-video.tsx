import type { JSX } from "react"

export const nodeVideoContentKo: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      비디오 노드는 텍스트 프롬프트와 이미지 레퍼런스를 함께 활용해 비디오를 생성하는 노드입니다.
    </p>

    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
      <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
        <span className="font-semibold">💡 사용 방식:</span> 기본적으로 해당 노드는 캔버스에서 노드를 선택한 뒤, 노드에 표시되는 '+' 버튼을 눌러 생성 작업을 진행하는 방식이 기본입니다. 개별 메뉴에서 불러와 작업하기보다, 캔버스 흐름 안에서 이전 노드와 연결해 사용하는 것을 전제로 설계되었습니다.
      </p>
    </div>

    <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
      {/* @ts-ignore */}
      <video key="video-i2v-video" className="w-full h-full object-contain" autoPlay loop muted playsInline>
        <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i2v-XMsetPiUcfeqDyFfhDBn1QgGn1i2tZ.webm"} type="video/webm" />
        브라우저가 비디오를 지원하지 않습니다.
      </video>
    </div>

    <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg p-4">
      <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3">활용 Tip</h3>
      <div className="space-y-2 text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
        <p>비디오 생성 모델은 모델별로 품질·비용 구조가 상이합니다.</p>
        <p>단순 콘셉트 확인, 테스트용 영상, 빠른 반복 작업에는 경량 모델을 활용하세요.</p>
        <p>최종 결과물, 고해상도 출력, 외부 공개용 영상에는 고품질 모델을 선택하는 것이 효율적입니다.</p>
      </div>
    </div>
  </div>
)

export const nodeVideoContentEn: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      A video node is a node that generates videos by utilizing text prompts and image references together.
    </p>

    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
      <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
        <span className="font-semibold">💡 Usage:</span> By default, this node is designed to work by selecting a node on the canvas and pressing the '+' button displayed on the node to proceed with the generation work. It is designed to be used by connecting to the previous node within the canvas flow, rather than being loaded and worked on from individual menus.
      </p>
    </div>

    <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
      {/* @ts-ignore */}
      <video key="video-i2v-video-en" className="w-full h-full object-contain" autoPlay loop muted playsInline>
        <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i2v-XMsetPiUcfeqDyFfhDBn1QgGn1i2tZ.webm"} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg p-4">
      <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3">Tips</h3>
      <div className="space-y-2 text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
        <p>Video generation models have different quality and cost structures depending on the model.</p>
        <p>Use lightweight models for simple concept verification, test videos, and rapid iteration work.</p>
        <p>It is efficient to select high-quality models for final outputs, high-resolution exports, and videos intended for external publication.</p>
      </div>
    </div>
  </div>
)
