import type { JSX } from "react"

export const node3DContentKo: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      3D 노드는 텍스트 프롬프트와 이미지 레퍼런스를 함께 활용해 3D 모델을 생성하는 노드입니다.
    </p>

    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
      <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
        <span className="font-semibold">💡 사용 방식:</span> 기본적으로 해당 노드는 캔버스에서 노드를 선택한 뒤, 노드에 표시되는 '+' 버튼을 눌러 생성 작업을 진행하는 방식이 기본입니다. 개별 메뉴에서 불러와 작업하기보다, 캔버스 흐름 안에서 이전 노드와 연결해 사용하는 것을 전제로 설계되었습니다.
      </p>
    </div>

    <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
      {/* @ts-ignore */}
      <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D-AG9FPtnzA11CLz0FP9IIsRZEPqY8RF.webm" type="video/webm" />
        브라우저가 비디오를 지원하지 않습니다.
      </video>
    </div>

    <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg p-4">
      <p className="text-base text-amber-900 dark:text-amber-200 leading-relaxed">
        <span className="font-semibold">✨ 활용 Tip:</span> 3D 모델은 이미지 레퍼런스 기반으로 만들어야 더 좋은 퀄리티를 얻을 수 있습니다.
      </p>
    </div>
  </div>
)

export const node3DContentEn: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      A 3D node is a node that generates 3D models by utilizing text prompts and image references together.
    </p>

    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
      <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
        <span className="font-semibold">💡 Usage:</span> By default, this node is designed to work by selecting a node on the canvas and pressing the '+' button displayed on the node to proceed with the generation work. It is designed to be used by connecting to the previous node within the canvas flow, rather than being loaded and worked on from individual menus.
      </p>
    </div>

    <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
      {/* @ts-ignore */}
      <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D-AG9FPtnzA11CLz0FP9IIsRZEPqY8RF.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg p-4">
      <p className="text-base text-amber-900 dark:text-amber-200 leading-relaxed">
        <span className="font-semibold">✨ Tip:</span> 3D models can achieve better quality when created based on image references.
      </p>
    </div>
  </div>
)
