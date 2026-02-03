import type { JSX } from "react"

export const nodeImageContentKo: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      이미지 노드는 텍스트 프롬프트와 레퍼런스 이미지를 함께 활용해 이미지 결과물을 생성하는 노드입니다. 사용자가 직접 업로드한 이미지나 이전 결과 이미지를 활용해 원하는 스타일·구도·분위기를 명확하게 전달할 수 있습니다.
    </p>

    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
      <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
        <span className="font-semibold">💡 사용 방식:</span> 기본적으로 해당 노드는 캔버스에서 노드를 선택한 뒤, 노드에 표시되는 '+' 버튼을 눌러 생성 작업을 진행하는 방식이 기본입니다. 개별 메뉴에서 불러와 작업하기보다, 캔버스 흐름 안에서 이전 노드와 연결해 사용하는 것을 전제로 설계되었습니다.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">이미지 to 이미지 (이미지 편집)</h3>
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
          {/* @ts-ignore */}
          <video key="image-t2i2i-video" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2i2i-y6dR7irzde8iB2QNbfWpoeJn9hdkt9.webm" type="video/webm" />
            브라우저가 비디오를 지원하지 않습니다.
          </video>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">캔버스에서 이미지 2개 결합 예시</h3>
        <p className="text-muted-foreground leading-relaxed">
          캔버스에서 원하는 이미지 노드를 선택한 뒤 '+' 버튼을 눌러 이미지 노드를 추가하면, 선택한 이미지를 레퍼런스로 활용해 작업을 이어갈 수 있습니다. 이 방식으로 여러 이미지를 결합하며 생성 흐름을 자연스럽게 확장할 수 있습니다.
        </p>
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
          {/* @ts-ignore */}
          <video key="image-i2i-video" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i2i-oD4eMgBT18iQGk7s9VyvptuUXvSkKg.webm" type="video/webm" />
            브라우저가 비디오를 지원하지 않습니다.
          </video>
        </div>
      </div>
    </div>
  </div>
)

export const nodeImageContentEn: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      An image node generates image results by utilizing text prompts and reference images together. Users can clearly convey desired style, composition, and mood by using directly uploaded images or previous result images.
    </p>

    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4">
      <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
        <span className="font-semibold">💡 Usage:</span> By default, this node is designed to work by selecting a node on the canvas and pressing the '+' button displayed on the node to proceed with the generation work. It is designed to be used by connecting to the previous node within the canvas flow, rather than being loaded and worked on from individual menus.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Image to Image (Image Editing)</h3>
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
          {/* @ts-ignore */}
          <video key="image-t2i2i-video-en" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2i2i-y6dR7irzde8iB2QNbfWpoeJn9hdkt9.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Canvas Example: Combining 2 Images</h3>
        <p className="text-muted-foreground leading-relaxed">
          When you select an image node on the canvas and press the '+' button to add an image node, you can use the selected image as a reference to continue your work. In this way, you can naturally expand the generation flow by combining multiple images.
        </p>
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
          {/* @ts-ignore */}
          <video key="image-i2i-video-en" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i2i-oD4eMgBT18iQGk7s9VyvptuUXvSkKg.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
)
